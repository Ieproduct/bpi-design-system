// BPI Typography Web Component — Responsive text display
const TYPOGRAPHY_CSS = `__TYPOGRAPHY_CSS__`;

class Typography extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'color', 'align', 'weight', 'gutterBottom', 'gutter-bottom', 'noWrap', 'no-wrap', 'component'];
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

  get variant() { return this.getAttribute('variant') || 'body1'; }
  get color() { return this.getAttribute('color') || ''; }
  get align() { return this.getAttribute('align') || ''; }
  get weight() { return this.getAttribute('weight') || ''; }

  // Map variant to default HTML element
  _getElement() {
    const component = this.getAttribute('component');
    if (component) return component;

    const map = {
      'h1': 'h1', 'h2': 'h2', 'h3': 'h3', 'h4': 'h4', 'h5': 'h5', 'h6': 'h6',
      'title1': 'h2', 'title2': 'h3', 'title3': 'h4',
      'subtitle1': 'h6', 'subtitle2': 'h6', 'subtitle3': 'h6',
      'body1': 'p', 'body2': 'p', 'body3': 'p',
      'caption': 'span',
      'text-helper': 'span',
    };
    return map[this.variant] || 'p';
  }

  render() {
    const variant = this.variant;
    const align = this.align;
    const color = this.color;
    const weight = this.weight;
    const gutterBottom = this.hasAttribute('gutterBottom') || this.hasAttribute('gutter-bottom');
    const noWrap = this.hasAttribute('noWrap') || this.hasAttribute('no-wrap');
    const element = this._getElement();

    const classes = [
      'bpi-typography',
      `bpi-typography--${variant}`,
      align ? `bpi-typography--align-${align}` : '',
      color ? `bpi-typography--color-${color}` : '',
      weight ? `bpi-typography--weight-${weight}` : '',
      gutterBottom ? 'bpi-typography--gutter-bottom' : '',
      noWrap ? 'bpi-typography--no-wrap' : '',
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${TYPOGRAPHY_CSS}</style>
      <${element} class="${classes}">
        <slot></slot>
      </${element}>
    `;
  }
}

customElements.define('bpi-typography', Typography);
export { Typography };
