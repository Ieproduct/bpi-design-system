// BPI Pagination Web Component
const PAGINATION_CSS = `__PAGINATION_CSS__`;

class Pagination extends HTMLElement {
  static get observedAttributes() {
    return ['total', 'page', 'page-size'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) {
      this.render();
      this.setupListeners();
    }
  }

  setupListeners() {
    const buttons = this.shadowRoot.querySelectorAll('.bpi-pagination__button');
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const page = parseInt(btn.getAttribute('data-page'));
        this.setAttribute('page', page);
        this.dispatchEvent(new CustomEvent('bpi-page-change', {
          detail: { page },
          bubbles: true,
        }));
      });
    });
  }

  render() {
    const total = parseInt(this.getAttribute('total')) || 0;
    const page = parseInt(this.getAttribute('page')) || 1;
    const pageSize = parseInt(this.getAttribute('page-size')) || 10;
    const totalPages = Math.ceil(total / pageSize);

    const getPaginationItems = () => {
      const items = [];
      const maxVisible = 5;
      let startPage = Math.max(1, page - 2);
      let endPage = Math.min(totalPages, page + 2);

      if (endPage - startPage < maxVisible - 1) {
        if (startPage === 1) {
          endPage = Math.min(totalPages, startPage + maxVisible - 1);
        } else {
          startPage = Math.max(1, endPage - maxVisible + 1);
        }
      }

      if (startPage > 1) {
        items.push({ type: 'button', page: 1, label: '1' });
        if (startPage > 2) {
          items.push({ type: 'ellipsis' });
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        items.push({ type: 'button', page: i, label: String(i) });
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          items.push({ type: 'ellipsis' });
        }
        items.push({ type: 'button', page: totalPages, label: String(totalPages) });
      }

      return items;
    };

    const items = getPaginationItems();
    const itemsHtml = items
      .map((item) => {
        if (item.type === 'ellipsis') {
          return '<span class="bpi-pagination__ellipsis">...</span>';
        }
        const isActive = item.page === page;
        return `
          <button
            class="bpi-pagination__button ${isActive ? 'bpi-pagination__button--active' : ''}"
            data-page="${item.page}"
            ${isActive ? 'aria-current="page"' : ''}
            ${item.page < 1 || item.page > totalPages ? 'disabled' : ''}
          >
            ${item.label}
          </button>
        `;
      })
      .join('');

    this.shadowRoot.innerHTML = `
      <style>${PAGINATION_CSS}</style>
      <nav class="bpi-pagination" aria-label="Pagination">
        <button
          class="bpi-pagination__button bpi-pagination__prev"
          data-page="${page - 1}"
          ${page === 1 ? 'disabled' : ''}
          aria-label="Previous page"
        >
          &larr;
        </button>
        <div class="bpi-pagination__pages">
          ${itemsHtml}
        </div>
        <button
          class="bpi-pagination__button bpi-pagination__next"
          data-page="${page + 1}"
          ${page === totalPages ? 'disabled' : ''}
          aria-label="Next page"
        >
          &rarr;
        </button>
      </nav>
    `;

    this.setupListeners();
  }
}

customElements.define('bpi-pagination', Pagination);
export { Pagination };
