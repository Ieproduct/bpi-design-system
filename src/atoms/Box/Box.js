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

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  _spaceValue(n) {
    const map = {
      '0': '0', '1': 'var(--bpi-space-1)', '2': 'var(--bpi-space-2)',
      '3': 'var(--bpi-space-3)', '4': 'var(--bpi-space-4)', '5': 'var(--bpi-space-5)',
      '6': 'var(--bpi-space-6)', '8': 'var(--bpi-space-8)', '10': 'var(--bpi-space-10)',
      '12': 'var(--bpi-space-12)', '16': 'var(--bpi-space-16)',
    };
    return map[n] || n;
  }

  render() {
    const styles = [];

    // Display
    const display = this.getAttribute('display');
    if (display) styles.push(`display:${display}`);

    // Padding
    const p = this.getAttribute('p');
    if (p) styles.push(`padding:${this._spaceValue(p)}`);
    const px = this.getAttribute('px');
    if (px) { styles.push(`padding-left:${this._spaceValue(px)}`); styles.push(`padding-right:${this._spaceValue(px)}`); }
    const py = this.getAttribute('py');
    if (py) { styles.push(`padding-top:${this._spaceValue(py)}`); styles.push(`padding-bottom:${this._spaceValue(py)}`); }
    const pt = this.getAttribute('pt');
    if (pt) styles.push(`padding-top:${this._spaceValue(pt)}`);
    const pb = this.getAttribute('pb');
    if (pb) styles.push(`padding-bottom:${this._spaceValue(pb)}`);
    const pl = this.getAttribute('pl');
    if (pl) styles.push(`padding-left:${this._spaceValue(pl)}`);
    const pr = this.getAttribute('pr');
    if (pr) styles.push(`padding-right:${this._spaceValue(pr)}`);

    // Margin
    const m = this.getAttribute('m');
    if (m) styles.push(`margin:${this._spaceValue(m)}`);
    const mx = this.getAttribute('mx');
    if (mx) { styles.push(`margin-left:${mx === 'auto' ? 'auto' : this._spaceValue(mx)}`); styles.push(`margin-right:${mx === 'auto' ? 'auto' : this._spaceValue(mx)}`); }
    const my = this.getAttribute('my');
    if (my) { styles.push(`margin-top:${this._spaceValue(my)}`); styles.push(`margin-bottom:${this._spaceValue(my)}`); }
    const mt = this.getAttribute('mt');
    if (mt) styles.push(`margin-top:${this._spaceValue(mt)}`);
    const mb = this.getAttribute('mb');
    if (mb) styles.push(`margin-bottom:${this._spaceValue(mb)}`);
    const ml = this.getAttribute('ml');
    if (ml) styles.push(`margin-left:${this._spaceValue(ml)}`);
    const mr = this.getAttribute('mr');
    if (mr) styles.push(`margin-right:${this._spaceValue(mr)}`);

    // Background
    const bg = this.getAttribute('bg');
    if (bg) styles.push(`background-color:var(--bpi-${bg}, ${bg})`);

    // Border radius
    const radius = this.getAttribute('radius');
    if (radius) styles.push(`border-radius:var(--bpi-radius-${radius}, ${radius})`);

    // Shadow
    const shadow = this.getAttribute('shadow');
    if (shadow) styles.push(`box-shadow:var(--bpi-shadow-${shadow}, ${shadow})`);

    // Border
    const border = this.getAttribute('border');
    if (border !== null && this.hasAttribute('border')) styles.push(`border:1px solid var(--bpi-border, #e0e0e0)`);

    // Width & Height
    const width = this.getAttribute('width');
    if (width) styles.push(`width:${width}`);
    const height = this.getAttribute('height');
    if (height) styles.push(`height:${height}`);

    // Flex
    const flex = this.getAttribute('flex');
    if (flex) styles.push(`flex:${flex}`);
    const grow = this.getAttribute('grow');
    if (grow) styles.push(`flex-grow:${grow}`);
    const shrink = this.getAttribute('shrink');
    if (shrink) styles.push(`flex-shrink:${shrink}`);
    const basis = this.getAttribute('basis');
    if (basis) styles.push(`flex-basis:${basis}`);

    // Text align
    const textAlign = this.getAttribute('text-align');
    if (textAlign) styles.push(`text-align:${textAlign}`);

    // Overflow
    const overflow = this.getAttribute('overflow');
    if (overflow) styles.push(`overflow:${overflow}`);

    const styleStr = styles.length > 0 ? ` style="${styles.join(';')}"` : '';

    this.shadowRoot.innerHTML = `
      <style>${BOX_CSS}</style>
      <div class="bpi-box"${styleStr}>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('bpi-box', Box);
export { Box };
