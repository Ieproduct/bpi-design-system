// ============================================================
// BPI Design System — Component Specifications (Atoms)
//
// TOKEN REFERENCE CONVENTION:
// All token references use the actual CSS custom property names
// with the --bpi- prefix. Example: --bpi-space-2 = 8px
//
// TOKEN CHEAT SHEET:
//   Spacing:     --bpi-space-{1,2,3,4,5,6,8,10,12,16}  → 4–64px
//   Font Size:   --bpi-font-size-{xs,sm,base,lg,xl,2xl,3xl}  → 12–30px
//   Font Weight: --bpi-font-weight-{light,normal,medium,semibold,bold}  → 300–700
//   Font Family: --bpi-font-family-{sans,mono}
//   Line Height: --bpi-line-height-{tight,normal,relaxed}  → 1.25, 1.5, 1.75
//   Radius:      --bpi-radius-{none,sm,md,lg,xl,2xl,full}  → 0–9999px
//   Shadow:      --bpi-shadow-{xs,sm,md,lg,xl}
//   Z-Index:     --bpi-z-{dropdown,sticky,fixed,modal-backdrop,modal,popover,tooltip,toast}
//   Transition:  --bpi-transition-{fast,normal,slow}  → 150ms, 250ms, 350ms
//   Focus Ring:  --bpi-focus-ring-{width,offset,color}
//   Colors:      --bpi-{primary,secondary,success,danger,warning,info} + shades
//   Text:        --bpi-text-{primary,secondary,muted,disabled,inverse}
//   Background:  --bpi-bg-{default,primary,secondary,tertiary}
//   Border:      --bpi-border-{default,strong,focus}
//   Surface:     --bpi-surface-{card,variant,hover}
// ============================================================

// --- Interfaces ---

export interface SizeSpec {
  name: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  extra?: Record<string, string>;
}

export interface VariantSpec {
  name: string;
  background?: string;
  text?: string;
  border?: string;
  hoverBg?: string;
  [key: string]: string | undefined;
}

export interface StateSpec {
  name: string;
  description: string;
  css: Record<string, string>;
  transition?: string;
}

export interface ElementSpec {
  name: string;
  description: string;
  styles: Record<string, string>;
}

export interface A11ySpec {
  role?: string;
  keyboard?: string[];
  ariaProps?: string[];
  [key: string]: unknown;
}

export interface ComponentSpec {
  id: string;
  name: string;
  category: 'atom';
  description: string;
  anatomy?: string;
  sizes?: SizeSpec[];
  variants?: VariantSpec[];
  states?: StateSpec[];
  elements?: ElementSpec[];
  defaults?: Record<string, string>;
  a11y?: A11ySpec;
  notes?: string[];
}

// ============================================================
// ATOM SPECS
// ============================================================

const buttonSpec: ComponentSpec = {
  id: 'button',
  name: 'Button',
  category: 'atom',
  description: 'Interactive element that triggers actions.',
  anatomy: 'Container + Label + Icon (optional)',
  sizes: [
    { name: 'sm', height: '32px', padding: '--bpi-space-1 --bpi-space-3', fontSize: '--bpi-font-size-xs (12px)', borderRadius: '--bpi-radius-md (6px)' },
    { name: 'md', height: '40px', padding: '--bpi-space-2 --bpi-space-4', fontSize: '--bpi-font-size-sm (14px)', borderRadius: '--bpi-radius-md (6px)' },
    { name: 'lg', height: '48px', padding: '--bpi-space-3 --bpi-space-6', fontSize: '--bpi-font-size-base (16px)', borderRadius: '--bpi-radius-md (6px)' },
  ],
  variants: [
    { name: 'contained', background: '--bpi-primary', text: '--bpi-primary-contrast', border: 'none' },
    { name: 'outlined', background: 'transparent', text: '--bpi-primary', border: '1px solid --bpi-primary' },
    { name: 'text', background: 'transparent', text: '--bpi-primary', border: 'none' },
    { name: 'danger', background: '--bpi-danger', text: '--bpi-danger-contrast', border: 'none' },
    { name: 'secondary', background: '--bpi-secondary', text: '--bpi-secondary-contrast', border: 'none' },
  ],
  states: [
    { name: 'hover', description: 'Pointer over button', css: { 'opacity': '0.9', 'cursor': 'pointer' }, transition: '--bpi-transition-fast (150ms)' },
    { name: 'active', description: 'Button pressed', css: { 'opacity': '0.8', 'transform': 'scale(0.98)' } },
    { name: 'focus-visible', description: 'Keyboard focus', css: { 'outline': '--bpi-focus-ring-width solid --bpi-focus-ring-color', 'outline-offset': '--bpi-focus-ring-offset' } },
    { name: 'disabled', description: 'Not interactive', css: { 'opacity': '0.5', 'cursor': 'not-allowed', 'pointer-events': 'none' } },
  ],
  defaults: { size: 'md', variant: 'contained' },
  a11y: { role: 'button', keyboard: ['Enter/Space to activate'], ariaProps: ['aria-disabled'] },
  notes: ['Font weight: --bpi-font-weight-semibold (600)', 'Min touch target: 44px', 'Icon size follows font-size of the size variant'],
};

