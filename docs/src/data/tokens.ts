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
    value: '#E32321',
    description: 'Primary brand color used for main actions and highlights',
  },
  {
    name: 'Secondary',
    value: '#262626',
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
    lighter: '#FEF2F2',
    light: '#F9A8A7',
    main: '#E32321',
    dark: '#B81C1A',
    darker: '#7A1312',
    contrast: '#FFFFFF',
    description: 'For primary actions and important elements',
  },
  {
    name: 'Secondary',
    lighter: '#F5F5F5',
    light: '#A3A3A3',
    main: '#262626',
    dark: '#1A1A1A',
    darker: '#0D0D0D',
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
  display: 'Sarabun New, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  body: 'Sarabun New, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  mono: 'JetBrains Mono, Menlo, Monaco, "Courier New", monospace',
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

// Extended Color Palette (50–950 shades, matching Figma/Tailwind CSS v3)
export const colorScales: Record<string, Record<string, string>> = {
  red: {
    '50': '#fef2f2', '100': '#fee2e2', '200': '#fecaca', '300': '#fca5a5',
    '400': '#f87171', '500': '#ef4444', '600': '#dc2626', '700': '#b91c1c',
    '800': '#991b1b', '900': '#7f1d1d', '950': '#450a0a',
  },
  orange: {
    '50': '#fff7ed', '100': '#ffedd5', '200': '#fed7aa', '300': '#fdba74',
    '400': '#fb923c', '500': '#f97316', '600': '#ea580c', '700': '#c2410c',
    '800': '#9a3412', '900': '#7c2d12', '950': '#431407',
  },
  amber: {
    '50': '#fffbeb', '100': '#fef3c7', '200': '#fde68a', '300': '#fcd34d',
    '400': '#fbbf24', '500': '#f59e0b', '600': '#d97706', '700': '#b45309',
    '800': '#92400e', '900': '#78350f', '950': '#451a03',
  },
  yellow: {
    '50': '#fefce8', '100': '#fef9c3', '200': '#fef08a', '300': '#fde047',
    '400': '#facc15', '500': '#eab308', '600': '#ca8a04', '700': '#a16207',
    '800': '#854d0e', '900': '#713f12', '950': '#422006',
  },
  lime: {
    '50': '#f7fee7', '100': '#ecfccb', '200': '#d9f99d', '300': '#bef264',
    '400': '#a3e635', '500': '#84cc16', '600': '#65a30d', '700': '#4d7c0f',
    '800': '#3f6212', '900': '#365314', '950': '#1a2e05',
  },
  green: {
    '50': '#f0fdf4', '100': '#dcfce7', '200': '#bbf7d0', '300': '#86efac',
    '400': '#4ade80', '500': '#22c55e', '600': '#16a34a', '700': '#15803d',
    '800': '#166534', '900': '#14532d', '950': '#052e16',
  },
  emerald: {
    '50': '#ecfdf5', '100': '#d1fae5', '200': '#a7f3d0', '300': '#6ee7b7',
    '400': '#34d399', '500': '#10b981', '600': '#059669', '700': '#047857',
    '800': '#065f46', '900': '#064e3b', '950': '#022c22',
  },
  teal: {
    '50': '#f0fdfa', '100': '#ccfbf1', '200': '#99f6e4', '300': '#5eead4',
    '400': '#2dd4bf', '500': '#14b8a6', '600': '#0d9488', '700': '#0f766e',
    '800': '#115e59', '900': '#134e4a', '950': '#042f2e',
  },
  cyan: {
    '50': '#ecfeff', '100': '#cffafe', '200': '#a5f3fc', '300': '#67e8f9',
    '400': '#22d3ee', '500': '#06b6d4', '600': '#0891b2', '700': '#0e7490',
    '800': '#155e75', '900': '#164e63', '950': '#083344',
  },
  sky: {
    '50': '#f0f9ff', '100': '#e0f2fe', '200': '#bae6fd', '300': '#7dd3fc',
    '400': '#38bdf8', '500': '#0ea5e9', '600': '#0284c7', '700': '#0369a1',
    '800': '#075985', '900': '#0c4a6e', '950': '#082f49',
  },
  blue: {
    '50': '#eff6ff', '100': '#dbeafe', '200': '#bfdbfe', '300': '#93c5fd',
    '400': '#60a5fa', '500': '#3b82f6', '600': '#2563eb', '700': '#1d4ed8',
    '800': '#1e40af', '900': '#1e3a8a', '950': '#172554',
  },
  indigo: {
    '50': '#eef2ff', '100': '#e0e7ff', '200': '#c7d2fe', '300': '#a5b4fc',
    '400': '#818cf8', '500': '#6366f1', '600': '#4f46e5', '700': '#4338ca',
    '800': '#3730a3', '900': '#312e81', '950': '#1e1b4b',
  },
  violet: {
    '50': '#f5f3ff', '100': '#ede9fe', '200': '#ddd6fe', '300': '#c4b5fd',
    '400': '#a78bfa', '500': '#8b5cf6', '600': '#7c3aed', '700': '#6d28d9',
    '800': '#5b21b6', '900': '#4c1d95', '950': '#2e1065',
  },
  purple: {
    '50': '#faf5ff', '100': '#f3e8ff', '200': '#e9d5ff', '300': '#d8b4fe',
    '400': '#c084fc', '500': '#a855f7', '600': '#9333ea', '700': '#7e22ce',
    '800': '#6b21a8', '900': '#581c87', '950': '#3b0764',
  },
  fuchsia: {
    '50': '#fdf4ff', '100': '#fae8ff', '200': '#f5d0fe', '300': '#f0abfc',
    '400': '#e879f9', '500': '#d946ef', '600': '#c026d3', '700': '#a21caf',
    '800': '#86198f', '900': '#701a75', '950': '#4a044e',
  },
  pink: {
    '50': '#fdf2f8', '100': '#fce7f3', '200': '#fbcfe8', '300': '#f9a8d4',
    '400': '#f472b6', '500': '#ec4899', '600': '#db2777', '700': '#be185d',
    '800': '#9d174d', '900': '#831843', '950': '#500724',
  },
  rose: {
    '50': '#fff1f2', '100': '#ffe4e6', '200': '#fecdd3', '300': '#fda4af',
    '400': '#fb7185', '500': '#f43f5e', '600': '#e11d48', '700': '#be123c',
    '800': '#9f1239', '900': '#881337', '950': '#4c0519',
  },
  slate: {
    '50': '#f8fafc', '100': '#f1f5f9', '200': '#e2e8f0', '300': '#cbd5e1',
    '400': '#94a3b8', '500': '#64748b', '600': '#475569', '700': '#334155',
    '800': '#1e293b', '900': '#0f172a', '950': '#020617',
  },
  gray: {
    '50': '#f9fafb', '100': '#f3f4f6', '200': '#e5e7eb', '300': '#d1d5db',
    '400': '#9ca3af', '500': '#6b7280', '600': '#4b5563', '700': '#374151',
    '800': '#1f2937', '900': '#111827', '950': '#030712',
  },
  zinc: {
    '50': '#fafafa', '100': '#f4f4f5', '200': '#e4e4e7', '300': '#d4d4d8',
    '400': '#a1a1aa', '500': '#71717a', '600': '#52525b', '700': '#3f3f46',
    '800': '#27272a', '900': '#18181b', '950': '#09090b',
  },
  neutral: {
    '50': '#fafafa', '100': '#f5f5f5', '200': '#e5e5e5', '300': '#d4d4d4',
    '400': '#a3a3a3', '500': '#737373', '600': '#525252', '700': '#404040',
    '800': '#262626', '900': '#171717', '950': '#0a0a0a',
  },
  stone: {
    '50': '#fafaf9', '100': '#f5f5f4', '200': '#e7e5e4', '300': '#d6d3d1',
    '400': '#a8a29e', '500': '#78716c', '600': '#57534e', '700': '#44403c',
    '800': '#292524', '900': '#1c1917', '950': '#0c0a09',
  },
};

// ═══════════════════════════════════════════════════════════════════
// DARK MODE TOKENS
// ═══════════════════════════════════════════════════════════════════
// Dark mode uses the same CSS variable NAMES as light mode.
// The values swap automatically when html.dark class is present.
// AI agents: use the same --color-* variables — the theme toggle handles switching.
// These data exports let you inspect both sets of values.

export const darkSemanticColors: SemanticColor[] = [
  {
    name: 'Primary',
    lighter: '#3B1414',
    light: '#F87171',
    main: '#EF4444',
    dark: '#FCA5A5',
    darker: '#FEE2E2',
    contrast: '#FFFFFF',
    description: 'Primary actions — brighter on dark backgrounds',
  },
  {
    name: 'Secondary',
    lighter: '#1E1E1E',
    light: '#A3A3A3',
    main: '#D4D4D4',
    dark: '#E5E5E5',
    darker: '#F5F5F5',
    contrast: '#171717',
    description: 'Secondary actions — inverted for dark mode',
  },
  {
    name: 'Success',
    lighter: '#052E16',
    light: '#4ADE80',
    main: '#22C55E',
    dark: '#86EFAC',
    darker: '#DCFCE7',
    contrast: '#FFFFFF',
    description: 'Success states — brighter green',
  },
  {
    name: 'Danger',
    lighter: '#450A0A',
    light: '#F87171',
    main: '#EF4444',
    dark: '#FCA5A5',
    darker: '#FEE2E2',
    contrast: '#FFFFFF',
    description: 'Error states — brighter red',
  },
  {
    name: 'Warning',
    lighter: '#451A03',
    light: '#FBBF24',
    main: '#F59E0B',
    dark: '#FCD34D',
    darker: '#FEF3C7',
    contrast: '#171717',
    description: 'Warning states — brighter amber',
  },
  {
    name: 'Info',
    lighter: '#082F49',
    light: '#38BDF8',
    main: '#0EA5E9',
    dark: '#7DD3FC',
    darker: '#E0F2FE',
    contrast: '#FFFFFF',
    description: 'Info states — brighter sky blue',
  },
]

export const darkBackgroundColors: BackgroundColor[] = [
  {
    name: 'Default',
    value: '#0F172A',
    description: 'Default page background (slate-900)',
  },
  {
    name: 'Paper',
    value: '#1E293B',
    description: 'Elevated surface background (slate-800)',
  },
]

export const darkTextColors: TextColor[] = [
  {
    name: 'Primary',
    value: '#F1F5F9',
    description: 'Primary text on dark backgrounds (slate-100)',
  },
  {
    name: 'Secondary',
    value: '#94A3B8',
    description: 'Secondary text on dark backgrounds (slate-400)',
  },
  {
    name: 'Disabled',
    value: '#64748B',
    description: 'Disabled text on dark backgrounds (slate-500)',
  },
]

// Dark mode surface & utility tokens (used in CSS .dark override)
export const darkSurfaceTokens = {
  surface: '#0F172A',
  surfaceVariant: '#1E293B',
  surfaceHover: '#334155',
  border: '#334155',
  borderStrong: '#475569',
  sidebar: '#0B1120',
  codeBg: '#1E293B',
}

// Complete tokens object for easy access
export const designTokens = {
  colors: {
    brand: brandColors,
    semantic: semanticColors,
    gray: grayScale,
    background: backgroundColors,
    text: textColors,
    scales: colorScales,
  },
  darkMode: {
    semantic: darkSemanticColors,
    background: darkBackgroundColors,
    text: darkTextColors,
    surface: darkSurfaceTokens,
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
