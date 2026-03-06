// BPI Skeleton Web Component
const SKELETON_CSS = `__SKELETON_CSS__`;

class Skeleton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'width', 'height', 'animation'];
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
    const variant = this.getAttribute('variant') || 'text';
    const width = this.getAttribute('width') || '100%';
    const height = this.getAttribute('height') || (variant === 'text' ? '1rem' : '100px');
    const animation = this.getAttribute('animation') || 'pulse';

    const classes = [
      'bpi-skeleton',
      `bpi-skeleton--${variant}`,
      `bpi-skeleton--${animation}`,
    ].filter(Boolean).join(' ');

    const styles = `
      width: ${this.escapeHtml(width)};
      height: ${this.escapeHtml(height)};
    `;

    this.shadowRoot.innerHTML = `
      <style>${SKELETON_CSS}</style>
      <div class="${classes}" style="${styles}"></div>
    `;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('bpi-skeleton', Skeleton);
export { Skeleton };