const inputSpec: ComponentSpec = {
  id: 'input',
  name: 'Input',
  category: 'atom',
  description: 'Single-line text input field.',
  anatomy: 'Container + Input element + Prefix/Suffix icon (optional)',
  sizes: [
    { name: 'sm', height: '32px', padding: '--bpi-space-1 --bpi-space-2', fontSize: '--bpi-font-size-xs (12px)', borderRadius: '--bpi-radius-md (6px)' },
    { name: 'md', height: '40px', padding: '--bpi-space-2 --bpi-space-3', fontSize: '--bpi-font-size-sm (14px)', borderRadius: '--bpi-radius-md (6px)' },
    { name: 'lg', height: '48px', padding: '--bpi-space-3 --bpi-space-4', fontSize: '--bpi-font-size-base (16px)', borderRadius: '--bpi-radius-md (6px)' },
  ],
  variants: [
    { name: 'outlined', background: '--bpi-bg-primary', text: '--bpi-text-primary', border: '1px solid --bpi-border-default' },
    { name: 'filled', background: '--bpi-surface-variant', text: '--bpi-text-primary', border: 'none' },
  ],
  states: [
    { name: 'focus', description: 'Input is focused', css: { 'border-color': '--bpi-border-focus', 'box-shadow': '0 0 0 3px --bpi-primary-lighter' }, transition: '--bpi-transition-fast (150ms)' },
    { name: 'error', description: 'Validation failed', css: { 'border-color': '--bpi-danger', 'box-shadow': '0 0 0 3px --bpi-danger-lighter' } },
    { name: 'disabled', description: 'Not editable', css: { 'opacity': '0.5', 'background': '--bpi-surface-variant', 'cursor': 'not-allowed' } },
  ],
  defaults: { size: 'md', variant: 'outlined' },
  a11y: { role: 'textbox', keyboard: ['Tab to focus'], ariaProps: ['aria-invalid', 'aria-describedby'] },
  notes: ['Placeholder color: --bpi-text-muted', 'Font weight: --bpi-font-weight-normal (400)'],
};

const textFieldSpec: ComponentSpec = {
  id: 'text-field',
  name: 'TextField',
  category: 'atom',
  description: 'Complete text field with label, input, and helper/error text.',
  anatomy: 'Label + Input (same as Input atom) + Helper text / Error text',
  sizes: [
    { name: 'sm', height: '32px (input)', padding: '--bpi-space-1 --bpi-space-2', fontSize: '--bpi-font-size-xs (12px)', borderRadius: '--bpi-radius-md (6px)' },
    { name: 'md', height: '40px (input)', padding: '--bpi-space-2 --bpi-space-3', fontSize: '--bpi-font-size-sm (14px)', borderRadius: '--bpi-radius-md (6px)' },
    { name: 'lg', height: '48px (input)', padding: '--bpi-space-3 --bpi-space-4', fontSize: '--bpi-font-size-base (16px)', borderRadius: '--bpi-radius-md (6px)' },
  ],
  elements: [
    { name: 'label', description: 'Field label above input', styles: { 'font-size': '--bpi-font-size-sm (14px)', 'font-weight': '--bpi-font-weight-medium (500)', 'color': '--bpi-text-primary', 'margin-bottom': '--bpi-space-1 (4px)' } },
    { name: 'helper', description: 'Hint text below input', styles: { 'font-size': '--bpi-font-size-xs (12px)', 'color': '--bpi-text-muted', 'margin-top': '--bpi-space-1 (4px)' } },
    { name: 'error', description: 'Error message below input', styles: { 'font-size': '--bpi-font-size-xs (12px)', 'color': '--bpi-danger', 'margin-top': '--bpi-space-1 (4px)' } },
  ],
  defaults: { size: 'md', variant: 'outlined' },
  a11y: { role: 'textbox', ariaProps: ['aria-labelledby', 'aria-describedby', 'aria-invalid'] },
  notes: ['Required indicator: asterisk (*) in --bpi-danger color', 'Gap between label and input: --bpi-space-1 (4px)'],
};

