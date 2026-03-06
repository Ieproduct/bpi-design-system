// BPI Chip Web Component
const CHIP_CSS = `__CHIP_CSS__`;

class Chip extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'color', 'deletable', 'size'];
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
    const variant = this.getAttribute('variant') || 'filled';
    const color = this.getAttribute('color') || 'default';
    const deletable = this.hasAttribute('deletable');
    const size = this.getAttribute('size') || 'md';

    const classes = [
      'bpi-chip',
      `bpi-chip--${variant}`,
      `bpi-chip--${color}`,
      `bpi-chip--${size}`,
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${CHIP_CSS}</style>
      <div class="${classes}">
        <span class="bpi-chip__content"><slot></slot></span>
        ${deletable ? '<button class="bpi-chip__delete" aria-label="Delete chip">&times;</button>' : ''}
      </div>
    `;

    if (deletable) {
      this.shadowRoot.querySelector('.bpi-chip__delete').addEventListener('click', () => {
        this.dispatchEvent(new CustomEvent('bpi-delete', { bubbles: true }));
      });
    }
  }
}

customElements.define('bpi-chip', Chip);
export { Chip };
