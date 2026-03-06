// BPI Divider Web Component
const DIVIDER_CSS = `__DIVIDER_CSS__`;

class Divider extends HTMLElement {
  static get observedAttributes() {
    return ['orientation', 'variant'];
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
    const orientation = this.getAttribute('orientation') || 'horizontal';
    const variant = this.getAttribute('variant') || 'full';

    const classes = [
      'bpi-divider',
      `bpi-divider--${orientation}`,
      `bpi-divider--${variant}`,
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${DIVIDER_CSS}</style>
      <hr class="${classes}" />
    `;
  }
}

customElements.define('bpi-divider', Divider);
export { Divider };
