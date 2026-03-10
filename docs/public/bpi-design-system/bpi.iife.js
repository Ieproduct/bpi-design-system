var BpiDesignSystem = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // .tmp/index.js
  var index_exports = {};
  __export(index_exports, {
    Accordion: () => Accordion,
    Alert: () => Alert,
    Autocomplete: () => Autocomplete,
    Avatar: () => Avatar,
    Badge: () => Badge,
    Box: () => Box,
    Breadcrumbs: () => Breadcrumbs,
    Button: () => Button,
    Card: () => Card,
    Checkbox: () => Checkbox,
    Chip: () => Chip,
    CircularProgress: () => CircularProgress,
    DataTable: () => DataTable,
    DatePicker: () => DatePicker,
    Dialog: () => Dialog,
    Divider: () => Divider,
    Drawer: () => Drawer,
    FormField: () => FormField,
    Icon: () => Icon,
    Input: () => Input,
    LinearProgress: () => LinearProgress,
    List: () => List,
    ListItem: () => ListItem,
    Menu: () => Menu,
    MenuItem: () => MenuItem,
    Navbar: () => Navbar,
    Pagination: () => Pagination,
    Radio: () => Radio,
    SearchBar: () => SearchBar,
    Select: () => Select,
    Sidebar: () => Sidebar,
    Skeleton: () => Skeleton,
    Slider: () => Slider,
    Snackbar: () => Snackbar,
    Stack: () => Stack,
    Switch: () => Switch,
    Tab: () => Tab,
    Table: () => Table,
    TableBody: () => TableBody,
    TableCell: () => TableCell,
    TableHead: () => TableHead,
    TableRow: () => TableRow,
    Tabs: () => Tabs,
    TextField: () => TextField,
    Tooltip: () => Tooltip,
    Typography: () => Typography
  });

  // .tmp/Button.js
  var BUTTON_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-weight:500;line-height:1.25;border:1px solid rgba(0,0,0,0);border-radius:6px;cursor:pointer;transition:background-color 150ms ease,border-color 150ms ease,color 150ms ease,box-shadow 150ms ease;white-space:nowrap;text-decoration:none;user-select:none}.bpi-btn:focus-visible{outline:2px solid rgba(227,35,33,.5);outline-offset:2px}.bpi-btn--xs{padding:4px 8px;font-size:.75rem;border-radius:4px}.bpi-btn--sm{padding:4px 12px;font-size:.875rem}.bpi-btn--md{padding:8px 16px;font-size:.875rem}.bpi-btn--lg{padding:12px 24px;font-size:1rem}.bpi-btn--primary{background-color:var(--bpi-primary);color:var(--bpi-text-inverse);border-color:var(--bpi-primary)}.bpi-btn--primary:hover:not(:disabled){background-color:var(--bpi-primary-dark);border-color:var(--bpi-primary-dark)}.bpi-btn--primary:active:not(:disabled){background-color:var(--bpi-primary-darker, var(--bpi-primary-dark))}.bpi-btn--secondary{background-color:var(--bpi-secondary);color:var(--bpi-text-inverse);border-color:var(--bpi-secondary)}.bpi-btn--secondary:hover:not(:disabled){background-color:var(--bpi-secondary-dark);border-color:var(--bpi-secondary-dark)}.bpi-btn--danger{background-color:var(--bpi-danger);color:var(--bpi-text-inverse);border-color:var(--bpi-danger)}.bpi-btn--danger:hover:not(:disabled){background-color:var(--bpi-danger-dark);border-color:var(--bpi-danger-dark)}.bpi-btn--success{background-color:var(--bpi-success);color:var(--bpi-text-inverse);border-color:var(--bpi-success)}.bpi-btn--success:hover:not(:disabled){background-color:var(--bpi-success-dark);border-color:var(--bpi-success-dark)}.bpi-btn--warning{background-color:var(--bpi-warning);color:var(--bpi-text-inverse);border-color:var(--bpi-warning)}.bpi-btn--warning:hover:not(:disabled){background-color:var(--bpi-warning-dark);border-color:var(--bpi-warning-dark)}.bpi-btn--info{background-color:var(--bpi-info);color:var(--bpi-text-inverse);border-color:var(--bpi-info)}.bpi-btn--info:hover:not(:disabled){background-color:var(--bpi-info-dark);border-color:var(--bpi-info-dark)}.bpi-btn--outline{background-color:rgba(0,0,0,0);color:var(--bpi-primary);border-color:var(--bpi-border-strong)}.bpi-btn--outline:hover:not(:disabled){background-color:var(--bpi-bg-secondary);border-color:var(--bpi-primary)}.bpi-btn--ghost{background-color:rgba(0,0,0,0);color:var(--bpi-text-secondary);border-color:rgba(0,0,0,0)}.bpi-btn--ghost:hover:not(:disabled){background-color:var(--bpi-bg-tertiary);color:var(--bpi-text-primary)}.bpi-btn:disabled,.bpi-btn--disabled{opacity:.5;cursor:not-allowed;pointer-events:none}.bpi-btn--loading{position:relative;color:rgba(0,0,0,0) !important;pointer-events:none}.bpi-btn--block{display:flex;width:100%}.bpi-btn__spinner{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:1em;height:1em;border:2px solid currentColor;border-right-color:rgba(0,0,0,0);border-radius:9999px;animation:bpi-spin .6s linear infinite;color:var(--bpi-text-inverse)}@keyframes bpi-spin{to{transform:translate(-50%, -50%) rotate(360deg)}}`;
  var Button = class extends HTMLElement {
    static get observedAttributes() {
      return ["variant", "size", "disabled", "loading", "block", "type"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    get variant() {
      return this.getAttribute("variant") || "primary";
    }
    get size() {
      return this.getAttribute("size") || "md";
    }
    get loading() {
      return this.hasAttribute("loading");
    }
    get block() {
      return this.hasAttribute("block");
    }
    render() {
      const variant = this.variant;
      const size = this.size;
      const isDisabled = this.hasAttribute("disabled");
      const isLoading = this.loading;
      const isBlock = this.block;
      const classes = [
        "bpi-btn",
        `bpi-btn--${variant}`,
        `bpi-btn--${size}`,
        isDisabled ? "bpi-btn--disabled" : "",
        isLoading ? "bpi-btn--loading" : "",
        isBlock ? "bpi-btn--block" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${BUTTON_CSS}</style>
      <button class="${classes}" ${isDisabled ? "disabled" : ""} type="${this.getAttribute("type") || "button"}">
        <slot></slot>
        ${isLoading ? '<span class="bpi-btn__spinner"></span>' : ""}
      </button>
    `;
      this.shadowRoot.querySelector("button").addEventListener("click", (e) => {
        if (isDisabled || isLoading) {
          e.stopPropagation();
          e.preventDefault();
        }
      });
    }
  };
  customElements.define("bpi-button", Button);

  // .tmp/Input.js
  var INPUT_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-input{display:block;width:100%;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-weight:400;color:var(--bpi-text-primary);background-color:var(--bpi-bg-primary);border:1px solid var(--bpi-border-default);border-radius:6px;transition:border-color 150ms ease,box-shadow 150ms ease;outline:none;box-sizing:border-box}.bpi-input::placeholder{color:var(--bpi-text-muted)}.bpi-input:focus{border-color:var(--bpi-border-focus);box-shadow:0 0 0 2px rgba(227,35,33,.5)}.bpi-input--sm{padding:4px 8px;font-size:.75rem}.bpi-input--md{padding:8px 12px;font-size:.875rem}.bpi-input--lg{padding:12px 16px;font-size:1rem}.bpi-input--error{border-color:var(--bpi-danger)}.bpi-input--error:focus{box-shadow:0 0 0 2px rgba(220,38,38,.3)}.bpi-input:disabled,.bpi-input--disabled{opacity:.5;cursor:not-allowed;background-color:var(--bpi-bg-secondary)}.bpi-input__hint{display:block;margin-top:4px;font-size:.75rem;color:var(--bpi-text-muted)}.bpi-input__error{display:block;margin-top:4px;font-size:.75rem;color:var(--bpi-danger)}`;
  var Input = class extends HTMLElement {
    static get observedAttributes() {
      return ["type", "size", "placeholder", "value", "disabled", "error", "hint", "name", "required"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._handleInput = this._handleInput.bind(this);
      this._handleChange = this._handleChange.bind(this);
      this._handleBlur = this._handleBlur.bind(this);
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    get value() {
      const input = this.shadowRoot?.querySelector("input");
      return input ? input.value : this.getAttribute("value") || "";
    }
    set value(val) {
      this.setAttribute("value", val);
      const input = this.shadowRoot?.querySelector("input");
      if (input) input.value = val;
    }
    _handleInput(e) {
      this.dispatchEvent(new CustomEvent("bpi-input", {
        bubbles: true,
        composed: true,
        detail: { value: e.target.value }
      }));
    }
    _handleChange(e) {
      this.dispatchEvent(new CustomEvent("bpi-change", {
        bubbles: true,
        composed: true,
        detail: { value: e.target.value }
      }));
    }
    _handleBlur(e) {
      this.dispatchEvent(new CustomEvent("bpi-blur", {
        bubbles: true,
        composed: true,
        detail: { value: e.target.value }
      }));
    }
    render() {
      const type = this.getAttribute("type") || "text";
      const size = this.getAttribute("size") || "md";
      const placeholder = this.getAttribute("placeholder") || "";
      const value = this.getAttribute("value") || "";
      const isDisabled = this.hasAttribute("disabled");
      const error = this.getAttribute("error");
      const hint = this.getAttribute("hint");
      const name = this.getAttribute("name") || "";
      const required = this.hasAttribute("required");
      const classes = [
        "bpi-input",
        `bpi-input--${size}`,
        error ? "bpi-input--error" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${INPUT_CSS}</style>
      <input
        class="${classes}"
        type="${type}"
        placeholder="${placeholder}"
        value="${value}"
        name="${name}"
        ${isDisabled ? "disabled" : ""}
        ${required ? "required" : ""}
      />
      ${error ? `<span class="bpi-input__error">${error}</span>` : ""}
      ${hint && !error ? `<span class="bpi-input__hint">${hint}</span>` : ""}
    `;
      const input = this.shadowRoot.querySelector("input");
      input.addEventListener("input", this._handleInput);
      input.addEventListener("change", this._handleChange);
      input.addEventListener("blur", this._handleBlur);
    }
  };
  customElements.define("bpi-input", Input);

  // .tmp/Badge.js
  var BADGE_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-badge{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.75rem;font-weight:500;line-height:1.25;border-radius:9999px;white-space:nowrap}.bpi-badge--primary{background-color:var(--bpi-primary-light);color:var(--bpi-primary-dark)}.bpi-badge--success{background-color:var(--bpi-success-light);color:var(--bpi-success-dark)}.bpi-badge--warning{background-color:var(--bpi-warning-light);color:var(--bpi-warning-dark)}.bpi-badge--danger{background-color:var(--bpi-danger-light);color:var(--bpi-danger-dark)}.bpi-badge--info{background-color:var(--bpi-info-light);color:var(--bpi-info-dark)}.bpi-badge--neutral{background-color:var(--bpi-gray-100);color:var(--bpi-gray-700)}.bpi-badge--dot::before{content:"";display:inline-block;width:6px;height:6px;border-radius:9999px;background-color:currentColor}`;
  var Badge = class extends HTMLElement {
    static get observedAttributes() {
      return ["variant", "dot"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const variant = this.getAttribute("variant") || "neutral";
      const hasDot = this.hasAttribute("dot");
      const classes = [
        "bpi-badge",
        `bpi-badge--${variant}`,
        hasDot ? "bpi-badge--dot" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${BADGE_CSS}</style>
      <span class="${classes}"><slot></slot></span>
    `;
    }
  };
  customElements.define("bpi-badge", Badge);

  // .tmp/Icon.js
  var ICON_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-icon{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1}.bpi-icon svg{width:100%;height:100%;fill:currentColor}.bpi-icon--xs{width:12px;height:12px}.bpi-icon--sm{width:16px;height:16px}.bpi-icon--md{width:20px;height:20px}.bpi-icon--lg{width:24px;height:24px}.bpi-icon--xl{width:32px;height:32px}`;
  var Icon = class extends HTMLElement {
    static get observedAttributes() {
      return ["name", "size"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const size = this.getAttribute("size") || "md";
      const classes = ["bpi-icon", `bpi-icon--${size}`].join(" ");
      this.shadowRoot.innerHTML = `
      <style>${ICON_CSS}</style>
      <span class="${classes}"><slot></slot></span>
    `;
    }
  };
  customElements.define("bpi-icon", Icon);

  // .tmp/Stack.js
  var STACK_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-stack{display:flex}.bpi-stack--row{flex-direction:row}.bpi-stack--column{flex-direction:column}.bpi-stack--row-reverse{flex-direction:row-reverse}.bpi-stack--column-reverse{flex-direction:column-reverse}.bpi-stack--spacing-0{gap:0}.bpi-stack--spacing-1{gap:4px}.bpi-stack--spacing-2{gap:8px}.bpi-stack--spacing-3{gap:12px}.bpi-stack--spacing-4{gap:16px}.bpi-stack--spacing-5{gap:20px}.bpi-stack--spacing-6{gap:24px}.bpi-stack--spacing-8{gap:32px}.bpi-stack--spacing-10{gap:40px}.bpi-stack--spacing-12{gap:48px}.bpi-stack--spacing-16{gap:64px}.bpi-stack--align-start{align-items:flex-start}.bpi-stack--align-center{align-items:center}.bpi-stack--align-end{align-items:flex-end}.bpi-stack--align-stretch{align-items:stretch}.bpi-stack--align-baseline{align-items:baseline}.bpi-stack--justify-start{justify-content:flex-start}.bpi-stack--justify-center{justify-content:center}.bpi-stack--justify-end{justify-content:flex-end}.bpi-stack--justify-between{justify-content:space-between}.bpi-stack--justify-around{justify-content:space-around}.bpi-stack--justify-evenly{justify-content:space-evenly}.bpi-stack--wrap{flex-wrap:wrap}.bpi-stack--divider>::slotted(*:not(:first-child)){border-top:1px solid #e5e7eb;padding-top:inherit}.bpi-stack--divider.bpi-stack--row>::slotted(*:not(:first-child)),.bpi-stack--divider.bpi-stack--row-reverse>::slotted(*:not(:first-child)){border-top:none;border-left:1px solid #e5e7eb;padding-top:0;padding-left:inherit}`;
  var Stack = class extends HTMLElement {
    static get observedAttributes() {
      return ["direction", "spacing", "align", "justify", "wrap", "divider"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    get direction() {
      return this.getAttribute("direction") || "column";
    }
    get spacing() {
      return this.getAttribute("spacing") || "2";
    }
    get align() {
      return this.getAttribute("align") || "";
    }
    get justify() {
      return this.getAttribute("justify") || "";
    }
    render() {
      const direction = this.direction;
      const spacing = this.spacing;
      const align = this.align;
      const justify = this.justify;
      const wrap = this.hasAttribute("wrap");
      const divider = this.hasAttribute("divider");
      const classes = [
        "bpi-stack",
        `bpi-stack--${direction}`,
        `bpi-stack--spacing-${spacing}`,
        align ? `bpi-stack--align-${align}` : "",
        justify ? `bpi-stack--justify-${justify}` : "",
        wrap ? "bpi-stack--wrap" : "",
        divider ? "bpi-stack--divider" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${STACK_CSS}</style>
      <div class="${classes}">
        <slot></slot>
      </div>
    `;
    }
  };
  customElements.define("bpi-stack", Stack);

  // .tmp/Box.js
  var BOX_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-box{display:block;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;box-sizing:border-box}`;
  var Box = class extends HTMLElement {
    static get observedAttributes() {
      return [
        "display",
        "p",
        "px",
        "py",
        "pt",
        "pb",
        "pl",
        "pr",
        "m",
        "mx",
        "my",
        "mt",
        "mb",
        "ml",
        "mr",
        "bg",
        "radius",
        "shadow",
        "border",
        "width",
        "height",
        "flex",
        "grow",
        "shrink",
        "basis",
        "text-align",
        "overflow"
      ];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    _spaceValue(n) {
      const map = {
        "0": "0",
        "1": "var(--bpi-space-1)",
        "2": "var(--bpi-space-2)",
        "3": "var(--bpi-space-3)",
        "4": "var(--bpi-space-4)",
        "5": "var(--bpi-space-5)",
        "6": "var(--bpi-space-6)",
        "8": "var(--bpi-space-8)",
        "10": "var(--bpi-space-10)",
        "12": "var(--bpi-space-12)",
        "16": "var(--bpi-space-16)"
      };
      return map[n] || n;
    }
    render() {
      const styles = [];
      const display = this.getAttribute("display");
      if (display) styles.push(`display:${display}`);
      const p = this.getAttribute("p");
      if (p) styles.push(`padding:${this._spaceValue(p)}`);
      const px = this.getAttribute("px");
      if (px) {
        styles.push(`padding-left:${this._spaceValue(px)}`);
        styles.push(`padding-right:${this._spaceValue(px)}`);
      }
      const py = this.getAttribute("py");
      if (py) {
        styles.push(`padding-top:${this._spaceValue(py)}`);
        styles.push(`padding-bottom:${this._spaceValue(py)}`);
      }
      const pt = this.getAttribute("pt");
      if (pt) styles.push(`padding-top:${this._spaceValue(pt)}`);
      const pb = this.getAttribute("pb");
      if (pb) styles.push(`padding-bottom:${this._spaceValue(pb)}`);
      const pl = this.getAttribute("pl");
      if (pl) styles.push(`padding-left:${this._spaceValue(pl)}`);
      const pr = this.getAttribute("pr");
      if (pr) styles.push(`padding-right:${this._spaceValue(pr)}`);
      const m = this.getAttribute("m");
      if (m) styles.push(`margin:${this._spaceValue(m)}`);
      const mx = this.getAttribute("mx");
      if (mx) {
        styles.push(`margin-left:${mx === "auto" ? "auto" : this._spaceValue(mx)}`);
        styles.push(`margin-right:${mx === "auto" ? "auto" : this._spaceValue(mx)}`);
      }
      const my = this.getAttribute("my");
      if (my) {
        styles.push(`margin-top:${this._spaceValue(my)}`);
        styles.push(`margin-bottom:${this._spaceValue(my)}`);
      }
      const mt = this.getAttribute("mt");
      if (mt) styles.push(`margin-top:${this._spaceValue(mt)}`);
      const mb = this.getAttribute("mb");
      if (mb) styles.push(`margin-bottom:${this._spaceValue(mb)}`);
      const ml = this.getAttribute("ml");
      if (ml) styles.push(`margin-left:${this._spaceValue(ml)}`);
      const mr = this.getAttribute("mr");
      if (mr) styles.push(`margin-right:${this._spaceValue(mr)}`);
      const bg = this.getAttribute("bg");
      if (bg) styles.push(`background-color:var(--bpi-${bg}, ${bg})`);
      const radius = this.getAttribute("radius");
      if (radius) styles.push(`border-radius:var(--bpi-radius-${radius}, ${radius})`);
      const shadow = this.getAttribute("shadow");
      if (shadow) styles.push(`box-shadow:var(--bpi-shadow-${shadow}, ${shadow})`);
      const border = this.getAttribute("border");
      if (border !== null && this.hasAttribute("border")) styles.push(`border:1px solid var(--bpi-border, #e0e0e0)`);
      const width = this.getAttribute("width");
      if (width) styles.push(`width:${width}`);
      const height = this.getAttribute("height");
      if (height) styles.push(`height:${height}`);
      const flex = this.getAttribute("flex");
      if (flex) styles.push(`flex:${flex}`);
      const grow = this.getAttribute("grow");
      if (grow) styles.push(`flex-grow:${grow}`);
      const shrink = this.getAttribute("shrink");
      if (shrink) styles.push(`flex-shrink:${shrink}`);
      const basis = this.getAttribute("basis");
      if (basis) styles.push(`flex-basis:${basis}`);
      const textAlign = this.getAttribute("text-align");
      if (textAlign) styles.push(`text-align:${textAlign}`);
      const overflow = this.getAttribute("overflow");
      if (overflow) styles.push(`overflow:${overflow}`);
      const styleStr = styles.length > 0 ? ` style="${styles.join(";")}"` : "";
      this.shadowRoot.innerHTML = `
      <style>${BOX_CSS}</style>
      <div class="bpi-box"${styleStr}>
        <slot></slot>
      </div>
    `;
    }
  };
  customElements.define("bpi-box", Box);

  // .tmp/Typography.js
  var TYPOGRAPHY_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-typography{font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#0f172a;margin:0;padding:0}.bpi-typography--h1{font-size:2rem;line-height:1.15;font-weight:700;letter-spacing:-0.02em}@media(min-width: 640px){.bpi-typography--h1{font-size:2.5rem}}@media(min-width: 1024px){.bpi-typography--h1{font-size:3rem}}.bpi-typography--h2{font-size:1.75rem;line-height:1.2;font-weight:700;letter-spacing:-0.015em}@media(min-width: 640px){.bpi-typography--h2{font-size:2rem}}@media(min-width: 1024px){.bpi-typography--h2{font-size:2.5rem}}.bpi-typography--h3{font-size:1.5rem;line-height:1.25;font-weight:700;letter-spacing:-0.01em}@media(min-width: 640px){.bpi-typography--h3{font-size:1.75rem}}@media(min-width: 1024px){.bpi-typography--h3{font-size:2rem}}.bpi-typography--h4{font-size:1.25rem;line-height:1.3;font-weight:600;letter-spacing:-0.008em}@media(min-width: 640px){.bpi-typography--h4{font-size:1.5rem}}@media(min-width: 1024px){.bpi-typography--h4{font-size:1.75rem}}.bpi-typography--h5{font-size:1.125rem;line-height:1.35;font-weight:600}@media(min-width: 640px){.bpi-typography--h5{font-size:1.25rem}}@media(min-width: 1024px){.bpi-typography--h5{font-size:1.5rem}}.bpi-typography--h6{font-size:1rem;line-height:1.4;font-weight:600}@media(min-width: 640px){.bpi-typography--h6{font-size:1.125rem}}@media(min-width: 1024px){.bpi-typography--h6{font-size:1.25rem}}.bpi-typography--title1{font-size:1.25rem;line-height:1.3;font-weight:600;letter-spacing:-0.006em}@media(min-width: 640px){.bpi-typography--title1{font-size:1.375rem}}@media(min-width: 1024px){.bpi-typography--title1{font-size:1.5rem}}.bpi-typography--title2{font-size:1.125rem;line-height:1.35;font-weight:600}@media(min-width: 640px){.bpi-typography--title2{font-size:1.25rem}}@media(min-width: 1024px){.bpi-typography--title2{font-size:1.375rem}}.bpi-typography--title3{font-size:1rem;line-height:1.4;font-weight:500}@media(min-width: 640px){.bpi-typography--title3{font-size:1.0625rem}}@media(min-width: 1024px){.bpi-typography--title3{font-size:1.125rem}}.bpi-typography--subtitle1{font-size:1rem;line-height:1.5;font-weight:500;letter-spacing:.0075em}@media(min-width: 640px){.bpi-typography--subtitle1{font-size:1rem}}@media(min-width: 1024px){.bpi-typography--subtitle1{font-size:1rem}}.bpi-typography--subtitle2{font-size:.875rem;line-height:1.5;font-weight:500;letter-spacing:.006em}@media(min-width: 640px){.bpi-typography--subtitle2{font-size:.875rem}}@media(min-width: 1024px){.bpi-typography--subtitle2{font-size:.875rem}}.bpi-typography--subtitle3{font-size:.8125rem;line-height:1.5;font-weight:500;letter-spacing:.005em}@media(min-width: 640px){.bpi-typography--subtitle3{font-size:.8125rem}}@media(min-width: 1024px){.bpi-typography--subtitle3{font-size:.8125rem}}.bpi-typography--body1{font-size:1rem;line-height:1.5;font-weight:400}@media(min-width: 640px){.bpi-typography--body1{font-size:1rem}}@media(min-width: 1024px){.bpi-typography--body1{font-size:1rem}}.bpi-typography--body2{font-size:.875rem;line-height:1.55;font-weight:400}@media(min-width: 640px){.bpi-typography--body2{font-size:.875rem}}@media(min-width: 1024px){.bpi-typography--body2{font-size:.875rem}}.bpi-typography--body3{font-size:.8125rem;line-height:1.55;font-weight:400}@media(min-width: 640px){.bpi-typography--body3{font-size:.8125rem}}@media(min-width: 1024px){.bpi-typography--body3{font-size:.8125rem}}.bpi-typography--caption{font-size:.75rem;line-height:1.5;font-weight:400;letter-spacing:.03em}@media(min-width: 640px){.bpi-typography--caption{font-size:.75rem}}@media(min-width: 1024px){.bpi-typography--caption{font-size:.75rem}}.bpi-typography--text-helper{font-size:.6875rem;line-height:1.5;font-weight:400;letter-spacing:.025em}@media(min-width: 640px){.bpi-typography--text-helper{font-size:.6875rem}}@media(min-width: 1024px){.bpi-typography--text-helper{font-size:.6875rem}}.bpi-typography--text-helper{color:#64748b}.bpi-typography--align-left{text-align:left}.bpi-typography--align-center{text-align:center}.bpi-typography--align-right{text-align:right}.bpi-typography--align-justify{text-align:justify}.bpi-typography--color-primary{color:#e32321}.bpi-typography--color-secondary{color:#64748b}.bpi-typography--color-success{color:#16a34a}.bpi-typography--color-danger{color:#dc2626}.bpi-typography--color-warning{color:#d97706}.bpi-typography--color-info{color:#0284c7}.bpi-typography--color-disabled{color:#9ca3af}.bpi-typography--color-inherit{color:inherit}.bpi-typography--weight-light{font-weight:300}.bpi-typography--weight-normal{font-weight:400}.bpi-typography--weight-medium{font-weight:500}.bpi-typography--weight-semibold{font-weight:600}.bpi-typography--weight-bold{font-weight:700}.bpi-typography--gutter-bottom{margin-bottom:.35em}.bpi-typography--no-wrap{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}`;
  var Typography = class extends HTMLElement {
    static get observedAttributes() {
      return ["variant", "color", "align", "weight", "gutterBottom", "gutter-bottom", "noWrap", "no-wrap", "component"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    get variant() {
      return this.getAttribute("variant") || "body1";
    }
    get color() {
      return this.getAttribute("color") || "";
    }
    get align() {
      return this.getAttribute("align") || "";
    }
    get weight() {
      return this.getAttribute("weight") || "";
    }
    // Map variant to default HTML element
    _getElement() {
      const component = this.getAttribute("component");
      if (component) return component;
      const map = {
        "h1": "h1",
        "h2": "h2",
        "h3": "h3",
        "h4": "h4",
        "h5": "h5",
        "h6": "h6",
        "title1": "h2",
        "title2": "h3",
        "title3": "h4",
        "subtitle1": "h6",
        "subtitle2": "h6",
        "subtitle3": "h6",
        "body1": "p",
        "body2": "p",
        "body3": "p",
        "caption": "span",
        "text-helper": "span"
      };
      return map[this.variant] || "p";
    }
    render() {
      const variant = this.variant;
      const align = this.align;
      const color = this.color;
      const weight = this.weight;
      const gutterBottom = this.hasAttribute("gutterBottom") || this.hasAttribute("gutter-bottom");
      const noWrap = this.hasAttribute("noWrap") || this.hasAttribute("no-wrap");
      const element = this._getElement();
      const classes = [
        "bpi-typography",
        `bpi-typography--${variant}`,
        align ? `bpi-typography--align-${align}` : "",
        color ? `bpi-typography--color-${color}` : "",
        weight ? `bpi-typography--weight-${weight}` : "",
        gutterBottom ? "bpi-typography--gutter-bottom" : "",
        noWrap ? "bpi-typography--no-wrap" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${TYPOGRAPHY_CSS}</style>
      <${element} class="${classes}">
        <slot></slot>
      </${element}>
    `;
    }
  };
  customElements.define("bpi-typography", Typography);

  // .tmp/TextField.js
  var TEXTFIELD_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-textfield{position:relative;display:inline-flex;flex-direction:column;width:100%;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-textfield__wrapper{position:relative;display:flex;align-items:center}.bpi-textfield__input{width:100%;font-family:inherit;font-size:1rem;font-weight:400;color:#0f172a;background:rgba(0,0,0,0);border:none;outline:none;box-sizing:border-box;transition:none;-webkit-appearance:none}.bpi-textfield__input::placeholder{color:rgba(0,0,0,0)}.bpi-textfield__input:focus::placeholder{color:#94a3b8;transition:color .2s ease .1s}.bpi-textfield textarea.bpi-textfield__input{resize:vertical;min-height:80px}.bpi-textfield__label{position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:1rem;color:#94a3b8;pointer-events:none;transition:transform .2s cubic-bezier(0, 0, 0.2, 1),font-size .2s cubic-bezier(0, 0, 0.2, 1),color .2s cubic-bezier(0, 0, 0.2, 1),top .2s cubic-bezier(0, 0, 0.2, 1),background-color .2s ease;transform-origin:top left;max-width:calc(100% - 24px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bpi-textfield--outlined .bpi-textfield__wrapper{border:1.5px solid #e5e7eb;border-radius:6px;transition:border-color .2s ease}.bpi-textfield--outlined .bpi-textfield__input{padding:16px 12px 8px}.bpi-textfield--outlined .bpi-textfield__label{background-color:rgba(0,0,0,0);padding:0 4px}.bpi-textfield--outlined.bpi-textfield--focused .bpi-textfield__label,.bpi-textfield--outlined.bpi-textfield--filled .bpi-textfield__label{top:0;transform:translateY(-50%);font-size:.75rem;background-color:#fff}.bpi-textfield--outlined.bpi-textfield--focused .bpi-textfield__wrapper{border-color:#e32321;border-width:2px}.bpi-textfield--outlined.bpi-textfield--focused .bpi-textfield__label{color:#e32321}.bpi-textfield--filled .bpi-textfield__wrapper{background-color:#f9fafb;border-bottom:1.5px solid #e5e7eb;border-radius:6px 6px 0 0;transition:border-color .2s ease,background-color .2s ease}.bpi-textfield--filled .bpi-textfield__input{padding:20px 12px 6px}.bpi-textfield--filled.bpi-textfield--focused .bpi-textfield__label,.bpi-textfield--filled.bpi-textfield--filled .bpi-textfield__label{top:8px;transform:translateY(0);font-size:.75rem}.bpi-textfield--filled.bpi-textfield--focused .bpi-textfield__wrapper{border-bottom-color:#e32321;border-bottom-width:2px;background-color:rgb(242.88,244.9,246.92)}.bpi-textfield--filled.bpi-textfield--focused .bpi-textfield__label{color:#e32321}.bpi-textfield--standard .bpi-textfield__wrapper{border-bottom:1px solid #e5e7eb;transition:border-color .2s ease}.bpi-textfield--standard .bpi-textfield__input{padding:20px 0 6px}.bpi-textfield--standard .bpi-textfield__label{left:0}.bpi-textfield--standard.bpi-textfield--focused .bpi-textfield__label,.bpi-textfield--standard.bpi-textfield--filled .bpi-textfield__label{top:2px;transform:translateY(0);font-size:.75rem}.bpi-textfield--standard.bpi-textfield--focused .bpi-textfield__wrapper{border-bottom-color:#e32321;border-bottom-width:2px}.bpi-textfield--standard.bpi-textfield--focused .bpi-textfield__label{color:#e32321}.bpi-textfield--multiline .bpi-textfield__label{top:16px;transform:translateY(0)}.bpi-textfield--multiline.bpi-textfield--focused .bpi-textfield__label,.bpi-textfield--multiline.bpi-textfield--filled .bpi-textfield__label{top:0;transform:translateY(-50%)}.bpi-textfield--multiline.bpi-textfield--filled.bpi-textfield--filled .bpi-textfield__label,.bpi-textfield--multiline.bpi-textfield--standard.bpi-textfield--focused .bpi-textfield__label,.bpi-textfield--multiline.bpi-textfield--standard.bpi-textfield--filled .bpi-textfield__label{top:2px;transform:translateY(0)}.bpi-textfield--sm .bpi-textfield__input{font-size:.875rem}.bpi-textfield--sm .bpi-textfield__label{font-size:.875rem}.bpi-textfield--sm.bpi-textfield--focused .bpi-textfield__label,.bpi-textfield--sm.bpi-textfield--filled .bpi-textfield__label{font-size:10px}.bpi-textfield--lg .bpi-textfield__input{font-size:1.125rem}.bpi-textfield--lg .bpi-textfield__label{font-size:1.125rem}.bpi-textfield--lg.bpi-textfield--focused .bpi-textfield__label,.bpi-textfield--lg.bpi-textfield--filled .bpi-textfield__label{font-size:.75rem}.bpi-textfield--error .bpi-textfield__wrapper{border-color:#dc2626 !important}.bpi-textfield--error .bpi-textfield__label{color:#dc2626 !important}.bpi-textfield--disabled{opacity:.5;pointer-events:none}.bpi-textfield__helper{display:block;margin-top:4px;padding-left:12px;font-size:.75rem;color:#94a3b8}.bpi-textfield__error-text{display:block;margin-top:4px;padding-left:12px;font-size:.75rem;color:#dc2626}.bpi-textfield--fullWidth{width:100%}`;
  var TextField = class extends HTMLElement {
    static get observedAttributes() {
      return [
        "label",
        "variant",
        "size",
        "type",
        "placeholder",
        "value",
        "disabled",
        "error",
        "helper-text",
        "name",
        "required",
        "multiline",
        "rows",
        "full-width",
        "readonly"
      ];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._focused = false;
      this._handleFocus = this._handleFocus.bind(this);
      this._handleBlur = this._handleBlur.bind(this);
      this._handleInput = this._handleInput.bind(this);
      this._handleChange = this._handleChange.bind(this);
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    get value() {
      const el = this.shadowRoot?.querySelector(".bpi-textfield__input");
      return el ? el.value : this.getAttribute("value") || "";
    }
    set value(val) {
      this.setAttribute("value", val);
      const el = this.shadowRoot?.querySelector(".bpi-textfield__input");
      if (el) {
        el.value = val;
        this._updateFilledState();
      }
    }
    _handleFocus() {
      this._focused = true;
      const root = this.shadowRoot.querySelector(".bpi-textfield");
      if (root) root.classList.add("bpi-textfield--focused");
    }
    _handleBlur(e) {
      this._focused = false;
      const root = this.shadowRoot.querySelector(".bpi-textfield");
      if (root) root.classList.remove("bpi-textfield--focused");
      this._updateFilledState();
      this.dispatchEvent(new CustomEvent("bpi-blur", {
        bubbles: true,
        composed: true,
        detail: { value: e.target.value }
      }));
    }
    _handleInput(e) {
      this._updateFilledState();
      this.dispatchEvent(new CustomEvent("bpi-input", {
        bubbles: true,
        composed: true,
        detail: { value: e.target.value }
      }));
    }
    _handleChange(e) {
      this.dispatchEvent(new CustomEvent("bpi-change", {
        bubbles: true,
        composed: true,
        detail: { value: e.target.value }
      }));
    }
    _updateFilledState() {
      const el = this.shadowRoot?.querySelector(".bpi-textfield__input");
      const root = this.shadowRoot?.querySelector(".bpi-textfield");
      if (!el || !root) return;
      if (el.value && el.value.length > 0) {
        root.classList.add("bpi-textfield--filled");
      } else {
        root.classList.remove("bpi-textfield--filled");
      }
    }
    render() {
      const label = this.getAttribute("label") || "";
      const variant = this.getAttribute("variant") || "outlined";
      const size = this.getAttribute("size") || "md";
      const type = this.getAttribute("type") || "text";
      const placeholder = this.getAttribute("placeholder") || "";
      const value = this.getAttribute("value") || "";
      const isDisabled = this.hasAttribute("disabled");
      const isReadonly = this.hasAttribute("readonly");
      const error = this.getAttribute("error");
      const helperText = this.getAttribute("helper-text");
      const name = this.getAttribute("name") || "";
      const required = this.hasAttribute("required");
      const multiline = this.hasAttribute("multiline");
      const rows = this.getAttribute("rows") || "3";
      const fullWidth = this.hasAttribute("full-width");
      const filled = value.length > 0;
      const classes = [
        "bpi-textfield",
        `bpi-textfield--${variant}`,
        `bpi-textfield--${size}`,
        filled ? "bpi-textfield--filled" : "",
        this._focused ? "bpi-textfield--focused" : "",
        error ? "bpi-textfield--error" : "",
        isDisabled ? "bpi-textfield--disabled" : "",
        multiline ? "bpi-textfield--multiline" : "",
        fullWidth ? "bpi-textfield--fullWidth" : ""
      ].filter(Boolean).join(" ");
      const inputTag = multiline ? `<textarea
          class="bpi-textfield__input"
          placeholder="${placeholder}"
          name="${name}"
          rows="${rows}"
          ${isDisabled ? "disabled" : ""}
          ${isReadonly ? "readonly" : ""}
          ${required ? "required" : ""}
        >${value}</textarea>` : `<input
          class="bpi-textfield__input"
          type="${type}"
          placeholder="${placeholder}"
          value="${value}"
          name="${name}"
          ${isDisabled ? "disabled" : ""}
          ${isReadonly ? "readonly" : ""}
          ${required ? "required" : ""}
        />`;
      this.shadowRoot.innerHTML = `
      <style>${TEXTFIELD_CSS}</style>
      <div class="${classes}">
        <div class="bpi-textfield__wrapper">
          ${inputTag}
          ${label ? `<label class="bpi-textfield__label">${label}${required ? " *" : ""}</label>` : ""}
        </div>
        ${error ? `<span class="bpi-textfield__error-text">${error}</span>` : ""}
        ${helperText && !error ? `<span class="bpi-textfield__helper">${helperText}</span>` : ""}
      </div>
    `;
      const inputEl = this.shadowRoot.querySelector(".bpi-textfield__input");
      inputEl.addEventListener("focus", this._handleFocus);
      inputEl.addEventListener("blur", this._handleBlur);
      inputEl.addEventListener("input", this._handleInput);
      inputEl.addEventListener("change", this._handleChange);
    }
  };
  customElements.define("bpi-text-field", TextField);

  // .tmp/Alert.js
  var ALERT_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-alert{display:flex;align-items:flex-start;gap:12px;padding:16px;border-radius:6px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;border:1px solid}.bpi-alert__icon{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:20px;height:20px}.bpi-alert__content{flex:1;display:flex;flex-direction:column;gap:4px}.bpi-alert__title{font-weight:600;margin:0}.bpi-alert__message{margin:0;line-height:1.5}.bpi-alert__close{flex-shrink:0;background:none;border:none;font-size:1.5rem;cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;width:24px;height:24px;opacity:.6;transition:opacity 150ms ease}.bpi-alert__close:hover{opacity:1}.bpi-alert__close:focus{outline:2px solid rgba(227,35,33,.5);outline-offset:2px}.bpi-alert--success{background-color:var(--bpi-success-lighter, var(--bpi-success-light));border-color:var(--bpi-success);color:var(--bpi-success-dark)}.bpi-alert--error{background-color:var(--bpi-danger-lighter, var(--bpi-danger-light));border-color:var(--bpi-danger);color:var(--bpi-danger-dark)}.bpi-alert--warning{background-color:var(--bpi-warning-lighter, var(--bpi-warning-light));border-color:var(--bpi-warning);color:var(--bpi-warning-dark)}.bpi-alert--info{background-color:var(--bpi-info-lighter, var(--bpi-info-light));border-color:var(--bpi-info);color:var(--bpi-info-dark)}`;
  var Alert = class extends HTMLElement {
    static get observedAttributes() {
      return ["variant", "title", "closable"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const variant = this.getAttribute("variant") || "info";
      const title = this.getAttribute("title") || "";
      const closable = this.hasAttribute("closable");
      const classes = ["bpi-alert", `bpi-alert--${variant}`].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${ALERT_CSS}</style>
      <div class="${classes}">
        <div class="bpi-alert__icon">
          <slot name="icon"></slot>
        </div>
        <div class="bpi-alert__content">
          ${title ? `<div class="bpi-alert__title">${this.escapeHtml(title)}</div>` : ""}
          <div class="bpi-alert__message"><slot></slot></div>
        </div>
        ${closable ? `<button class="bpi-alert__close" aria-label="Close alert">&times;</button>` : ""}
      </div>
    `;
      if (closable) {
        this.shadowRoot.querySelector(".bpi-alert__close").addEventListener("click", () => {
          this.dispatchEvent(new CustomEvent("bpi-close", { bubbles: true }));
          this.remove();
        });
      }
    }
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-alert", Alert);

  // .tmp/Skeleton.js
  var SKELETON_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-skeleton{background-color:#e5e7eb}.bpi-skeleton--text{border-radius:4px}.bpi-skeleton--circular{border-radius:9999px}.bpi-skeleton--rectangular{border-radius:6px}.bpi-skeleton--pulse{animation:bpi-skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}.bpi-skeleton--wave{animation:bpi-skeleton-wave 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;background:linear-gradient(90deg, #E5E7EB 0%, #F3F4F6 50%, #E5E7EB 100%);background-size:200% 100%}@keyframes bpi-skeleton-pulse{0%,100%{opacity:1}50%{opacity:.5}}@keyframes bpi-skeleton-wave{0%{background-position:200% 0}100%{background-position:-200% 0}}`;
  var Skeleton = class extends HTMLElement {
    static get observedAttributes() {
      return ["variant", "width", "height", "animation"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const variant = this.getAttribute("variant") || "text";
      const width = this.getAttribute("width") || "100%";
      const height = this.getAttribute("height") || (variant === "text" ? "1rem" : "100px");
      const animation = this.getAttribute("animation") || "pulse";
      const classes = [
        "bpi-skeleton",
        `bpi-skeleton--${variant}`,
        `bpi-skeleton--${animation}`
      ].filter(Boolean).join(" ");
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
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-skeleton", Skeleton);

  // .tmp/CircularProgress.js
  var CIRCULARPROGRESS_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-circular-progress{display:inline-flex;align-items:center;justify-content:center}.bpi-circular-progress--sm{width:40px;height:40px}.bpi-circular-progress--md{width:60px;height:60px}.bpi-circular-progress--lg{width:80px;height:80px}.bpi-circular-progress__svg{width:100%;height:100%;transform:rotate(-90deg)}.bpi-circular-progress__background{fill:none;stroke:#e5e7eb;stroke-width:4}.bpi-circular-progress__track{fill:none;stroke-width:4;stroke-linecap:round;stroke-dasharray:283;stroke-dashoffset:0;transition:stroke-dashoffset 250ms ease}.bpi-circular-progress__text{font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:middle;transform:rotate(90deg)}.bpi-circular-progress--primary .bpi-circular-progress__track{stroke:#e32321}.bpi-circular-progress--primary .bpi-circular-progress__text{fill:#e32321}.bpi-circular-progress--secondary .bpi-circular-progress__track{stroke:#262626}.bpi-circular-progress--secondary .bpi-circular-progress__text{fill:#262626}.bpi-circular-progress--success .bpi-circular-progress__track{stroke:#16a34a}.bpi-circular-progress--success .bpi-circular-progress__text{fill:#16a34a}.bpi-circular-progress--danger .bpi-circular-progress__track{stroke:#dc2626}.bpi-circular-progress--danger .bpi-circular-progress__text{fill:#dc2626}.bpi-circular-progress--indeterminate .bpi-circular-progress__track{animation:bpi-circular-rotate 2s linear infinite}@keyframes bpi-circular-rotate{0%{stroke-dasharray:1 150;stroke-dashoffset:0}50%{stroke-dasharray:90 150;stroke-dashoffset:-35}100%{stroke-dasharray:90 150;stroke-dashoffset:-124}}`;
  var CircularProgress = class extends HTMLElement {
    static get observedAttributes() {
      return ["size", "color", "value"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const size = this.getAttribute("size") || "md";
      const color = this.getAttribute("color") || "primary";
      const value = parseFloat(this.getAttribute("value")) || void 0;
      const classes = [
        "bpi-circular-progress",
        `bpi-circular-progress--${size}`,
        `bpi-circular-progress--${color}`,
        value === void 0 ? "bpi-circular-progress--indeterminate" : "bpi-circular-progress--determinate"
      ].filter(Boolean).join(" ");
      let svgContent = "";
      if (value !== void 0) {
        const circumference = 2 * Math.PI * 45;
        const strokeDashoffset = circumference - value / 100 * circumference;
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
  };
  customElements.define("bpi-circular-progress", CircularProgress);

  // .tmp/LinearProgress.js
  var LINEARPROGRESS_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-linear-progress{width:100%;height:4px;background-color:#e5e7eb;border-radius:9999px;overflow:hidden}.bpi-linear-progress__bar{height:100%;background-color:#e32321;transition:width 250ms ease;border-radius:9999px}.bpi-linear-progress--indeterminate .bpi-linear-progress__bar{width:30% !important;animation:bpi-linear-progress-indeterminate 1.5s ease-in-out infinite}.bpi-linear-progress--primary .bpi-linear-progress__bar{background-color:#e32321}.bpi-linear-progress--secondary .bpi-linear-progress__bar{background-color:#262626}.bpi-linear-progress--success .bpi-linear-progress__bar{background-color:#16a34a}.bpi-linear-progress--danger .bpi-linear-progress__bar{background-color:#dc2626}.bpi-linear-progress--warning .bpi-linear-progress__bar{background-color:#d97706}.bpi-linear-progress--info .bpi-linear-progress__bar{background-color:#0284c7}@keyframes bpi-linear-progress-indeterminate{0%{transform:translateX(-100%)}50%{transform:translateX(100%)}100%{transform:translateX(100%)}}`;
  var LinearProgress = class extends HTMLElement {
    static get observedAttributes() {
      return ["value", "variant", "color"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const value = parseFloat(this.getAttribute("value")) || 0;
      const variant = this.getAttribute("variant") || "determinate";
      const color = this.getAttribute("color") || "primary";
      const classes = [
        "bpi-linear-progress",
        `bpi-linear-progress--${variant}`,
        `bpi-linear-progress--${color}`
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${LINEARPROGRESS_CSS}</style>
      <div class="${classes}">
        <div class="bpi-linear-progress__bar" style="width: ${Math.max(0, Math.min(100, value))}%;"></div>
      </div>
    `;
    }
  };
  customElements.define("bpi-linear-progress", LinearProgress);

  // .tmp/Avatar.js
  var AVATAR_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-avatar{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-weight:600;background-color:#fca5a5;color:#b91c1c;border-radius:9999px;overflow:hidden}.bpi-avatar--sm{width:32px;height:32px;font-size:.75rem}.bpi-avatar--md{width:40px;height:40px;font-size:.875rem}.bpi-avatar--lg{width:56px;height:56px;font-size:1rem}.bpi-avatar--xl{width:72px;height:72px;font-size:1.125rem}.bpi-avatar__img{width:100%;height:100%;object-fit:cover}.bpi-avatar__initials{display:block;text-align:center}.bpi-avatar__icon{width:60%;height:60%}`;
  var Avatar = class extends HTMLElement {
    static get observedAttributes() {
      return ["src", "alt", "size", "initials"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const src = this.getAttribute("src");
      const alt = this.getAttribute("alt") || "Avatar";
      const size = this.getAttribute("size") || "md";
      const initials = this.getAttribute("initials") || "";
      const classes = ["bpi-avatar", `bpi-avatar--${size}`].filter(Boolean).join(" ");
      let content = "";
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
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-avatar", Avatar);

  // .tmp/Chip.js
  var CHIP_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-chip{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:9999px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;font-weight:500;white-space:nowrap;border:1px solid rgba(0,0,0,0);transition:all 150ms ease}.bpi-chip--sm{padding:2px 8px;font-size:.75rem}.bpi-chip--md{padding:8px 12px;font-size:.875rem}.bpi-chip__content{flex:1}.bpi-chip__delete{background:none;border:none;font-size:1.2rem;cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;opacity:.7;transition:opacity 150ms ease}.bpi-chip__delete:hover{opacity:1}.bpi-chip__delete:focus{outline:2px solid rgba(227,35,33,.5);outline-offset:2px}.bpi-chip--filled.bpi-chip--default{background-color:#f3f4f6;color:#0f172a}.bpi-chip--filled.bpi-chip--primary{background-color:#e32321;color:#fff}.bpi-chip--filled.bpi-chip--success{background-color:#16a34a;color:#fff}.bpi-chip--filled.bpi-chip--danger{background-color:#dc2626;color:#fff}.bpi-chip--filled.bpi-chip--warning{background-color:#d97706;color:#fff}.bpi-chip--filled.bpi-chip--info{background-color:#0284c7;color:#fff}.bpi-chip--outlined{background-color:rgba(0,0,0,0)}.bpi-chip--outlined.bpi-chip--default{border-color:#e5e7eb;color:#0f172a}.bpi-chip--outlined.bpi-chip--primary{border-color:#e32321;color:#e32321}.bpi-chip--outlined.bpi-chip--success{border-color:#16a34a;color:#16a34a}.bpi-chip--outlined.bpi-chip--danger{border-color:#dc2626;color:#dc2626}.bpi-chip--outlined.bpi-chip--warning{border-color:#d97706;color:#d97706}.bpi-chip--outlined.bpi-chip--info{border-color:#0284c7;color:#0284c7}`;
  var Chip = class extends HTMLElement {
    static get observedAttributes() {
      return ["variant", "color", "deletable", "size"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const variant = this.getAttribute("variant") || "filled";
      const color = this.getAttribute("color") || "default";
      const deletable = this.hasAttribute("deletable");
      const size = this.getAttribute("size") || "md";
      const classes = [
        "bpi-chip",
        `bpi-chip--${variant}`,
        `bpi-chip--${color}`,
        `bpi-chip--${size}`
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${CHIP_CSS}</style>
      <div class="${classes}">
        <span class="bpi-chip__content"><slot></slot></span>
        ${deletable ? '<button class="bpi-chip__delete" aria-label="Delete chip">&times;</button>' : ""}
      </div>
    `;
      if (deletable) {
        this.shadowRoot.querySelector(".bpi-chip__delete").addEventListener("click", () => {
          this.dispatchEvent(new CustomEvent("bpi-delete", { bubbles: true }));
        });
      }
    }
  };
  customElements.define("bpi-chip", Chip);

  // .tmp/Tooltip.js
  var TOOLTIP_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-tooltip{position:relative;display:inline-block}.bpi-tooltip__trigger{display:inline-block}.bpi-tooltip__content{position:absolute;background-color:#111827;color:#fff;padding:8px 12px;border-radius:4px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;font-weight:400;white-space:nowrap;z-index:1070;pointer-events:none;transition:opacity 150ms ease;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)}.bpi-tooltip--top .bpi-tooltip__content{bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:8px}.bpi-tooltip--bottom .bpi-tooltip__content{top:100%;left:50%;transform:translateX(-50%);margin-top:8px}.bpi-tooltip--left .bpi-tooltip__content{right:100%;top:50%;transform:translateY(-50%);margin-right:8px;white-space:normal;max-width:200px}.bpi-tooltip--right .bpi-tooltip__content{left:100%;top:50%;transform:translateY(-50%);margin-left:8px;white-space:normal;max-width:200px}`;
  var Tooltip = class extends HTMLElement {
    static get observedAttributes() {
      return ["text", "position"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.isVisible = false;
    }
    connectedCallback() {
      this.render();
      this.setupListeners();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    setupListeners() {
      const trigger = this.shadowRoot.querySelector(".bpi-tooltip__trigger");
      if (!trigger) return;
      trigger.addEventListener("mouseenter", () => this.show());
      trigger.addEventListener("mouseleave", () => this.hide());
      trigger.addEventListener("focus", () => this.show());
      trigger.addEventListener("blur", () => this.hide());
    }
    show() {
      if (this.shadowRoot) {
        const tooltip = this.shadowRoot.querySelector(".bpi-tooltip__content");
        if (tooltip) {
          tooltip.style.opacity = "1";
          tooltip.style.pointerEvents = "auto";
        }
        this.isVisible = true;
      }
    }
    hide() {
      if (this.shadowRoot) {
        const tooltip = this.shadowRoot.querySelector(".bpi-tooltip__content");
        if (tooltip) {
          tooltip.style.opacity = "0";
          tooltip.style.pointerEvents = "none";
        }
        this.isVisible = false;
      }
    }
    render() {
      const text = this.getAttribute("text") || "";
      const position = this.getAttribute("position") || "top";
      const classes = ["bpi-tooltip", `bpi-tooltip--${position}`].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${TOOLTIP_CSS}</style>
      <div class="${classes}">
        <div class="bpi-tooltip__trigger">
          <slot></slot>
        </div>
        <div class="bpi-tooltip__content" style="opacity: 0; pointer-events: none;">
          ${this.escapeHtml(text)}
        </div>
      </div>
    `;
      this.setupListeners();
    }
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-tooltip", Tooltip);

  // .tmp/Divider.js
  var DIVIDER_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-divider{border:none;margin:0;padding:0}.bpi-divider--horizontal{width:100%;height:1px;background-color:#e5e7eb}.bpi-divider--horizontal.bpi-divider--inset{margin-left:16px;margin-right:0}.bpi-divider--horizontal.bpi-divider--middle{margin-left:16px;margin-right:16px}.bpi-divider--vertical{display:inline-block;width:1px;height:100%;vertical-align:middle;background-color:#e5e7eb}.bpi-divider--vertical.bpi-divider--inset{margin-top:16px;margin-bottom:0}.bpi-divider--vertical.bpi-divider--middle{margin-top:16px;margin-bottom:16px}`;
  var Divider = class extends HTMLElement {
    static get observedAttributes() {
      return ["orientation", "variant"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const orientation = this.getAttribute("orientation") || "horizontal";
      const variant = this.getAttribute("variant") || "full";
      const classes = [
        "bpi-divider",
        `bpi-divider--${orientation}`,
        `bpi-divider--${variant}`
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${DIVIDER_CSS}</style>
      <hr class="${classes}" />
    `;
    }
  };
  customElements.define("bpi-divider", Divider);

  // .tmp/Checkbox.js
  var CHECKBOX_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-checkbox{display:inline-flex;align-items:center;gap:8px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;cursor:pointer}.bpi-checkbox__input{position:absolute;opacity:0;cursor:pointer;width:0;height:0}.bpi-checkbox__input:disabled~.bpi-checkbox__label{opacity:.5;cursor:not-allowed}.bpi-checkbox__checkmark{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border:2px solid #e5e7eb;border-radius:4px;background-color:#fff;transition:all 150ms ease;flex-shrink:0}.bpi-checkbox__checkmark::after{content:"";display:none;width:4px;height:8px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}.bpi-checkbox__label{font-size:.875rem;font-weight:400;color:#0f172a;cursor:pointer;user-select:none;margin:0}.bpi-checkbox__input:checked~.bpi-checkbox__checkmark{background-color:#e32321;border-color:#e32321}.bpi-checkbox__input:checked~.bpi-checkbox__checkmark::after{display:block}.bpi-checkbox--indeterminate .bpi-checkbox__checkmark{background-color:#e32321;border-color:#e32321}.bpi-checkbox--indeterminate .bpi-checkbox__checkmark::after{content:"";display:block;width:8px;height:2px;border:none;border-radius:1px;background-color:#fff;transform:none}.bpi-checkbox__input:focus~.bpi-checkbox__checkmark{box-shadow:0 0 0 2px rgba(227,35,33,.5)}.bpi-checkbox__input:disabled~.bpi-checkbox__checkmark{background-color:#f3f4f6;border-color:#e5e7eb;cursor:not-allowed}.bpi-checkbox__input:disabled:checked~.bpi-checkbox__checkmark{background-color:#9ca3af;border-color:#9ca3af}`;
  var Checkbox = class extends HTMLElement {
    static get observedAttributes() {
      return ["checked", "disabled", "label", "indeterminate", "name", "value"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._checked = false;
      this._indeterminate = false;
    }
    connectedCallback() {
      this.render();
      this.setupListeners();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) {
        this.updateInternalState();
        this.render();
      }
    }
    updateInternalState() {
      this._checked = this.hasAttribute("checked");
      this._indeterminate = this.hasAttribute("indeterminate");
    }
    setupListeners() {
      const input = this.shadowRoot.querySelector('input[type="checkbox"]');
      if (!input) return;
      input.addEventListener("change", (e) => {
        this._checked = input.checked;
        if (this._checked) {
          this.setAttribute("checked", "");
          this.removeAttribute("indeterminate");
          this._indeterminate = false;
        } else {
          this.removeAttribute("checked");
        }
        this.dispatchEvent(new CustomEvent("bpi-change", {
          detail: { checked: this._checked },
          bubbles: true
        }));
      });
    }
    render() {
      this.updateInternalState();
      const label = this.getAttribute("label") || "";
      const disabled = this.hasAttribute("disabled");
      const name = this.getAttribute("name") || "";
      const value = this.getAttribute("value") || "on";
      const classes = ["bpi-checkbox", this._indeterminate ? "bpi-checkbox--indeterminate" : ""].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${CHECKBOX_CSS}</style>
      <div class="${classes}">
        <input
          type="checkbox"
          class="bpi-checkbox__input"
          ${this._checked ? "checked" : ""}
          ${this._indeterminate ? "indeterminate" : ""}
          ${disabled ? "disabled" : ""}
          ${name ? `name="${this.escapeHtml(name)}"` : ""}
          value="${this.escapeHtml(value)}"
          aria-label="${this.escapeHtml(label)}"
        />
        <span class="bpi-checkbox__checkmark"></span>
        ${label ? `<label class="bpi-checkbox__label">${this.escapeHtml(label)}</label>` : ""}
      </div>
    `;
      if (this._indeterminate) {
        const input = this.shadowRoot.querySelector('input[type="checkbox"]');
        if (input) input.indeterminate = true;
      }
      this.setupListeners();
    }
    get checked() {
      return this._checked;
    }
    set checked(value) {
      this._checked = value;
      if (value) {
        this.setAttribute("checked", "");
        this.removeAttribute("indeterminate");
      } else {
        this.removeAttribute("checked");
      }
    }
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-checkbox", Checkbox);

  // .tmp/Radio.js
  var RADIO_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-radio{display:inline-flex;align-items:center;gap:8px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;cursor:pointer}.bpi-radio__input{position:absolute;opacity:0;cursor:pointer;width:0;height:0}.bpi-radio__input:disabled~.bpi-radio__label{opacity:.5;cursor:not-allowed}.bpi-radio__circle{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border:2px solid #e5e7eb;border-radius:9999px;background-color:#fff;transition:all 150ms ease;flex-shrink:0;position:relative}.bpi-radio__circle::after{content:"";display:none;width:8px;height:8px;border-radius:9999px;background-color:#fff}.bpi-radio__label{font-size:.875rem;font-weight:400;color:#0f172a;cursor:pointer;user-select:none;margin:0}.bpi-radio__input:checked~.bpi-radio__circle{background-color:#e32321;border-color:#e32321}.bpi-radio__input:checked~.bpi-radio__circle::after{display:block}.bpi-radio__input:focus~.bpi-radio__circle{box-shadow:0 0 0 2px rgba(227,35,33,.5)}.bpi-radio__input:disabled~.bpi-radio__circle{background-color:#f3f4f6;border-color:#e5e7eb;cursor:not-allowed}.bpi-radio__input:disabled:checked~.bpi-radio__circle{background-color:#9ca3af;border-color:#9ca3af}`;
  var Radio = class extends HTMLElement {
    static get observedAttributes() {
      return ["checked", "disabled", "label", "name", "value"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._checked = false;
    }
    connectedCallback() {
      this.render();
      this.setupListeners();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) {
        this.updateInternalState();
        this.render();
      }
    }
    updateInternalState() {
      this._checked = this.hasAttribute("checked");
    }
    setupListeners() {
      const input = this.shadowRoot.querySelector('input[type="radio"]');
      if (!input) return;
      input.addEventListener("change", (e) => {
        this._checked = input.checked;
        if (this._checked) {
          this.setAttribute("checked", "");
        } else {
          this.removeAttribute("checked");
        }
        this.dispatchEvent(new CustomEvent("bpi-change", {
          detail: { checked: this._checked },
          bubbles: true
        }));
      });
    }
    render() {
      this.updateInternalState();
      const label = this.getAttribute("label") || "";
      const disabled = this.hasAttribute("disabled");
      const name = this.getAttribute("name") || "";
      const value = this.getAttribute("value") || "on";
      this.shadowRoot.innerHTML = `
      <style>${RADIO_CSS}</style>
      <div class="bpi-radio">
        <input
          type="radio"
          class="bpi-radio__input"
          ${this._checked ? "checked" : ""}
          ${disabled ? "disabled" : ""}
          ${name ? `name="${this.escapeHtml(name)}"` : ""}
          value="${this.escapeHtml(value)}"
          aria-label="${this.escapeHtml(label)}"
        />
        <span class="bpi-radio__circle"></span>
        ${label ? `<label class="bpi-radio__label">${this.escapeHtml(label)}</label>` : ""}
      </div>
    `;
      this.setupListeners();
    }
    get checked() {
      return this._checked;
    }
    set checked(value) {
      this._checked = value;
      if (value) {
        this.setAttribute("checked", "");
      } else {
        this.removeAttribute("checked");
      }
    }
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-radio", Radio);

  // .tmp/Switch.js
  var SWITCH_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-switch{display:inline-flex;align-items:center;gap:12px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;cursor:pointer}.bpi-switch--sm .bpi-switch__track{width:40px;height:20px}.bpi-switch--sm .bpi-switch__thumb{width:16px;height:16px}.bpi-switch--sm .bpi-switch__input:checked~.bpi-switch__thumb{transform:translateX(20px)}.bpi-switch--md .bpi-switch__track{width:48px;height:24px}.bpi-switch--md .bpi-switch__thumb{width:20px;height:20px}.bpi-switch--md .bpi-switch__input:checked~.bpi-switch__thumb{transform:translateX(24px)}.bpi-switch__input{position:absolute;opacity:0;cursor:pointer;width:0;height:0}.bpi-switch__input:disabled~.bpi-switch__label{opacity:.5;cursor:not-allowed}.bpi-switch__track{position:relative;background-color:#d1d5db;border-radius:9999px;transition:background-color 150ms ease;flex-shrink:0}.bpi-switch__thumb{position:absolute;top:2px;left:2px;background-color:#fff;border-radius:9999px;transition:transform 150ms ease;flex-shrink:0;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)}.bpi-switch__label{font-size:.875rem;font-weight:400;color:#0f172a;cursor:pointer;user-select:none;margin:0}.bpi-switch__input:checked~.bpi-switch__track{background-color:#e32321}.bpi-switch__input:focus~.bpi-switch__track{box-shadow:0 0 0 2px rgba(227,35,33,.5)}.bpi-switch__input:disabled~.bpi-switch__track{background-color:#e5e7eb;cursor:not-allowed}.bpi-switch__input:disabled~.bpi-switch__thumb{background-color:#9ca3af}`;
  var Switch = class extends HTMLElement {
    static get observedAttributes() {
      return ["checked", "disabled", "label", "size", "name"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._checked = false;
    }
    connectedCallback() {
      this.render();
      this.setupListeners();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) {
        this.updateInternalState();
        this.render();
      }
    }
    updateInternalState() {
      this._checked = this.hasAttribute("checked");
    }
    setupListeners() {
      const input = this.shadowRoot.querySelector('input[type="checkbox"]');
      if (!input) return;
      input.addEventListener("change", (e) => {
        this._checked = input.checked;
        if (this._checked) {
          this.setAttribute("checked", "");
        } else {
          this.removeAttribute("checked");
        }
        this.dispatchEvent(new CustomEvent("bpi-change", {
          detail: { checked: this._checked },
          bubbles: true
        }));
      });
    }
    render() {
      this.updateInternalState();
      const label = this.getAttribute("label") || "";
      const disabled = this.hasAttribute("disabled");
      const size = this.getAttribute("size") || "md";
      const name = this.getAttribute("name") || "";
      const classes = ["bpi-switch", `bpi-switch--${size}`].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${SWITCH_CSS}</style>
      <div class="${classes}">
        <input
          type="checkbox"
          class="bpi-switch__input"
          ${this._checked ? "checked" : ""}
          ${disabled ? "disabled" : ""}
          ${name ? `name="${this.escapeHtml(name)}"` : ""}
          aria-label="${this.escapeHtml(label)}"
        />
        <span class="bpi-switch__track"></span>
        <span class="bpi-switch__thumb"></span>
        ${label ? `<label class="bpi-switch__label">${this.escapeHtml(label)}</label>` : ""}
      </div>
    `;
      this.setupListeners();
    }
    get checked() {
      return this._checked;
    }
    set checked(value) {
      this._checked = value;
      if (value) {
        this.setAttribute("checked", "");
      } else {
        this.removeAttribute("checked");
      }
    }
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-switch", Switch);

  // .tmp/Slider.js
  var SLIDER_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-slider{display:flex;flex-direction:column;gap:8px;width:100%;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-slider__label{font-size:.875rem;font-weight:500;color:#0f172a;user-select:none}.bpi-slider__wrapper{display:flex;align-items:center;gap:12px;width:100%}.bpi-slider__input{flex:1;-webkit-appearance:none;appearance:none;width:100%;height:4px;border-radius:9999px;background:linear-gradient(to right, #E32321 0%, #E32321 50%, #E5E7EB 50%, #E5E7EB 100%);outline:none;cursor:pointer;transition:background 150ms ease}.bpi-slider__input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:9999px;background-color:#fff;border:2px solid #e32321;cursor:pointer;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);transition:all 150ms ease}.bpi-slider__input::-webkit-slider-thumb:hover{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);transform:scale(1.1)}.bpi-slider__input::-webkit-slider-thumb:focus{box-shadow:0 0 0 2px rgba(227,35,33,.5)}.bpi-slider__input::-moz-range-thumb{width:20px;height:20px;border-radius:9999px;background-color:#fff;border:2px solid #e32321;cursor:pointer;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);transition:all 150ms ease}.bpi-slider__input::-moz-range-thumb:hover{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);transform:scale(1.1)}.bpi-slider__input::-moz-range-thumb:focus{box-shadow:0 0 0 2px rgba(227,35,33,.5)}.bpi-slider__input::-webkit-slider-runnable-track{background:rgba(0,0,0,0);border:none}.bpi-slider__input::-moz-range-track{background:rgba(0,0,0,0);border:none}.bpi-slider__input:disabled{cursor:not-allowed;opacity:.5}.bpi-slider__input:disabled::-webkit-slider-thumb,.bpi-slider__input:disabled::-moz-range-thumb{cursor:not-allowed}.bpi-slider__value{min-width:40px;text-align:right;font-size:.875rem;font-weight:500;color:#64748b}.bpi-slider--disabled{opacity:.5;cursor:not-allowed}`;
  var Slider = class extends HTMLElement {
    static get observedAttributes() {
      return ["min", "max", "value", "step", "disabled", "label"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
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
      input.addEventListener("input", (e) => {
        this.setAttribute("value", e.target.value);
        this.updateTrackBackground();
        this.dispatchEvent(new CustomEvent("bpi-input", {
          detail: { value: parseFloat(e.target.value) },
          bubbles: true
        }));
      });
      input.addEventListener("change", (e) => {
        this.dispatchEvent(new CustomEvent("bpi-change", {
          detail: { value: parseFloat(e.target.value) },
          bubbles: true
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
      const percent = (value - min) / (max - min) * 100;
      input.style.background = `linear-gradient(to right, var(--track-color) 0%, var(--track-color) ${percent}%, var(--bg-color) ${percent}%, var(--bg-color) 100%)`;
    }
    render() {
      const min = this.getAttribute("min") || "0";
      const max = this.getAttribute("max") || "100";
      const value = this.getAttribute("value") || "50";
      const step = this.getAttribute("step") || "1";
      const disabled = this.hasAttribute("disabled");
      const label = this.getAttribute("label") || "";
      const classes = ["bpi-slider", disabled ? "bpi-slider--disabled" : ""].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${SLIDER_CSS}</style>
      <div class="${classes}">
        ${label ? `<label class="bpi-slider__label">${this.escapeHtml(label)}</label>` : ""}
        <div class="bpi-slider__wrapper">
          <input
            type="range"
            class="bpi-slider__input"
            min="${this.escapeHtml(min)}"
            max="${this.escapeHtml(max)}"
            value="${this.escapeHtml(value)}"
            step="${this.escapeHtml(step)}"
            ${disabled ? "disabled" : ""}
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
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-slider", Slider);

  // .tmp/Table.js
  var TABLE_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-table-wrap{width:100%;overflow-x:auto;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;border-radius:8px}.bpi-table-wrap--sm .bpi-table{font-size:.75rem}.bpi-table-wrap--sm .bpi-table th,.bpi-table-wrap--sm .bpi-table td{padding:6px 12px}.bpi-table-wrap--md .bpi-table{font-size:.875rem}.bpi-table-wrap--md .bpi-table th,.bpi-table-wrap--md .bpi-table td{padding:12px 16px}.bpi-table-wrap--lg .bpi-table{font-size:1rem}.bpi-table-wrap--lg .bpi-table th,.bpi-table-wrap--lg .bpi-table td{padding:16px 20px}.bpi-table-wrap--striped .bpi-table tbody tr:nth-child(odd){background-color:#f9fafb}.bpi-table-wrap--hover .bpi-table tbody tr{transition:background-color 150ms ease}.bpi-table-wrap--hover .bpi-table tbody tr:hover{background-color:#f3f4f6}.bpi-table-wrap--bordered{border:1px solid #e5e7eb;border-radius:8px;overflow:hidden}.bpi-table-wrap--bordered .bpi-table th,.bpi-table-wrap--bordered .bpi-table td{border:1px solid #e5e7eb}.bpi-table-wrap--sticky{max-height:400px;overflow-y:auto}.bpi-table-wrap--sticky .bpi-table thead{position:sticky;top:0;z-index:10}.bpi-table{width:100%;border-collapse:collapse;background-color:#fff}.bpi-table thead{background-color:#f9fafb}.bpi-table th{text-align:left;vertical-align:middle;font-weight:600;color:#64748b;font-size:.75rem;text-transform:uppercase;letter-spacing:.025em;white-space:nowrap;user-select:none;border-bottom:1px solid #e5e7eb;padding:12px 16px}.bpi-table tbody tr{border-bottom:1px solid #e5e7eb}.bpi-table td{text-align:left;vertical-align:middle;color:#0f172a;border-bottom:1px solid #e5e7eb;padding:12px 16px}`;
  var Table = class extends HTMLElement {
    static get observedAttributes() {
      return ["size", "sticky-header", "striped", "hover", "bordered"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const size = this.getAttribute("size") || "md";
      const stickyHeader = this.hasAttribute("sticky-header");
      const striped = this.hasAttribute("striped");
      const hover = this.hasAttribute("hover");
      const bordered = this.hasAttribute("bordered");
      const classes = [
        "bpi-table-wrap",
        `bpi-table-wrap--${size}`,
        striped ? "bpi-table-wrap--striped" : "",
        hover ? "bpi-table-wrap--hover" : "",
        bordered ? "bpi-table-wrap--bordered" : "",
        stickyHeader ? "bpi-table-wrap--sticky" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${TABLE_CSS}</style>
      <div class="${classes}">
        <table class="bpi-table">
          <slot></slot>
        </table>
      </div>
    `;
    }
  };
  customElements.define("bpi-table", Table);

  // .tmp/TableHead.js
  var TABLEHEAD_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-thead{display:table-header-group;background-color:#f9fafb}`;
  var TableHead = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    render() {
      this.shadowRoot.innerHTML = `
      <style>${TABLEHEAD_CSS}</style>
      <thead class="bpi-thead"><slot></slot></thead>
    `;
    }
  };
  customElements.define("bpi-table-head", TableHead);

  // .tmp/TableBody.js
  var TABLEBODY_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-tbody{display:table-row-group}`;
  var TableBody = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    render() {
      this.shadowRoot.innerHTML = `
      <style>${TABLEBODY_CSS}</style>
      <tbody class="bpi-tbody"><slot></slot></tbody>
    `;
    }
  };
  customElements.define("bpi-table-body", TableBody);

  // .tmp/TableRow.js
  var TABLEROW_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-tr{display:table-row;transition:background-color 150ms ease}.bpi-tr:hover{background-color:#f9fafb}.bpi-tr--selected{background-color:#fca5a5}.bpi-tr--selected:hover{background-color:#fca5a5}`;
  var TableRow = class extends HTMLElement {
    static get observedAttributes() {
      return ["selected", "hover"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const selected = this.hasAttribute("selected");
      const classes = [
        "bpi-tr",
        selected ? "bpi-tr--selected" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${TABLEROW_CSS}</style>
      <tr class="${classes}"><slot></slot></tr>
    `;
    }
  };
  customElements.define("bpi-table-row", TableRow);

  // .tmp/TableCell.js
  var TABLECELL_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-th,.bpi-td{display:table-cell;padding:12px 16px;border-bottom:1px solid #e5e7eb;text-align:left;vertical-align:middle}.bpi-th{font-weight:600;color:#64748b;font-size:.75rem;text-transform:uppercase;letter-spacing:.025em;white-space:nowrap;user-select:none;background-color:#f9fafb}.bpi-td{color:#0f172a;font-size:.875rem}.bpi-cell--align-center{text-align:center}.bpi-cell--align-right{text-align:right}.bpi-cell--align-left{text-align:left}.bpi-cell--padding-checkbox{width:48px;padding:0 0 0 4px}.bpi-cell--padding-normal{padding:12px 16px}.bpi-cell--padding-none{padding:0}.bpi-cell--sortable{cursor:pointer;transition:color 150ms ease;user-select:none}.bpi-cell--sortable:hover{color:#e32321}.bpi-cell__sort-icon{margin-left:4px;font-size:.75rem;opacity:.5;display:inline-block}.bpi-cell--sorted-asc .bpi-cell__sort-icon,.bpi-cell--sorted-desc .bpi-cell__sort-icon{opacity:1;color:#e32321}`;
  var TableCell = class extends HTMLElement {
    static get observedAttributes() {
      return ["variant", "align", "padding", "sortable", "sort-direction"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
      this.setupSortListener();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    setupSortListener() {
      const tag = this.getAttribute("variant") === "head" ? "th" : "td";
      const element = this.shadowRoot.querySelector(tag);
      if (this.hasAttribute("sortable") && element) {
        element.addEventListener("click", () => {
          const currentDir = this.getAttribute("sort-direction");
          const newDir = currentDir === "asc" ? "desc" : "asc";
          this.dispatchEvent(
            new CustomEvent("bpi-sort", {
              bubbles: true,
              composed: true,
              detail: { direction: newDir }
            })
          );
        });
      }
    }
    render() {
      const variant = this.getAttribute("variant") || "body";
      const align = this.getAttribute("align") || "left";
      const padding = this.getAttribute("padding") || "normal";
      const sortable = this.hasAttribute("sortable");
      const sortDir = this.getAttribute("sort-direction");
      const tag = variant === "head" ? "th" : "td";
      const classes = [
        `bpi-${tag}`,
        `bpi-cell--align-${align}`,
        `bpi-cell--padding-${padding}`,
        sortable ? "bpi-cell--sortable" : "",
        sortDir && sortDir !== "none" ? `bpi-cell--sorted-${sortDir}` : ""
      ].filter(Boolean).join(" ");
      let sortIcon = "";
      if (sortable) {
        if (sortDir === "asc") {
          sortIcon = ' <span class="bpi-cell__sort-icon">\u2191</span>';
        } else if (sortDir === "desc") {
          sortIcon = ' <span class="bpi-cell__sort-icon">\u2193</span>';
        } else {
          sortIcon = ' <span class="bpi-cell__sort-icon" style="opacity: 0.3;">\u2195</span>';
        }
      }
      this.shadowRoot.innerHTML = `
      <style>${TABLECELL_CSS}</style>
      <${tag} class="${classes}"><slot></slot>${sortIcon}</${tag}>
    `;
      this.setupSortListener();
    }
  };
  customElements.define("bpi-table-cell", TableCell);

  // .tmp/FormField.js
  var FORMFIELD_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-form-field{display:block;margin-bottom:16px}.bpi-form-field__label{display:block;margin-bottom:4px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;font-weight:500;color:#0f172a}.bpi-form-field__required{color:#dc2626;margin-left:2px}.bpi-form-field__control{display:block;width:100%}.bpi-form-field__hint{display:block;margin-top:4px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.75rem;color:#94a3b8}.bpi-form-field__error{display:block;margin-top:4px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.75rem;color:#dc2626}`;
  var FormField = class extends HTMLElement {
    static get observedAttributes() {
      return ["label", "required", "error", "hint"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const label = this.getAttribute("label") || "";
      const required = this.hasAttribute("required");
      const error = this.getAttribute("error");
      const hint = this.getAttribute("hint");
      this.shadowRoot.innerHTML = `
      <style>${FORMFIELD_CSS}</style>
      <div class="bpi-form-field">
        ${label ? `
          <label class="bpi-form-field__label">
            ${label}${required ? '<span class="bpi-form-field__required">*</span>' : ""}
          </label>
        ` : ""}
        <div class="bpi-form-field__control">
          <slot></slot>
        </div>
        ${error ? `<span class="bpi-form-field__error">${error}</span>` : ""}
        ${hint && !error ? `<span class="bpi-form-field__hint">${hint}</span>` : ""}
      </div>
    `;
    }
  };
  customElements.define("bpi-form-field", FormField);

  // .tmp/SearchBar.js
  var SEARCHBAR_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-search-bar{display:flex;align-items:center;gap:8px;width:100%;padding:8px 12px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background-color:#fff;border:1px solid #e5e7eb;border-radius:6px;transition:border-color 150ms ease,box-shadow 150ms ease}.bpi-search-bar:focus-within{border-color:#e32321;box-shadow:0 0 0 2px rgba(227,35,33,.5)}.bpi-search-bar__icon{display:flex;align-items:center;color:#94a3b8;flex-shrink:0}.bpi-search-bar__icon svg{width:16px;height:16px}.bpi-search-bar__input{flex:1;border:none;outline:none;background:rgba(0,0,0,0);font-family:inherit;font-size:.875rem;color:#0f172a;padding:0}.bpi-search-bar__input::placeholder{color:#94a3b8}.bpi-search-bar__clear{display:flex;align-items:center;justify-content:center;padding:0;border:none;background:rgba(0,0,0,0);cursor:pointer;color:#94a3b8;border-radius:4px;transition:color 150ms ease}.bpi-search-bar__clear:hover{color:#0f172a}.bpi-search-bar__clear svg{width:14px;height:14px}`;
  var SEARCH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`;
  var CLEAR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
  var SearchBar = class extends HTMLElement {
    static get observedAttributes() {
      return ["placeholder", "value"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    get value() {
      const input = this.shadowRoot?.querySelector("input");
      return input ? input.value : this.getAttribute("value") || "";
    }
    set value(val) {
      const input = this.shadowRoot?.querySelector("input");
      if (input) input.value = val;
    }
    render() {
      const placeholder = this.getAttribute("placeholder") || "Search...";
      const value = this.getAttribute("value") || "";
      this.shadowRoot.innerHTML = `
      <style>${SEARCHBAR_CSS}</style>
      <div class="bpi-search-bar">
        <span class="bpi-search-bar__icon">${SEARCH_SVG}</span>
        <input class="bpi-search-bar__input" type="text" placeholder="${placeholder}" value="${value}" />
        <button class="bpi-search-bar__clear" style="display:none" aria-label="Clear">${CLEAR_SVG}</button>
      </div>
    `;
      const input = this.shadowRoot.querySelector("input");
      const clearBtn = this.shadowRoot.querySelector(".bpi-search-bar__clear");
      const toggleClear = () => {
        clearBtn.style.display = input.value ? "flex" : "none";
      };
      input.addEventListener("input", (e) => {
        toggleClear();
        this.dispatchEvent(new CustomEvent("bpi-input", {
          bubbles: true,
          composed: true,
          detail: { value: e.target.value }
        }));
      });
      clearBtn.addEventListener("click", () => {
        input.value = "";
        toggleClear();
        input.focus();
        this.dispatchEvent(new CustomEvent("bpi-input", {
          bubbles: true,
          composed: true,
          detail: { value: "" }
        }));
      });
      toggleClear();
    }
  };
  customElements.define("bpi-search-bar", SearchBar);

  // .tmp/Card.js
  var CARD_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-card{display:block;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background-color:var(--bpi-surface-card, var(--bpi-bg-primary));border:1px solid var(--bpi-border-default);border-radius:8px;overflow:hidden}.bpi-card--elevated{border:none;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)}.bpi-card--flat{border:1px solid var(--bpi-border-default);box-shadow:none}.bpi-card__header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--bpi-border-default)}.bpi-card__title{font-size:1.125rem;font-weight:600;color:var(--bpi-text-primary);margin:0}.bpi-card__header-action{display:flex;align-items:center;gap:8px}.bpi-card__body{padding:20px}.bpi-card__footer{display:flex;align-items:center;justify-content:flex-end;gap:8px;padding:12px 20px;border-top:1px solid var(--bpi-border-default);background-color:var(--bpi-bg-secondary)}`;
  var Card = class extends HTMLElement {
    static get observedAttributes() {
      return ["title", "variant"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const title = this.getAttribute("title");
      const variant = this.getAttribute("variant") || "flat";
      const classes = [
        "bpi-card",
        `bpi-card--${variant}`
      ].join(" ");
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
        ` : ""}
        <div class="bpi-card__body">
          <slot></slot>
        </div>
        <div class="bpi-card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
      const footerSlot = this.shadowRoot.querySelector('slot[name="footer"]');
      const footerDiv = this.shadowRoot.querySelector(".bpi-card__footer");
      footerSlot.addEventListener("slotchange", () => {
        const assigned2 = footerSlot.assignedNodes();
        footerDiv.style.display = assigned2.length ? "flex" : "none";
      });
      const assigned = footerSlot.assignedNodes();
      footerDiv.style.display = assigned.length ? "flex" : "none";
    }
  };
  customElements.define("bpi-card", Card);

  // .tmp/Dialog.js
  var DIALOG_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-dialog{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:1050}.bpi-dialog--open{pointer-events:auto}.bpi-dialog--open .bpi-dialog__backdrop{opacity:1}.bpi-dialog--open .bpi-dialog__content{opacity:1;transform:scale(1)}.bpi-dialog__backdrop{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);opacity:0;transition:opacity 250ms ease;z-index:1040}.bpi-dialog__content{position:relative;background-color:var(--bpi-surface-card, var(--bpi-bg-primary));border-radius:8px;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);display:flex;flex-direction:column;max-height:90vh;opacity:0;transform:scale(0.95);transition:all 250ms ease;z-index:1050;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-dialog--sm .bpi-dialog__content{width:90%;max-width:400px}.bpi-dialog--md .bpi-dialog__content{width:90%;max-width:600px}.bpi-dialog--lg .bpi-dialog__content{width:90%;max-width:800px}.bpi-dialog__header{display:flex;align-items:center;justify-content:space-between;padding:24px;border-bottom:1px solid var(--bpi-border-default);flex-shrink:0}.bpi-dialog__title{margin:0;font-size:1.25rem;font-weight:600;color:var(--bpi-text-primary)}.bpi-dialog__close{background:none;border:none;font-size:1.5rem;cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;width:32px;height:32px;color:var(--bpi-text-secondary);transition:color 150ms ease}.bpi-dialog__close:hover{color:var(--bpi-text-primary)}.bpi-dialog__close:focus{outline:2px solid rgba(227,35,33,.5);outline-offset:2px}.bpi-dialog__body{flex:1;padding:24px;overflow-y:auto;color:var(--bpi-text-primary);font-size:.875rem;line-height:1.5}.bpi-dialog__footer{padding:24px;border-top:1px solid var(--bpi-border-default);flex-shrink:0;display:flex;gap:12px;justify-content:flex-end}`;
  var Dialog = class extends HTMLElement {
    static get observedAttributes() {
      return ["open", "title", "size", "closable"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
      this.setupListeners();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    setupListeners() {
      const backdrop = this.shadowRoot.querySelector(".bpi-dialog__backdrop");
      const closeBtn = this.shadowRoot.querySelector(".bpi-dialog__close");
      if (backdrop) {
        backdrop.addEventListener("click", () => {
          this.close();
        });
      }
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          this.close();
        });
      }
      const handleEscape = (e) => {
        if (e.key === "Escape" && this.hasAttribute("open")) {
          this.close();
        }
      };
      if (this.hasAttribute("open")) {
        document.addEventListener("keydown", handleEscape);
        this._escapeHandler = handleEscape;
      }
    }
    close() {
      this.removeAttribute("open");
      if (this._escapeHandler) {
        document.removeEventListener("keydown", this._escapeHandler);
      }
      this.dispatchEvent(new CustomEvent("bpi-close", { bubbles: true }));
    }
    render() {
      const open = this.hasAttribute("open");
      const title = this.getAttribute("title") || "";
      const size = this.getAttribute("size") || "md";
      const closable = this.hasAttribute("closable");
      const classes = [
        "bpi-dialog",
        `bpi-dialog--${size}`,
        open ? "bpi-dialog--open" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${DIALOG_CSS}</style>
      <div class="${classes}">
        <div class="bpi-dialog__backdrop"></div>
        <div class="bpi-dialog__content">
          ${title || closable ? `<div class="bpi-dialog__header">
            ${title ? `<h2 class="bpi-dialog__title">${this.escapeHtml(title)}</h2>` : ""}
            ${closable ? '<button class="bpi-dialog__close" aria-label="Close dialog">&times;</button>' : ""}
          </div>` : ""}
          <div class="bpi-dialog__body">
            <slot></slot>
          </div>
          <div class="bpi-dialog__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
      this.setupListeners();
    }
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-dialog", Dialog);

  // .tmp/Snackbar.js
  var SNACKBAR_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-snackbar{position:fixed;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 24px;background-color:#111827;color:#fff;border-radius:6px;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);z-index:1080;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;max-width:90%;opacity:0;transform:translateY(20px);transition:all 250ms ease;pointer-events:none}.bpi-snackbar--open{opacity:1;transform:translateY(0);pointer-events:auto}.bpi-snackbar--bottom{bottom:24px;left:24px;right:auto}.bpi-snackbar--top{top:24px;left:24px;right:auto;transform:translateY(-20px)}.bpi-snackbar--top.bpi-snackbar--open{transform:translateY(0)}.bpi-snackbar__content{display:flex;align-items:center;gap:12px;flex:1}.bpi-snackbar__message{line-height:1.5}.bpi-snackbar__close{background:none;border:none;color:inherit;font-size:1.5rem;cursor:pointer;padding:0;display:flex;align-items:center;justify-content:center;width:24px;height:24px;opacity:.7;transition:opacity 150ms ease;flex-shrink:0}.bpi-snackbar__close:hover{opacity:1}.bpi-snackbar__close:focus{outline:2px solid hsla(0,0%,100%,.5);outline-offset:2px}.bpi-snackbar--success{background-color:#16a34a}.bpi-snackbar--error{background-color:#dc2626}.bpi-snackbar--warning{background-color:#d97706}.bpi-snackbar--info{background-color:#0284c7}`;
  var Snackbar = class extends HTMLElement {
    static get observedAttributes() {
      return ["open", "message", "variant", "duration", "position"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._timeoutId = null;
    }
    connectedCallback() {
      this.render();
      this.scheduleAutoClose();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) {
        this.render();
        this.scheduleAutoClose();
      }
    }
    scheduleAutoClose() {
      const open = this.hasAttribute("open");
      const duration = parseInt(this.getAttribute("duration")) || 5e3;
      if (this._timeoutId) {
        clearTimeout(this._timeoutId);
      }
      if (open && duration > 0) {
        this._timeoutId = setTimeout(() => {
          this.close();
        }, duration);
      }
    }
    close() {
      this.removeAttribute("open");
      if (this._timeoutId) {
        clearTimeout(this._timeoutId);
      }
      this.dispatchEvent(new CustomEvent("bpi-close", { bubbles: true }));
    }
    render() {
      const open = this.hasAttribute("open");
      const message = this.getAttribute("message") || "";
      const variant = this.getAttribute("variant") || "info";
      const position = this.getAttribute("position") || "bottom";
      const classes = [
        "bpi-snackbar",
        `bpi-snackbar--${variant}`,
        `bpi-snackbar--${position}`,
        open ? "bpi-snackbar--open" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${SNACKBAR_CSS}</style>
      <div class="${classes}">
        <div class="bpi-snackbar__content">
          <span class="bpi-snackbar__message">${this.escapeHtml(message)}</span>
          <slot></slot>
        </div>
        <button class="bpi-snackbar__close" aria-label="Close snackbar">&times;</button>
      </div>
    `;
      const closeBtn = this.shadowRoot.querySelector(".bpi-snackbar__close");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => this.close());
      }
    }
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-snackbar", Snackbar);

  // .tmp/Tabs.js
  var TABS_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-tabs{display:flex;flex-direction:column;width:100%;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-tabs__list{display:flex;gap:0;border-bottom:1px solid #e5e7eb}.bpi-tabs__tab{padding:16px 24px;background-color:rgba(0,0,0,0);border:none;cursor:pointer;font-size:.875rem;font-weight:500;color:#64748b;border-bottom:2px solid rgba(0,0,0,0);margin-bottom:-1px;transition:all 150ms ease;position:relative}.bpi-tabs__tab:hover:not(:disabled){color:#0f172a;background-color:#f9fafb}.bpi-tabs__tab--active{color:#e32321;border-bottom-color:#e32321}.bpi-tabs__tab:disabled{color:#94a3b8;cursor:not-allowed}.bpi-tabs__tab:focus{outline:2px solid rgba(227,35,33,.5);outline-offset:2px}.bpi-tabs__content{padding:24px 0}.bpi-tabs__panel{display:none;animation:bpi-tabs-fade-in 150ms ease}.bpi-tabs__panel--active{display:block}@keyframes bpi-tabs-fade-in{from{opacity:0}to{opacity:1}}`;
  var Tabs = class extends HTMLElement {
    static get observedAttributes() {
      return ["active-tab"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
      this.setupListeners();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    setupListeners() {
      const tabs = this.querySelectorAll("bpi-tab");
      tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          const value = tab.getAttribute("value") || index;
          this.setAttribute("active-tab", value);
          this.dispatchEvent(new CustomEvent("bpi-tab-change", {
            detail: { activeTab: value },
            bubbles: true
          }));
        });
      });
    }
    render() {
      const activeTab = this.getAttribute("active-tab") || "0";
      const tabs = this.querySelectorAll("bpi-tab");
      const tabLabels = Array.from(tabs).map((tab, index) => {
        const label = tab.getAttribute("label") || `Tab ${index + 1}`;
        const value = tab.getAttribute("value") || index;
        const disabled = tab.hasAttribute("disabled");
        const isActive = String(value) === String(activeTab);
        return `
          <button
            class="bpi-tabs__tab ${isActive ? "bpi-tabs__tab--active" : ""}"
            data-value="${this.escapeHtml(value)}"
            ${disabled ? "disabled" : ""}
            aria-selected="${isActive}"
          >
            ${this.escapeHtml(label)}
          </button>
        `;
      }).join("");
      const tabContent = Array.from(tabs).map((tab, index) => {
        const value = tab.getAttribute("value") || index;
        const isActive = String(value) === String(activeTab);
        return `
          <div
            class="bpi-tabs__panel ${isActive ? "bpi-tabs__panel--active" : ""}"
            role="tabpanel"
            aria-labelledby="tab-${value}"
          >
            ${tab.innerHTML}
          </div>
        `;
      }).join("");
      this.shadowRoot.innerHTML = `
      <style>${TABS_CSS}</style>
      <div class="bpi-tabs">
        <div class="bpi-tabs__list" role="tablist">
          ${tabLabels}
        </div>
        <div class="bpi-tabs__content">
          ${tabContent}
        </div>
      </div>
    `;
      this.shadowRoot.querySelectorAll(".bpi-tabs__tab").forEach((btn, index) => {
        btn.addEventListener("click", () => {
          const value = btn.getAttribute("data-value");
          this.setAttribute("active-tab", value);
          this.dispatchEvent(new CustomEvent("bpi-tab-change", {
            detail: { activeTab: value },
            bubbles: true
          }));
        });
      });
    }
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-tabs", Tabs);

  // .tmp/Tab.js
  var TAB_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-tab{display:contents}`;
  var Tab = class extends HTMLElement {
    static get observedAttributes() {
      return ["label", "value", "disabled"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      this.shadowRoot.innerHTML = `
      <style>${TAB_CSS}</style>
      <div class="bpi-tab">
        <slot></slot>
      </div>
    `;
    }
  };
  customElements.define("bpi-tab", Tab);

  // .tmp/Breadcrumbs.js
  var BREADCRUMBS_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-breadcrumbs{font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem}.bpi-breadcrumbs__list{display:flex;flex-wrap:wrap;align-items:center;gap:8px;list-style:none;margin:0;padding:0}.bpi-breadcrumbs__separator{color:#94a3b8;margin:0 4px}::slotted(a),::slotted([role=listitem]){color:#e32321;text-decoration:none;cursor:pointer;transition:color 150ms ease}::slotted(a):hover,::slotted([role=listitem]):hover{color:#b91c1c;text-decoration:underline}::slotted(a):focus,::slotted([role=listitem]):focus{outline:2px solid rgba(227,35,33,.5);outline-offset:2px;border-radius:4px}::slotted([aria-current=page]){color:#0f172a;font-weight:500;cursor:default}::slotted([aria-current=page]):hover{text-decoration:none}`;
  var Breadcrumbs = class extends HTMLElement {
    static get observedAttributes() {
      return ["separator"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const separator = this.getAttribute("separator") || "/";
      this.shadowRoot.innerHTML = `
      <style>${BREADCRUMBS_CSS}</style>
      <nav class="bpi-breadcrumbs" aria-label="Breadcrumbs">
        <ol class="bpi-breadcrumbs__list">
          <slot></slot>
        </ol>
      </nav>
    `;
      this.shadowRoot.querySelectorAll(".bpi-breadcrumbs__list").forEach((list) => {
        const items = this.querySelectorAll('[role="listitem"]');
        items.forEach((item, index) => {
          if (index < items.length - 1) {
            const sepElement = document.createElement("span");
            sepElement.className = "bpi-breadcrumbs__separator";
            sepElement.textContent = separator;
            sepElement.setAttribute("aria-hidden", "true");
            item.after(sepElement);
          }
        });
      });
    }
  };
  customElements.define("bpi-breadcrumbs", Breadcrumbs);

  // .tmp/Pagination.js
  var PAGINATION_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-pagination{display:flex;align-items:center;gap:8px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-pagination__pages{display:flex;gap:4px;align-items:center}.bpi-pagination__button{min-width:40px;height:40px;padding:8px 12px;background-color:#fff;border:1px solid #e5e7eb;border-radius:6px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;font-weight:500;color:#0f172a;cursor:pointer;transition:all 150ms ease}.bpi-pagination__button:hover:not(:disabled):not(.bpi-pagination__button--active){border-color:#e32321;color:#e32321;background-color:#f9fafb}.bpi-pagination__button--active{background-color:#e32321;border-color:#e32321;color:#fff;cursor:default}.bpi-pagination__button:disabled{opacity:.5;cursor:not-allowed}.bpi-pagination__button:focus{outline:2px solid rgba(227,35,33,.5);outline-offset:2px}.bpi-pagination__prev,.bpi-pagination__next{display:flex;align-items:center;justify-content:center}.bpi-pagination__ellipsis{padding:8px;color:#64748b;user-select:none}`;
  var Pagination = class extends HTMLElement {
    static get observedAttributes() {
      return ["total", "page", "page-size"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
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
      const buttons = this.shadowRoot.querySelectorAll(".bpi-pagination__button");
      buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const page = parseInt(btn.getAttribute("data-page"));
          this.setAttribute("page", page);
          this.dispatchEvent(new CustomEvent("bpi-page-change", {
            detail: { page },
            bubbles: true
          }));
        });
      });
    }
    render() {
      const total = parseInt(this.getAttribute("total")) || 0;
      const page = parseInt(this.getAttribute("page")) || 1;
      const pageSize = parseInt(this.getAttribute("page-size")) || 10;
      const totalPages = Math.ceil(total / pageSize);
      const getPaginationItems = () => {
        const items2 = [];
        const maxVisible = 5;
        let startPage = Math.max(1, page - 2);
        let endPage = Math.min(totalPages, page + 2);
        if (endPage - startPage < maxVisible - 1) {
          if (startPage === 1) {
            endPage = Math.min(totalPages, startPage + maxVisible - 1);
          } else {
            startPage = Math.max(1, endPage - maxVisible + 1);
          }
        }
        if (startPage > 1) {
          items2.push({ type: "button", page: 1, label: "1" });
          if (startPage > 2) {
            items2.push({ type: "ellipsis" });
          }
        }
        for (let i = startPage; i <= endPage; i++) {
          items2.push({ type: "button", page: i, label: String(i) });
        }
        if (endPage < totalPages) {
          if (endPage < totalPages - 1) {
            items2.push({ type: "ellipsis" });
          }
          items2.push({ type: "button", page: totalPages, label: String(totalPages) });
        }
        return items2;
      };
      const items = getPaginationItems();
      const itemsHtml = items.map((item) => {
        if (item.type === "ellipsis") {
          return '<span class="bpi-pagination__ellipsis">...</span>';
        }
        const isActive = item.page === page;
        return `
          <button
            class="bpi-pagination__button ${isActive ? "bpi-pagination__button--active" : ""}"
            data-page="${item.page}"
            ${isActive ? 'aria-current="page"' : ""}
            ${item.page < 1 || item.page > totalPages ? "disabled" : ""}
          >
            ${item.label}
          </button>
        `;
      }).join("");
      this.shadowRoot.innerHTML = `
      <style>${PAGINATION_CSS}</style>
      <nav class="bpi-pagination" aria-label="Pagination">
        <button
          class="bpi-pagination__button bpi-pagination__prev"
          data-page="${page - 1}"
          ${page === 1 ? "disabled" : ""}
          aria-label="Previous page"
        >
          &larr;
        </button>
        <div class="bpi-pagination__pages">
          ${itemsHtml}
        </div>
        <button
          class="bpi-pagination__button bpi-pagination__next"
          data-page="${page + 1}"
          ${page === totalPages ? "disabled" : ""}
          aria-label="Next page"
        >
          &rarr;
        </button>
      </nav>
    `;
      this.setupListeners();
    }
  };
  customElements.define("bpi-pagination", Pagination);

  // .tmp/Menu.js
  var MENU_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-menu{position:relative;display:inline-block}.bpi-menu__content{position:absolute;top:100%;left:0;background-color:#fff;border-radius:6px;border:1px solid #e5e7eb;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);min-width:200px;z-index:1000;opacity:0;visibility:hidden;transform:translateY(-10px);transition:all 150ms ease;max-height:400px;overflow-y:auto}.bpi-menu--open .bpi-menu__content{opacity:1;visibility:visible;transform:translateY(0)}`;
  var Menu = class extends HTMLElement {
    static get observedAttributes() {
      return ["open", "trigger"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._triggerElement = null;
    }
    connectedCallback() {
      this.render();
      this.setupListeners();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    setupListeners() {
      const trigger = this.getAttribute("trigger");
      if (trigger) {
        this._triggerElement = this.querySelector(trigger);
        if (this._triggerElement) {
          this._triggerElement.addEventListener("click", () => this.toggleOpen());
        }
      }
      const handleEscape = (e) => {
        if (e.key === "Escape" && this.hasAttribute("open")) {
          this.close();
        }
      };
      document.addEventListener("keydown", handleEscape);
      this._escapeHandler = handleEscape;
      const handleOutsideClick = (e) => {
        if (!this.contains(e.target) && !this._triggerElement?.contains(e.target)) {
          this.close();
        }
      };
      document.addEventListener("click", handleOutsideClick);
      this._clickHandler = handleOutsideClick;
      const items = this.querySelectorAll("bpi-menu-item");
      items.forEach((item) => {
        item.addEventListener("click", () => {
          this.close();
        });
      });
    }
    toggleOpen() {
      if (this.hasAttribute("open")) {
        this.close();
      } else {
        this.open();
      }
    }
    open() {
      this.setAttribute("open", "");
    }
    close() {
      this.removeAttribute("open");
    }
    render() {
      const open = this.hasAttribute("open");
      const classes = ["bpi-menu", open ? "bpi-menu--open" : ""].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${MENU_CSS}</style>
      <div class="${classes}">
        <div class="bpi-menu__content" role="menu">
          <slot></slot>
        </div>
      </div>
    `;
    }
    disconnectedCallback() {
      if (this._escapeHandler) {
        document.removeEventListener("keydown", this._escapeHandler);
      }
      if (this._clickHandler) {
        document.removeEventListener("click", this._clickHandler);
      }
    }
  };
  customElements.define("bpi-menu", Menu);

  // .tmp/MenuItem.js
  var MENUITEM_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-menu-item{display:block;width:100%}.bpi-menu-item__button{display:block;width:100%;padding:12px 16px;background-color:rgba(0,0,0,0);border:none;text-align:left;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;color:#0f172a;cursor:pointer;transition:all 150ms ease}.bpi-menu-item__button:hover:not(:disabled){background-color:#f9fafb;color:#e32321}.bpi-menu-item__button:focus{outline:2px solid rgba(227,35,33,.5);outline-offset:-2px}.bpi-menu-item__button:disabled{color:#94a3b8;cursor:not-allowed;opacity:.5}.bpi-menu-item--disabled .bpi-menu-item__button{cursor:not-allowed;opacity:.5}`;
  var MenuItem = class extends HTMLElement {
    static get observedAttributes() {
      return ["disabled"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
      this.setupListeners();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    setupListeners() {
      const button = this.shadowRoot.querySelector(".bpi-menu-item__button");
      if (button && !this.hasAttribute("disabled")) {
        button.addEventListener("click", () => {
          this.dispatchEvent(new CustomEvent("click", { bubbles: true }));
        });
      }
    }
    render() {
      const disabled = this.hasAttribute("disabled");
      const classes = [
        "bpi-menu-item",
        disabled ? "bpi-menu-item--disabled" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${MENUITEM_CSS}</style>
      <button
        class="bpi-menu-item__button"
        role="menuitem"
        ${disabled ? "disabled" : ""}
      >
        <slot></slot>
      </button>
    `;
      this.setupListeners();
    }
  };
  customElements.define("bpi-menu-item", MenuItem);

  // .tmp/Select.js
  var SELECT_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-select{display:flex;flex-direction:column;gap:8px;width:100%;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-select__label{font-size:.875rem;font-weight:500;color:#0f172a;user-select:none}.bpi-select__wrapper{position:relative}.bpi-select__input{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;padding:12px 16px;background-color:#fff;border:1px solid #e5e7eb;border-radius:6px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;color:#0f172a;cursor:pointer;transition:all 150ms ease}.bpi-select__input:hover:not(:disabled){border-color:#d1d5db}.bpi-select__input:focus{outline:none;border-color:#e32321;box-shadow:0 0 0 2px rgba(30,64,175,.1)}.bpi-select__input--open{border-color:#e32321}.bpi-select__input:disabled{background-color:#f9fafb;color:#94a3b8;cursor:not-allowed;opacity:.5}.bpi-select__value{flex:1;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bpi-select__arrow{flex-shrink:0;color:#64748b;transition:transform 150ms ease}.bpi-select__input--open .bpi-select__arrow{transform:rotate(180deg)}.bpi-select__listbox{position:absolute;top:100%;left:0;right:0;background-color:#fff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 6px 6px;max-height:300px;overflow-y:auto;z-index:1000;opacity:0;visibility:hidden;transition:all 150ms ease}.bpi-select__listbox--open{opacity:1;visibility:visible}.bpi-select__option{padding:12px 16px;cursor:pointer;transition:background-color 150ms ease;font-size:.875rem;color:#0f172a}.bpi-select__option:hover{background-color:#f9fafb}.bpi-select__option--selected{background-color:#fca5a5;color:#b91c1c;font-weight:500}.bpi-select__error{font-size:.75rem;color:#dc2626;margin-top:4px}.bpi-select--outlined .bpi-select__input{background-color:#fff}.bpi-select--filled .bpi-select__input{background-color:#f3f4f6;border:1px solid rgba(0,0,0,0);border-bottom-color:#e5e7eb;border-radius:4px 4px 0 0}.bpi-select--filled .bpi-select__input:hover:not(:disabled){background-color:#f9fafb}.bpi-select--error .bpi-select__input{border-color:#dc2626}.bpi-select--error .bpi-select__input:focus{box-shadow:0 0 0 2px rgba(220,38,38,.1)}.bpi-select--disabled{opacity:.5}`;
  var Select = class extends HTMLElement {
    static get observedAttributes() {
      return ["label", "value", "placeholder", "disabled", "error", "variant"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._isOpen = false;
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
      const select = this.shadowRoot.querySelector(".bpi-select__input");
      const listbox = this.shadowRoot.querySelector(".bpi-select__listbox");
      if (select) {
        select.addEventListener("click", () => this.toggleOpen());
        select.addEventListener("focus", () => {
          if (!this._isOpen) this.open();
        });
      }
      if (listbox) {
        const options = listbox.querySelectorAll('[role="option"]');
        options.forEach((option) => {
          option.addEventListener("click", () => {
            const value = option.getAttribute("data-value");
            this.setAttribute("value", value);
            this.close();
            this.dispatchEvent(new CustomEvent("bpi-change", {
              detail: { value },
              bubbles: true
            }));
          });
        });
      }
      const handleEscape = (e) => {
        if (e.key === "Escape" && this._isOpen) {
          this.close();
        }
      };
      document.addEventListener("keydown", handleEscape);
      this._escapeHandler = handleEscape;
    }
    toggleOpen() {
      if (this._isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
    open() {
      this._isOpen = true;
      const select = this.shadowRoot.querySelector(".bpi-select__input");
      const listbox = this.shadowRoot.querySelector(".bpi-select__listbox");
      if (select) select.classList.add("bpi-select__input--open");
      if (listbox) listbox.classList.add("bpi-select__listbox--open");
    }
    close() {
      this._isOpen = false;
      const select = this.shadowRoot.querySelector(".bpi-select__input");
      const listbox = this.shadowRoot.querySelector(".bpi-select__listbox");
      if (select) select.classList.remove("bpi-select__input--open");
      if (listbox) listbox.classList.remove("bpi-select__listbox--open");
    }
    render() {
      const label = this.getAttribute("label") || "";
      const value = this.getAttribute("value") || "";
      const placeholder = this.getAttribute("placeholder") || "Select option...";
      const disabled = this.hasAttribute("disabled");
      const error = this.getAttribute("error") || "";
      const variant = this.getAttribute("variant") || "outlined";
      const classes = [
        "bpi-select",
        `bpi-select--${variant}`,
        error ? "bpi-select--error" : "",
        disabled ? "bpi-select--disabled" : ""
      ].filter(Boolean).join(" ");
      const options = this.querySelectorAll("option");
      let selectedLabel = placeholder;
      options.forEach((opt) => {
        if (opt.value === value || opt.getAttribute("value") === value) {
          selectedLabel = opt.textContent;
        }
      });
      const optionsHtml = Array.from(options).map((opt) => {
        const optValue = opt.value || opt.getAttribute("value") || "";
        const isSelected = optValue === value;
        return `
          <div
            class="bpi-select__option ${isSelected ? "bpi-select__option--selected" : ""}"
            role="option"
            data-value="${this.escapeHtml(optValue)}"
            aria-selected="${isSelected}"
          >
            ${this.escapeHtml(opt.textContent)}
          </div>
        `;
      }).join("");
      this.shadowRoot.innerHTML = `
      <style>${SELECT_CSS}</style>
      <div class="${classes}">
        ${label ? `<label class="bpi-select__label">${this.escapeHtml(label)}</label>` : ""}
        <div class="bpi-select__wrapper">
          <button
            class="bpi-select__input"
            ${disabled ? "disabled" : ""}
            aria-haspopup="listbox"
            aria-expanded="false"
          >
            <span class="bpi-select__value">${this.escapeHtml(selectedLabel)}</span>
            <svg class="bpi-select__arrow" viewBox="0 0 24 24" width="20" height="20">
              <path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
          </button>
          <div class="bpi-select__listbox" role="listbox">
            ${optionsHtml}
          </div>
        </div>
        ${error ? `<div class="bpi-select__error">${this.escapeHtml(error)}</div>` : ""}
      </div>
    `;
      this.setupListeners();
    }
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
    disconnectedCallback() {
      if (this._escapeHandler) {
        document.removeEventListener("keydown", this._escapeHandler);
      }
    }
  };
  customElements.define("bpi-select", Select);

  // .tmp/Autocomplete.js
  var AUTOCOMPLETE_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-autocomplete{display:flex;flex-direction:column;gap:8px;width:100%;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-autocomplete__label{font-size:.875rem;font-weight:500;color:#0f172a;user-select:none}.bpi-autocomplete__wrapper{position:relative}.bpi-autocomplete__input{width:100%;padding:12px 16px;padding-right:40px;background-color:#fff;border:1px solid #e5e7eb;border-radius:6px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;color:#0f172a;transition:all 150ms ease}.bpi-autocomplete__input:hover:not(:disabled){border-color:#d1d5db}.bpi-autocomplete__input:focus{outline:none;border-color:#e32321;box-shadow:0 0 0 2px rgba(30,64,175,.1)}.bpi-autocomplete__input:disabled{background-color:#f9fafb;color:#94a3b8;cursor:not-allowed;opacity:.5}.bpi-autocomplete__input::placeholder{color:#94a3b8}.bpi-autocomplete__icon{position:absolute;right:12px;top:50%;transform:translateY(-50%);pointer-events:none;color:#64748b}.bpi-autocomplete__listbox{position:absolute;top:100%;left:0;right:0;background-color:#fff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 6px 6px;max-height:300px;overflow-y:auto;z-index:1000;opacity:0;visibility:hidden;transition:all 150ms ease}.bpi-autocomplete__listbox--open{opacity:1;visibility:visible}.bpi-autocomplete__option{padding:12px 16px;cursor:pointer;transition:background-color 150ms ease;font-size:.875rem;color:#0f172a}.bpi-autocomplete__option:hover{background-color:#f9fafb}.bpi-autocomplete__no-results{padding:16px;text-align:center;color:#94a3b8;font-size:.875rem}.bpi-autocomplete--disabled{opacity:.5}`;
  var Autocomplete = class extends HTMLElement {
    static get observedAttributes() {
      return ["label", "options", "value", "placeholder", "disabled"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._options = [];
      this._isOpen = false;
    }
    connectedCallback() {
      this.updateOptions();
      this.render();
      this.setupListeners();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) {
        this.updateOptions();
        this.render();
        this.setupListeners();
      }
    }
    updateOptions() {
      const optionsAttr = this.getAttribute("options");
      if (optionsAttr) {
        try {
          this._options = JSON.parse(optionsAttr);
        } catch (e) {
          this._options = [];
        }
      }
    }
    setupListeners() {
      const input = this.shadowRoot.querySelector(".bpi-autocomplete__input");
      const listbox = this.shadowRoot.querySelector(".bpi-autocomplete__listbox");
      if (input) {
        input.addEventListener("input", (e) => {
          this.setAttribute("value", e.target.value);
          this.filterAndShow(e.target.value);
        });
        input.addEventListener("focus", () => {
          this.open();
        });
        input.addEventListener("blur", () => {
          setTimeout(() => this.close(), 200);
        });
      }
      if (listbox) {
        const items = listbox.querySelectorAll('[role="option"]');
        items.forEach((item) => {
          item.addEventListener("click", () => {
            const value = item.getAttribute("data-value");
            this.setAttribute("value", value);
            if (input) input.value = value;
            this.close();
            this.dispatchEvent(new CustomEvent("bpi-change", {
              detail: { value },
              bubbles: true
            }));
          });
        });
      }
    }
    filterAndShow(query) {
      const listbox = this.shadowRoot.querySelector(".bpi-autocomplete__listbox");
      if (!listbox) return;
      const filtered = this._options.filter(
        (opt) => opt.toLowerCase().includes(query.toLowerCase())
      );
      if (filtered.length > 0) {
        listbox.innerHTML = filtered.map((opt) => `
          <div
            class="bpi-autocomplete__option"
            role="option"
            data-value="${this.escapeHtml(opt)}"
          >
            ${this.escapeHtml(opt)}
          </div>
        `).join("");
        this.open();
      } else {
        listbox.innerHTML = '<div class="bpi-autocomplete__no-results">No results</div>';
      }
    }
    open() {
      this._isOpen = true;
      const listbox = this.shadowRoot.querySelector(".bpi-autocomplete__listbox");
      if (listbox) listbox.classList.add("bpi-autocomplete__listbox--open");
    }
    close() {
      this._isOpen = false;
      const listbox = this.shadowRoot.querySelector(".bpi-autocomplete__listbox");
      if (listbox) listbox.classList.remove("bpi-autocomplete__listbox--open");
    }
    render() {
      const label = this.getAttribute("label") || "";
      const value = this.getAttribute("value") || "";
      const placeholder = this.getAttribute("placeholder") || "Type to search...";
      const disabled = this.hasAttribute("disabled");
      const classes = [
        "bpi-autocomplete",
        disabled ? "bpi-autocomplete--disabled" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${AUTOCOMPLETE_CSS}</style>
      <div class="${classes}">
        ${label ? `<label class="bpi-autocomplete__label">${this.escapeHtml(label)}</label>` : ""}
        <div class="bpi-autocomplete__wrapper">
          <input
            type="text"
            class="bpi-autocomplete__input"
            placeholder="${this.escapeHtml(placeholder)}"
            value="${this.escapeHtml(value)}"
            ${disabled ? "disabled" : ""}
            aria-haspopup="listbox"
            autocomplete="off"
          />
          <svg class="bpi-autocomplete__icon" viewBox="0 0 24 24" width="20" height="20">
            <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M16 16l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <div class="bpi-autocomplete__listbox" role="listbox"></div>
        </div>
      </div>
    `;
      this.setupListeners();
    }
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-autocomplete", Autocomplete);

  // .tmp/List.js
  var LIST_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-list{list-style:none;margin:0;padding:0;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-list--dense ::slotted(bpi-list-item){--item-padding: $bpi-space-2 $bpi-space-4}`;
  var List = class extends HTMLElement {
    static get observedAttributes() {
      return ["dense"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const dense = this.hasAttribute("dense");
      const classes = ["bpi-list", dense ? "bpi-list--dense" : ""].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${LIST_CSS}</style>
      <ul class="${classes}" role="list">
        <slot></slot>
      </ul>
    `;
    }
  };
  customElements.define("bpi-list", List);

  // .tmp/ListItem.js
  var LISTITEM_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-list-item{display:flex;align-items:center;gap:16px;padding:var(--item-padding, 16px);border-bottom:1px solid rgba(0,0,0,0);transition:background-color 150ms ease;cursor:pointer}.bpi-list-item:hover{background-color:#f9fafb}.bpi-list-item:focus{outline:none;background-color:#f9fafb}.bpi-list-item__icon{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:24px;height:24px;color:#64748b}.bpi-list-item__content{flex:1;font-size:.875rem;color:#0f172a;line-height:1.5}.bpi-list-item__content strong{font-weight:600}.bpi-list-item__action{flex-shrink:0;display:flex;align-items:center;justify-content:center}.bpi-list-item--divider{border-bottom-color:#e5e7eb}`;
  var ListItem = class extends HTMLElement {
    static get observedAttributes() {
      return ["divider"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const divider = this.hasAttribute("divider");
      const classes = ["bpi-list-item", divider ? "bpi-list-item--divider" : ""].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${LISTITEM_CSS}</style>
      <li class="${classes}">
        <div class="bpi-list-item__icon">
          <slot name="icon"></slot>
        </div>
        <div class="bpi-list-item__content">
          <slot></slot>
        </div>
        <div class="bpi-list-item__action">
          <slot name="action"></slot>
        </div>
      </li>
    `;
    }
  };
  customElements.define("bpi-list-item", ListItem);

  // .tmp/Accordion.js
  var ACCORDION_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-accordion{border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-accordion__trigger{display:flex;align-items:center;justify-content:space-between;width:100%;padding:16px 24px;background-color:#fff;border:none;cursor:pointer;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;font-weight:500;color:#0f172a;transition:all 150ms ease}.bpi-accordion__trigger:hover{background-color:#f9fafb}.bpi-accordion__trigger:focus{outline:2px solid rgba(227,35,33,.5);outline-offset:-2px}.bpi-accordion__title{flex:1;text-align:left}.bpi-accordion__icon{flex-shrink:0;margin-left:12px;color:#64748b;transition:transform 250ms ease}.bpi-accordion--open .bpi-accordion__trigger{background-color:#f9fafb}.bpi-accordion--open .bpi-accordion__icon{transform:rotate(180deg)}.bpi-accordion__content{max-height:1000px;overflow:hidden;animation:bpi-accordion-expand 250ms ease ease-out}.bpi-accordion__body{padding:16px 24px;border-top:1px solid #e5e7eb;font-size:.875rem;color:#0f172a;line-height:1.5}.bpi-accordion:not(.bpi-accordion--open) .bpi-accordion__content{max-height:0;animation:bpi-accordion-collapse 250ms ease ease-out;overflow:hidden}@keyframes bpi-accordion-expand{from{max-height:0;opacity:0}to{max-height:1000px;opacity:1}}@keyframes bpi-accordion-collapse{from{max-height:1000px;opacity:1}to{max-height:0;opacity:0}}`;
  var Accordion = class extends HTMLElement {
    static get observedAttributes() {
      return ["open", "title"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._isOpen = false;
    }
    connectedCallback() {
      this._isOpen = this.hasAttribute("open");
      this.render();
      this.setupListeners();
    }
    attributeChangedCallback() {
      this._isOpen = this.hasAttribute("open");
      if (this.shadowRoot) {
        this.render();
        this.setupListeners();
      }
    }
    setupListeners() {
      const trigger = this.shadowRoot.querySelector(".bpi-accordion__trigger");
      if (trigger) {
        trigger.addEventListener("click", () => {
          this.toggle();
        });
      }
      const content = this.shadowRoot.querySelector(".bpi-accordion__content");
      if (content) {
        content.addEventListener("transitionend", () => {
          if (!this._isOpen) {
            content.style.display = "none";
          }
        });
      }
    }
    toggle() {
      if (this._isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
    open() {
      this._isOpen = true;
      this.setAttribute("open", "");
      this.dispatchEvent(new CustomEvent("bpi-toggle", {
        detail: { open: true },
        bubbles: true
      }));
    }
    close() {
      this._isOpen = false;
      this.removeAttribute("open");
      this.dispatchEvent(new CustomEvent("bpi-toggle", {
        detail: { open: false },
        bubbles: true
      }));
    }
    render() {
      const title = this.getAttribute("title") || "";
      const classes = [
        "bpi-accordion",
        this._isOpen ? "bpi-accordion--open" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${ACCORDION_CSS}</style>
      <div class="${classes}">
        <button class="bpi-accordion__trigger" aria-expanded="${this._isOpen}">
          <span class="bpi-accordion__title">${this.escapeHtml(title)}</span>
          <svg
            class="bpi-accordion__icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="bpi-accordion__content" style="${!this._isOpen ? "display: none;" : ""}">
          <div class="bpi-accordion__body">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
      this.setupListeners();
    }
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-accordion", Accordion);

  // .tmp/Drawer.js
  var DRAWER_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-drawer{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;pointer-events:none;z-index:1050}.bpi-drawer__backdrop{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);opacity:0;transition:opacity 250ms ease;z-index:1040}.bpi-drawer__content{position:relative;background-color:#fff;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);overflow-y:auto;z-index:1050;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;transition:transform 250ms ease}.bpi-drawer--left{justify-content:flex-start}.bpi-drawer--left .bpi-drawer__content{transform:translateX(-100%)}.bpi-drawer--right{justify-content:flex-end}.bpi-drawer--right .bpi-drawer__content{transform:translateX(100%)}.bpi-drawer--sm .bpi-drawer__content{width:300px}.bpi-drawer--md .bpi-drawer__content{width:400px}.bpi-drawer--lg .bpi-drawer__content{width:500px}.bpi-drawer--open{pointer-events:auto}.bpi-drawer--open .bpi-drawer__backdrop{opacity:1}.bpi-drawer--open .bpi-drawer__content{transform:translateX(0)}`;
  var Drawer = class extends HTMLElement {
    static get observedAttributes() {
      return ["open", "position", "size"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
      this.setupListeners();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    setupListeners() {
      const backdrop = this.shadowRoot.querySelector(".bpi-drawer__backdrop");
      if (backdrop) {
        backdrop.addEventListener("click", () => {
          this.close();
        });
      }
      const handleEscape = (e) => {
        if (e.key === "Escape" && this.hasAttribute("open")) {
          this.close();
        }
      };
      if (this.hasAttribute("open")) {
        document.addEventListener("keydown", handleEscape);
        this._escapeHandler = handleEscape;
      }
    }
    close() {
      this.removeAttribute("open");
      if (this._escapeHandler) {
        document.removeEventListener("keydown", this._escapeHandler);
      }
      this.dispatchEvent(new CustomEvent("bpi-close", { bubbles: true }));
    }
    render() {
      const open = this.hasAttribute("open");
      const position = this.getAttribute("position") || "left";
      const size = this.getAttribute("size") || "md";
      const classes = [
        "bpi-drawer",
        `bpi-drawer--${position}`,
        `bpi-drawer--${size}`,
        open ? "bpi-drawer--open" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${DRAWER_CSS}</style>
      <div class="${classes}">
        <div class="bpi-drawer__backdrop"></div>
        <div class="bpi-drawer__content">
          <slot></slot>
        </div>
      </div>
    `;
      this.setupListeners();
    }
  };
  customElements.define("bpi-drawer", Drawer);

  // .tmp/DatePicker.js
  var DATEPICKER_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-date-picker{display:flex;flex-direction:column;gap:8px;width:100%;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-date-picker__label{font-size:.875rem;font-weight:500;color:#0f172a;user-select:none}.bpi-date-picker__wrapper{position:relative}.bpi-date-picker__input{width:100%;padding:12px 16px;padding-right:40px;background-color:#fff;border:1px solid #e5e7eb;border-radius:6px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;color:#0f172a;cursor:pointer;transition:all 150ms ease}.bpi-date-picker__input:hover:not(:disabled){border-color:#d1d5db}.bpi-date-picker__input:focus{outline:none;border-color:#e32321;box-shadow:0 0 0 2px rgba(30,64,175,.1)}.bpi-date-picker__input:disabled{background-color:#f9fafb;color:#94a3b8;cursor:not-allowed;opacity:.5}.bpi-date-picker__icon{position:absolute;right:12px;top:50%;transform:translateY(-50%);pointer-events:none;color:#64748b}.bpi-date-picker__calendar{position:absolute;top:100%;left:0;background-color:#fff;border:1px solid #e5e7eb;border-radius:6px;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);z-index:1000;margin-top:8px;width:320px;opacity:0;visibility:hidden;transition:all 150ms ease;pointer-events:none}.bpi-date-picker__calendar--open{opacity:1;visibility:visible;pointer-events:auto}.bpi-date-picker__header{display:flex;align-items:center;justify-content:space-between;padding:16px;border-bottom:1px solid #e5e7eb}.bpi-date-picker__prev,.bpi-date-picker__next{background:none;border:none;font-size:1.125rem;cursor:pointer;color:#0f172a;padding:8px;transition:color 150ms ease}.bpi-date-picker__prev:hover,.bpi-date-picker__next:hover{color:#e32321}.bpi-date-picker__prev:focus,.bpi-date-picker__next:focus{outline:2px solid rgba(227,35,33,.5);outline-offset:2px;border-radius:4px}.bpi-date-picker__month-year{font-weight:600;font-size:.875rem;color:#0f172a;text-align:center}.bpi-date-picker__weekdays{display:grid;grid-template-columns:repeat(7, 1fr);padding:8px 12px;border-bottom:1px solid #e5e7eb;font-size:.75rem;font-weight:600;color:#64748b;text-align:center}.bpi-date-picker__days{display:grid;grid-template-columns:repeat(7, 1fr);gap:8px;padding:12px}.bpi-date-picker__day{aspect-ratio:1;display:flex;align-items:center;justify-content:center;border-radius:4px;font-size:.875rem;color:#0f172a;border:none;background-color:rgba(0,0,0,0);cursor:pointer;transition:all 150ms ease}.bpi-date-picker__day:hover:not(.bpi-date-picker__day--other):not(.bpi-date-picker__day--disabled){background-color:#f9fafb;color:#e32321}.bpi-date-picker__day--selected{background-color:#e32321;color:#fff;font-weight:600}.bpi-date-picker__day--other{color:#94a3b8;cursor:default}.bpi-date-picker__day--disabled{color:#94a3b8;cursor:not-allowed;opacity:.5}.bpi-date-picker__day:focus{outline:2px solid rgba(227,35,33,.5);outline-offset:2px}`;
  var DatePicker = class extends HTMLElement {
    static get observedAttributes() {
      return ["label", "value", "min", "max", "disabled"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._isOpen = false;
      this._currentMonth = (/* @__PURE__ */ new Date()).getMonth();
      this._currentYear = (/* @__PURE__ */ new Date()).getFullYear();
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
      const input = this.shadowRoot.querySelector(".bpi-date-picker__input");
      const calendar = this.shadowRoot.querySelector(".bpi-date-picker__calendar");
      const prevBtn = this.shadowRoot.querySelector(".bpi-date-picker__prev");
      const nextBtn = this.shadowRoot.querySelector(".bpi-date-picker__next");
      if (input) {
        input.addEventListener("click", () => this.toggleCalendar());
        input.addEventListener("focus", () => this.openCalendar());
        input.addEventListener("blur", () => {
          setTimeout(() => this.closeCalendar(), 200);
        });
      }
      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          this._currentMonth--;
          if (this._currentMonth < 0) {
            this._currentMonth = 11;
            this._currentYear--;
          }
          this.renderCalendar();
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          this._currentMonth++;
          if (this._currentMonth > 11) {
            this._currentMonth = 0;
            this._currentYear++;
          }
          this.renderCalendar();
        });
      }
      this.setupDayListeners();
    }
    setupDayListeners() {
      const days = this.shadowRoot.querySelectorAll(".bpi-date-picker__day");
      days.forEach((day) => {
        day.addEventListener("click", () => {
          const dateStr = day.getAttribute("data-date");
          if (dateStr) {
            this.setAttribute("value", dateStr);
            this.closeCalendar();
            this.dispatchEvent(new CustomEvent("bpi-change", {
              detail: { value: dateStr },
              bubbles: true
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
      const calendar = this.shadowRoot.querySelector(".bpi-date-picker__calendar");
      if (calendar) calendar.classList.add("bpi-date-picker__calendar--open");
    }
    closeCalendar() {
      this._isOpen = false;
      const calendar = this.shadowRoot.querySelector(".bpi-date-picker__calendar");
      if (calendar) calendar.classList.remove("bpi-date-picker__calendar--open");
    }
    renderCalendar() {
      const calendar = this.shadowRoot.querySelector(".bpi-date-picker__days");
      if (!calendar) return;
      const year = this._currentYear;
      const month = this._currentMonth;
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const prevLastDay = new Date(year, month, 0);
      const firstDayOfWeek = firstDay.getDay();
      const lastDateOfMonth = lastDay.getDate();
      const lastDateOfPrevMonth = prevLastDay.getDate();
      const value = this.getAttribute("value") || "";
      const min = this.getAttribute("min") || "";
      const max = this.getAttribute("max") || "";
      let dayElements = "";
      for (let i = firstDayOfWeek - 1; i >= 0; i--) {
        const date = lastDateOfPrevMonth - i;
        dayElements += `
        <div class="bpi-date-picker__day bpi-date-picker__day--other">
          ${date}
        </div>
      `;
      }
      for (let date = 1; date <= lastDateOfMonth; date++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
        const isSelected = dateStr === value;
        const isDisabled = min && dateStr < min || max && dateStr > max;
        dayElements += `
        <button
          class="bpi-date-picker__day ${isSelected ? "bpi-date-picker__day--selected" : ""} ${isDisabled ? "bpi-date-picker__day--disabled" : ""}"
          data-date="${dateStr}"
          ${isDisabled ? "disabled" : ""}
        >
          ${date}
        </button>
      `;
      }
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
      const label = this.getAttribute("label") || "";
      const value = this.getAttribute("value") || "";
      const disabled = this.hasAttribute("disabled");
      const monthName = new Date(this._currentYear, this._currentMonth).toLocaleString("default", { month: "long" });
      this.shadowRoot.innerHTML = `
      <style>${DATEPICKER_CSS}</style>
      <div class="bpi-date-picker">
        ${label ? `<label class="bpi-date-picker__label">${this.escapeHtml(label)}</label>` : ""}
        <div class="bpi-date-picker__wrapper">
          <input
            type="text"
            class="bpi-date-picker__input"
            value="${this.escapeHtml(value)}"
            placeholder="YYYY-MM-DD"
            ${disabled ? "disabled" : ""}
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
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };
  customElements.define("bpi-date-picker", DatePicker);

  // .tmp/DataTable.js
  var DATATABLE_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-table-wrapper{width:100%;overflow-x:auto;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-table{width:100%;border-collapse:collapse;font-size:.875rem}.bpi-table thead{background-color:var(--bpi-bg-secondary)}.bpi-table th,.bpi-table td{padding:12px 16px;text-align:left;border-bottom:1px solid var(--bpi-border-default)}.bpi-table th{font-weight:600;color:var(--bpi-text-secondary);font-size:.75rem;text-transform:uppercase;letter-spacing:.025em;white-space:nowrap;user-select:none}.bpi-table td{color:var(--bpi-text-primary)}.bpi-table .bpi-th--sortable{cursor:pointer;transition:color 150ms ease}.bpi-table .bpi-th--sortable:hover{color:var(--bpi-text-primary)}.bpi-table .bpi-th--sorted{color:var(--bpi-primary)}.bpi-table .bpi-th__sort-icon{display:inline-block;margin-left:4px;vertical-align:middle;opacity:.4}.bpi-th--sorted .bpi-table .bpi-th__sort-icon{opacity:1}.bpi-table tbody tr{transition:background-color 150ms ease}.bpi-table tbody tr:hover{background-color:var(--bpi-bg-secondary)}.bpi-table .bpi-tr--selected{background-color:var(--bpi-primary-lighter, var(--bpi-primary-light))}.bpi-table .bpi-tr--selected:hover{background-color:var(--bpi-primary-lighter, var(--bpi-primary-light))}.bpi-table--striped tbody tr:nth-child(even){background-color:var(--bpi-bg-secondary)}.bpi-table__empty{padding:48px 16px;text-align:center;color:var(--bpi-text-muted);font-size:.875rem}.bpi-pagination{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-top:1px solid var(--bpi-border-default)}.bpi-pagination__info{font-size:.875rem;color:var(--bpi-text-secondary)}.bpi-pagination__buttons{display:flex;align-items:center;gap:4px}.bpi-pagination__btn{display:inline-flex;align-items:center;justify-content:center;min-width:32px;height:32px;padding:0 8px;font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;font-size:.875rem;border:1px solid var(--bpi-border-default);border-radius:6px;background:var(--bpi-bg-primary);color:var(--bpi-text-secondary);cursor:pointer;transition:all 150ms ease}.bpi-pagination__btn:hover:not(:disabled){border-color:var(--bpi-primary);color:var(--bpi-primary)}.bpi-pagination__btn--active{background-color:var(--bpi-primary);border-color:var(--bpi-primary);color:var(--bpi-text-inverse)}.bpi-pagination__btn--active:hover:not(:disabled){background-color:var(--bpi-primary-dark);color:var(--bpi-text-inverse)}.bpi-pagination__btn:disabled{opacity:.4;cursor:not-allowed}`;
  var DataTable = class extends HTMLElement {
    static get observedAttributes() {
      return ["columns", "striped", "page", "page-size", "total", "empty-text"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._sortCol = null;
      this._sortDir = "asc";
      this._selectedRows = /* @__PURE__ */ new Set();
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const striped = this.hasAttribute("striped");
      const emptyText = this.getAttribute("empty-text") || "No data available";
      const page = parseInt(this.getAttribute("page") || "1", 10);
      const pageSize = parseInt(this.getAttribute("page-size") || "10", 10);
      const total = parseInt(this.getAttribute("total") || "0", 10);
      const totalPages = Math.max(1, Math.ceil(total / pageSize));
      const tableClasses = ["bpi-table", striped ? "bpi-table--striped" : ""].filter(Boolean).join(" ");
      let paginationHtml = "";
      if (total > 0) {
        const start = (page - 1) * pageSize + 1;
        const end = Math.min(page * pageSize, total);
        let buttons = "";
        buttons += `<button class="bpi-pagination__btn" data-page="${page - 1}" ${page <= 1 ? "disabled" : ""}>&laquo;</button>`;
        for (let i = 1; i <= totalPages && i <= 7; i++) {
          const active = i === page ? "bpi-pagination__btn--active" : "";
          buttons += `<button class="bpi-pagination__btn ${active}" data-page="${i}">${i}</button>`;
        }
        buttons += `<button class="bpi-pagination__btn" data-page="${page + 1}" ${page >= totalPages ? "disabled" : ""}>&raquo;</button>`;
        paginationHtml = `
        <div class="bpi-pagination">
          <span class="bpi-pagination__info">Showing ${start}\u2013${end} of ${total}</span>
          <div class="bpi-pagination__buttons">${buttons}</div>
        </div>
      `;
      }
      this.shadowRoot.innerHTML = `
      <style>${DATATABLE_CSS}</style>
      <div class="bpi-table-wrapper">
        <table class="${tableClasses}">
          <slot></slot>
        </table>
        ${total === 0 ? `<div class="bpi-table__empty">${emptyText}</div>` : ""}
      </div>
      ${paginationHtml}
    `;
      this.shadowRoot.querySelectorAll(".bpi-pagination__btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const p = parseInt(btn.dataset.page, 10);
          if (p >= 1 && p <= totalPages) {
            this.dispatchEvent(new CustomEvent("bpi-page-change", {
              bubbles: true,
              composed: true,
              detail: { page: p }
            }));
          }
        });
      });
      this.shadowRoot.querySelector("slot")?.addEventListener("slotchange", () => {
        this.querySelectorAll("th[data-sortable]").forEach((th) => {
          th.classList.add("bpi-th--sortable");
          th.addEventListener("click", () => {
            const col = th.dataset.column || th.textContent.trim();
            if (this._sortCol === col) {
              this._sortDir = this._sortDir === "asc" ? "desc" : "asc";
            } else {
              this._sortCol = col;
              this._sortDir = "asc";
            }
            this.dispatchEvent(new CustomEvent("bpi-sort", {
              bubbles: true,
              composed: true,
              detail: { column: col, direction: this._sortDir }
            }));
          });
        });
      });
    }
  };
  customElements.define("bpi-data-table", DataTable);

  // .tmp/Navbar.js
  var NAVBAR_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-navbar{display:flex;align-items:center;justify-content:space-between;padding:0 24px;height:56px;background-color:var(--bpi-bg-primary);border-bottom:1px solid var(--bpi-border-default);font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}.bpi-navbar__brand{display:flex;align-items:center;gap:12px;font-size:1.125rem;font-weight:700;color:var(--bpi-text-primary);text-decoration:none}.bpi-navbar__nav{display:flex;align-items:center;gap:4px;list-style:none;margin:0;padding:0}.bpi-navbar__link{display:inline-flex;align-items:center;padding:8px 12px;font-size:.875rem;font-weight:500;color:var(--bpi-text-secondary);text-decoration:none;border-radius:6px;transition:all 150ms ease}.bpi-navbar__link:hover{color:var(--bpi-text-primary);background-color:var(--bpi-bg-secondary)}.bpi-navbar__link--active{color:var(--bpi-primary);background-color:var(--bpi-primary-lighter, var(--bpi-primary-light))}.bpi-navbar__actions{display:flex;align-items:center;gap:8px}`;
  var Navbar = class extends HTMLElement {
    static get observedAttributes() {
      return ["brand"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    render() {
      const brand = this.getAttribute("brand") || "";
      this.shadowRoot.innerHTML = `
      <style>${NAVBAR_CSS}</style>
      <nav class="bpi-navbar">
        <div class="bpi-navbar__brand">
          <slot name="brand-icon"></slot>
          ${brand ? `<span>${brand}</span>` : '<slot name="brand"></slot>'}
        </div>
        <div class="bpi-navbar__nav">
          <slot></slot>
        </div>
        <div class="bpi-navbar__actions">
          <slot name="actions"></slot>
        </div>
      </nav>
    `;
    }
  };
  customElements.define("bpi-navbar", Navbar);

  // .tmp/Sidebar.js
  var SIDEBAR_CSS = `:root{--bpi-brand-primary: #E32321;--bpi-brand-secondary: #262626;--bpi-brand-accent: #0891B2;--bpi-primary: #E32321;--bpi-primary-lighter: #FEF2F2;--bpi-primary-light: #FCA5A5;--bpi-primary-dark: #B91C1C;--bpi-primary-darker: #7F1D1D;--bpi-primary-contrast: #FFFFFF;--bpi-secondary: #262626;--bpi-secondary-lighter: #F5F5F5;--bpi-secondary-light: #A3A3A3;--bpi-secondary-dark: #171717;--bpi-secondary-darker: #0A0A0A;--bpi-success: #16A34A;--bpi-success-lighter: #F0FDF4;--bpi-success-light: #86EFAC;--bpi-success-dark: #15803D;--bpi-danger: #DC2626;--bpi-danger-lighter: #FEF2F2;--bpi-danger-light: #FCA5A5;--bpi-danger-dark: #B91C1C;--bpi-warning: #D97706;--bpi-warning-lighter: #FFFBEB;--bpi-warning-light: #FCD34D;--bpi-warning-dark: #B45309;--bpi-info: #0284C7;--bpi-info-lighter: #F0F9FF;--bpi-info-light: #7DD3FC;--bpi-info-dark: #0369A1;--bpi-gray-50: #F9FAFB;--bpi-gray-100: #F3F4F6;--bpi-gray-200: #E5E7EB;--bpi-gray-300: #D1D5DB;--bpi-gray-400: #9CA3AF;--bpi-gray-500: #6B7280;--bpi-gray-600: #4B5563;--bpi-gray-700: #374151;--bpi-gray-800: #1F2937;--bpi-gray-900: #111827;--bpi-gray-950: #030712;--bpi-text-primary: #0F172A;--bpi-text-secondary: #64748B;--bpi-text-muted: #94A3B8;--bpi-text-disabled: #94A3B8;--bpi-text-inverse: #FFFFFF;--bpi-bg-default: #F8FAFC;--bpi-bg-primary: #FFFFFF;--bpi-bg-secondary: #F9FAFB;--bpi-bg-tertiary: #F3F4F6;--bpi-border-default: #E5E7EB;--bpi-border-strong: #D1D5DB;--bpi-border-focus: #E32321;--bpi-surface-card: #FFFFFF;--bpi-surface-variant: #F1F5F9;--bpi-surface-hover: #F8FAFC;--color-primary-main: var(--bpi-primary);--color-primary-light: var(--bpi-primary-light);--color-primary-dark: var(--bpi-primary-dark);--color-secondary-main: var(--bpi-secondary);--color-success-main: var(--bpi-success);--color-danger-main: var(--bpi-danger);--color-warning-main: var(--bpi-warning);--color-info-main: var(--bpi-info);--color-bg-default: var(--bpi-bg-default);--color-bg-paper: var(--bpi-bg-primary);--color-text-primary: var(--bpi-text-primary);--color-text-secondary: var(--bpi-text-secondary);--color-border: var(--bpi-border-default);--color-surface-card: var(--bpi-surface-card)}.dark{--bpi-primary: #F87171;--bpi-primary-lighter: #451A1A;--bpi-primary-light: #DC2626;--bpi-primary-dark: #FCA5A5;--bpi-primary-contrast: #1F2937;--bpi-secondary: #D4D4D4;--bpi-secondary-lighter: #262626;--bpi-secondary-light: #737373;--bpi-secondary-dark: #E5E5E5;--bpi-success: #4ADE80;--bpi-success-lighter: #052E16;--bpi-success-light: #16A34A;--bpi-success-dark: #86EFAC;--bpi-danger: #F87171;--bpi-danger-lighter: #450A0A;--bpi-danger-light: #DC2626;--bpi-danger-dark: #FCA5A5;--bpi-warning: #FBBF24;--bpi-warning-lighter: #451A03;--bpi-warning-light: #D97706;--bpi-warning-dark: #FCD34D;--bpi-info: #38BDF8;--bpi-info-lighter: #082F49;--bpi-info-light: #0284C7;--bpi-info-dark: #7DD3FC;--bpi-text-primary: #F1F5F9;--bpi-text-secondary: #94A3B8;--bpi-text-muted: #64748B;--bpi-text-disabled: #475569;--bpi-text-inverse: #0F172A;--bpi-bg-default: #0F172A;--bpi-bg-primary: #1E293B;--bpi-bg-secondary: #334155;--bpi-bg-tertiary: #475569;--bpi-border-default: #334155;--bpi-border-strong: #475569;--bpi-border-focus: var(--bpi-primary);--bpi-surface-card: #1E293B;--bpi-surface-variant: #1E293B;--bpi-surface-hover: #334155}:root{--bpi-space-1: 4px;--bpi-space-2: 8px;--bpi-space-3: 12px;--bpi-space-4: 16px;--bpi-space-5: 20px;--bpi-space-6: 24px;--bpi-space-8: 32px;--bpi-space-10: 40px;--bpi-space-12: 48px;--bpi-space-16: 64px}:root{--bpi-font-family-sans: Inter, Sarabun, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;--bpi-font-family-mono: JetBrains Mono, Fira Code, Consolas, monospace;--bpi-font-size-xs: 0.75rem;--bpi-font-size-sm: 0.875rem;--bpi-font-size-base: 1rem;--bpi-font-size-lg: 1.125rem;--bpi-font-size-xl: 1.25rem;--bpi-font-size-2xl: 1.5rem;--bpi-font-size-3xl: 1.875rem;--bpi-font-weight-light: 300;--bpi-font-weight-normal: 400;--bpi-font-weight-medium: 500;--bpi-font-weight-semibold: 600;--bpi-font-weight-bold: 700;--bpi-line-height-tight: 1.25;--bpi-line-height-normal: 1.5;--bpi-line-height-relaxed: 1.75}:root{--bpi-radius-none: 0;--bpi-radius-sm: 4px;--bpi-radius-md: 6px;--bpi-radius-lg: 8px;--bpi-radius-xl: 12px;--bpi-radius-2xl: 16px;--bpi-radius-full: 9999px;--bpi-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);--bpi-shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);--bpi-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--bpi-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--bpi-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--bpi-z-dropdown: 1000;--bpi-z-sticky: 1020;--bpi-z-fixed: 1030;--bpi-z-modal-backdrop: 1040;--bpi-z-modal: 1050;--bpi-z-popover: 1060;--bpi-z-tooltip: 1070;--bpi-z-toast: 1080;--bpi-transition-fast: 150ms ease;--bpi-transition-normal: 250ms ease;--bpi-transition-slow: 350ms ease;--bpi-focus-ring-width: 2px;--bpi-focus-ring-offset: 2px;--bpi-focus-ring-color: rgba(227, 35, 33, 0.5)}.bpi-sidebar{display:flex;flex-direction:column;width:260px;height:100%;background-color:var(--bpi-bg-primary);border-right:1px solid var(--bpi-border-default);font-family:"Inter","Sarabun",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;overflow-y:auto}.bpi-sidebar--collapsed{width:64px}.bpi-sidebar__header{display:flex;align-items:center;justify-content:space-between;padding:16px;border-bottom:1px solid var(--bpi-border-default)}.bpi-sidebar__content{flex:1;padding:8px;overflow-y:auto}.bpi-sidebar__section{margin-bottom:16px}.bpi-sidebar__section-title{padding:8px 12px;font-size:.75rem;font-weight:600;color:var(--bpi-text-muted);text-transform:uppercase;letter-spacing:.025em}.bpi-sidebar__item{display:flex;align-items:center;gap:12px;padding:8px 12px;font-size:.875rem;color:var(--bpi-text-secondary);text-decoration:none;border-radius:6px;cursor:pointer;transition:all 150ms ease}.bpi-sidebar__item:hover{background-color:var(--bpi-bg-secondary);color:var(--bpi-text-primary)}.bpi-sidebar__item--active{background-color:var(--bpi-primary-lighter, var(--bpi-primary-light));color:var(--bpi-primary);font-weight:500}.bpi-sidebar__item-icon{display:flex;align-items:center;flex-shrink:0;width:20px;height:20px}.bpi-sidebar__footer{padding:16px;border-top:1px solid var(--bpi-border-default)}`;
  var Sidebar = class extends HTMLElement {
    static get observedAttributes() {
      return ["collapsed"];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }
    get collapsed() {
      return this.hasAttribute("collapsed");
    }
    set collapsed(val) {
      if (val) this.setAttribute("collapsed", "");
      else this.removeAttribute("collapsed");
    }
    toggle() {
      this.collapsed = !this.collapsed;
    }
    render() {
      const isCollapsed = this.collapsed;
      const classes = [
        "bpi-sidebar",
        isCollapsed ? "bpi-sidebar--collapsed" : ""
      ].filter(Boolean).join(" ");
      this.shadowRoot.innerHTML = `
      <style>${SIDEBAR_CSS}</style>
      <aside class="${classes}">
        <div class="bpi-sidebar__header">
          <slot name="header"></slot>
        </div>
        <div class="bpi-sidebar__content">
          <slot></slot>
        </div>
        <div class="bpi-sidebar__footer">
          <slot name="footer"></slot>
        </div>
      </aside>
    `;
    }
  };
  customElements.define("bpi-sidebar", Sidebar);
  return __toCommonJS(index_exports);
})();
