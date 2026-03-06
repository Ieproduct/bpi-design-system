// BPI Menu Web Component
const MENU_CSS = `__MENU_CSS__`;

class Menu extends HTMLElement {
  static get observedAttributes() {
    return ['open', 'trigger'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._triggerElement = null;
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  setupListeners() {
    const trigger = this.getAttribute('trigger');
    if (trigger) {
      this._triggerElement = this.querySelector(trigger);
      if (this._triggerElement) {
        this._triggerElement.addEventListener('click', () => this.toggleOpen());
      }
    }

    // Close on escape
    const handleEscape = (e) => {
      if (e.key === 'Escape' && this.hasAttribute('open')) {
        this.close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    this._escapeHandler = handleEscape;

    // Close on outside click
    const handleOutsideClick = (e) => {
      if (!this.contains(e.target) && !this._triggerElement?.contains(e.target)) {
        this.close();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    this._clickHandler = handleOutsideClick;

    // Setup menu item listeners
    const items = this.querySelectorAll('bpi-menu-item');
    items.forEach((item) => {
      item.addEventListener('click', () => {
        this.close();
      });
    });
  }

  toggleOpen() {
    if (this.hasAttribute('open')) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.setAttribute('open', '');
  }

  close() {
    this.removeAttribute('open');
  }

  render() {
    const open = this.hasAttribute('open');

    const classes = ['bpi-menu', open ? 'bpi-menu--open' : ''].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${MENU_CSS}</style>
      <div class="${classes}">
        <div class="bpi-menu__content" role="menu">
          <slot></slot>
        </div>
      </div>
    `;
  }

  disconnectedCallback() {
    if (this._escapeHandler) {
      document.removeEventListener('keydown', this._escapeHandler);
    }
    if (this._clickHandler) {
      document.removeEventListener('click', this._clickHandler);
    }
  }
}

customElements.define('bpi-menu', Menu);
export { Menu };