const selectSpec: ComponentSpec = {
  id: 'select',
  name: 'Select',
  category: 'atom',
  description: 'Dropdown selection control.',
  anatomy: 'Container + Selected value + Dropdown icon + Options list',
  sizes: [
    { name: 'sm', height: '32px', padding: '--bpi-space-1 --bpi-space-2', fontSize: '--bpi-font-size-xs (12px)', borderRadius: '--bpi-radius-md (6px)' },
    { name: 'md', height: '40px', padding: '--bpi-space-2 --bpi-space-3', fontSize: '--bpi-font-size-sm (14px)', borderRadius: '--bpi-radius-md (6px)' },
    { name: 'lg', height: '48px', padding: '--bpi-space-3 --bpi-space-4', fontSize: '--bpi-font-size-base (16px)', borderRadius: '--bpi-radius-md (6px)' },
  ],
  variants: [
    { name: 'outlined', background: '--bpi-bg-primary', text: '--bpi-text-primary', border: '1px solid --bpi-border-default' },
    { name: 'filled', background: '--bpi-surface-variant', text: '--bpi-text-primary', border: 'none' },
  ],
  states: [
    { name: 'focus', description: 'Select is focused', css: { 'border-color': '--bpi-border-focus', 'box-shadow': '0 0 0 3px --bpi-primary-lighter' }, transition: '--bpi-transition-fast (150ms)' },
    { name: 'open', description: 'Dropdown is visible', css: { 'border-color': '--bpi-border-focus' } },
    { name: 'disabled', description: 'Not interactive', css: { 'opacity': '0.5', 'cursor': 'not-allowed' } },
  ],
  defaults: { size: 'md', variant: 'outlined' },
  a11y: { role: 'combobox', keyboard: ['Arrow keys to navigate', 'Enter to select', 'Escape to close'], ariaProps: ['aria-expanded', 'aria-activedescendant'] },
  notes: ['Dropdown icon: 20px, color --bpi-text-secondary', 'Option hover: --bpi-surface-hover', 'Dropdown shadow: --bpi-shadow-lg', 'Dropdown z-index: --bpi-z-dropdown (1000)'],
};
const checkboxSpec: ComponentSpec = {
  id: 'checkbox',
  name: 'Checkbox',
  category: 'atom',
  description: 'Binary toggle for selecting options.',
  anatomy: 'Box (indicator) + Label (optional)',
  sizes: [
    { name: 'sm', extra: { box: '16px', iconSize: '12px', gap: '--bpi-space-1 (4px)' } },
    { name: 'md', extra: { box: '20px', iconSize: '14px', gap: '--bpi-space-2 (8px)' } },
    { name: 'lg', extra: { box: '24px', iconSize: '16px', gap: '--bpi-space-2 (8px)' } },
  ],
  states: [
    { name: 'checked', description: 'Selected state', css: { 'background': '--bpi-primary', 'border-color': '--bpi-primary', 'color': '--bpi-primary-contrast' }, transition: '--bpi-transition-fast (150ms)' },
    { name: 'unchecked', description: 'Default state', css: { 'background': 'transparent', 'border': '2px solid --bpi-border-strong' } },
    { name: 'indeterminate', description: 'Partial selection', css: { 'background': '--bpi-primary', 'border-color': '--bpi-primary' } },
    { name: 'focus-visible', description: 'Keyboard focus', css: { 'outline': '--bpi-focus-ring-width solid --bpi-focus-ring-color', 'outline-offset': '--bpi-focus-ring-offset' } },
    { name: 'disabled', description: 'Not interactive', css: { 'opacity': '0.5', 'cursor': 'not-allowed' } },
  ],
  defaults: { size: 'md' },
  a11y: { role: 'checkbox', keyboard: ['Space to toggle'], ariaProps: ['aria-checked', 'aria-disabled'] },
  notes: ['Border radius of box: --bpi-radius-sm (4px)', 'Label font: --bpi-font-size-sm (14px), --bpi-font-weight-normal (400)'],
};

