export interface ColorToken {
  name: string;
  value: string;
  description?: string;
}

export interface SemanticColor {
  name: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrast: string;
  description?: string;
}

export interface BackgroundColor {
  name: string;
  value: string;
  description?: string;
}

export interface TextColor {
  name: string;
  value: string;
  description?: string;
}

export interface SpacingToken {
  step: number;
  value: string;
  pixels: number;
  description?: string;
}

export interface TypographyScale {
  size: string;
  pixels: number;
  description?: string;
}

export interface FontWeight {
  name: string;
  value: number;
  description?: string;
}

export interface BorderRadiusToken {
  name: string;
  value: string;
  pixels?: string;
  description?: string;
}

export interface BoxShadowToken {
  name: string;
  value: string;
  description?: string;
}

export interface ZIndexToken {
  name: string;
  value: number;
  description?: string;
}

// Brand Colors
export const brandColors: ColorToken[] = [
  {
    name: 'Primary',
    value: '#1E40AF',
    description: 'Primary brand color used for main actions and highlights',
  },
  {
    name: 'Secondary',
    value: '#7C3AED',
    description: 'Secondary brand color for supporting actions',
  },
  {
    name: 'Accent',
    value: '#0891B2',
    description: 'Accent color for special emphasis',
  },
];

// Semantic Colors (6 shades: lighter, light, main, dark, darker, contrast)
export const semanticColors: SemanticColor[] = [
  {
    name: 'Primary',
    lighter: '#EFF6FF',
    light: '#93C5FD',
    main: '#1E40AF',
    dark: '#1E3A8A',
    darker: '#082F4B',
    contrast: '#FFFFFF',
    description: 'For primary actions and important elements',
  },
  {
    name: 'Secondary',
    lighter: '#F5F3FF',
    light: '#C4B5FD',
    main: '#7C3AED',
    dark: '#5B21B6',
    darker: '#381355',
    contrast: '#FFFFFF',
    description: 'For secondary actions and supporting elements',
  },
  {
    name: 'Success',
    lighter: '#ECFDF5',
    light: '#86EFAC',
    main: '#16A34A',
    dark: '#15803D',
    darker: '#14532D',
    contrast: '#FFFFFF',
    description: 'Indicates successful actions or positive states',
  },
  {
    name: 'Danger',
    lighter: '#FEF2F2',
    light: '#FCA5A5',
    main: '#DC2626',
    dark: '#B91C1C',
    darker: '#7F1D1D',
    contrast: '#FFFFFF',
    description: 'Indicates dangerous actions or error states',
  },
  {
    name: 'Warning',
    lighter: '#FFFBEB',
    light: '#FCD34D',
    main: '#D97706',
    dark: '#B45309',
    darker: '#78350F',
    contrast: '#FFFFFF',
    description: 'Indicates warnings or caution states',
  },
  {
    name: 'Info',
    lighter: '#F0F9FF',
    light: '#7DD3FC',
    main: '#0284C7',
    dark: '#0369A1',
    darker: '#0C2D48',
    contrast: '#FFFFFF',
    description: 'Indicates informational messages',
  },
];

// Background Colors
export const backgroundColors: BackgroundColor[] = [
  {
    name: 'Default',
    value: '#F8FAFC',
    description: 'Default page background',
  },
  {
    name: 'Paper',
    value: '#FFFFFF',
    description: 'Elevated surface background (cards, dialogs)',
  },
];

// Text Colors
export const textColors: TextColor[] = [
  {
    name: 'Primary',
    value: '#0F172A',
    description: 'Primary text for headings and body content',
  },
  {
    name: 'Secondary',
    value: '#64748B',
    description: 'Secondary text for supporting content',
  },
  {
    name: 'Disabled',
    value: '#94A3B8',
    description: 'Disabled or placeholder text',
  },
];

// Grayscale Colors
export const grayScale: ColorToken[] = [
  {
    name: 'Gray 50',
    value: '#F9FAFB',
    description: 'Lightest gray, use for backgrounds',
  },
  {
    name: 'Gray 100',
    value: '#F3F4F6',
    description: 'Light gray for subtle backgrounds',
  },
  {
    name: 'Gray 200',
    value: '#E5E7EB',
    description: 'Light gray for borders',
  },
  {
    name: 'Gray 300',
    value: '#D1D5DB',
    description: 'Gray for borders and dividers',
  },
  {
    name: 'Gray 400',
    value: '#9CA3AF',
    description: 'Medium gray for secondary text',
  },
  {
    name: 'Gray 500',
    value: '#6B7280',
    description: 'Medium gray for body text',
  },
  {
    name: 'Gray 600',
    value: '#4B5563',
    description: 'Dark gray for headings',
  },
  {
    name: 'Gray 700',
    value: '#374151',
    description: 'Dark gray for strong emphasis',
  },
  {
    name: 'Gray 800',
    value: '#1F2937',
    description: 'Very dark gray',
  },
  {
    name: 'Gray 900',
    value: '#111827',
    description: 'Near black for text',
  },
  {
    name: 'Gray 950',
    value: '#030712',
    description: 'Darkest gray, almost black',
  },
];

