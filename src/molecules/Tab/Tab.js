// BPI Tab Web Component
const TAB_CSS = `__TAB_CSS__`;

class Tab extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'value', 'disabled'];
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
    // Tab is mainly a container; rendering is handled by Tabs parent
    this.shadowRoot.innerHTML = `
      <style>${TAB_CSS}</style>
      <div class="bpi-tab">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('bpi-tab', Tab);
export { Tab };