const radioSpec: ComponentSpec = {
  id: 'radio',
  name: 'Radio',
  category: 'atom',
  description: 'Single selection from a group of options.',
  anatomy: 'Circle (indicator) + Label (optional)',
  sizes: [
    { name: 'sm', extra: { circle: '16px', dotSize: '8px', gap: '--bpi-space-1 (4px)' } },
    { name: 'md', extra: { circle: '20px', dotSize: '10px', gap: '--bpi-space-2 (8px)' } },
    { name: 'lg', extra: { circle: '24px', dotSize: '12px', gap: '--bpi-space-2 (8px)' } },
  ],
  states: [
    { name: 'checked', description: 'Selected state', css: { 'border-color': '--bpi-primary', 'dot-color': '--bpi-primary' }, transition: '--bpi-transition-fast (150ms)' },
    { name: 'unchecked', description: 'Default state', css: { 'border': '2px solid --bpi-border-strong' } },
    { name: 'focus-visible', description: 'Keyboard focus', css: { 'outline': '--bpi-focus-ring-width solid --bpi-focus-ring-color', 'outline-offset': '--bpi-focus-ring-offset' } },
    { name: 'disabled', description: 'Not interactive', css: { 'opacity': '0.5', 'cursor': 'not-allowed' } },
  ],
  defaults: { size: 'md' },
  a11y: { role: 'radio', keyboard: ['Arrow keys to navigate group', 'Space to select'], ariaProps: ['aria-checked', 'aria-disabled'] },
  notes: ['Always circular: border-radius --bpi-radius-full', 'Label font: --bpi-font-size-sm (14px)'],
};
const switchSpec: ComponentSpec = {
  id: 'switch',
  name: 'Switch',
  category: 'atom',
  description: 'Toggle between on and off states.',
  anatomy: 'Track + Thumb + Label (optional)',
  sizes: [
    { name: 'sm', extra: { track: '32px × 18px', thumb: '14px', gap: '--bpi-space-2 (8px)' } },
    { name: 'md', extra: { track: '40px × 22px', thumb: '18px', gap: '--bpi-space-2 (8px)' } },
    { name: 'lg', extra: { track: '48px × 26px', thumb: '22px', gap: '--bpi-space-3 (12px)' } },
  ],
  states: [
    { name: 'on', description: 'Enabled state', css: { 'track-bg': '--bpi-primary', 'thumb-bg': '--bpi-primary-contrast' }, transition: '--bpi-transition-fast (150ms)' },
    { name: 'off', description: 'Disabled state', css: { 'track-bg': '--bpi-gray-300', 'thumb-bg': 'white' } },
    { name: 'focus-visible', description: 'Keyboard focus', css: { 'outline': '--bpi-focus-ring-width solid --bpi-focus-ring-color', 'outline-offset': '--bpi-focus-ring-offset' } },
    { name: 'disabled', description: 'Not interactive', css: { 'opacity': '0.5', 'cursor': 'not-allowed' } },
  ],
  defaults: { size: 'md' },
  a11y: { role: 'switch', keyboard: ['Space to toggle'], ariaProps: ['aria-checked', 'aria-disabled'] },
  notes: ['Track border-radius: --bpi-radius-full', 'Thumb border-radius: --bpi-radius-full', 'Thumb shadow: --bpi-shadow-sm'],
};

const sliderSpec: ComponentSpec = {
  id: 'slider',
  name: 'Slider',
  category: 'atom',
  description: 'Range selection control.',
  anatomy: 'Track + Filled track + Thumb + Value label (optional)',
  sizes: [
    { name: 'sm', extra: { trackHeight: '4px', thumbSize: '16px' } },
    { name: 'md', extra: { trackHeight: '6px', thumbSize: '20px' } },
    { name: 'lg', extra: { trackHeight: '8px', thumbSize: '24px' } },
  ],
  states: [
    { name: 'default', description: 'Normal state', css: { 'track-bg': '--bpi-gray-200', 'filled-bg': '--bpi-primary', 'thumb-bg': '--bpi-primary' } },
    { name: 'hover', description: 'Pointer over thumb', css: { 'thumb-shadow': '--bpi-shadow-md' }, transition: '--bpi-transition-fast (150ms)' },
    { name: 'active', description: 'Dragging thumb', css: { 'thumb-scale': '1.15' } },
    { name: 'focus-visible', description: 'Keyboard focus', css: { 'outline': '--bpi-focus-ring-width solid --bpi-focus-ring-color' } },
    { name: 'disabled', description: 'Not interactive', css: { 'opacity': '0.5', 'cursor': 'not-allowed' } },
  ],
  defaults: { size: 'md' },
  a11y: { role: 'slider', keyboard: ['Arrow keys to adjust', 'Home/End for min/max'], ariaProps: ['aria-valuenow', 'aria-valuemin', 'aria-valuemax', 'aria-disabled'] },
  notes: ['Track border-radius: --bpi-radius-full', 'Thumb border-radius: --bpi-radius-full', 'Thumb shadow: --bpi-shadow-sm'],
};
const badgeSpec: ComponentSpec = {
  id: 'badge',
  name: 'Badge',
  category: 'atom',
  description: 'Small status descriptor for UI elements.',
  anatomy: 'Container + Label/Count',
  sizes: [
    { name: 'sm', height: '18px', padding: '0 --bpi-space-1', fontSize: '--bpi-font-size-xs (12px)', borderRadius: '--bpi-radius-full' },
    { name: 'md', height: '22px', padding: '0 --bpi-space-2', fontSize: '--bpi-font-size-xs (12px)', borderRadius: '--bpi-radius-full' },
    { name: 'lg', height: '26px', padding: '0 --bpi-space-2', fontSize: '--bpi-font-size-sm (14px)', borderRadius: '--bpi-radius-full' },
  ],
  variants: [
    { name: 'primary', background: '--bpi-primary', text: '--bpi-primary-contrast' },
    { name: 'secondary', background: '--bpi-secondary', text: '--bpi-secondary-contrast' },
    { name: 'success', background: '--bpi-success', text: '--bpi-success-contrast' },
    { name: 'danger', background: '--bpi-danger', text: '--bpi-danger-contrast' },
    { name: 'warning', background: '--bpi-warning', text: '--bpi-warning-contrast' },
    { name: 'info', background: '--bpi-info', text: '--bpi-info-contrast' },
    { name: 'outlined', background: 'transparent', text: '--bpi-text-primary', border: '1px solid --bpi-border-default' },
  ],
  defaults: { size: 'md', variant: 'primary' },
  a11y: { ariaProps: ['aria-label for icon-only badges'] },
  notes: ['Font weight: --bpi-font-weight-semibold (600)', 'Dot variant: 8px circle, no text'],
};

