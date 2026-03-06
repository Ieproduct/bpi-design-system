// BPI Navbar Web Component
const NAVBAR_CSS = `__NAVBAR_CSS__`;

class Navbar extends HTMLElement {
  static get observedAttributes() {
    return ['brand'];
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
    const brand = this.getAttribute('brand') || '';

    this.shadowRoot.innerHTML = `
      <style>${NAVBAR_CSS}</style>
      <nav class="bpi-navbar">
        <div class="bpi-navbar__brand">
          <slot name="brand-icon"></slot>
          ${brand ? `<span>${brand}</span>` : '<slot name="brand"></slot>'}
        </div>
        <div class="bpi-navbar__nav">
          <slot></slot>
        </div>
        <div class="bpi-navbar__actions">
          <slot name="actions"></slot>
        </div>
      </nav>
    `;
  }
}

customElements.define('bpi-navbar', Navbar);
export { Navbar };
