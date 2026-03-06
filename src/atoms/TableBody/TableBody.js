// BPI TableBody Web Component
const TABLEBODY_CSS = `__TABLEBODY_CSS__`;

class TableBody extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${TABLEBODY_CSS}</style>
      <tbody class="bpi-tbody"><slot></slot></tbody>
    `;
  }
}

customElements.define('bpi-table-body', TableBody);
export { TableBody };
