// BPI Sidebar Web Component
const SIDEBAR_CSS = `__SIDEBAR_CSS__`;

class Sidebar extends HTMLElement {
  static get observedAttributes() {
    return ['collapsed'];
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

  get collapsed() {
    return this.hasAttribute('collapsed');
  }

  set collapsed(val) {
    if (val) this.setAttribute('collapsed', '');
    else this.removeAttribute('collapsed');
  }

  toggle() {
    this.collapsed = !this.collapsed;
  }

  render() {
    const isCollapsed = this.collapsed;

    const classes = [
      'bpi-sidebar',
      isCollapsed ? 'bpi-sidebar--collapsed' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${SIDEBAR_CSS}</style>
      <aside class="${classes}">
        <div class="bpi-sidebar__header">
          <slot name="header"></slot>
        </div>
        <div class="bpi-sidebar__content">
          <slot></slot>
        </div>
        <div class="bpi-sidebar__footer">
          <slot name="footer"></slot>
        </div>
      </aside>
    `;
  }
}

customElements.define('bpi-sidebar', Sidebar);
export { Sidebar };
