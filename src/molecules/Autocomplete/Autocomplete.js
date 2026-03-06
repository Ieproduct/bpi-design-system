// BPI Autocomplete Web Component
const AUTOCOMPLETE_CSS = `__AUTOCOMPLETE_CSS__`;

class Autocomplete extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'options', 'value', 'placeholder', 'disabled'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._options = [];
    this._isOpen = false;
  }

  connectedCallback() {
    this.updateOptions();
    this.render();
    this.setupListeners();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) {
      this.updateOptions();
      this.render();
      this.setupListeners();
    }
  }

  updateOptions() {
    const optionsAttr = this.getAttribute('options');
    if (optionsAttr) {
      try {
        this._options = JSON.parse(optionsAttr);
      } catch (e) {
        this._options = [];
      }
    }
  }

  setupListeners() {
    const input = this.shadowRoot.querySelector('.bpi-autocomplete__input');
    const listbox = this.shadowRoot.querySelector('.bpi-autocomplete__listbox');

    if (input) {
      input.addEventListener('input', (e) => {
        this.setAttribute('value', e.target.value);
        this.filterAndShow(e.target.value);
      });

      input.addEventListener('focus', () => {
        this.open();
      });

      input.addEventListener('blur', () => {
        setTimeout(() => this.close(), 200);
      });
    }

    if (listbox) {
      const items = listbox.querySelectorAll('[role="option"]');
      items.forEach((item) => {
        item.addEventListener('click', () => {
          const value = item.getAttribute('data-value');
          this.setAttribute('value', value);
          if (input) input.value = value;
          this.close();
          this.dispatchEvent(new CustomEvent('bpi-change', {
            detail: { value },
            bubbles: true,
          }));
        });
      });
    }
  }

  filterAndShow(query) {
    const listbox = this.shadowRoot.querySelector('.bpi-autocomplete__listbox');
    if (!listbox) return;

    const filtered = this._options.filter((opt) =>
      opt.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length > 0) {
      listbox.innerHTML = filtered
        .map((opt) => `
          <div
            class="bpi-autocomplete__option"
            role="option"
            data-value="${this.escapeHtml(opt)}"
          >
            ${this.escapeHtml(opt)}
          </div>
        `)
        .join('');
      this.open();
    } else {
      listbox.innerHTML = '<div class="bpi-autocomplete__no-results">No results</div>';
    }
  }

  open() {
    this._isOpen = true;
    const listbox = this.shadowRoot.querySelector('.bpi-autocomplete__listbox');
    if (listbox) listbox.classList.add('bpi-autocomplete__listbox--open');
  }

  close() {
    this._isOpen = false;
    const listbox = this.shadowRoot.querySelector('.bpi-autocomplete__listbox');
    if (listbox) listbox.classList.remove('bpi-autocomplete__listbox--open');
  }

  render() {
    const label = this.getAttribute('label') || '';
    const value = this.getAttribute('value') || '';
    const placeholder = this.getAttribute('placeholder') || 'Type to search...';
    const disabled = this.hasAttribute('disabled');

    const classes = [
      'bpi-autocomplete',
      disabled ? 'bpi-autocomplete--disabled' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${AUTOCOMPLETE_CSS}</style>
      <div class="${classes}">
        ${label ? `<label class="bpi-autocomplete__label">${this.escapeHtml(label)}</label>` : ''}
        <div class="bpi-autocomplete__wrapper">
          <input
            type="text"
            class="bpi-autocomplete__input"
            placeholder="${this.escapeHtml(placeholder)}"
            value="${this.escapeHtml(value)}"
            ${disabled ? 'disabled' : ''}
            aria-haspopup="listbox"
            autocomplete="off"
          />
          <svg class="bpi-autocomplete__icon" viewBox="0 0 24 24" width="20" height="20">
            <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M16 16l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <div class="bpi-autocomplete__listbox" role="listbox"></div>
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

customElements.define('bpi-autocomplete', Autocomplete);
export { Autocomplete };
