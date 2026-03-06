// BPI Input Web Component
const INPUT_CSS = `__INPUT_CSS__`;

class Input extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'size', 'placeholder', 'value', 'disabled', 'error', 'hint', 'name', 'required'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._handleInput = this._handleInput.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  get value() {
    const input = this.shadowRoot?.querySelector('input');
    return input ? input.value : (this.getAttribute('value') || '');
  }

  set value(val) {
    this.setAttribute('value', val);
    const input = this.shadowRoot?.querySelector('input');
    if (input) input.value = val;
  }

  _handleInput(e) {
    this.dispatchEvent(new CustomEvent('bpi-input', {
      bubbles: true,
      composed: true,
      detail: { value: e.target.value }
    }));
  }

  _handleChange(e) {
    this.dispatchEvent(new CustomEvent('bpi-change', {
      bubbles: true,
      composed: true,
      detail: { value: e.target.value }
    }));
  }

  _handleBlur(e) {
    this.dispatchEvent(new CustomEvent('bpi-blur', {
      bubbles: true,
      composed: true,
      detail: { value: e.target.value }
    }));
  }

  render() {
    const type = this.getAttribute('type') || 'text';
    const size = this.getAttribute('size') || 'md';
    const placeholder = this.getAttribute('placeholder') || '';
    const value = this.getAttribute('value') || '';
    const isDisabled = this.hasAttribute('disabled');
    const error = this.getAttribute('error');
    const hint = this.getAttribute('hint');
    const name = this.getAttribute('name') || '';
    const required = this.hasAttribute('required');

    const classes = [
      'bpi-input',
      `bpi-input--${size}`,
      error ? 'bpi-input--error' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${INPUT_CSS}</style>
      <input
        class="${classes}"
        type="${type}"
        placeholder="${placeholder}"
        value="${value}"
        name="${name}"
        ${isDisabled ? 'disabled' : ''}
        ${required ? 'required' : ''}
      />
      ${error ? `<span class="bpi-input__error">${error}</span>` : ''}
      ${hint && !error ? `<span class="bpi-input__hint">${hint}</span>` : ''}
    `;

    const input = this.shadowRoot.querySelector('input');
    input.addEventListener('input', this._handleInput);
    input.addEventListener('change', this._handleChange);
    input.addEventListener('blur', this._handleBlur);
  }
}

customElements.define('bpi-input', Input);
export { Input };
