// BPI DatePicker Web Component
const DATEPICKER_CSS = `__DATEPICKER_CSS__`;

class DatePicker extends HTMLElement {
  static get observedAttributes() {
    return ['label', 'value', 'min', 'max', 'disabled'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._isOpen = false;
    this._currentMonth = new Date().getMonth();
    this._currentYear = new Date().getFullYear();
  }

  connectedCallback() {
    this.render();
    this.setupListeners();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) {
      this.render();
      this.setupListeners();
    }
  }

  setupListeners() {
    const input = this.shadowRoot.querySelector('.bpi-date-picker__input');
    const calendar = this.shadowRoot.querySelector('.bpi-date-picker__calendar');
    const prevBtn = this.shadowRoot.querySelector('.bpi-date-picker__prev');
    const nextBtn = this.shadowRoot.querySelector('.bpi-date-picker__next');

    if (input) {
      input.addEventListener('click', () => this.toggleCalendar());
      input.addEventListener('focus', () => this.openCalendar());
      input.addEventListener('blur', () => {
        setTimeout(() => this.closeCalendar(), 200);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this._currentMonth--;
        if (this._currentMonth < 0) {
          this._currentMonth = 11;
          this._currentYear--;
        }
        this.renderCalendar();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this._currentMonth++;
        if (this._currentMonth > 11) {
          this._currentMonth = 0;
          this._currentYear++;
        }
        this.renderCalendar();
      });
    }

    // Setup day buttons
    this.setupDayListeners();
  }

  setupDayListeners() {
    const days = this.shadowRoot.querySelectorAll('.bpi-date-picker__day');
    days.forEach((day) => {
      day.addEventListener('click', () => {
        const dateStr = day.getAttribute('data-date');
        if (dateStr) {
          this.setAttribute('value', dateStr);
          this.closeCalendar();
          this.dispatchEvent(new CustomEvent('bpi-change', {
            detail: { value: dateStr },
            bubbles: true,
          }));
        }
      });
    });
  }

  toggleCalendar() {
    if (this._isOpen) {
      this.closeCalendar();
    } else {
      this.openCalendar();
    }
  }

  openCalendar() {
    this._isOpen = true;
    const calendar = this.shadowRoot.querySelector('.bpi-date-picker__calendar');
    if (calendar) calendar.classList.add('bpi-date-picker__calendar--open');
  }

  closeCalendar() {
    this._isOpen = false;
    const calendar = this.shadowRoot.querySelector('.bpi-date-picker__calendar');
    if (calendar) calendar.classList.remove('bpi-date-picker__calendar--open');
  }

  renderCalendar() {
    const calendar = this.shadowRoot.querySelector('.bpi-date-picker__days');
    if (!calendar) return;

    const year = this._currentYear;
    const month = this._currentMonth;
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);

    const firstDayOfWeek = firstDay.getDay();
    const lastDateOfMonth = lastDay.getDate();
    const lastDateOfPrevMonth = prevLastDay.getDate();

    const value = this.getAttribute('value') || '';
    const min = this.getAttribute('min') || '';
    const max = this.getAttribute('max') || '';

    let dayElements = '';

    // Previous month days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = lastDateOfPrevMonth - i;
      dayElements += `
        <div class="bpi-date-picker__day bpi-date-picker__day--other">
          ${date}
        </div>
      `;
    }

    // Current month days
    for (let date = 1; date <= lastDateOfMonth; date++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
      const isSelected = dateStr === value;
      const isDisabled = (min && dateStr < min) || (max && dateStr > max);

      dayElements += `
        <button
          class="bpi-date-picker__day ${isSelected ? 'bpi-date-picker__day--selected' : ''} ${isDisabled ? 'bpi-date-picker__day--disabled' : ''}"
          data-date="${dateStr}"
          ${isDisabled ? 'disabled' : ''}
        >
          ${date}
        </button>
      `;
    }

    // Next month days
    const totalCells = Math.ceil((firstDayOfWeek + lastDateOfMonth) / 7) * 7;
    for (let date = 1; date <= totalCells - firstDayOfWeek - lastDateOfMonth; date++) {
      dayElements += `
        <div class="bpi-date-picker__day bpi-date-picker__day--other">
          ${date}
        </div>
      `;
    }

    calendar.innerHTML = dayElements;
    this.setupDayListeners();
  }

  render() {
    const label = this.getAttribute('label') || '';
    const value = this.getAttribute('value') || '';
    const disabled = this.hasAttribute('disabled');
    const monthName = new Date(this._currentYear, this._currentMonth).toLocaleString('default', { month: 'long' });

    this.shadowRoot.innerHTML = `
      <style>${DATEPICKER_CSS}</style>
      <div class="bpi-date-picker">
        ${label ? `<label class="bpi-date-picker__label">${this.escapeHtml(label)}</label>` : ''}
        <div class="bpi-date-picker__wrapper">
          <input
            type="text"
            class="bpi-date-picker__input"
            value="${this.escapeHtml(value)}"
            placeholder="YYYY-MM-DD"
            ${disabled ? 'disabled' : ''}
            readonly
          />
          <svg class="bpi-date-picker__icon" viewBox="0 0 24 24" width="20" height="20">
            <rect x="3" y="4" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="2"/>
            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="2"/>
            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="2"/>
          </svg>
          <div class="bpi-date-picker__calendar">
            <div class="bpi-date-picker__header">
              <button class="bpi-date-picker__prev">&larr;</button>
              <div class="bpi-date-picker__month-year">${monthName} ${this._currentYear}</div>
              <button class="bpi-date-picker__next">&rarr;</button>
            </div>
            <div class="bpi-date-picker__weekdays">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div class="bpi-date-picker__days"></div>
          </div>
        </div>
      </div>
    `;

    this.renderCalendar();
    this.setupListeners();
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('bpi-date-picker', DatePicker);
export { DatePicker };