// Spacing Scale
export const spacingScale: SpacingToken[] = [
  { step: 1, value: '4px', pixels: 4 },
  { step: 2, value: '8px', pixels: 8 },
  { step: 3, value: '12px', pixels: 12 },
  { step: 4, value: '16px', pixels: 16, description: 'Default spacing unit' },
  { step: 5, value: '20px', pixels: 20 },
  { step: 6, value: '24px', pixels: 24 },
  { step: 8, value: '32px', pixels: 32 },
  { step: 10, value: '40px', pixels: 40 },
  { step: 12, value: '48px', pixels: 48 },
  { step: 14, value: '56px', pixels: 56 },
  { step: 16, value: '64px', pixels: 64 },
];

// Typography - Font Families
export const fontFamilies = {
  display: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  mono: 'JetBrains Mono, Menlo, Monaco, "Courier New", monospace',
  thai: 'Sarabun, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

// Typography - Font Sizes
export const fontSizes: TypographyScale[] = [
  { size: 'xs', pixels: 12, description: 'Extra small text' },
  { size: 'sm', pixels: 14, description: 'Small text' },
  { size: 'base', pixels: 16, description: 'Base body text' },
  { size: 'lg', pixels: 18, description: 'Large text' },
  { size: 'xl', pixels: 20, description: 'Extra large text' },
  { size: '2xl', pixels: 24, description: 'Heading 3' },
  { size: '3xl', pixels: 30, description: 'Heading 2' },
];

// Typography - Font Weights
export const fontWeights: FontWeight[] = [
  { name: 'light', value: 300, description: 'Light weight' },
  { name: 'normal', value: 400, description: 'Normal/Regular weight' },
  { name: 'medium', value: 500, description: 'Medium weight' },
  { name: 'semibold', value: 600, description: 'Semibold weight' },
  { name: 'bold', value: 700, description: 'Bold weight' },
];

// Border Radius
export const borderRadius: BorderRadiusToken[] = [
  {
    name: 'none',
    value: '0',
    pixels: '0px',
    description: 'No border radius',
  },
  {
    name: 'sm',
    value: 'var(--radius-sm)',
    pixels: '4px',
    description: 'Small border radius',
  },
  {
    name: 'md',
    value: 'var(--radius-md)',
    pixels: '6px',
    description: 'Medium border radius (default)',
  },
  {
    name: 'lg',
    value: 'var(--radius-lg)',
    pixels: '8px',
    description: 'Large border radius',
  },
  {
    name: 'xl',
    value: 'var(--radius-xl)',
    pixels: '12px',
    description: 'Extra large border radius',
  },
  {
    name: '2xl',
    value: 'var(--radius-2xl)',
    pixels: '16px',
    description: 'Extra extra large border radius',
  },
  {
    name: 'full',
    value: 'var(--radius-full)',
    pixels: '9999px',
    description: 'Fully rounded (pill shape)',
  },
];

// Box Shadows
export const boxShadows: BoxShadowToken[] = [
  {
    name: 'xs',
    value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    description: 'Extra small shadow',
  },
  {
    name: 'sm',
    value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    description: 'Small shadow',
  },
  {
    name: 'md',
    value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    description: 'Medium shadow',
  },
  {
    name: 'lg',
    value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    description: 'Large shadow',
  },
  {
    name: 'xl',
    value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    description: 'Extra large shadow',
  },
];

// Z-Index Scale
export const zIndexScale: ZIndexToken[] = [
  {
    name: 'dropdown',
    value: 1000,
    description: 'Dropdowns, tooltips',
  },
  {
    name: 'sticky',
    value: 1020,
    description: 'Sticky positioned elements',
  },
  {
    name: 'fixed',
    value: 1030,
    description: 'Fixed positioned elements',
  },
  {
    name: 'modal-backdrop',
    value: 1040,
    description: 'Modal overlay/backdrop',
  },
  {
    name: 'modal',
    value: 1050,
    description: 'Modal dialog',
  },
  {
    name: 'popover',
    value: 1060,
    description: 'Popover content',
  },
  {
    name: 'tooltip',
    value: 1070,
    description: 'Tooltip text',
  },
  {
    name: 'toast',
    value: 1080,
    description: 'Toast notifications',
  },
];

// Complete tokens object for easy access
export const designTokens = {
  colors: {
    brand: brandColors,
    semantic: semanticColors,
    gray: grayScale,
    background: backgroundColors,
    text: textColors,
  },
  spacing: spacingScale,
  typography: {
    families: fontFamilies,
    sizes: fontSizes,
    weights: fontWeights,
  },
  borders: {
    radius: borderRadius,
  },
  shadows: boxShadows,
  zIndex: zIndexScale,
};

export default designTokens;
