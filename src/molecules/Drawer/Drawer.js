// BPI Drawer Web Component
const DRAWER_CSS = `__DRAWER_CSS__`;

class Drawer extends HTMLElement {
  static get observedAttributes() {
    return ['open', 'position', 'size'];
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
    if (this.shadowRoot) this.render();
  }

  setupListeners() {
    const backdrop = this.shadowRoot.querySelector('.bpi-drawer__backdrop');

    if (backdrop) {
      backdrop.addEventListener('click', () => {
        this.close();
      });
    }

    // Listen for Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape' && this.hasAttribute('open')) {
        this.close();
      }
    };

    if (this.hasAttribute('open')) {
      document.addEventListener('keydown', handleEscape);
      this._escapeHandler = handleEscape;
    }
  }

  close() {
    this.removeAttribute('open');
    if (this._escapeHandler) {
      document.removeEventListener('keydown', this._escapeHandler);
    }
    this.dispatchEvent(new CustomEvent('bpi-close', { bubbles: true }));
  }

  render() {
    const open = this.hasAttribute('open');
    const position = this.getAttribute('position') || 'left';
    const size = this.getAttribute('size') || 'md';

    const classes = [
      'bpi-drawer',
      `bpi-drawer--${position}`,
      `bpi-drawer--${size}`,
      open ? 'bpi-drawer--open' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${DRAWER_CSS}</style>
      <div class="${classes}">
        <div class="bpi-drawer__backdrop"></div>
        <div class="bpi-drawer__content">
          <slot></slot>
        </div>
      </div>
    `;

    this.setupListeners();
  }
}

customElements.define('bpi-drawer', Drawer);
export { Drawer };
