// ============================================================
// BPI Design System — Component Specifications
// Each team reads these specs and implements components themselves.
// Specs reference design tokens (colors, spacing, typography, misc).
// ============================================================

// --- Interfaces ---

export interface SizeSpec {
  name: string;
  padding: string;       // e.g. "space-2 space-4" (vertical horizontal)
  fontSize: string;      // token ref e.g. "font-size-sm"
  borderRadius: string;  // token ref e.g. "radius-md"
  minHeight?: string;
  extra?: Record<string, string>;
}

export interface VariantSpec {
  name: string;
  background: string;
  text: string;
  border?: string;
  hoverBg?: string;
  activeBg?: string;
}

export interface StateSpec {
  name: string;
  description: string;
  css: Record<string, string>;
  transition?: string;
}

export interface A11ySpec {
  role?: string;
  keyboard?: string[];
  ariaProps?: string[];
}

export interface SubElement {
  name: string;
  description: string;
  styles: Record<string, string>;
}

export interface ComponentSpec {
  id: string;
  name: string;
  nameTh?: string;
  category: 'atom' | 'molecule' | 'organism';
  description: string;
  anatomy: string;
  sizes?: SizeSpec[];
  variants?: VariantSpec[];
  states?: StateSpec[];
  elements?: SubElement[];
  a11y?: A11ySpec;
  defaults?: Record<string, string>;
  notes?: string[];
}

// --- Helpers for token display ---

export const tokenValues: Record<string, string> = {
  // Spacing
  'space-1': '4px', 'space-2': '8px', 'space-3': '12px', 'space-4': '16px',
  'space-5': '20px', 'space-6': '24px', 'space-8': '32px', 'space-10': '40px',
  'space-12': '48px', 'space-16': '64px',
  // Font sizes
  'font-size-xs': '12px', 'font-size-sm': '14px', 'font-size-base': '16px',
  'font-size-lg': '18px', 'font-size-xl': '20px', 'font-size-2xl': '24px', 'font-size-3xl': '30px',
  // Font weights
  'font-light': '300', 'font-normal': '400', 'font-medium': '500',
  'font-semibold': '600', 'font-bold': '700',
  // Border radius
  'radius-none': '0', 'radius-sm': '4px', 'radius-md': '6px',
  'radius-lg': '8px', 'radius-xl': '12px', 'radius-2xl': '16px', 'radius-full': '9999px',
  // Transitions
  'transition-fast': '150ms ease', 'transition-normal': '250ms ease', 'transition-slow': '350ms ease',
  // Z-index
  'z-dropdown': '1000', 'z-sticky': '1020', 'z-fixed': '1030',
  'z-modal-backdrop': '1040', 'z-modal': '1050', 'z-popover': '1060', 'z-tooltip': '1070',
};

// --- Color reference (semantic) ---
export const colorTokens: Record<string, string> = {
  'primary': '#E32321', 'primary-light': '#FCA5A5', 'primary-lighter': '#FEF2F2',
  'primary-dark': '#B91C1C', 'primary-darker': '#7F1D1D', 'primary-contrast': '#FFFFFF',
  'secondary': '#262626', 'secondary-light': '#A3A3A3', 'secondary-dark': '#171717',
  'secondary-contrast': '#FFFFFF',
  'success': '#16A34A', 'success-light': '#86EFAC', 'success-lighter': '#F0FDF4',
  'success-dark': '#15803D', 'success-contrast': '#FFFFFF',
  'danger': '#DC2626', 'danger-light': '#FCA5A5', 'danger-lighter': '#FEF2F2',
  'danger-dark': '#B91C1C', 'danger-contrast': '#FFFFFF',
  'warning': '#D97706', 'warning-light': '#FCD34D', 'warning-lighter': '#FFFBEB',
  'warning-dark': '#B45309', 'warning-contrast': '#FFFFFF',
  'info': '#0284C7', 'info-light': '#7DD3FC', 'info-lighter': '#F0F9FF',
  'info-dark': '#0369A1', 'info-contrast': '#FFFFFF',
  'text-primary': '#0F172A', 'text-secondary': '#64748B', 'text-muted': '#94A3B8',
  'text-inverse': '#FFFFFF', 'text-disabled': '#94A3B8',
  'bg-default': '#F8FAFC', 'bg-primary': '#FFFFFF', 'bg-secondary': '#F9FAFB',
  'border-default': '#E5E7EB', 'border-strong': '#D1D5DB',
  'surface-card': '#FFFFFF', 'surface-hover': '#F8FAFC',
  'transparent': 'transparent', 'white': '#FFFFFF',
};

