// BPI Accordion Web Component
const ACCORDION_CSS = `__ACCORDION_CSS__`;

class Accordion extends HTMLElement {
  static get observedAttributes() {
    return ['open', 'title'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._isOpen = false;
  }

  connectedCallback() {
    this._isOpen = this.hasAttribute('open');
    this.render();
    this.setupListeners();
  }

  attributeChangedCallback() {
    this._isOpen = this.hasAttribute('open');
    if (this.shadowRoot) {
      this.render();
      this.setupListeners();
    }
  }

  setupListeners() {
    const trigger = this.shadowRoot.querySelector('.bpi-accordion__trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        this.toggle();
      });
    }

    const content = this.shadowRoot.querySelector('.bpi-accordion__content');
    if (content) {
      content.addEventListener('transitionend', () => {
        if (!this._isOpen) {
          content.style.display = 'none';
        }
      });
    }
  }

  toggle() {
    if (this._isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this._isOpen = true;
    this.setAttribute('open', '');
    this.dispatchEvent(new CustomEvent('bpi-toggle', {
      detail: { open: true },
      bubbles: true,
    }));
  }

  close() {
    this._isOpen = false;
    this.removeAttribute('open');
    this.dispatchEvent(new CustomEvent('bpi-toggle', {
      detail: { open: false },
      bubbles: true,
    }));
  }

  render() {
    const title = this.getAttribute('title') || '';
    const classes = [
      'bpi-accordion',
      this._isOpen ? 'bpi-accordion--open' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${ACCORDION_CSS}</style>
      <div class="${classes}">
        <button class="bpi-accordion__trigger" aria-expanded="${this._isOpen}">
          <span class="bpi-accordion__title">${this.escapeHtml(title)}</span>
          <svg
            class="bpi-accordion__icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="bpi-accordion__content" style="${!this._isOpen ? 'display: none;' : ''}">
          <div class="bpi-accordion__body">
            <slot></slot>
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

customElements.define('bpi-accordion', Accordion);
export { Accordion };
