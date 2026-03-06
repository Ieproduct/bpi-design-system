// BPI Tooltip Web Component
const TOOLTIP_CSS = `__TOOLTIP_CSS__`;

class Tooltip extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'position'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isVisible = false;
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  setupListeners() {
    const trigger = this.shadowRoot.querySelector('.bpi-tooltip__trigger');
    if (!trigger) return;

    trigger.addEventListener('mouseenter', () => this.show());
    trigger.addEventListener('mouseleave', () => this.hide());
    trigger.addEventListener('focus', () => this.show());
    trigger.addEventListener('blur', () => this.hide());
  }

  show() {
    if (this.shadowRoot) {
      const tooltip = this.shadowRoot.querySelector('.bpi-tooltip__content');
      if (tooltip) {
        tooltip.style.opacity = '1';
        tooltip.style.pointerEvents = 'auto';
      }
      this.isVisible = true;
    }
  }

  hide() {
    if (this.shadowRoot) {
      const tooltip = this.shadowRoot.querySelector('.bpi-tooltip__content');
      if (tooltip) {
        tooltip.style.opacity = '0';
        tooltip.style.pointerEvents = 'none';
      }
      this.isVisible = false;
    }
  }

  render() {
    const text = this.getAttribute('text') || '';
    const position = this.getAttribute('position') || 'top';

    const classes = ['bpi-tooltip', `bpi-tooltip--${position}`].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${TOOLTIP_CSS}</style>
      <div class="${classes}">
        <div class="bpi-tooltip__trigger">
          <slot></slot>
        </div>
        <div class="bpi-tooltip__content" style="opacity: 0; pointer-events: none;">
          ${this.escapeHtml(text)}
        </div>
      </div>
    `;

    this.setupListeners();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('bpi-tooltip', Tooltip);
export { Tooltip };
