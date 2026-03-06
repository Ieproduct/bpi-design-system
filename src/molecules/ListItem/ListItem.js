// BPI ListItem Web Component
const LISTITEM_CSS = `__LISTITEM_CSS__`;

class ListItem extends HTMLElement {
  static get observedAttributes() {
    return ['divider'];
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
    const divider = this.hasAttribute('divider');

    const classes = ['bpi-list-item', divider ? 'bpi-list-item--divider' : ''].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${LISTITEM_CSS}</style>
      <li class="${classes}">
        <div class="bpi-list-item__icon">
          <slot name="icon"></slot>
        </div>
        <div class="bpi-list-item__content">
          <slot></slot>
        </div>
        <div class="bpi-list-item__action">
          <slot name="action"></slot>
        </div>
      </li>
    `;
  }
}

customElements.define('bpi-list-item', ListItem);
export { ListItem };