// ============================================================
// ATOM SPECS
// ============================================================

const buttonSpec: ComponentSpec = {
  id: 'button',
  name: 'Button',
  category: 'atom',
  description: 'Interactive element that triggers actions when clicked.',
  anatomy: 'Icon (optional) + Label + Icon (optional)',
  defaults: { size: 'md', variant: 'primary' },
  sizes: [
    { name: 'xs', padding: 'space-1 space-2 (4px 8px)', fontSize: 'font-size-xs (12px)', borderRadius: 'radius-sm (4px)' },
    { name: 'sm', padding: 'space-1 space-3 (4px 12px)', fontSize: 'font-size-sm (14px)', borderRadius: 'radius-md (6px)' },
    { name: 'md', padding: 'space-2 space-4 (8px 16px)', fontSize: 'font-size-sm (14px)', borderRadius: 'radius-md (6px)' },
    { name: 'lg', padding: 'space-3 space-6 (12px 24px)', fontSize: 'font-size-base (16px)', borderRadius: 'radius-md (6px)' },
  ],
  variants: [
    { name: 'primary', background: 'primary', text: 'primary-contrast', border: 'primary', hoverBg: 'primary-dark' },
    { name: 'secondary', background: 'secondary', text: 'secondary-contrast', border: 'secondary', hoverBg: 'secondary-dark' },
    { name: 'danger', background: 'danger', text: 'danger-contrast', border: 'danger', hoverBg: 'danger-dark' },
    { name: 'success', background: 'success', text: 'success-contrast', border: 'success', hoverBg: 'success-dark' },
    { name: 'warning', background: 'warning', text: 'warning-contrast', border: 'warning', hoverBg: 'warning-dark' },
    { name: 'info', background: 'info', text: 'info-contrast', border: 'info', hoverBg: 'info-dark' },
    { name: 'outline', background: 'transparent', text: 'primary', border: 'border-strong', hoverBg: 'bg-secondary' },
    { name: 'ghost', background: 'transparent', text: 'text-secondary', border: 'transparent', hoverBg: 'bg-secondary' },
  ],
  states: [
    { name: 'hover', description: 'Pointer hovering', css: { 'background': 'hoverBg token' }, transition: 'transition-fast (150ms)' },
    { name: 'focus-visible', description: 'Keyboard focus', css: { 'outline': '2px solid focus-ring', 'outline-offset': '2px' } },
    { name: 'active', description: 'Being pressed', css: { 'background': 'darker variant' } },
    { name: 'disabled', description: 'Not interactive', css: { 'opacity': '0.5', 'pointer-events': 'none', 'cursor': 'not-allowed' } },
    { name: 'loading', description: 'Action in progress', css: { 'color': 'transparent', 'position': 'relative' }, transition: 'spinner 0.6s linear infinite' },
  ],
  a11y: { role: 'button', keyboard: ['Enter / Space to activate'], ariaProps: ['aria-disabled', 'aria-label', 'aria-busy (loading)'] },
  notes: [
    'Display: inline-flex, center-aligned, gap 8px between icon and label',
    'Font weight: medium (500)',
    'Line height: tight (1.25)',
    'Transition: background-color, border-color, color, box-shadow — 150ms ease',
    'Block modifier: width 100%, justify-content center',
  ],
};

