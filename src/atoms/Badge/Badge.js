// BPI Badge Web Component
const BADGE_CSS = `__BADGE_CSS__`;

class Badge extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'dot'];
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
    const variant = this.getAttribute('variant') || 'neutral';
    const hasDot = this.hasAttribute('dot');

    const classes = [
      'bpi-badge',
      `bpi-badge--${variant}`,
      hasDot ? 'bpi-badge--dot' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${BADGE_CSS}</style>
      <span class="${classes}"><slot></slot></span>
    `;
  }
}

customElements.define('bpi-badge', Badge);
export { Badge };
