// BPI Switch Web Component
const SWITCH_CSS = `__SWITCH_CSS__`;

class Switch extends HTMLElement {
  static get observedAttributes() {
    return ['checked', 'disabled', 'label', 'size', 'name'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._checked = false;
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) {
      this.updateInternalState();
      this.render();
    }
  }

  updateInternalState() {
    this._checked = this.hasAttribute('checked');
  }

  setupListeners() {
    const input = this.shadowRoot.querySelector('input[type="checkbox"]');
    if (!input) return;

    input.addEventListener('change', (e) => {
      this._checked = input.checked;
      if (this._checked) {
        this.setAttribute('checked', '');
      } else {
        this.removeAttribute('checked');
      }
      this.dispatchEvent(new CustomEvent('bpi-change', {
        detail: { checked: this._checked },
        bubbles: true,
      }));
    });
  }

  render() {
    this.updateInternalState();
    const label = this.getAttribute('label') || '';
    const disabled = this.hasAttribute('disabled');
    const size = this.getAttribute('size') || 'md';
    const name = this.getAttribute('name') || '';

    const classes = ['bpi-switch', `bpi-switch--${size}`].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${SWITCH_CSS}</style>
      <div class="${classes}">
        <input
          type="checkbox"
          class="bpi-switch__input"
          ${this._checked ? 'checked' : ''}
          ${disabled ? 'disabled' : ''}
          ${name ? `name="${this.escapeHtml(name)}"` : ''}
          aria-label="${this.escapeHtml(label)}"
        />
        <span class="bpi-switch__track"></span>
        <span class="bpi-switch__thumb"></span>
        ${label ? `<label class="bpi-switch__label">${this.escapeHtml(label)}</label>` : ''}
      </div>
    `;

    this.setupListeners();
  }

  get checked() {
    return this._checked;
  }

  set checked(value) {
    this._checked = value;
    if (value) {
      this.setAttribute('checked', '');
    } else {
      this.removeAttribute('checked');
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('bpi-switch', Switch);
export { Switch };
