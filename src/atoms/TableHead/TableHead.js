// BPI TableHead Web Component
const TABLEHEAD_CSS = `__TABLEHEAD_CSS__`;

class TableHead extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${TABLEHEAD_CSS}</style>
      <thead class="bpi-thead"><slot></slot></thead>
    `;
  }
}

customElements.define('bpi-table-head', TableHead);
export { TableHead };
