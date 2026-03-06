// BPI Select Web Component
const SELECT_CSS = `__SELECT_CSS__`;

class Select extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'value', 'placeholder', 'disabled', 'error', 'variant'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._isOpen = false;
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) {
      this.render();
      this.setupListeners();
    }
  }

  setupListeners() {
    const select = this.shadowRoot.querySelector('.bpi-select__input');
    const listbox = this.shadowRoot.querySelector('.bpi-select__listbox');

    if (select) {
      select.addEventListener('click', () => this.toggleOpen());
      select.addEventListener('focus', () => {
        if (!this._isOpen) this.open();
      });
    }

    if (listbox) {
      const options = listbox.querySelectorAll('[role="option"]');
      options.forEach((option) => {
        option.addEventListener('click', () => {
          const value = option.getAttribute('data-value');
          this.setAttribute('value', value);
          this.close();
          this.dispatchEvent(new CustomEvent('bpi-change', {
            detail: { value },
            bubbles: true,
          }));
        });
      });
    }

    // Close on escape
    const handleEscape = (e) => {
      if (e.key === 'Escape' && this._isOpen) {
        this.close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    this._escapeHandler = handleEscape;
  }

  toggleOpen() {
    if (this._isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this._isOpen = true;
    const select = this.shadowRoot.querySelector('.bpi-select__input');
    const listbox = this.shadowRoot.querySelector('.bpi-select__listbox');
    if (select) select.classList.add('bpi-select__input--open');
    if (listbox) listbox.classList.add('bpi-select__listbox--open');
  }

  close() {
    this._isOpen = false;
    const select = this.shadowRoot.querySelector('.bpi-select__input');
    const listbox = this.shadowRoot.querySelector('.bpi-select__listbox');
    if (select) select.classList.remove('bpi-select__input--open');
    if (listbox) listbox.classList.remove('bpi-select__listbox--open');
  }

  render() {
    const label = this.getAttribute('label') || '';
    const value = this.getAttribute('value') || '';
    const placeholder = this.getAttribute('placeholder') || 'Select option...';
    const disabled = this.hasAttribute('disabled');
    const error = this.getAttribute('error') || '';
    const variant = this.getAttribute('variant') || 'outlined';

    const classes = [
      'bpi-select',
      `bpi-select--${variant}`,
      error ? 'bpi-select--error' : '',
      disabled ? 'bpi-select--disabled' : '',
    ].filter(Boolean).join(' ');

    const options = this.querySelectorAll('option');
    let selectedLabel = placeholder;
    options.forEach((opt) => {
      if (opt.value === value || opt.getAttribute('value') === value) {
        selectedLabel = opt.textContent;
      }
    });

    const optionsHtml = Array.from(options)
      .map((opt) => {
        const optValue = opt.value || opt.getAttribute('value') || '';
        const isSelected = optValue === value;
        return `
          <div
            class="bpi-select__option ${isSelected ? 'bpi-select__option--selected' : ''}"
            role="option"
            data-value="${this.escapeHtml(optValue)}"
            aria-selected="${isSelected}"
          >
            ${this.escapeHtml(opt.textContent)}
          </div>
        `;
      })
      .join('');

    this.shadowRoot.innerHTML = `
      <style>${SELECT_CSS}</style>
      <div class="${classes}">
        ${label ? `<label class="bpi-select__label">${this.escapeHtml(label)}</label>` : ''}
        <div class="bpi-select__wrapper">
          <button
            class="bpi-select__input"
            ${disabled ? 'disabled' : ''}
            aria-haspopup="listbox"
            aria-expanded="false"
          >
            <span class="bpi-select__value">${this.escapeHtml(selectedLabel)}</span>
            <svg class="bpi-select__arrow" viewBox="0 0 24 24" width="20" height="20">
              <path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
          </button>
          <div class="bpi-select__listbox" role="listbox">
            ${optionsHtml}
          </div>
        </div>
        ${error ? `<div class="bpi-select__error">${this.escapeHtml(error)}</div>` : ''}
      </div>
    `;

    this.setupListeners();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  disconnectedCallback() {
    if (this._escapeHandler) {
      document.removeEventListener('keydown', this._escapeHandler);
    }
  }
}

customElements.define('bpi-select', Select);
export { Select };