const inputSpec: ComponentSpec = {
  id: 'input',
  name: 'Input',
  category: 'atom',
  description: 'Single-line text input field for user data entry.',
  anatomy: 'Input field + Hint text (optional) + Error text (optional)',
  defaults: { size: 'md' },
  sizes: [
    { name: 'sm', padding: 'space-1 space-2 (4px 8px)', fontSize: 'font-size-xs (12px)', borderRadius: 'radius-md (6px)' },
    { name: 'md', padding: 'space-2 space-3 (8px 12px)', fontSize: 'font-size-sm (14px)', borderRadius: 'radius-md (6px)' },
    { name: 'lg', padding: 'space-3 space-4 (12px 16px)', fontSize: 'font-size-base (16px)', borderRadius: 'radius-md (6px)' },
  ],
  states: [
    { name: 'default', description: 'Normal state', css: { 'border': '1px solid border-default', 'background': 'bg-primary', 'color': 'text-primary' } },
    { name: 'focus', description: 'Input focused', css: { 'border-color': 'border-focus (primary)', 'box-shadow': '0 0 0 2px focus-ring' }, transition: 'transition-fast (150ms)' },
    { name: 'error', description: 'Validation error', css: { 'border-color': 'danger', 'box-shadow': '0 0 0 2px rgba(danger, 0.3)' } },
    { name: 'disabled', description: 'Not editable', css: { 'opacity': '0.5', 'background': 'bg-secondary', 'cursor': 'not-allowed' } },
  ],
  elements: [
    { name: 'hint', description: 'Helper text below input', styles: { 'margin-top': '4px', 'font-size': '12px', 'color': 'text-muted' } },
    { name: 'error', description: 'Error message below input', styles: { 'margin-top': '4px', 'font-size': '12px', 'color': 'danger' } },
  ],
  a11y: { role: 'textbox', keyboard: ['Tab to focus'], ariaProps: ['aria-invalid', 'aria-describedby (hint/error)'] },
  notes: ['Placeholder color: text-muted', 'Font family: sans (Inter/Sarabun)', 'Width: 100% by default'],
};

const badgeSpec: ComponentSpec = {
  id: 'badge',
  name: 'Badge',
  category: 'atom',
  description: 'Small label for status, count, or category indication.',
  anatomy: 'Dot (optional) + Label',
  defaults: { variant: 'neutral' },
  sizes: [
    { name: 'default', padding: '2px space-2 (2px 8px)', fontSize: 'font-size-xs (12px)', borderRadius: 'radius-full (9999px)' },
  ],
  variants: [
    { name: 'primary', background: 'primary-light', text: 'primary-dark' },
    { name: 'success', background: 'success-light', text: 'success-dark' },
    { name: 'warning', background: 'warning-light', text: 'warning-dark' },
    { name: 'danger', background: 'danger-light', text: 'danger-dark' },
    { name: 'info', background: 'info-light', text: 'info-dark' },
    { name: 'neutral', background: 'gray-100 (#F3F4F6)', text: 'gray-700 (#374151)' },
  ],
  notes: ['Display: inline-flex, center-aligned, gap 4px', 'Font weight: medium (500)', 'Line height: tight (1.25)', 'Dot modifier: 6px circle, currentColor'],
};

const alertSpec: ComponentSpec = {
  id: 'alert',
  name: 'Alert',
  category: 'atom',
  description: 'Contextual feedback message for user actions or system status.',
  anatomy: 'Icon + Content (Title + Message) + Close button (optional)',
  variants: [
    { name: 'success', background: 'success-lighter', text: 'success-dark', border: 'success' },
    { name: 'error', background: 'danger-lighter', text: 'danger-dark', border: 'danger' },
    { name: 'warning', background: 'warning-lighter', text: 'warning-dark', border: 'warning' },
    { name: 'info', background: 'info-lighter', text: 'info-dark', border: 'info' },
  ],
  elements: [
    { name: 'icon', description: 'Status icon', styles: { 'width': '20px', 'height': '20px', 'flex-shrink': '0' } },
    { name: 'title', description: 'Alert heading', styles: { 'font-weight': '600', 'margin': '0' } },
    { name: 'message', description: 'Alert body text', styles: { 'line-height': '1.5', 'margin': '0' } },
    { name: 'close', description: 'Dismiss button', styles: { 'width': '24px', 'height': '24px', 'opacity': '0.6 → 1 on hover' } },
  ],
  notes: ['Display: flex, align-items flex-start, gap 12px', 'Padding: 16px', 'Border: 1px solid variant color', 'Border radius: radius-md (6px)', 'Font size: 14px'],
};

