// BPI Checkbox Web Component
const CHECKBOX_CSS = `__CHECKBOX_CSS__`;

class Checkbox extends HTMLElement {
  static get observedAttributes() {
    return ['checked', 'disabled', 'label', 'indeterminate', 'name', 'value'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._checked = false;
    this._indeterminate = false;
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
    this._indeterminate = this.hasAttribute('indeterminate');
  }

  setupListeners() {
    const input = this.shadowRoot.querySelector('input[type="checkbox"]');
    if (!input) return;

    input.addEventListener('change', (e) => {
      this._checked = input.checked;
      if (this._checked) {
        this.setAttribute('checked', '');
        this.removeAttribute('indeterminate');
        this._indeterminate = false;
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

    const classes = ['bpi-checkbox', this._indeterminate ? 'bpi-checkbox--indeterminate' : ''].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${CHECKBOX_CSS}</style>
      <div class="${classes}">
        <input
          type="checkbox"
          class="bpi-checkbox__input"
          ${this._checked ? 'checked' : ''}
          ${this._indeterminate ? 'indeterminate' : ''}
          ${disabled ? 'disabled' : ''}
          ${name ? `name="${this.escapeHtml(name)}"` : ''}
          value="${this.escapeHtml(value)}"
          aria-label="${this.escapeHtml(label)}"
        />
        <span class="bpi-checkbox__checkmark"></span>
        ${label ? `<label class="bpi-checkbox__label">${this.escapeHtml(label)}</label>` : ''}
      </div>
    `;

    if (this._indeterminate) {
      const input = this.shadowRoot.querySelector('input[type="checkbox"]');
      if (input) input.indeterminate = true;
    }

    this.setupListeners();
  }

  get checked() {
    return this._checked;
  }

  set checked(value) {
    this._checked = value;
    if (value) {
      this.setAttribute('checked', '');
      this.removeAttribute('indeterminate');
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

customElements.define('bpi-checkbox', Checkbox);
export { Checkbox };
