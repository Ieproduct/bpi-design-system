// BPI Box Web Component — Generic container (like MUI Box)
const BOX_CSS = `__BOX_CSS__`;

class Box extends HTMLElement {
  static get observedAttributes() {
    return ['display', 'p', 'px', 'py', 'pt', 'pb', 'pl', 'pr', 'm', 'mx', 'my', 'mt', 'mb', 'ml', 'mr',
            'bg', 'radius', 'shadow', 'border', 'width', 'height', 'flex', 'grow', 'shrink', 'basis',
            'text-align', 'overflow'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.shadowRoot) this.render(); }

  _spaceValue(n) {
    const map = { '0': '0', '1': 'var(--bpi-space-1)', '2': 'var(--bpi-space-2)', '3': 'var(--bpi-space-3)', '4': 'var(--bpi-space-4)', '5': 'var(--bpi-space-5)', '6': 'var(--bpi-space-6)', '8': 'var(--bpi-space-8)', '10': 'var(--bpi-space-10)', '12': 'var(--bpi-space-12)', '16': 'var(--bpi-space-16)' };
    return map[n] || n;
  }

  render() {
    const styles = [];
    const display = this.getAttribute('display');
    if (display) styles.push('display:' + display);
    const p = this.getAttribute('p');
    if (p) styles.push('padding:' + this._spaceValue(p));
    const px = this.getAttribute('px');
    if (px) { styles.push('padding-left:' + this._spaceValue(px)); styles.push('padding-right:' + this._spaceValue(px)); }
    const py = this.getAttribute('py');
    if (py) { styles.push('padding-top:' + this._spaceValue(py)); styles.push('padding-bottom:' + this._spaceValue(py)); }
    const bg = this.getAttribute('bg');
    if (bg) styles.push('background-color:var(--bpi-' + bg + ', ' + bg + ')');
    const radius = this.getAttribute('radius');
    if (radius) styles.push('border-radius:var(--bpi-radius-' + radius + ', ' + radius + ')');
    const shadow = this.getAttribute('shadow');
    if (shadow) styles.push('box-shadow:var(--bpi-shadow-' + shadow + ', ' + shadow + ')');
    if (this.hasAttribute('border')) styles.push('border:1px solid var(--bpi-border, #e0e0e0)');
    const width = this.getAttribute('width');
    if (width) styles.push('width:' + width);
    const height = this.getAttribute('height');
    if (height) styles.push('height:' + height);
    const textAlign = this.getAttribute('text-align');
    if (textAlign) styles.push('text-align:' + textAlign);
    const overflow = this.getAttribute('overflow');
    if (overflow) styles.push('overflow:' + overflow);
    const styleStr = styles.length > 0 ? ' style="' + styles.join(';') + '"' : '';
    this.shadowRoot.innerHTML = '<style>' + BOX_CSS + '</style><div class="bpi-box"' + styleStr + '><slot></slot></div>';
  }
}

customElements.define('bpi-box', Box);
export { Box };