const chipSpec: ComponentSpec = {
  id: 'chip',
  name: 'Chip',
  category: 'atom',
  description: 'Compact element for tags, filters, or selections.',
  anatomy: 'Label + Delete button (optional)',
  defaults: { size: 'md', variant: 'default' },
  sizes: [
    { name: 'sm', padding: '2px space-2 (2px 8px)', fontSize: 'font-size-xs (12px)', borderRadius: 'radius-full (9999px)' },
    { name: 'md', padding: 'space-2 space-3 (8px 12px)', fontSize: 'font-size-sm (14px)', borderRadius: 'radius-full (9999px)' },
  ],
  variants: [
    { name: 'default (filled)', background: 'gray-100', text: 'text-primary' },
    { name: 'primary (filled)', background: 'primary', text: 'white' },
    { name: 'success (filled)', background: 'success', text: 'white' },
    { name: 'danger (filled)', background: 'danger', text: 'white' },
    { name: 'warning (filled)', background: 'warning', text: 'white' },
    { name: 'info (filled)', background: 'info', text: 'white' },
    { name: 'default (outlined)', background: 'transparent', text: 'text-primary', border: 'border-default' },
    { name: 'primary (outlined)', background: 'transparent', text: 'primary', border: 'primary' },
    { name: 'success (outlined)', background: 'transparent', text: 'success', border: 'success' },
    { name: 'danger (outlined)', background: 'transparent', text: 'danger', border: 'danger' },
  ],
  notes: ['Display: inline-flex, center-aligned, gap 8px', 'Font weight: medium (500)', 'Border: 1px solid (transparent for filled, color for outlined)', 'Transition: all 150ms ease'],
};

const checkboxSpec: ComponentSpec = {
  id: 'checkbox',
  name: 'Checkbox',
  category: 'atom',
  description: 'Toggle control for binary or multi-select choices.',
  anatomy: 'Checkmark box + Label',
  elements: [
    { name: 'checkmark', description: 'Visual checkbox', styles: { 'width': '20px', 'height': '20px', 'border': '2px solid border-default', 'border-radius': '4px', 'background': 'white' } },
    { name: 'label', description: 'Text label', styles: { 'font-size': '14px', 'color': 'text-primary', 'user-select': 'none' } },
  ],
  states: [
    { name: 'unchecked', description: 'Default state', css: { 'background': 'white', 'border': 'border-default' } },
    { name: 'checked', description: 'Selected', css: { 'background': 'primary', 'border': 'primary' } },
    { name: 'indeterminate', description: 'Partial selection', css: { 'background': 'primary', 'indicator': 'horizontal line 8px × 2px' } },
    { name: 'focus', description: 'Keyboard focus', css: { 'box-shadow': '0 0 0 2px focus-ring' } },
    { name: 'disabled', description: 'Not interactive', css: { 'background': 'gray-100', 'border': 'border-default' } },
    { name: 'disabled+checked', description: 'Disabled selected', css: { 'background': 'gray-400', 'border': 'gray-400' } },
  ],
  a11y: { role: 'checkbox', keyboard: ['Space to toggle'], ariaProps: ['aria-checked', 'aria-disabled'] },
  notes: ['Display: inline-flex, center-aligned, gap 8px', 'Checkmark indicator: rotated border (8px tall, 4px wide, 45°)', 'Transition: all 150ms ease'],
};