const chipSpec: ComponentSpec = {
  id: 'chip',
  name: 'Chip',
  category: 'atom',
  description: 'Compact interactive element for tags, filters, or selections.',
  anatomy: 'Container + Label + Icon/Avatar (optional) + Remove button (optional)',
  sizes: [
    { name: 'sm', height: '24px', padding: '0 --bpi-space-2', fontSize: '--bpi-font-size-xs (12px)', borderRadius: '--bpi-radius-full' },
    { name: 'md', height: '32px', padding: '0 --bpi-space-3', fontSize: '--bpi-font-size-sm (14px)', borderRadius: '--bpi-radius-full' },
  ],
  variants: [
    { name: 'filled', background: '--bpi-surface-variant', text: '--bpi-text-primary', border: 'none' },
    { name: 'outlined', background: 'transparent', text: '--bpi-text-primary', border: '1px solid --bpi-border-default' },
  ],
  states: [
    { name: 'hover', description: 'Pointer over chip', css: { 'background': '--bpi-surface-hover' }, transition: '--bpi-transition-fast (150ms)' },
    { name: 'selected', description: 'Active filter/choice', css: { 'background': '--bpi-primary', 'color': '--bpi-primary-contrast' } },
    { name: 'focus-visible', description: 'Keyboard focus', css: { 'outline': '--bpi-focus-ring-width solid --bpi-focus-ring-color' } },
    { name: 'disabled', description: 'Not interactive', css: { 'opacity': '0.5', 'cursor': 'not-allowed' } },
  ],
  defaults: { size: 'md', variant: 'filled' },
  a11y: { keyboard: ['Enter/Space to toggle or activate', 'Delete/Backspace to remove'], ariaProps: ['aria-selected', 'aria-disabled'] },
  notes: ['Remove icon: 16px, --bpi-text-secondary', 'Gap between icon and label: --bpi-space-1 (4px)'],
};
const avatarSpec: ComponentSpec = {
  id: 'avatar',
  name: 'Avatar',
  category: 'atom',
  description: 'Visual representation of a user or entity.',
  anatomy: 'Container + Image / Initials / Fallback icon',
  sizes: [
    { name: 'sm', extra: { size: '32px', fontSize: '--bpi-font-size-xs (12px)' } },
    { name: 'md', extra: { size: '40px', fontSize: '--bpi-font-size-sm (14px)' } },
    { name: 'lg', extra: { size: '48px', fontSize: '--bpi-font-size-base (16px)' } },
    { name: 'xl', extra: { size: '64px', fontSize: '--bpi-font-size-xl (20px)' } },
  ],
  variants: [
    { name: 'circular', background: '--bpi-primary-lighter', text: '--bpi-primary' },
    { name: 'rounded', background: '--bpi-primary-lighter', text: '--bpi-primary' },
    { name: 'square', background: '--bpi-primary-lighter', text: '--bpi-primary' },
  ],
  defaults: { size: 'md', variant: 'circular' },
  a11y: { ariaProps: ['alt text for image avatars', 'aria-label for initials'] },
  notes: ['Circular: --bpi-radius-full', 'Rounded: --bpi-radius-lg (8px)', 'Square: --bpi-radius-md (6px)', 'Font weight for initials: --bpi-font-weight-semibold (600)', 'Object-fit: cover for images'],
};

