// BPI Breadcrumbs Web Component
const BREADCRUMBS_CSS = `__BREADCRUMBS_CSS__`;

class Breadcrumbs extends HTMLElement {
  static get observedAttributes() {
    return ['separator'];
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
    const separator = this.getAttribute('separator') || '/';

    this.shadowRoot.innerHTML = `
      <style>${BREADCRUMBS_CSS}</style>
      <nav class="bpi-breadcrumbs" aria-label="Breadcrumbs">
        <ol class="bpi-breadcrumbs__list">
          <slot></slot>
        </ol>
      </nav>
    `;

    // Add separators between items
    this.shadowRoot.querySelectorAll('.bpi-breadcrumbs__list').forEach((list) => {
      const items = this.querySelectorAll('[role="listitem"]');
      items.forEach((item, index) => {
        if (index < items.length - 1) {
          const sepElement = document.createElement('span');
          sepElement.className = 'bpi-breadcrumbs__separator';
          sepElement.textContent = separator;
          sepElement.setAttribute('aria-hidden', 'true');
          item.after(sepElement);
        }
      });
    });
  }
}

customElements.define('bpi-breadcrumbs', Breadcrumbs);
export { Breadcrumbs };