const radioSpec: ComponentSpec = {
  id: 'radio',
  name: 'Radio',
  category: 'atom',
  description: 'Single-select control within a group of options.',
  anatomy: 'Radio circle + Label',
  elements: [
    { name: 'circle', description: 'Visual radio button', styles: { 'width': '20px', 'height': '20px', 'border': '2px solid border-default', 'border-radius': 'full (9999px)', 'background': 'white' } },
    { name: 'label', description: 'Text label', styles: { 'font-size': '14px', 'color': 'text-primary' } },
  ],
  states: [
    { name: 'unchecked', description: 'Default state', css: { 'background': 'white', 'border': 'border-default' } },
    { name: 'checked', description: 'Selected', css: { 'border': 'primary', 'inner-dot': '10px circle, primary' } },
    { name: 'focus', description: 'Keyboard focus', css: { 'box-shadow': '0 0 0 2px focus-ring' } },
    { name: 'disabled', description: 'Not interactive', css: { 'opacity': '0.5', 'cursor': 'not-allowed' } },
  ],
  a11y: { role: 'radio', keyboard: ['Arrow keys to navigate group', 'Space to select'], ariaProps: ['aria-checked', 'aria-disabled'] },
  notes: ['Display: inline-flex, center-aligned, gap 8px', 'Transition: all 150ms ease'],
};

const switchSpec: ComponentSpec = {
  id: 'switch',
  name: 'Switch',
  category: 'atom',
  description: 'Toggle control for on/off states.',
  anatomy: 'Track + Thumb + Label',
  defaults: { size: 'md' },
  sizes: [
    { name: 'sm', padding: 'N/A', fontSize: 'font-size-sm (14px)', borderRadius: 'radius-full', extra: { 'track': '40px × 20px', 'thumb': '16px circle', 'translate-x': '20px' } },
    { name: 'md', padding: 'N/A', fontSize: 'font-size-sm (14px)', borderRadius: 'radius-full', extra: { 'track': '48px × 24px', 'thumb': '20px circle', 'translate-x': '24px' } },
  ],
  states: [
    { name: 'off', description: 'Default (unchecked)', css: { 'track-bg': 'gray-300', 'thumb-position': 'left 2px' } },
    { name: 'on', description: 'Checked', css: { 'track-bg': 'primary', 'thumb-position': 'translateX (size-dependent)' } },
    { name: 'focus', description: 'Keyboard focus', css: { 'track-shadow': '0 0 0 2px focus-ring' } },
    { name: 'disabled', description: 'Not interactive', css: { 'track-bg': 'gray-200', 'thumb-bg': 'gray-400', 'cursor': 'not-allowed' } },
  ],
  a11y: { role: 'switch', keyboard: ['Space to toggle'], ariaProps: ['aria-checked', 'aria-disabled'] },
  notes: ['Display: inline-flex, gap 12px', 'Thumb: absolute positioned, white, shadow-sm', 'Track transition: background-color 150ms ease', 'Thumb transition: transform 150ms ease'],
};

const avatarSpec: ComponentSpec = {
  id: 'avatar',
  name: 'Avatar',
  category: 'atom',
  description: 'User or entity visual representation.',
  anatomy: 'Image | Initials | Icon',
  defaults: { size: 'md' },
  sizes: [
    { name: 'sm', padding: 'N/A', fontSize: 'font-size-xs (12px)', borderRadius: 'radius-full', extra: { 'width': '32px', 'height': '32px' } },
    { name: 'md', padding: 'N/A', fontSize: 'font-size-sm (14px)', borderRadius: 'radius-full', extra: { 'width': '40px', 'height': '40px' } },
    { name: 'lg', padding: 'N/A', fontSize: 'font-size-base (16px)', borderRadius: 'radius-full', extra: { 'width': '56px', 'height': '56px' } },
    { name: 'xl', padding: 'N/A', fontSize: 'font-size-lg (18px)', borderRadius: 'radius-full', extra: { 'width': '72px', 'height': '72px' } },
  ],
  notes: ['Display: inline-flex, center-aligned', 'Background: primary-light, color: primary-dark (initials/icon fallback)', 'Image: object-fit cover, overflow hidden', 'Font weight: semibold (600)'],
};

