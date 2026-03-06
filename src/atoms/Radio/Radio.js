// BPI Radio Web Component
const RADIO_CSS = `__RADIO_CSS__`;

class Radio extends HTMLElement {
  static get observedAttributes() {
    return ['checked', 'disabled', 'label', 'name', 'value'];
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
    const input = this.shadowRoot.querySelector('input[type="radio"]');
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
    const name = this.getAttribute('name') || '';
    const value = this.getAttribute('value') || 'on';

    this.shadowRoot.innerHTML = `
      <style>${RADIO_CSS}</style>
      <div class="bpi-radio">
        <input
          type="radio"
          class="bpi-radio__input"
          ${this._checked ? 'checked' : ''}
          ${disabled ? 'disabled' : ''}
          ${name ? `name="${this.escapeHtml(name)}"` : ''}
          value="${this.escapeHtml(value)}"
          aria-label="${this.escapeHtml(label)}"
        />
        <span class="bpi-radio__circle"></span>
        ${label ? `<label class="bpi-radio__label">${this.escapeHtml(label)}</label>` : ''}
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

customElements.define('bpi-radio', Radio);
export { Radio };