const alertSpec: ComponentSpec = {
  id: 'alert',
  name: 'Alert',
  category: 'atom',
  description: 'Contextual feedback messages for user actions.',
  anatomy: 'Container + Icon + Title (optional) + Message + Close button (optional)',
  variants: [
    { name: 'success', background: '--bpi-success-lighter', text: '--bpi-success-dark', border: '1px solid --bpi-success-light' },
    { name: 'danger', background: '--bpi-danger-lighter', text: '--bpi-danger-dark', border: '1px solid --bpi-danger-light' },
    { name: 'warning', background: '--bpi-warning-lighter', text: '--bpi-warning-dark', border: '1px solid --bpi-warning-light' },
    { name: 'info', background: '--bpi-info-lighter', text: '--bpi-info-dark', border: '1px solid --bpi-info-light' },
  ],
  elements: [
    { name: 'container', description: 'Outer wrapper', styles: { 'padding': '--bpi-space-3 --bpi-space-4', 'border-radius': '--bpi-radius-lg (8px)', 'gap': '--bpi-space-3 (12px)' } },
    { name: 'icon', description: 'Status icon', styles: { 'size': '20px', 'flex-shrink': '0' } },
    { name: 'title', description: 'Alert heading', styles: { 'font-size': '--bpi-font-size-sm (14px)', 'font-weight': '--bpi-font-weight-semibold (600)' } },
    { name: 'message', description: 'Alert body text', styles: { 'font-size': '--bpi-font-size-sm (14px)', 'font-weight': '--bpi-font-weight-normal (400)' } },
    { name: 'close', description: 'Dismiss button', styles: { 'size': '20px', 'cursor': 'pointer' } },
  ],
  defaults: { variant: 'info' },
  a11y: { role: 'alert', ariaProps: ['aria-live=polite'] },
  notes: ['Display: flex, align-items: flex-start', 'Close button color inherits variant text color'],
};
const tooltipSpec: ComponentSpec = {
  id: 'tooltip',
  name: 'Tooltip',
  category: 'atom',
  description: 'Informative popup that appears on hover or focus.',
  anatomy: 'Container + Content text + Arrow',
  elements: [
    { name: 'container', description: 'Tooltip box', styles: { 'background': '--bpi-gray-800', 'color': '--bpi-text-inverse', 'padding': '--bpi-space-1 --bpi-space-2', 'border-radius': '--bpi-radius-sm (4px)', 'font-size': '--bpi-font-size-xs (12px)', 'max-width': '200px' } },
    { name: 'arrow', description: 'Pointer triangle', styles: { 'size': '6px', 'color': '--bpi-gray-800' } },
  ],
  states: [
    { name: 'visible', description: 'Tooltip is shown', css: { 'opacity': '1' }, transition: '--bpi-transition-fast (150ms)' },
    { name: 'hidden', description: 'Tooltip is hidden', css: { 'opacity': '0', 'pointer-events': 'none' } },
  ],
  defaults: { placement: 'top' },
  a11y: { role: 'tooltip', keyboard: ['Escape to dismiss'], ariaProps: ['aria-describedby on trigger'] },
  notes: ['Z-index: --bpi-z-tooltip (1070)', 'Shadow: --bpi-shadow-md', 'Placement: top, bottom, left, right', 'Delay: 200ms show, 0ms hide'],
};

const dividerSpec: ComponentSpec = {
  id: 'divider',
  name: 'Divider',
  category: 'atom',
  description: 'Visual separator between content sections.',
  anatomy: 'Line (hr element or border)',
  variants: [
    { name: 'horizontal', background: '--bpi-border-default' },
    { name: 'vertical', background: '--bpi-border-default' },
  ],
  elements: [
    { name: 'line', description: 'The divider line', styles: { 'background': '--bpi-border-default', 'height': '1px (horizontal)', 'width': '1px (vertical)' } },
  ],
  defaults: { variant: 'horizontal' },
  a11y: { role: 'separator', ariaProps: ['aria-orientation'] },
  notes: ['Margin: --bpi-space-4 (16px) when used between sections', 'With text: --bpi-font-size-xs (12px), --bpi-text-muted'],
};

