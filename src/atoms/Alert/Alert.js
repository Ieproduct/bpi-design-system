// BPI Alert Web Component
const ALERT_CSS = `__ALERT_CSS__`;

class Alert extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'title', 'closable'];
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
    const variant = this.getAttribute('variant') || 'info';
    const title = this.getAttribute('title') || '';
    const closable = this.hasAttribute('closable');

    const classes = ['bpi-alert', `bpi-alert--${variant}`].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${ALERT_CSS}</style>
      <div class="${classes}">
        <div class="bpi-alert__icon">
          <slot name="icon"></slot>
        </div>
        <div class="bpi-alert__content">
          ${title ? `<div class="bpi-alert__title">${this.escapeHtml(title)}</div>` : ''}
          <div class="bpi-alert__message"><slot></slot></div>
        </div>
        ${closable ? `<button class="bpi-alert__close" aria-label="Close alert">&times;</button>` : ''}
      </div>
    `;

    if (closable) {
      this.shadowRoot.querySelector('.bpi-alert__close').addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('bpi-close', { bubbles: true }));
        this.remove();
      });
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('bpi-alert', Alert);
export { Alert };
