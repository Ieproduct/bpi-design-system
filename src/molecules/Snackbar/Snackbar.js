// BPI Snackbar Web Component
const SNACKBAR_CSS = `__SNACKBAR_CSS__`;

class Snackbar extends HTMLElement {
  static get observedAttributes() {
    return ['open', 'message', 'variant', 'duration', 'position'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._timeoutId = null;
  }

  connectedCallback() {
    this.render();
    this.scheduleAutoClose();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) {
      this.render();
      this.scheduleAutoClose();
    }
  }

  scheduleAutoClose() {
    const open = this.hasAttribute('open');
    const duration = parseInt(this.getAttribute('duration')) || 5000;

    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }

    if (open && duration > 0) {
      this._timeoutId = setTimeout(() => {
        this.close();
      }, duration);
    }
  }

  close() {
    this.removeAttribute('open');
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
    this.dispatchEvent(new CustomEvent('bpi-close', { bubbles: true }));
  }

  render() {
    const open = this.hasAttribute('open');
    const message = this.getAttribute('message') || '';
    const variant = this.getAttribute('variant') || 'info';
    const position = this.getAttribute('position') || 'bottom';

    const classes = [
      'bpi-snackbar',
      `bpi-snackbar--${variant}`,
      `bpi-snackbar--${position}`,
      open ? 'bpi-snackbar--open' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${SNACKBAR_CSS}</style>
      <div class="${classes}">
        <div class="bpi-snackbar__content">
          <span class="bpi-snackbar__message">${this.escapeHtml(message)}</span>
          <slot></slot>
        </div>
        <button class="bpi-snackbar__close" aria-label="Close snackbar">&times;</button>
      </div>
    `;

    const closeBtn = this.shadowRoot.querySelector('.bpi-snackbar__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('bpi-snackbar', Snackbar);
export { Snackbar };