const typographySpec: ComponentSpec = {
  id: 'typography',
  name: 'Typography',
  category: 'atom',
  description: 'Text display component with predefined styles.',
  anatomy: 'Text element (h1–h6, p, span)',
  sizes: [
    { name: 'h1', fontSize: '--bpi-font-size-3xl (30px)', extra: { fontWeight: '--bpi-font-weight-bold (700)', lineHeight: '--bpi-line-height-tight (1.25)' } },
    { name: 'h2', fontSize: '--bpi-font-size-2xl (24px)', extra: { fontWeight: '--bpi-font-weight-bold (700)', lineHeight: '--bpi-line-height-tight (1.25)' } },
    { name: 'h3', fontSize: '--bpi-font-size-xl (20px)', extra: { fontWeight: '--bpi-font-weight-semibold (600)', lineHeight: '--bpi-line-height-tight (1.25)' } },
    { name: 'h4', fontSize: '--bpi-font-size-lg (18px)', extra: { fontWeight: '--bpi-font-weight-semibold (600)', lineHeight: '--bpi-line-height-normal (1.5)' } },
    { name: 'body1', fontSize: '--bpi-font-size-base (16px)', extra: { fontWeight: '--bpi-font-weight-normal (400)', lineHeight: '--bpi-line-height-normal (1.5)' } },
    { name: 'body2', fontSize: '--bpi-font-size-sm (14px)', extra: { fontWeight: '--bpi-font-weight-normal (400)', lineHeight: '--bpi-line-height-normal (1.5)' } },
    { name: 'caption', fontSize: '--bpi-font-size-xs (12px)', extra: { fontWeight: '--bpi-font-weight-normal (400)', lineHeight: '--bpi-line-height-normal (1.5)' } },
    { name: 'overline', fontSize: '--bpi-font-size-xs (12px)', extra: { fontWeight: '--bpi-font-weight-semibold (600)', lineHeight: '--bpi-line-height-normal (1.5)', textTransform: 'uppercase', letterSpacing: '0.08em' } },
  ],
  variants: [
    { name: 'default', text: '--bpi-text-primary' },
    { name: 'secondary', text: '--bpi-text-secondary' },
    { name: 'muted', text: '--bpi-text-muted' },
    { name: 'danger', text: '--bpi-danger' },
    { name: 'success', text: '--bpi-success' },
  ],
  defaults: { size: 'body1', variant: 'default' },
  notes: ['Font family: --bpi-font-family-sans', 'Mono text: --bpi-font-family-mono'],
};
const iconSpec: ComponentSpec = {
  id: 'icon',
  name: 'Icon',
  category: 'atom',
  description: 'SVG icon display component.',
  anatomy: 'SVG container',
  sizes: [
    { name: 'xs', extra: { size: '16px' } },
    { name: 'sm', extra: { size: '20px' } },
    { name: 'md', extra: { size: '24px' } },
    { name: 'lg', extra: { size: '32px' } },
    { name: 'xl', extra: { size: '48px' } },
  ],
  defaults: { size: 'md' },
  a11y: { ariaProps: ['aria-hidden=true for decorative', 'aria-label for meaningful'] },
  notes: ['Color inherits from parent (currentColor)', 'Stroke-width: 1.5–2px'],
};

const skeletonSpec: ComponentSpec = {
  id: 'skeleton',
  name: 'Skeleton',
  category: 'atom',
  description: 'Placeholder loading animation.',
  anatomy: 'Animated container',
  variants: [
    { name: 'text', background: '--bpi-gray-200' },
    { name: 'circular', background: '--bpi-gray-200' },
    { name: 'rectangular', background: '--bpi-gray-200' },
  ],
  states: [
    { name: 'loading', description: 'Pulse animation', css: { 'animation': 'pulse 1.5s ease-in-out infinite', 'background': '--bpi-gray-200 → --bpi-gray-100 → --bpi-gray-200' } },
  ],
  defaults: { variant: 'text' },
  a11y: { ariaProps: ['aria-busy=true', 'aria-label=Loading'] },
  notes: ['Text variant height: --bpi-font-size-base (16px)', 'Circular: --bpi-radius-full', 'Rectangular: --bpi-radius-md (6px)'],
};
const linearProgressSpec: ComponentSpec = {
  id: 'linear-progress',
  name: 'LinearProgress',
  category: 'atom',
  description: 'Horizontal progress indicator.',
  anatomy: 'Track + Filled bar + Label (optional)',
  variants: [
    { name: 'primary', background: '--bpi-gray-200', hoverBg: '--bpi-primary' },
    { name: 'success', background: '--bpi-gray-200', hoverBg: '--bpi-success' },
    { name: 'danger', background: '--bpi-gray-200', hoverBg: '--bpi-danger' },
    { name: 'warning', background: '--bpi-gray-200', hoverBg: '--bpi-warning' },
  ],
  elements: [
    { name: 'track', description: 'Background bar', styles: { 'height': '6px', 'border-radius': '--bpi-radius-full', 'background': '--bpi-gray-200' } },
    { name: 'bar', description: 'Filled progress', styles: { 'border-radius': '--bpi-radius-full', 'transition': '--bpi-transition-normal (250ms)' } },
    { name: 'label', description: 'Percentage text', styles: { 'font-size': '--bpi-font-size-xs (12px)', 'color': '--bpi-text-secondary' } },
  ],
  defaults: { variant: 'primary' },
  a11y: { role: 'progressbar', ariaProps: ['aria-valuenow', 'aria-valuemin=0', 'aria-valuemax=100'] },
  notes: ['Indeterminate: animated sliding bar', 'Track sizes: 4px (sm), 6px (md), 8px (lg)'],
};

