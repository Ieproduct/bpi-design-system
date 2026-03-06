// BPI Table Web Component
const TABLE_CSS = `__TABLE_CSS__`;

class Table extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'sticky-header', 'striped', 'hover', 'bordered'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  render() {
    const size = this.getAttribute('size') || 'md';
    const stickyHeader = this.hasAttribute('sticky-header');
    const striped = this.hasAttribute('striped');
    const hover = this.hasAttribute('hover');
    const bordered = this.hasAttribute('bordered');

    const classes = [
      'bpi-table-wrap',
      `bpi-table-wrap--${size}`,
      striped ? 'bpi-table-wrap--striped' : '',
      hover ? 'bpi-table-wrap--hover' : '',
      bordered ? 'bpi-table-wrap--bordered' : '',
      stickyHeader ? 'bpi-table-wrap--sticky' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${TABLE_CSS}</style>
      <div class="${classes}">
        <table class="bpi-table">
          <slot></slot>
        </table>
      </div>
    `;
  }
}

customElements.define('bpi-table', Table);
export { Table };
