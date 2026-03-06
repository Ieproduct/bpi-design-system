// BPI FormField Web Component
const FORMFIELD_CSS = `__FORMFIELD_CSS__`;

class FormField extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'required', 'error', 'hint'];
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
    const label = this.getAttribute('label') || '';
    const required = this.hasAttribute('required');
    const error = this.getAttribute('error');
    const hint = this.getAttribute('hint');

    this.shadowRoot.innerHTML = `
      <style>${FORMFIELD_CSS}</style>
      <div class="bpi-form-field">
        ${label ? `
          <label class="bpi-form-field__label">
            ${label}${required ? '<span class="bpi-form-field__required">*</span>' : ''}
          </label>
        ` : ''}
        <div class="bpi-form-field__control">
          <slot></slot>
        </div>
        ${error ? `<span class="bpi-form-field__error">${error}</span>` : ''}
        ${hint && !error ? `<span class="bpi-form-field__hint">${hint}</span>` : ''}
      </div>
    `;
  }
}

customElements.define('bpi-form-field', FormField);
export { FormField };