const circularProgressSpec: ComponentSpec = {
  id: 'circular-progress',
  name: 'CircularProgress',
  category: 'atom',
  description: 'Circular progress/loading indicator.',
  anatomy: 'SVG circle (track + arc) + Center label (optional)',
  sizes: [
    { name: 'sm', extra: { size: '24px', strokeWidth: '3px' } },
    { name: 'md', extra: { size: '40px', strokeWidth: '4px' } },
    { name: 'lg', extra: { size: '56px', strokeWidth: '5px' } },
  ],
  variants: [
    { name: 'primary', text: '--bpi-primary' },
    { name: 'secondary', text: '--bpi-secondary' },
  ],
  elements: [
    { name: 'track', description: 'Background circle', styles: { 'stroke': '--bpi-gray-200' } },
    { name: 'arc', description: 'Filled progress arc', styles: { 'stroke': 'variant color', 'transition': '--bpi-transition-normal (250ms)' } },
    { name: 'label', description: 'Center text', styles: { 'font-size': '--bpi-font-size-xs (12px)', 'font-weight': '--bpi-font-weight-semibold (600)' } },
  ],
  defaults: { size: 'md', variant: 'primary' },
  a11y: { role: 'progressbar', ariaProps: ['aria-valuenow', 'aria-valuemin=0', 'aria-valuemax=100'] },
  notes: ['Indeterminate: rotating animation', 'Stroke-linecap: round'],
};
const stackSpec: ComponentSpec = {
  id: 'stack',
  name: 'Stack',
  category: 'atom',
  description: 'Layout component for arranging children with consistent spacing.',
  anatomy: 'Flex container + Children',
  variants: [
    { name: 'horizontal', background: 'transparent' },
    { name: 'vertical', background: 'transparent' },
  ],
  elements: [
    { name: 'container', description: 'Flex wrapper', styles: { 'display': 'flex', 'gap': 'configurable (default --bpi-space-3 = 12px)' } },
  ],
  defaults: { variant: 'vertical', spacing: '--bpi-space-3 (12px)' },
  notes: ['Horizontal: flex-direction row', 'Vertical: flex-direction column', 'Wrap: flex-wrap configurable', 'Alignment: align-items, justify-content configurable', 'Spacing uses gap property with --bpi-space-* tokens'],
};

const boxSpec: ComponentSpec = {
  id: 'box',
  name: 'Box',
  category: 'atom',
  description: 'Generic container with configurable spacing and styling.',
  anatomy: 'Single div container',
  elements: [
    { name: 'container', description: 'The box itself', styles: { 'padding': 'configurable via --bpi-space-* tokens', 'background': 'configurable via --bpi-bg-* or --bpi-surface-* tokens', 'border-radius': 'configurable via --bpi-radius-* tokens', 'border': 'configurable via --bpi-border-* tokens' } },
  ],
  defaults: {},
  notes: ['Utility component — all styles are configurable', 'Use --bpi-space-* for padding/margin', 'Use --bpi-shadow-* for elevation', 'Use --bpi-radius-* for corners'],
};

// ============================================================
// EXPORTS
// ============================================================

export const componentSpecs: ComponentSpec[] = [
  buttonSpec,
  inputSpec,
  textFieldSpec,
  selectSpec,
  checkboxSpec,
  radioSpec,
  switchSpec,
  sliderSpec,
  badgeSpec,
  chipSpec,
  avatarSpec,
  alertSpec,
  tooltipSpec,
  dividerSpec,
  typographySpec,
  iconSpec,
  skeletonSpec,
  linearProgressSpec,
  circularProgressSpec,
  stackSpec,
  boxSpec,
];

export function getSpec(id: string): ComponentSpec | undefined {
  return componentSpecs.find(s => s.id === id);
}

export default componentSpecs;