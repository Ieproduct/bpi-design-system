// BPI TableCell Web Component
const TABLECELL_CSS = `__TABLECELL_CSS__`;

class TableCell extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'align', 'padding', 'sortable', 'sort-direction'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupSortListener();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  setupSortListener() {
    const tag = this.getAttribute('variant') === 'head' ? 'th' : 'td';
    const element = this.shadowRoot.querySelector(tag);

    if (this.hasAttribute('sortable') && element) {
      element.addEventListener('click', () => {
        const currentDir = this.getAttribute('sort-direction');
        const newDir = currentDir === 'asc' ? 'desc' : 'asc';

        this.dispatchEvent(
          new CustomEvent('bpi-sort', {
            bubbles: true,
            composed: true,
            detail: { direction: newDir },
          })
        );
      });
    }
  }

  render() {
    const variant = this.getAttribute('variant') || 'body';
    const align = this.getAttribute('align') || 'left';
    const padding = this.getAttribute('padding') || 'normal';
    const sortable = this.hasAttribute('sortable');
    const sortDir = this.getAttribute('sort-direction');
    const tag = variant === 'head' ? 'th' : 'td';

    const classes = [
      `bpi-${tag}`,
      `bpi-cell--align-${align}`,
      `bpi-cell--padding-${padding}`,
      sortable ? 'bpi-cell--sortable' : '',
      sortDir && sortDir !== 'none' ? `bpi-cell--sorted-${sortDir}` : '',
    ].filter(Boolean).join(' ');

    let sortIcon = '';
    if (sortable) {
      if (sortDir === 'asc') {
        sortIcon = ' <span class="bpi-cell__sort-icon">↑</span>';
      } else if (sortDir === 'desc') {
        sortIcon = ' <span class="bpi-cell__sort-icon">↓</span>';
      } else {
        sortIcon = ' <span class="bpi-cell__sort-icon" style="opacity: 0.3;">↕</span>';
      }
    }

    this.shadowRoot.innerHTML = `
      <style>${TABLECELL_CSS}</style>
      <${tag} class="${classes}"><slot></slot>${sortIcon}</${tag}>
    `;

    this.setupSortListener();
  }
}

customElements.define('bpi-table-cell', TableCell);
export { TableCell };
