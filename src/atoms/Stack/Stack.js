// BPI Stack Web Component — Flex layout container (like MUI Stack)
const STACK_CSS = `__STACK_CSS__`;

class Stack extends HTMLElement {
  static get observedAttributes() {
    return ['direction', 'spacing', 'align', 'justify', 'wrap', 'divider'];
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

  get direction() { return this.getAttribute('direction') || 'column'; }
  get spacing() { return this.getAttribute('spacing') || '2'; }
  get align() { return this.getAttribute('align') || ''; }
  get justify() { return this.getAttribute('justify') || ''; }

  render() {
    const direction = this.direction;
    const spacing = this.spacing;
    const align = this.align;
    const justify = this.justify;
    const wrap = this.hasAttribute('wrap');
    const divider = this.hasAttribute('divider');

    const classes = [
      'bpi-stack',
      `bpi-stack--${direction}`,
      `bpi-stack--spacing-${spacing}`,
      align ? `bpi-stack--align-${align}` : '',
      justify ? `bpi-stack--justify-${justify}` : '',
      wrap ? 'bpi-stack--wrap' : '',
      divider ? 'bpi-stack--divider' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${STACK_CSS}</style>
      <div class="${classes}">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('bpi-stack', Stack);
export { Stack };
