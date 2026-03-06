// BPI Avatar Web Component
const AVATAR_CSS = `__AVATAR_CSS__`;

class Avatar extends HTMLElement {
  static get observedAttributes() {
    return ['src', 'alt', 'size', 'initials'];
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
    const src = this.getAttribute('src');
    const alt = this.getAttribute('alt') || 'Avatar';
    const size = this.getAttribute('size') || 'md';
    const initials = this.getAttribute('initials') || '';

    const classes = ['bpi-avatar', `bpi-avatar--${size}`].filter(Boolean).join(' ');

    let content = '';
    if (src) {
      content = `<img class="bpi-avatar__img" src="${this.escapeHtml(src)}" alt="${this.escapeHtml(alt)}" />`;
    } else if (initials) {
      content = `<span class="bpi-avatar__initials">${this.escapeHtml(initials)}</span>`;
    } else {
      content = `<svg class="bpi-avatar__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" fill="currentColor" />
        <path d="M 4 20 Q 4 14 12 14 Q 20 14 20 20" fill="currentColor" />
      </svg>`;
    }

    this.shadowRoot.innerHTML = `
      <style>${AVATAR_CSS}</style>
      <div class="${classes}">
        ${content}
      </div>
    `;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('bpi-avatar', Avatar);
export { Avatar };
