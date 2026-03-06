// BPI SearchBar Web Component
const SEARCHBAR_CSS = `__SEARCHBAR_CSS__`;

const SEARCH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
const CLEAR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

class SearchBar extends HTMLElement {
  static get observedAttributes() {
    return ['placeholder', 'value'];
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

  get value() {
    const input = this.shadowRoot?.querySelector('input');
    return input ? input.value : (this.getAttribute('value') || '');
  }

  set value(val) {
    const input = this.shadowRoot?.querySelector('input');
    if (input) input.value = val;
  }

  render() {
    const placeholder = this.getAttribute('placeholder') || 'Search...';
    const value = this.getAttribute('value') || '';

    this.shadowRoot.innerHTML = `
      <style>${SEARCHBAR_CSS}</style>
      <div class="bpi-search-bar">
        <span class="bpi-search-bar__icon">${SEARCH_SVG}</span>
        <input class="bpi-search-bar__input" type="text" placeholder="${placeholder}" value="${value}" />
        <button class="bpi-search-bar__clear" style="display:none" aria-label="Clear">${CLEAR_SVG}</button>
      </div>
    `;

    const input = this.shadowRoot.querySelector('input');
    const clearBtn = this.shadowRoot.querySelector('.bpi-search-bar__clear');

    const toggleClear = () => {
      clearBtn.style.display = input.value ? 'flex' : 'none';
    };

    input.addEventListener('input', (e) => {
      toggleClear();
      this.dispatchEvent(new CustomEvent('bpi-input', {
        bubbles: true, composed: true,
        detail: { value: e.target.value }
      }));
    });

    clearBtn.addEventListener('click', () => {
      input.value = '';
      toggleClear();
      input.focus();
      this.dispatchEvent(new CustomEvent('bpi-input', {
        bubbles: true, composed: true,
        detail: { value: '' }
      }));
    });

    toggleClear();
  }
}

customElements.define('bpi-search-bar', SearchBar);
export { SearchBar };
