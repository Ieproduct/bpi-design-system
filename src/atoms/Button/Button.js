// BPI Button Web Component
const BUTTON_CSS = `__BUTTON_CSS__`;

class Button extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'loading', 'block', 'type'];
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

  get variant() { return this.getAttribute('variant') || 'primary'; }
  get size() { return this.getAttribute('size') || 'md'; }
  get loading() { return this.hasAttribute('loading'); }
  get block() { return this.hasAttribute('block'); }

  render() {
    const variant = this.variant;
    const size = this.size;
    const isDisabled = this.hasAttribute('disabled');
    const isLoading = this.loading;
    const isBlock = this.block;

    const classes = [
      'bpi-btn',
      `bpi-btn--${variant}`,
      `bpi-btn--${size}`,
      isDisabled ? 'bpi-btn--disabled' : '',
      isLoading ? 'bpi-btn--loading' : '',
      isBlock ? 'bpi-btn--block' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${BUTTON_CSS}</style>
      <button class="${classes}" ${isDisabled ? 'disabled' : ''} type="${this.getAttribute('type') || 'button'}">
        <slot></slot>
        ${isLoading ? '<span class="bpi-btn__spinner"></span>' : ''}
      </button>
    `;

    // Forward click events from shadow button
    this.shadowRoot.querySelector('button').addEventListener('click', (e) => {
      if (isDisabled || isLoading) {
        e.stopPropagation();
        e.preventDefault();
      }
    });
  }
}

customElements.define('bpi-button', Button);
export { Button };
