// BPI LinearProgress Web Component
const LINEARPROGRESS_CSS = `__LINEARPROGRESS_CSS__`;

class LinearProgress extends HTMLElement {
  static get observedAttributes() {
    return ['value', 'variant', 'color'];
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
    const value = parseFloat(this.getAttribute('value')) || 0;
    const variant = this.getAttribute('variant') || 'determinate';
    const color = this.getAttribute('color') || 'primary';

    const classes = [
      'bpi-linear-progress',
      `bpi-linear-progress--${variant}`,
      `bpi-linear-progress--${color}`,
    ].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${LINEARPROGRESS_CSS}</style>
      <div class="${classes}">
        <div class="bpi-linear-progress__bar" style="width: ${Math.max(0, Math.min(100, value))}%;"></div>
      </div>
    `;
  }
}

customElements.define('bpi-linear-progress', LinearProgress);
export { LinearProgress };
