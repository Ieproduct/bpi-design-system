// BPI List Web Component
const LIST_CSS = `__LIST_CSS__`;

class List extends HTMLElement {
  static get observedAttributes() {
    return ['dense'];
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
    const dense = this.hasAttribute('dense');

    const classes = ['bpi-list', dense ? 'bpi-list--dense' : ''].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${LIST_CSS}</style>
      <ul class="${classes}" role="list">
        <slot></slot>
      </ul>
    `;
  }
}

customElements.define('bpi-list', List);
export { List };
