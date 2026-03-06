// BPI MenuItem Web Component
const MENUITEM_CSS = `__MENUITEM_CSS__`;

class MenuItem extends HTMLElement {
  static get observedAttributes() {
    return ['disabled'];
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
    const button = this.shadowRoot.querySelector('.bpi-menu-item__button');
    if (button && !this.hasAttribute('disabled')) {
      button.addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('click', { bubbles: true }));
      });
    }
  }

  render() {
    const disabled = this.hasAttribute('disabled');

    const classes = [
      'bpi-menu-item',
      disabled ? 'bpi-menu-item--disabled' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${MENUITEM_CSS}</style>
      <button
        class="bpi-menu-item__button"
        role="menuitem"
        ${disabled ? 'disabled' : ''}
      >
        <slot></slot>
      </button>
    `;

    this.setupListeners();
  }
}

customElements.define('bpi-menu-item', MenuItem);
export { MenuItem };