const tooltipSpec: ComponentSpec = {
  id: 'tooltip',
  name: 'Tooltip',
  category: 'atom',
  description: 'Contextual overlay that appears on hover or focus.',
  anatomy: 'Content + Arrow (optional)',
  notes: [
    'Background: gray-900 (#111827), Color: white',
    'Padding: space-1 space-2 (4px 8px)',
    'Font size: font-size-xs (12px)',
    'Border radius: radius-sm (4px)',
    'Z-index: z-tooltip (1070)',
    'Box shadow: shadow-sm',
    'Transition: opacity, transform — 150ms ease',
  ],
};

const dividerSpec: ComponentSpec = {
  id: 'divider',
  name: 'Divider',
  category: 'atom',
  description: 'Visual separator between content sections.',
  anatomy: 'Line',
  notes: [
    'Border: 1px solid border-default',
    'Horizontal: width 100%, margin space-4 0 (16px 0)',
    'Vertical: height 100%, margin 0 space-4',
  ],
};

const typographySpec: ComponentSpec = {
  id: 'typography',
  name: 'Typography',
  category: 'atom',
  description: 'Text display with predefined styles for consistency.',
  anatomy: 'Text content',
  sizes: [
    { name: 'h1', padding: 'N/A', fontSize: 'font-size-3xl (30px)', borderRadius: 'N/A', extra: { 'font-weight': 'bold (700)', 'line-height': 'tight (1.25)', 'letter-spacing': 'tight (-0.025em)' } },
    { name: 'h2', padding: 'N/A', fontSize: 'font-size-2xl (24px)', borderRadius: 'N/A', extra: { 'font-weight': 'semibold (600)', 'line-height': 'tight (1.25)' } },
    { name: 'h3', padding: 'N/A', fontSize: 'font-size-xl (20px)', borderRadius: 'N/A', extra: { 'font-weight': 'semibold (600)', 'line-height': 'tight (1.25)' } },
    { name: 'h4', padding: 'N/A', fontSize: 'font-size-lg (18px)', borderRadius: 'N/A', extra: { 'font-weight': 'semibold (600)', 'line-height': 'normal (1.5)' } },
    { name: 'body1', padding: 'N/A', fontSize: 'font-size-base (16px)', borderRadius: 'N/A', extra: { 'font-weight': 'normal (400)', 'line-height': 'normal (1.5)' } },
    { name: 'body2', padding: 'N/A', fontSize: 'font-size-sm (14px)', borderRadius: 'N/A', extra: { 'font-weight': 'normal (400)', 'line-height': 'normal (1.5)' } },
    { name: 'caption', padding: 'N/A', fontSize: 'font-size-xs (12px)', borderRadius: 'N/A', extra: { 'font-weight': 'normal (400)', 'line-height': 'normal (1.5)', 'color': 'text-secondary' } },
    { name: 'overline', padding: 'N/A', fontSize: 'font-size-xs (12px)', borderRadius: 'N/A', extra: { 'font-weight': 'medium (500)', 'text-transform': 'uppercase', 'letter-spacing': 'wide (0.025em)' } },
  ],
  notes: ['Font family: Inter (Latin), Sarabun (Thai)', 'Color: text-primary by default', 'Margin: 0 (reset)'],
};

const skeletonSpec: ComponentSpec = {
  id: 'skeleton',
  name: 'Skeleton',
  category: 'atom',
  description: 'Loading placeholder that mimics content shape.',
  anatomy: 'Animated placeholder block',
  variants: [
    { name: 'text', background: 'gray-200', text: 'N/A' },
    { name: 'circular', background: 'gray-200', text: 'N/A' },
    { name: 'rectangular', background: 'gray-200', text: 'N/A' },
  ],
  notes: ['Background: gray-200 (#E5E7EB)', 'Animation: pulse (1.5s ease-in-out infinite)', 'Border radius: text=4px, circular=full, rectangular=8px'],
};

