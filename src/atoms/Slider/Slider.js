// BPI Slider Web Component
const SLIDER_CSS = `__SLIDER_CSS__`;

class Slider extends HTMLElement {
  static get observedAttributes() {
    return ['min', 'max', 'value', 'step', 'disabled', 'label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  setupListeners() {
    const input = this.shadowRoot.querySelector('input[type="range"]');
    if (!input) return;

    input.addEventListener('input', (e) => {
      this.setAttribute('value', e.target.value);
      this.updateTrackBackground();
      this.dispatchEvent(new CustomEvent('bpi-input', {
        detail: { value: parseFloat(e.target.value) },
        bubbles: true,
      }));
    });

    input.addEventListener('change', (e) => {
      this.dispatchEvent(new CustomEvent('bpi-change', {
        detail: { value: parseFloat(e.target.value) },
        bubbles: true,
      }));
    });

    this.updateTrackBackground();
  }

  updateTrackBackground() {
    const input = this.shadowRoot.querySelector('input[type="range"]');
    if (!input) return;

    const min = parseFloat(input.min) || 0;
    const max = parseFloat(input.max) || 100;
    const value = parseFloat(input.value) || 0;
    const percent = ((value - min) / (max - min)) * 100;

    input.style.background = `linear-gradient(to right, var(--track-color) 0%, var(--track-color) ${percent}%, var(--bg-color) ${percent}%, var(--bg-color) 100%)`;
  }

  render() {
    const min = this.getAttribute('min') || '0';
    const max = this.getAttribute('max') || '100';
    const value = this.getAttribute('value') || '50';
    const step = this.getAttribute('step') || '1';
    const disabled = this.hasAttribute('disabled');
    const label = this.getAttribute('label') || '';

    const classes = ['bpi-slider', disabled ? 'bpi-slider--disabled' : ''].filter(Boolean).join(' ');

    this.shadowRoot.innerHTML = `
      <style>${SLIDER_CSS}</style>
      <div class="${classes}">
        ${label ? `<label class="bpi-slider__label">${this.escapeHtml(label)}</label>` : ''}
        <div class="bpi-slider__wrapper">
          <input
            type="range"
            class="bpi-slider__input"
            min="${this.escapeHtml(min)}"
            max="${this.escapeHtml(max)}"
            value="${this.escapeHtml(value)}"
            step="${this.escapeHtml(step)}"
            ${disabled ? 'disabled' : ''}
            --track-color="currentColor"
            --bg-color="var(--bg-color, #e5e7eb)"
          />
          <div class="bpi-slider__value">${this.escapeHtml(value)}</div>
        </div>
      </div>
    `;

    this.setupListeners();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('bpi-slider', Slider);
export { Slider };
