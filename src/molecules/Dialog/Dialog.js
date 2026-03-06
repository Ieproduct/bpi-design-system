// BPI Dialog Web Component
const DIALOG_CSS = `__DIALOG_CSS__`;

class Dialog extends HTMLElement {
  static get observedAttributes() {
    return ['open', 'title', 'size', 'closable'];
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
    const backdrop = this.shadowRoot.querySelector('.bpi-dialog__backdrop');
    const closeBtn = this.shadowRoot.querySelector('.bpi-dialog__close');

    if (backdrop) {
      backdrop.addEventListener('click', () => {
        this.close();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
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
    const title = this.getAttribute('title') || '';
    const size = this.getAttribute('size') || 'md';
    const closable = this.hasAttribute('closable');

    const classes = [
      'bpi-dialog',
      `bpi-dialog--${size}`,
      open ? 'bpi-dialog--open' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${DIALOG_CSS}</style>
      <div class="${classes}">
        <div class="bpi-dialog__backdrop"></div>
        <div class="bpi-dialog__content">
          ${title || closable ? `<div class="bpi-dialog__header">
            ${title ? `<h2 class="bpi-dialog__title">${this.escapeHtml(title)}</h2>` : ''}
            ${closable ? '<button class="bpi-dialog__close" aria-label="Close dialog">&times;</button>' : ''}
          </div>` : ''}
          <div class="bpi-dialog__body">
            <slot></slot>
          </div>
          <div class="bpi-dialog__footer">
            <slot name="footer"></slot>
          </div>
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

customElements.define('bpi-dialog', Dialog);
export { Dialog };
