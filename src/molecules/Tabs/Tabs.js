// BPI Tabs Web Component
const TABS_CSS = `__TABS_CSS__`;

class Tabs extends HTMLElement {
  static get observedAttributes() {
    return ['active-tab'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  setupListeners() {
    const tabs = this.querySelectorAll('bpi-tab');
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        const value = tab.getAttribute('value') || index;
        this.setAttribute('active-tab', value);
        this.dispatchEvent(new CustomEvent('bpi-tab-change', {
          detail: { activeTab: value },
          bubbles: true,
        }));
      });
    });
  }

  render() {
    const activeTab = this.getAttribute('active-tab') || '0';
    const tabs = this.querySelectorAll('bpi-tab');

    const tabLabels = Array.from(tabs)
      .map((tab, index) => {
        const label = tab.getAttribute('label') || `Tab ${index + 1}`;
        const value = tab.getAttribute('value') || index;
        const disabled = tab.hasAttribute('disabled');
        const isActive = String(value) === String(activeTab);

        return `
          <button
            class="bpi-tabs__tab ${isActive ? 'bpi-tabs__tab--active' : ''}"
            data-value="${this.escapeHtml(value)}"
            ${disabled ? 'disabled' : ''}
            aria-selected="${isActive}"
          >
            ${this.escapeHtml(label)}
          </button>
        `;
      })
      .join('');

    const tabContent = Array.from(tabs)
      .map((tab, index) => {
        const value = tab.getAttribute('value') || index;
        const isActive = String(value) === String(activeTab);

        return `
          <div
            class="bpi-tabs__panel ${isActive ? 'bpi-tabs__panel--active' : ''}"
            role="tabpanel"
            aria-labelledby="tab-${value}"
          >
            ${tab.innerHTML}
          </div>
        `;
      })
      .join('');

    this.shadowRoot.innerHTML = `
      <style>${TABS_CSS}</style>
      <div class="bpi-tabs">
        <div class="bpi-tabs__list" role="tablist">
          ${tabLabels}
        </div>
        <div class="bpi-tabs__content">
          ${tabContent}
        </div>
      </div>
    `;

    // Setup button click handlers
    this.shadowRoot.querySelectorAll('.bpi-tabs__tab').forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-value');
        this.setAttribute('active-tab', value);
        this.dispatchEvent(new CustomEvent('bpi-tab-change', {
          detail: { activeTab: value },
          bubbles: true,
        }));
      });
    });
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('bpi-tabs', Tabs);
export { Tabs };
