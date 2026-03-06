// BPI TextField Web Component — MUI-style floating label
const TEXTFIELD_CSS = `__TEXTFIELD_CSS__`;

class TextField extends HTMLElement {
  static get observedAttributes() {
    return [
      'label', 'variant', 'size', 'type', 'placeholder', 'value',
      'disabled', 'error', 'helper-text', 'name', 'required',
      'multiline', 'rows', 'full-width', 'readonly',
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._focused = false;
    this._handleFocus = this._handleFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._handleInput = this._handleInput.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  get value() {
    const el = this.shadowRoot?.querySelector('.bpi-textfield__input');
    return el ? el.value : (this.getAttribute('value') || '');
  }

  set value(val) {
    this.setAttribute('value', val);
    const el = this.shadowRoot?.querySelector('.bpi-textfield__input');
    if (el) {
      el.value = val;
      this._updateFilledState();
    }
  }

  _handleFocus() {
    this._focused = true;
    const root = this.shadowRoot.querySelector('.bpi-textfield');
    if (root) root.classList.add('bpi-textfield--focused');
  }

  _handleBlur(e) {
    this._focused = false;
    const root = this.shadowRoot.querySelector('.bpi-textfield');
    if (root) root.classList.remove('bpi-textfield--focused');
    this._updateFilledState();

    this.dispatchEvent(new CustomEvent('bpi-blur', {
      bubbles: true, composed: true,
      detail: { value: e.target.value },
    }));
  }

  _handleInput(e) {
    this._updateFilledState();
    this.dispatchEvent(new CustomEvent('bpi-input', {
      bubbles: true, composed: true,
      detail: { value: e.target.value },
    }));
  }

  _handleChange(e) {
    this.dispatchEvent(new CustomEvent('bpi-change', {
      bubbles: true, composed: true,
      detail: { value: e.target.value },
    }));
  }

  _updateFilledState() {
    const el = this.shadowRoot?.querySelector('.bpi-textfield__input');
    const root = this.shadowRoot?.querySelector('.bpi-textfield');
    if (!el || !root) return;
    if (el.value && el.value.length > 0) {
      root.classList.add('bpi-textfield--filled');
    } else {
      root.classList.remove('bpi-textfield--filled');
    }
  }

  render() {
    const label = this.getAttribute('label') || '';
    const variant = this.getAttribute('variant') || 'outlined'; // outlined | filled | standard
    const size = this.getAttribute('size') || 'md';
    const type = this.getAttribute('type') || 'text';
    const placeholder = this.getAttribute('placeholder') || '';
    const value = this.getAttribute('value') || '';
    const isDisabled = this.hasAttribute('disabled');
    const isReadonly = this.hasAttribute('readonly');
    const error = this.getAttribute('error');
    const helperText = this.getAttribute('helper-text');
    const name = this.getAttribute('name') || '';
    const required = this.hasAttribute('required');
    const multiline = this.hasAttribute('multiline');
    const rows = this.getAttribute('rows') || '3';
    const fullWidth = this.hasAttribute('full-width');

    const filled = value.length > 0;

    const classes = [
      'bpi-textfield',
      `bpi-textfield--${variant}`,
      `bpi-textfield--${size}`,
      filled ? 'bpi-textfield--filled' : '',
      this._focused ? 'bpi-textfield--focused' : '',
      error ? 'bpi-textfield--error' : '',
      isDisabled ? 'bpi-textfield--disabled' : '',
      multiline ? 'bpi-textfield--multiline' : '',
      fullWidth ? 'bpi-textfield--fullWidth' : '',
    ].filter(Boolean).join(' ');

    const inputTag = multiline
      ? `<textarea
          class="bpi-textfield__input"
          placeholder="${placeholder}"
          name="${name}"
          rows="${rows}"
          ${isDisabled ? 'disabled' : ''}
          ${isReadonly ? 'readonly' : ''}
          ${required ? 'required' : ''}
        >${value}</textarea>`
      : `<input
          class="bpi-textfield__input"
          type="${type}"
          placeholder="${placeholder}"
          value="${value}"
          name="${name}"
          ${isDisabled ? 'disabled' : ''}
          ${isReadonly ? 'readonly' : ''}
          ${required ? 'required' : ''}
        />`;

    this.shadowRoot.innerHTML = `
      <style>${TEXTFIELD_CSS}</style>
      <div class="${classes}">
        <div class="bpi-textfield__wrapper">
          ${inputTag}
          ${label ? `<label class="bpi-textfield__label">${label}${required ? ' *' : ''}</label>` : ''}
        </div>
        ${error ? `<span class="bpi-textfield__error-text">${error}</span>` : ''}
        ${helperText && !error ? `<span class="bpi-textfield__helper">${helperText}</span>` : ''}
      </div>
    `;

    const inputEl = this.shadowRoot.querySelector('.bpi-textfield__input');
    inputEl.addEventListener('focus', this._handleFocus);
    inputEl.addEventListener('blur', this._handleBlur);
    inputEl.addEventListener('input', this._handleInput);
    inputEl.addEventListener('change', this._handleChange);
  }
}

customElements.define('bpi-text-field', TextField);
export { TextField };
