// BPI Card Web Component
const CARD_CSS = `__CARD_CSS__`;

class Card extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'variant'];
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
    const title = this.getAttribute('title');
    const variant = this.getAttribute('variant') || 'flat';

    const classes = [
      'bpi-card',
      `bpi-card--${variant}`,
    ].join(' ');

    this.shadowRoot.innerHTML = `
      <style>${CARD_CSS}</style>
      <div class="${classes}">
        ${title ? `
          <div class="bpi-card__header">
            <h3 class="bpi-card__title">${title}</h3>
            <div class="bpi-card__header-action">
              <slot name="header-action"></slot>
            </div>
          </div>
        ` : ''}
        <div class="bpi-card__body">
          <slot></slot>
        </div>
        <div class="bpi-card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;

    // Hide footer if no slotted content
    const footerSlot = this.shadowRoot.querySelector('slot[name="footer"]');
    const footerDiv = this.shadowRoot.querySelector('.bpi-card__footer');
    footerSlot.addEventListener('slotchange', () => {
      const assigned = footerSlot.assignedNodes();
      footerDiv.style.display = assigned.length ? 'flex' : 'none';
    });
    // Initial check
    const assigned = footerSlot.assignedNodes();
    footerDiv.style.display = assigned.length ? 'flex' : 'none';
  }
}

customElements.define('bpi-card', Card);
export { Card };
