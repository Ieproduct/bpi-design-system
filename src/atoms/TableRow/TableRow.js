// BPI TableRow Web Component
const TABLEROW_CSS = `__TABLEROW_CSS__`;

class TableRow extends HTMLElement {
  static get observedAttributes() {
    return ['selected', 'hover'];
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
    const selected = this.hasAttribute('selected');

    const classes = [
      'bpi-tr',
      selected ? 'bpi-tr--selected' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${TABLEROW_CSS}</style>
      <tr class="${classes}"><slot></slot></tr>
    `;
  }
}

customElements.define('bpi-table-row', TableRow);
export { TableRow };
