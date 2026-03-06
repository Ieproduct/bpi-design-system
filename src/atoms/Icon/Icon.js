// BPI Icon Web Component
const ICON_CSS = `__ICON_CSS__`;

class Icon extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'size'];
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
    const classes = ['bpi-icon', `bpi-icon--${size}`].join(' ');

    this.shadowRoot.innerHTML = `
      <style>${ICON_CSS}</style>
      <span class="${classes}"><slot></slot></span>
    `;
  }
}

customElements.define('bpi-icon', Icon);
export { Icon };
