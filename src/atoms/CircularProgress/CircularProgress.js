// BPI CircularProgress Web Component
const CIRCULARPROGRESS_CSS = `__CIRCULARPROGRESS_CSS__`;

class CircularProgress extends HTMLElement {
  static get observedAttributes() {
    return ['size', 'color', 'value'];
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
    const size = this.getAttribute('size') || 'md';
    const color = this.getAttribute('color') || 'primary';
    const value = parseFloat(this.getAttribute('value')) || undefined;

    const classes = [
      'bpi-circular-progress',
      `bpi-circular-progress--${size}`,
      `bpi-circular-progress--${color}`,
      value === undefined ? 'bpi-circular-progress--indeterminate' : 'bpi-circular-progress--determinate',
    ].filter(Boolean).join(' ');

    let svgContent = '';
    if (value !== undefined) {
      const circumference = 2 * Math.PI * 45;
      const strokeDashoffset = circumference - (value / 100) * circumference;
      svgContent = `
        <svg class="bpi-circular-progress__svg" viewBox="0 0 100 100">
          <circle class="bpi-circular-progress__background" cx="50" cy="50" r="45" />
          <circle
            class="bpi-circular-progress__track"
            cx="50" cy="50" r="45"
            style="stroke-dashoffset: ${strokeDashoffset};"
          />
          <text class="bpi-circular-progress__text" x="50" y="55">${value}%</text>
        </svg>
      `;
    } else {
      svgContent = `
        <svg class="bpi-circular-progress__svg" viewBox="0 0 100 100">
          <circle class="bpi-circular-progress__background" cx="50" cy="50" r="45" />
          <circle class="bpi-circular-progress__track" cx="50" cy="50" r="45" />
        </svg>
      `;
    }

    this.shadowRoot.innerHTML = `
      <style>${CIRCULARPROGRESS_CSS}</style>
      <div class="${classes}">
        ${svgContent}
      </div>
    `;
  }
}

customElements.define('bpi-circular-progress', CircularProgress);
export { CircularProgress };