const sliderSpec: ComponentSpec = {
  id: 'slider',
  name: 'Slider',
  category: 'atom',
  description: 'Range input for selecting numeric values.',
  anatomy: 'Track + Filled track + Thumb',
  elements: [
    { name: 'track', description: 'Background track', styles: { 'height': '4px', 'background': 'gray-200', 'border-radius': 'full' } },
    { name: 'fill', description: 'Filled portion', styles: { 'height': '4px', 'background': 'primary', 'border-radius': 'full' } },
    { name: 'thumb', description: 'Draggable handle', styles: { 'width': '20px', 'height': '20px', 'background': 'primary', 'border-radius': 'full', 'box-shadow': 'shadow-sm' } },
  ],
  states: [
    { name: 'hover', description: 'Thumb hovered', css: { 'transform': 'scale(1.1)' }, transition: 'transition-fast (150ms)' },
    { name: 'active', description: 'Thumb being dragged', css: { 'transform': 'scale(1.2)' } },
    { name: 'disabled', description: 'Not interactive', css: { 'opacity': '0.5', 'cursor': 'not-allowed' } },
  ],
  a11y: { role: 'slider', keyboard: ['Arrow keys to adjust value'], ariaProps: ['aria-valuemin', 'aria-valuemax', 'aria-valuenow'] },
};

const selectSpec: ComponentSpec = {
  id: 'select',
  name: 'Select',
  category: 'atom',
  description: 'Dropdown selection control for choosing from a list.',
  anatomy: 'Trigger + Dropdown menu + Options',
  defaults: { size: 'md' },
  sizes: [
    { name: 'sm', padding: 'space-1 space-2 (4px 8px)', fontSize: 'font-size-xs (12px)', borderRadius: 'radius-md (6px)' },
    { name: 'md', padding: 'space-2 space-3 (8px 12px)', fontSize: 'font-size-sm (14px)', borderRadius: 'radius-md (6px)' },
    { name: 'lg', padding: 'space-3 space-4 (12px 16px)', fontSize: 'font-size-base (16px)', borderRadius: 'radius-md (6px)' },
  ],
  states: [
    { name: 'default', description: 'Closed state', css: { 'border': '1px solid border-default', 'background': 'bg-primary' } },
    { name: 'open', description: 'Dropdown visible', css: { 'border-color': 'primary', 'box-shadow': 'focus-ring' } },
    { name: 'disabled', description: 'Not interactive', css: { 'opacity': '0.5', 'cursor': 'not-allowed' } },
  ],
  a11y: { role: 'listbox / combobox', keyboard: ['Arrow keys to navigate', 'Enter to select', 'Escape to close'], ariaProps: ['aria-expanded', 'aria-selected'] },
  notes: ['Dropdown z-index: z-dropdown (1000)', 'Menu background: surface-card, shadow: shadow-lg', 'Option hover: bg-secondary', 'Option selected: bg primary-lighter, text primary'],
};

const textFieldSpec: ComponentSpec = {
  id: 'text-field',
  name: 'Text Field',
  category: 'atom',
  description: 'Labeled input with built-in label, hint, and error display.',
  anatomy: 'Label + Input + Hint/Error text',
  notes: [
    'Combines Label + Input + Hint/Error in one component',
    'Label: font-size 14px, font-weight medium (500), color text-primary, margin-bottom 4px',
    'Input: same spec as Input atom',
    'Required indicator: color danger',
    'Gap between elements: 4px',
  ],
};

