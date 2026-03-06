// BPI DataTable Web Component
const DATATABLE_CSS = `__DATATABLE_CSS__`;

class DataTable extends HTMLElement {
  static get observedAttributes() {
    return ['columns', 'striped', 'page', 'page-size', 'total', 'empty-text'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._sortCol = null;
    this._sortDir = 'asc';
    this._selectedRows = new Set();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  render() {
    const striped = this.hasAttribute('striped');
    const emptyText = this.getAttribute('empty-text') || 'No data available';
    const page = parseInt(this.getAttribute('page') || '1', 10);
    const pageSize = parseInt(this.getAttribute('page-size') || '10', 10);
    const total = parseInt(this.getAttribute('total') || '0', 10);
    const totalPages = Math.max(1, Math.ceil(total / pageSize));

    const tableClasses = ['bpi-table', striped ? 'bpi-table--striped' : ''].filter(Boolean).join(' ');

    // Build pagination buttons
    let paginationHtml = '';
    if (total > 0) {
      const start = (page - 1) * pageSize + 1;
      const end = Math.min(page * pageSize, total);
      let buttons = '';
      buttons += `<button class="bpi-pagination__btn" data-page="${page - 1}" ${page <= 1 ? 'disabled' : ''}>&laquo;</button>`;
      for (let i = 1; i <= totalPages && i <= 7; i++) {
        const active = i === page ? 'bpi-pagination__btn--active' : '';
        buttons += `<button class="bpi-pagination__btn ${active}" data-page="${i}">${i}</button>`;
      }
      buttons += `<button class="bpi-pagination__btn" data-page="${page + 1}" ${page >= totalPages ? 'disabled' : ''}>&raquo;</button>`;

      paginationHtml = `
        <div class="bpi-pagination">
          <span class="bpi-pagination__info">Showing ${start}–${end} of ${total}</span>
          <div class="bpi-pagination__buttons">${buttons}</div>
        </div>
      `;
    }

    this.shadowRoot.innerHTML = `
      <style>${DATATABLE_CSS}</style>
      <div class="bpi-table-wrapper">
        <table class="${tableClasses}">
          <slot></slot>
        </table>
        ${total === 0 ? `<div class="bpi-table__empty">${emptyText}</div>` : ''}
      </div>
      ${paginationHtml}
    `;

    // Pagination events
    this.shadowRoot.querySelectorAll('.bpi-pagination__btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const p = parseInt(btn.dataset.page, 10);
        if (p >= 1 && p <= totalPages) {
          this.dispatchEvent(new CustomEvent('bpi-page-change', {
            bubbles: true, composed: true,
            detail: { page: p }
          }));
        }
      });
    });

    // Sort events on th elements via slot
    this.shadowRoot.querySelector('slot')?.addEventListener('slotchange', () => {
      this.querySelectorAll('th[data-sortable]').forEach((th) => {
        th.classList.add('bpi-th--sortable');
        th.addEventListener('click', () => {
          const col = th.dataset.column || th.textContent.trim();
          if (this._sortCol === col) {
            this._sortDir = this._sortDir === 'asc' ? 'desc' : 'asc';
          } else {
            this._sortCol = col;
            this._sortDir = 'asc';
          }
          this.dispatchEvent(new CustomEvent('bpi-sort', {
            bubbles: true, composed: true,
            detail: { column: col, direction: this._sortDir }
          }));
        });
      });
    });
  }
}

customElements.define('bpi-data-table', DataTable);
export { DataTable };