const iconSpec: ComponentSpec = {
  id: 'icon',
  name: 'Icon',
  category: 'atom',
  description: 'SVG icon display with consistent sizing.',
  anatomy: 'SVG element',
  sizes: [
    { name: 'sm', padding: 'N/A', fontSize: 'N/A', borderRadius: 'N/A', extra: { 'width': '16px', 'height': '16px' } },
    { name: 'md', padding: 'N/A', fontSize: 'N/A', borderRadius: 'N/A', extra: { 'width': '20px', 'height': '20px' } },
    { name: 'lg', padding: 'N/A', fontSize: 'N/A', borderRadius: 'N/A', extra: { 'width': '24px', 'height': '24px' } },
  ],
  notes: ['Color: currentColor (inherits from parent)', 'Display: inline-block, vertical-align: middle', 'Fill: currentColor'],
};

const stackSpec: ComponentSpec = {
  id: 'stack',
  name: 'Stack',
  category: 'atom',
  description: 'Layout utility for vertical or horizontal stacking with consistent spacing.',
  anatomy: 'Container with directional children',
  notes: [
    'Display: flex',
    'Vertical (default): flex-direction column',
    'Horizontal: flex-direction row',
    'Spacing: gap using spacing tokens (space-1 through space-16)',
    'Align/justify: configurable',
  ],
};

const boxSpec: ComponentSpec = {
  id: 'box',
  name: 'Box',
  category: 'atom',
  description: 'Generic container with configurable padding, margin, and background.',
  anatomy: 'Container element',
  notes: [
    'A utility component for spacing and layout',
    'Padding/margin: use spacing tokens',
    'Background: any color token',
    'Border radius: any radius token',
  ],
};

const linearProgressSpec: ComponentSpec = {
  id: 'linear-progress',
  name: 'Linear Progress',
  category: 'atom',
  description: 'Horizontal progress indicator bar.',
  anatomy: 'Track + Fill bar',
  elements: [
    { name: 'track', description: 'Background bar', styles: { 'height': '4px', 'background': 'gray-200', 'border-radius': 'full', 'overflow': 'hidden' } },
    { name: 'fill', description: 'Progress fill', styles: { 'height': '100%', 'background': 'primary', 'border-radius': 'full', 'transition': 'width 250ms ease' } },
  ],
  variants: [
    { name: 'primary', background: 'gray-200', text: 'primary' },
    { name: 'success', background: 'gray-200', text: 'success' },
    { name: 'warning', background: 'gray-200', text: 'warning' },
    { name: 'danger', background: 'gray-200', text: 'danger' },
  ],
  notes: ['Indeterminate: animated sliding bar', 'Track height: 4px', 'Border radius: full on both track and fill'],
};

const circularProgressSpec: ComponentSpec = {
  id: 'circular-progress',
  name: 'Circular Progress',
  category: 'atom',
  description: 'Circular progress indicator (spinner or determinate).',
  anatomy: 'SVG circle track + circle fill',
  sizes: [
    { name: 'sm', padding: 'N/A', fontSize: 'N/A', borderRadius: 'N/A', extra: { 'width': '24px', 'height': '24px' } },
    { name: 'md', padding: 'N/A', fontSize: 'N/A', borderRadius: 'N/A', extra: { 'width': '40px', 'height': '40px' } },
    { name: 'lg', padding: 'N/A', fontSize: 'N/A', borderRadius: 'N/A', extra: { 'width': '56px', 'height': '56px' } },
  ],
  notes: ['Stroke width: 3–4px', 'Track color: gray-200', 'Fill color: primary (or variant)', 'Indeterminate: 1s linear infinite rotation'],
};

// ============================================================
// EXPORTS
// ============================================================

export const componentSpecs: ComponentSpec[] = [
  buttonSpec, inputSpec, textFieldSpec, selectSpec,
  checkboxSpec, radioSpec, switchSpec, sliderSpec,
  badgeSpec, chipSpec, avatarSpec, alertSpec,
  tooltipSpec, dividerSpec, typographySpec, iconSpec,
  skeletonSpec, linearProgressSpec, circularProgressSpec,
  stackSpec, boxSpec,
];

export function getSpec(id: string): ComponentSpec | undefined {
  return componentSpecs.find(s => s.id === id);
}
// --- END OF FILE (Molecules & Organisms coming soon) ---
