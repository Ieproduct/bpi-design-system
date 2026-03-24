#!/usr/bin/env node

/**
 * BPI Design System — MCP Server v2.0
 *
 * Serves design tokens AND component specifications to AI agents
 * via the Model Context Protocol (MCP).
 *
 * IMPORTANT: All CSS variables use the --bpi- prefix.
 * Example: --bpi-space-2 (8px), --bpi-font-size-sm (14px), --bpi-primary (#E32321)
 *
 * Tools:
 *   - list_categories     → list token categories
 *   - get_tokens           → get tokens by category
 *   - get_color            → get a specific semantic color
 *   - search_tokens        → search tokens by keyword
 *   - list_components      → list all component specs
 *   - get_component_spec   → get full spec for a component
 *   - search_specs         → search component specs by keyword
 *   - get_css_snippet      → generate CSS from spec + tokens
 *   - get_font_setup       → get font setup instructions (TH Sarabun New via Google Fonts)
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
// ═══════════════════════════════════════════════════════════════════
//  TOKEN DATA  (all variables use --bpi- prefix)
// ═══════════════════════════════════════════════════════════════════

const BRAND_COLORS = {
  primary:   { variable: "--bpi-brand-primary",   hex: "#E32321", usage: "Primary brand color" },
  secondary: { variable: "--bpi-brand-secondary", hex: "#262626", usage: "Secondary brand color" },
  accent:    { variable: "--bpi-brand-accent",    hex: "#0891B2", usage: "Accent/emphasis color" },
};

const SEMANTIC_COLORS = {
  primary: {
    description: "Main actions and CTAs",
    shades: {
      lighter:  { variable: "--bpi-primary-lighter",  light: "#FEF2F2", dark: "#451A1A" },
      light:    { variable: "--bpi-primary-light",     light: "#FCA5A5", dark: "#DC2626" },
      main:     { variable: "--bpi-primary",           light: "#E32321", dark: "#F87171" },
      dark:     { variable: "--bpi-primary-dark",      light: "#B91C1C", dark: "#FCA5A5" },
      darker:   { variable: "--bpi-primary-darker",    light: "#7F1D1D", dark: "#FEE2E2" },
      contrast: { variable: "--bpi-primary-contrast",  light: "#FFFFFF", dark: "#1F2937" },
    },
  },
  secondary: {
    description: "Supporting UI",
    shades: {
      lighter:  { variable: "--bpi-secondary-lighter",  light: "#F5F5F5", dark: "#262626" },
      light:    { variable: "--bpi-secondary-light",     light: "#A3A3A3", dark: "#737373" },
      main:     { variable: "--bpi-secondary",           light: "#262626", dark: "#D4D4D4" },
      dark:     { variable: "--bpi-secondary-dark",      light: "#171717", dark: "#E5E5E5" },
      darker:   { variable: "--bpi-secondary-darker",    light: "#0A0A0A", dark: "#F5F5F5" },
      contrast: { variable: "--bpi-secondary-contrast",  light: "#FFFFFF", dark: "#171717" },
    },
  },  success: {
    description: "Positive states",
    shades: {
      lighter:  { variable: "--bpi-success-lighter",  light: "#F0FDF4", dark: "#052E16" },
      light:    { variable: "--bpi-success-light",     light: "#86EFAC", dark: "#16A34A" },
      main:     { variable: "--bpi-success",           light: "#16A34A", dark: "#4ADE80" },
      dark:     { variable: "--bpi-success-dark",      light: "#15803D", dark: "#86EFAC" },
      darker:   { variable: "--bpi-success-darker",    light: "#14532D", dark: "#DCFCE7" },
      contrast: { variable: "--bpi-success-contrast",  light: "#FFFFFF", dark: "#FFFFFF" },
    },
  },
  danger: {
    description: "Error states",
    shades: {
      lighter:  { variable: "--bpi-danger-lighter",  light: "#FEF2F2", dark: "#450A0A" },
      light:    { variable: "--bpi-danger-light",     light: "#FCA5A5", dark: "#DC2626" },
      main:     { variable: "--bpi-danger",           light: "#DC2626", dark: "#F87171" },
      dark:     { variable: "--bpi-danger-dark",      light: "#B91C1C", dark: "#FCA5A5" },
      darker:   { variable: "--bpi-danger-darker",    light: "#7F1D1D", dark: "#FEE2E2" },
      contrast: { variable: "--bpi-danger-contrast",  light: "#FFFFFF", dark: "#FFFFFF" },
    },
  },
  warning: {
    description: "Caution states",
    shades: {
      lighter:  { variable: "--bpi-warning-lighter",  light: "#FFFBEB", dark: "#451A03" },
      light:    { variable: "--bpi-warning-light",     light: "#FCD34D", dark: "#D97706" },
      main:     { variable: "--bpi-warning",           light: "#D97706", dark: "#FBBF24" },
      dark:     { variable: "--bpi-warning-dark",      light: "#B45309", dark: "#FCD34D" },
      darker:   { variable: "--bpi-warning-darker",    light: "#78350F", dark: "#FEF3C7" },
      contrast: { variable: "--bpi-warning-contrast",  light: "#FFFFFF", dark: "#171717" },
    },
  },  info: {
    description: "Informational",
    shades: {
      lighter:  { variable: "--bpi-info-lighter",  light: "#F0F9FF", dark: "#082F49" },
      light:    { variable: "--bpi-info-light",     light: "#7DD3FC", dark: "#0284C7" },
      main:     { variable: "--bpi-info",           light: "#0284C7", dark: "#38BDF8" },
      dark:     { variable: "--bpi-info-dark",      light: "#0369A1", dark: "#7DD3FC" },
      darker:   { variable: "--bpi-info-darker",    light: "#0C4A6E", dark: "#E0F2FE" },
      contrast: { variable: "--bpi-info-contrast",  light: "#FFFFFF", dark: "#FFFFFF" },
    },
  },
};

const BACKGROUND_COLORS = {
  default:   { variable: "--bpi-bg-default",   light: "#F8FAFC", dark: "#0F172A", usage: "Default page background" },
  primary:   { variable: "--bpi-bg-primary",   light: "#FFFFFF", dark: "#1E293B", usage: "Cards, dialogs, elevated UI" },
  secondary: { variable: "--bpi-bg-secondary", light: "#F9FAFB", dark: "#334155", usage: "Secondary surfaces" },
  tertiary:  { variable: "--bpi-bg-tertiary",  light: "#F3F4F6", dark: "#475569", usage: "Tertiary surfaces" },
};

const TEXT_COLORS = {
  primary:   { variable: "--bpi-text-primary",   light: "#0F172A", dark: "#F1F5F9", usage: "Headings, body text" },
  secondary: { variable: "--bpi-text-secondary", light: "#64748B", dark: "#94A3B8", usage: "Supporting text, labels" },
  muted:     { variable: "--bpi-text-muted",     light: "#94A3B8", dark: "#64748B", usage: "Placeholder, hints" },
  disabled:  { variable: "--bpi-text-disabled",  light: "#94A3B8", dark: "#475569", usage: "Disabled text" },
  inverse:   { variable: "--bpi-text-inverse",   light: "#FFFFFF", dark: "#0F172A", usage: "Text on dark/light bg" },
};

const SURFACE_TOKENS = {
  card:    { variable: "--bpi-surface-card",    light: "#FFFFFF", dark: "#1E293B" },
  variant: { variable: "--bpi-surface-variant", light: "#F1F5F9", dark: "#1E293B" },
  hover:   { variable: "--bpi-surface-hover",   light: "#F8FAFC", dark: "#334155" },
};
const BORDER_TOKENS = {
  default: { variable: "--bpi-border-default", light: "#E5E7EB", dark: "#334155" },
  strong:  { variable: "--bpi-border-strong",  light: "#D1D5DB", dark: "#475569" },
  focus:   { variable: "--bpi-border-focus",   light: "#E32321", dark: "#F87171" },
};

const TYPOGRAPHY = {
  families: {
    sans: { variable: "--bpi-font-family-sans", value: 'Sarabun New, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', googleFonts: "https://fonts.googleapis.com/css2?family=Sarabun+New:wght@300;400;500;600;700&display=swap" },
    mono: { variable: "--bpi-font-family-mono", value: 'JetBrains Mono, Menlo, Monaco, "Courier New", monospace' },
  },
  sizes: {
    xs:   { variable: "--bpi-font-size-xs",   value: "12px" },
    sm:   { variable: "--bpi-font-size-sm",   value: "14px" },
    base: { variable: "--bpi-font-size-base", value: "16px" },
    lg:   { variable: "--bpi-font-size-lg",   value: "18px" },
    xl:   { variable: "--bpi-font-size-xl",   value: "20px" },
    "2xl": { variable: "--bpi-font-size-2xl", value: "24px" },
    "3xl": { variable: "--bpi-font-size-3xl", value: "30px" },
  },
  weights: {
    light:    { variable: "--bpi-font-weight-light",    value: "300" },
    normal:   { variable: "--bpi-font-weight-normal",   value: "400" },
    medium:   { variable: "--bpi-font-weight-medium",   value: "500" },
    semibold: { variable: "--bpi-font-weight-semibold", value: "600" },
    bold:     { variable: "--bpi-font-weight-bold",     value: "700" },
  },
  lineHeights: {
    tight:   { variable: "--bpi-line-height-tight",   value: "1.25" },
    normal:  { variable: "--bpi-line-height-normal",  value: "1.5" },
    relaxed: { variable: "--bpi-line-height-relaxed", value: "1.75" },
  },
};
const SPACING = {
  1: { variable: "--bpi-space-1", value: "4px" },
  2: { variable: "--bpi-space-2", value: "8px" },
  3: { variable: "--bpi-space-3", value: "12px" },
  4: { variable: "--bpi-space-4", value: "16px" },
  5: { variable: "--bpi-space-5", value: "20px" },
  6: { variable: "--bpi-space-6", value: "24px" },
  8: { variable: "--bpi-space-8", value: "32px" },
  10: { variable: "--bpi-space-10", value: "40px" },
  12: { variable: "--bpi-space-12", value: "48px" },
  16: { variable: "--bpi-space-16", value: "64px" },
};

const BORDER_RADIUS = {
  none: { variable: "--bpi-radius-none", value: "0" },
  sm:   { variable: "--bpi-radius-sm",   value: "4px" },
  md:   { variable: "--bpi-radius-md",   value: "6px" },
  lg:   { variable: "--bpi-radius-lg",   value: "8px" },
  xl:   { variable: "--bpi-radius-xl",   value: "12px" },
  "2xl": { variable: "--bpi-radius-2xl", value: "16px" },
  full: { variable: "--bpi-radius-full", value: "9999px" },
};

const BOX_SHADOWS = {
  xs: { variable: "--bpi-shadow-xs", value: "0 1px 2px 0 rgba(0,0,0,0.05)" },
  sm: { variable: "--bpi-shadow-sm", value: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)" },
  md: { variable: "--bpi-shadow-md", value: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)" },
  lg: { variable: "--bpi-shadow-lg", value: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)" },
  xl: { variable: "--bpi-shadow-xl", value: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)" },
};
const Z_INDEX = {
  dropdown:       { variable: "--bpi-z-dropdown",       value: 1000 },
  sticky:         { variable: "--bpi-z-sticky",         value: 1020 },
  fixed:          { variable: "--bpi-z-fixed",          value: 1030 },
  "modal-backdrop": { variable: "--bpi-z-modal-backdrop", value: 1040 },
  modal:          { variable: "--bpi-z-modal",          value: 1050 },
  popover:        { variable: "--bpi-z-popover",        value: 1060 },
  tooltip:        { variable: "--bpi-z-tooltip",        value: 1070 },
  toast:          { variable: "--bpi-z-toast",          value: 1080 },
};

const TRANSITIONS = {
  fast:   { variable: "--bpi-transition-fast",   value: "150ms ease" },
  normal: { variable: "--bpi-transition-normal", value: "250ms ease" },
  slow:   { variable: "--bpi-transition-slow",   value: "350ms ease" },
};

const FOCUS_RING = {
  width:  { variable: "--bpi-focus-ring-width",  value: "2px" },
  offset: { variable: "--bpi-focus-ring-offset", value: "2px" },
  color:  { variable: "--bpi-focus-ring-color",  value: "rgba(227, 35, 33, 0.5)" },
};

const TOKEN_CATEGORIES = [
  "brand-colors", "semantic-colors", "background-colors", "text-colors",
  "surface-tokens", "border-tokens", "typography", "spacing",
  "border-radius", "box-shadows", "z-index", "transitions", "focus-ring",
];

function getCategoryData(category) {
  const map = {
    "brand-colors": BRAND_COLORS, "semantic-colors": SEMANTIC_COLORS,
    "background-colors": BACKGROUND_COLORS, "text-colors": TEXT_COLORS,
    "surface-tokens": SURFACE_TOKENS, "border-tokens": BORDER_TOKENS,
    "typography": TYPOGRAPHY, "spacing": SPACING,
    "border-radius": BORDER_RADIUS, "box-shadows": BOX_SHADOWS,
    "z-index": Z_INDEX, "transitions": TRANSITIONS, "focus-ring": FOCUS_RING,
  };
  return map[category] || null;
}
// ═══════════════════════════════════════════════════════════════════
//  COMPONENT SPEC DATA  (all token refs use --bpi-* prefix)
// ═══════════════════════════════════════════════════════════════════

const COMPONENT_SPECS = {
  button: {
    name: "Button", category: "atom",
    description: "Interactive element that triggers actions",
    sizes: [
      { name: "sm", height: "32px", padding: "--bpi-space-1 --bpi-space-3", fontSize: "--bpi-font-size-xs (12px)", borderRadius: "--bpi-radius-md (6px)" },
      { name: "md", height: "40px", padding: "--bpi-space-2 --bpi-space-4", fontSize: "--bpi-font-size-sm (14px)", borderRadius: "--bpi-radius-md (6px)" },
      { name: "lg", height: "48px", padding: "--bpi-space-3 --bpi-space-6", fontSize: "--bpi-font-size-base (16px)", borderRadius: "--bpi-radius-md (6px)" },
    ],
    variants: [
      { name: "contained", bg: "--bpi-primary", text: "--bpi-primary-contrast", border: "none" },
      { name: "outlined", bg: "transparent", text: "--bpi-primary", border: "1px solid --bpi-primary" },
      { name: "text", bg: "transparent", text: "--bpi-primary", border: "none" },
      { name: "danger", bg: "--bpi-danger", text: "--bpi-danger-contrast", border: "none" },
      { name: "secondary", bg: "--bpi-secondary", text: "--bpi-secondary-contrast", border: "none" },
    ],
    states: [
      { name: "hover", css: "opacity: 0.9; cursor: pointer", transition: "--bpi-transition-fast (150ms)" },
      { name: "active", css: "opacity: 0.8; transform: scale(0.98)" },
      { name: "focus-visible", css: "outline: --bpi-focus-ring-width solid --bpi-focus-ring-color; outline-offset: --bpi-focus-ring-offset" },
      { name: "disabled", css: "opacity: 0.5; cursor: not-allowed; pointer-events: none" },
    ],
    defaults: { size: "md", variant: "contained" },
    a11y: { role: "button", keyboard: ["Enter/Space to activate"], ariaProps: ["aria-disabled"] },
    notes: ["Font weight: --bpi-font-weight-semibold (600)", "Min touch target: 44px"],
  },  input: {
    name: "Input", category: "atom",
    description: "Single-line text input field",
    sizes: [
      { name: "sm", height: "32px", padding: "--bpi-space-1 --bpi-space-2", fontSize: "--bpi-font-size-xs (12px)", borderRadius: "--bpi-radius-md (6px)" },
      { name: "md", height: "40px", padding: "--bpi-space-2 --bpi-space-3", fontSize: "--bpi-font-size-sm (14px)", borderRadius: "--bpi-radius-md (6px)" },
      { name: "lg", height: "48px", padding: "--bpi-space-3 --bpi-space-4", fontSize: "--bpi-font-size-base (16px)", borderRadius: "--bpi-radius-md (6px)" },
    ],
    variants: [
      { name: "outlined", bg: "--bpi-bg-primary", text: "--bpi-text-primary", border: "1px solid --bpi-border-default" },
      { name: "filled", bg: "--bpi-surface-variant", text: "--bpi-text-primary", border: "none" },
    ],
    states: [
      { name: "focus", css: "border-color: --bpi-border-focus; box-shadow: 0 0 0 3px --bpi-primary-lighter", transition: "--bpi-transition-fast (150ms)" },
      { name: "error", css: "border-color: --bpi-danger; box-shadow: 0 0 0 3px --bpi-danger-lighter" },
      { name: "disabled", css: "opacity: 0.5; background: --bpi-surface-variant; cursor: not-allowed" },
    ],
    defaults: { size: "md", variant: "outlined" },
    a11y: { role: "textbox", keyboard: ["Tab to focus"], ariaProps: ["aria-invalid", "aria-describedby"] },
    notes: ["Placeholder color: --bpi-text-muted", "Font weight: --bpi-font-weight-normal (400)"],
  },
  "text-field": {
    name: "TextField", category: "atom",
    description: "Complete text field with label, input, and helper/error text",
    sizes: [
      { name: "sm", height: "32px (input)", fontSize: "--bpi-font-size-xs (12px)" },
      { name: "md", height: "40px (input)", fontSize: "--bpi-font-size-sm (14px)" },
      { name: "lg", height: "48px (input)", fontSize: "--bpi-font-size-base (16px)" },
    ],
    elements: [
      { name: "label", styles: "font-size: --bpi-font-size-sm (14px); font-weight: --bpi-font-weight-medium (500); color: --bpi-text-primary; margin-bottom: --bpi-space-1 (4px)" },
      { name: "helper", styles: "font-size: --bpi-font-size-xs (12px); color: --bpi-text-muted; margin-top: --bpi-space-1 (4px)" },
      { name: "error", styles: "font-size: --bpi-font-size-xs (12px); color: --bpi-danger; margin-top: --bpi-space-1 (4px)" },
    ],
    defaults: { size: "md", variant: "outlined" },
    a11y: { ariaProps: ["aria-labelledby", "aria-describedby", "aria-invalid"] },
    notes: ["Required indicator: asterisk in --bpi-danger color", "Gap: --bpi-space-1 (4px)"],
  },  select: {
    name: "Select", category: "atom",
    description: "Dropdown selection control",
    sizes: [
      { name: "sm", height: "32px", padding: "--bpi-space-1 --bpi-space-2", fontSize: "--bpi-font-size-xs (12px)" },
      { name: "md", height: "40px", padding: "--bpi-space-2 --bpi-space-3", fontSize: "--bpi-font-size-sm (14px)" },
      { name: "lg", height: "48px", padding: "--bpi-space-3 --bpi-space-4", fontSize: "--bpi-font-size-base (16px)" },
    ],
    defaults: { size: "md", borderRadius: "--bpi-radius-md (6px)" },
    a11y: { role: "combobox", keyboard: ["Arrow keys navigate", "Enter selects", "Escape closes"], ariaProps: ["aria-expanded", "aria-activedescendant"] },
    notes: ["Dropdown shadow: --bpi-shadow-lg", "Dropdown z-index: --bpi-z-dropdown (1000)", "Option hover: --bpi-surface-hover"],
  },
  checkbox: {
    name: "Checkbox", category: "atom",
    description: "Binary toggle for selecting options",
    sizes: [
      { name: "sm", box: "16px", iconSize: "12px", gap: "--bpi-space-1 (4px)" },
      { name: "md", box: "20px", iconSize: "14px", gap: "--bpi-space-2 (8px)" },
      { name: "lg", box: "24px", iconSize: "16px", gap: "--bpi-space-2 (8px)" },
    ],
    states: [
      { name: "checked", css: "background: --bpi-primary; border-color: --bpi-primary; color: --bpi-primary-contrast", transition: "--bpi-transition-fast (150ms)" },
      { name: "unchecked", css: "background: transparent; border: 2px solid --bpi-border-strong" },
      { name: "indeterminate", css: "background: --bpi-primary; border-color: --bpi-primary" },
      { name: "disabled", css: "opacity: 0.5; cursor: not-allowed" },
    ],
    defaults: { size: "md", borderRadius: "--bpi-radius-sm (4px)" },
    a11y: { role: "checkbox", keyboard: ["Space to toggle"], ariaProps: ["aria-checked", "aria-disabled"] },
    notes: ["Label font: --bpi-font-size-sm (14px), --bpi-font-weight-normal (400)"],
  },  radio: {
    name: "Radio", category: "atom",
    description: "Single selection from a group of options",
    sizes: [
      { name: "sm", circle: "16px", dotSize: "8px", gap: "--bpi-space-1 (4px)" },
      { name: "md", circle: "20px", dotSize: "10px", gap: "--bpi-space-2 (8px)" },
      { name: "lg", circle: "24px", dotSize: "12px", gap: "--bpi-space-2 (8px)" },
    ],
    states: [
      { name: "checked", css: "border-color: --bpi-primary; dot-color: --bpi-primary", transition: "--bpi-transition-fast (150ms)" },
      { name: "unchecked", css: "border: 2px solid --bpi-border-strong" },
      { name: "disabled", css: "opacity: 0.5; cursor: not-allowed" },
    ],
    defaults: { size: "md" },
    a11y: { role: "radio", keyboard: ["Arrow keys navigate group", "Space selects"], ariaProps: ["aria-checked", "aria-disabled"] },
    notes: ["Always circular: --bpi-radius-full", "Label font: --bpi-font-size-sm (14px)"],
  },
  switch: {
    name: "Switch", category: "atom",
    description: "Toggle between on and off states",
    sizes: [
      { name: "sm", track: "32×18px", thumb: "14px" },
      { name: "md", track: "40×22px", thumb: "18px" },
      { name: "lg", track: "48×26px", thumb: "22px" },
    ],
    states: [
      { name: "on", css: "track-bg: --bpi-primary; thumb-bg: --bpi-primary-contrast", transition: "--bpi-transition-fast (150ms)" },
      { name: "off", css: "track-bg: --bpi-gray-300; thumb-bg: white" },
      { name: "disabled", css: "opacity: 0.5; cursor: not-allowed" },
    ],
    defaults: { size: "md" },
    a11y: { role: "switch", keyboard: ["Space to toggle"], ariaProps: ["aria-checked", "aria-disabled"] },
    notes: ["Track/thumb radius: --bpi-radius-full", "Thumb shadow: --bpi-shadow-sm"],
  },  slider: {
    name: "Slider", category: "atom",
    description: "Range selection control",
    sizes: [
      { name: "sm", trackHeight: "4px", thumbSize: "16px" },
      { name: "md", trackHeight: "6px", thumbSize: "20px" },
      { name: "lg", trackHeight: "8px", thumbSize: "24px" },
    ],
    states: [
      { name: "default", css: "track-bg: --bpi-gray-200; filled-bg: --bpi-primary; thumb-bg: --bpi-primary" },
      { name: "hover", css: "thumb-shadow: --bpi-shadow-md", transition: "--bpi-transition-fast (150ms)" },
      { name: "disabled", css: "opacity: 0.5; cursor: not-allowed" },
    ],
    defaults: { size: "md" },
    a11y: { role: "slider", keyboard: ["Arrow keys adjust", "Home/End for min/max"], ariaProps: ["aria-valuenow", "aria-valuemin", "aria-valuemax"] },
    notes: ["Track/thumb radius: --bpi-radius-full", "Thumb shadow: --bpi-shadow-sm"],
  },
  badge: {
    name: "Badge", category: "atom",
    description: "Small status descriptor for UI elements",
    sizes: [
      { name: "sm", height: "18px", padding: "0 --bpi-space-1", fontSize: "--bpi-font-size-xs (12px)" },
      { name: "md", height: "22px", padding: "0 --bpi-space-2", fontSize: "--bpi-font-size-xs (12px)" },
      { name: "lg", height: "26px", padding: "0 --bpi-space-2", fontSize: "--bpi-font-size-sm (14px)" },
    ],
    variants: [
      { name: "primary", bg: "--bpi-primary", text: "--bpi-primary-contrast" },
      { name: "success", bg: "--bpi-success", text: "--bpi-success-contrast" },
      { name: "danger", bg: "--bpi-danger", text: "--bpi-danger-contrast" },
      { name: "warning", bg: "--bpi-warning", text: "--bpi-warning-contrast" },
      { name: "info", bg: "--bpi-info", text: "--bpi-info-contrast" },
      { name: "outlined", bg: "transparent", text: "--bpi-text-primary", border: "1px solid --bpi-border-default" },
    ],
    defaults: { size: "md", variant: "primary", borderRadius: "--bpi-radius-full" },
    notes: ["Font weight: --bpi-font-weight-semibold (600)", "Dot variant: 8px circle, no text"],
  },  chip: {
    name: "Chip", category: "atom",
    description: "Compact interactive element for tags, filters, or selections",
    sizes: [
      { name: "sm", height: "24px", padding: "0 --bpi-space-2", fontSize: "--bpi-font-size-xs (12px)" },
      { name: "md", height: "32px", padding: "0 --bpi-space-3", fontSize: "--bpi-font-size-sm (14px)" },
    ],
    variants: [
      { name: "filled", bg: "--bpi-surface-variant", text: "--bpi-text-primary" },
      { name: "outlined", bg: "transparent", text: "--bpi-text-primary", border: "1px solid --bpi-border-default" },
    ],
    states: [
      { name: "hover", css: "background: --bpi-surface-hover", transition: "--bpi-transition-fast (150ms)" },
      { name: "selected", css: "background: --bpi-primary; color: --bpi-primary-contrast" },
      { name: "disabled", css: "opacity: 0.5; cursor: not-allowed" },
    ],
    defaults: { size: "md", variant: "filled", borderRadius: "--bpi-radius-full" },
    notes: ["Remove icon: 16px, --bpi-text-secondary", "Gap: --bpi-space-1 (4px)"],
  },
  avatar: {
    name: "Avatar", category: "atom",
    description: "Visual representation of a user or entity",
    sizes: [
      { name: "sm", size: "32px", fontSize: "--bpi-font-size-xs (12px)" },
      { name: "md", size: "40px", fontSize: "--bpi-font-size-sm (14px)" },
      { name: "lg", size: "48px", fontSize: "--bpi-font-size-base (16px)" },
      { name: "xl", size: "64px", fontSize: "--bpi-font-size-xl (20px)" },
    ],
    variants: [
      { name: "circular", bg: "--bpi-primary-lighter", text: "--bpi-primary", borderRadius: "--bpi-radius-full" },
      { name: "rounded", bg: "--bpi-primary-lighter", text: "--bpi-primary", borderRadius: "--bpi-radius-lg (8px)" },
      { name: "square", bg: "--bpi-primary-lighter", text: "--bpi-primary", borderRadius: "--bpi-radius-md (6px)" },
    ],
    defaults: { size: "md", variant: "circular" },
    notes: ["Initials font weight: --bpi-font-weight-semibold (600)", "Image object-fit: cover"],
  },  alert: {
    name: "Alert", category: "atom",
    description: "Contextual feedback messages for user actions",
    variants: [
      { name: "success", bg: "--bpi-success-lighter", text: "--bpi-success-dark", border: "1px solid --bpi-success-light" },
      { name: "danger", bg: "--bpi-danger-lighter", text: "--bpi-danger-dark", border: "1px solid --bpi-danger-light" },
      { name: "warning", bg: "--bpi-warning-lighter", text: "--bpi-warning-dark", border: "1px solid --bpi-warning-light" },
      { name: "info", bg: "--bpi-info-lighter", text: "--bpi-info-dark", border: "1px solid --bpi-info-light" },
    ],
    elements: [
      { name: "container", styles: "padding: --bpi-space-3 --bpi-space-4; border-radius: --bpi-radius-lg (8px); gap: --bpi-space-3 (12px)" },
      { name: "icon", styles: "size: 20px; flex-shrink: 0" },
      { name: "title", styles: "font-size: --bpi-font-size-sm (14px); font-weight: --bpi-font-weight-semibold (600)" },
      { name: "message", styles: "font-size: --bpi-font-size-sm (14px); font-weight: --bpi-font-weight-normal (400)" },
    ],
    defaults: { variant: "info" },
    a11y: { role: "alert", ariaProps: ["aria-live=polite"] },
  },
  tooltip: {
    name: "Tooltip", category: "atom",
    description: "Informative popup that appears on hover or focus",
    elements: [
      { name: "container", styles: "background: --bpi-gray-800; color: --bpi-text-inverse; padding: --bpi-space-1 --bpi-space-2; border-radius: --bpi-radius-sm (4px); font-size: --bpi-font-size-xs (12px); max-width: 200px" },
    ],
    defaults: { placement: "top" },
    a11y: { role: "tooltip", keyboard: ["Escape to dismiss"] },
    notes: ["Z-index: --bpi-z-tooltip (1070)", "Shadow: --bpi-shadow-md", "Show delay: 200ms", "Transition: --bpi-transition-fast (150ms)"],
  },  divider: {
    name: "Divider", category: "atom",
    description: "Visual separator between content sections",
    variants: [
      { name: "horizontal", styles: "height: 1px; width: 100%; background: --bpi-border-default" },
      { name: "vertical", styles: "width: 1px; height: 100%; background: --bpi-border-default" },
    ],
    defaults: { variant: "horizontal" },
    a11y: { role: "separator", ariaProps: ["aria-orientation"] },
    notes: ["Margin: --bpi-space-4 (16px) between sections", "With text: --bpi-font-size-xs (12px), --bpi-text-muted"],
  },
  typography: {
    name: "Typography", category: "atom",
    description: "Text display component with predefined styles",
    sizes: [
      { name: "h1", fontSize: "--bpi-font-size-3xl (30px)", fontWeight: "--bpi-font-weight-bold (700)", lineHeight: "--bpi-line-height-tight (1.25)" },
      { name: "h2", fontSize: "--bpi-font-size-2xl (24px)", fontWeight: "--bpi-font-weight-bold (700)", lineHeight: "--bpi-line-height-tight (1.25)" },
      { name: "h3", fontSize: "--bpi-font-size-xl (20px)", fontWeight: "--bpi-font-weight-semibold (600)", lineHeight: "--bpi-line-height-tight (1.25)" },
      { name: "h4", fontSize: "--bpi-font-size-lg (18px)", fontWeight: "--bpi-font-weight-semibold (600)", lineHeight: "--bpi-line-height-normal (1.5)" },
      { name: "body1", fontSize: "--bpi-font-size-base (16px)", fontWeight: "--bpi-font-weight-normal (400)", lineHeight: "--bpi-line-height-normal (1.5)" },
      { name: "body2", fontSize: "--bpi-font-size-sm (14px)", fontWeight: "--bpi-font-weight-normal (400)", lineHeight: "--bpi-line-height-normal (1.5)" },
      { name: "caption", fontSize: "--bpi-font-size-xs (12px)", fontWeight: "--bpi-font-weight-normal (400)", lineHeight: "--bpi-line-height-normal (1.5)" },
      { name: "overline", fontSize: "--bpi-font-size-xs (12px)", fontWeight: "--bpi-font-weight-semibold (600)", lineHeight: "--bpi-line-height-normal (1.5)", textTransform: "uppercase", letterSpacing: "0.08em" },
    ],
    variants: [
      { name: "default", text: "--bpi-text-primary" },
      { name: "secondary", text: "--bpi-text-secondary" },
      { name: "muted", text: "--bpi-text-muted" },
      { name: "danger", text: "--bpi-danger" },
      { name: "success", text: "--bpi-success" },
    ],
    defaults: { size: "body1", variant: "default" },
    notes: ["Font family: --bpi-font-family-sans", "Mono text: --bpi-font-family-mono"],
  },
  // Icon removed — each team should use their own icon library (e.g., Lucide, Heroicons, Material Icons)
  skeleton: {
    name: "Skeleton", category: "atom",
    description: "Placeholder loading animation",
    variants: [
      { name: "text", bg: "--bpi-gray-200", borderRadius: "--bpi-radius-sm (4px)" },
      { name: "circular", bg: "--bpi-gray-200", borderRadius: "--bpi-radius-full" },
      { name: "rectangular", bg: "--bpi-gray-200", borderRadius: "--bpi-radius-md (6px)" },
    ],
    defaults: { variant: "text", animation: "pulse 1.5s ease-in-out infinite" },
    notes: ["Pulse between --bpi-gray-200 and --bpi-gray-100"],
  },
  "linear-progress": {
    name: "LinearProgress", category: "atom",
    description: "Horizontal progress indicator",
    variants: [
      { name: "primary", trackBg: "--bpi-gray-200", fillBg: "--bpi-primary" },
      { name: "success", trackBg: "--bpi-gray-200", fillBg: "--bpi-success" },
      { name: "danger", trackBg: "--bpi-gray-200", fillBg: "--bpi-danger" },
    ],
    elements: [
      { name: "track", styles: "height: 6px; border-radius: --bpi-radius-full; background: --bpi-gray-200" },
      { name: "bar", styles: "border-radius: --bpi-radius-full; transition: --bpi-transition-normal (250ms)" },
      { name: "label", styles: "font-size: --bpi-font-size-xs (12px); color: --bpi-text-secondary" },
    ],
    defaults: { variant: "primary" },
    a11y: { role: "progressbar", ariaProps: ["aria-valuenow", "aria-valuemin=0", "aria-valuemax=100"] },
    notes: ["Track sizes: 4px (sm), 6px (md), 8px (lg)"],
  },  "circular-progress": {
    name: "CircularProgress", category: "atom",
    description: "Circular progress/loading indicator",
    sizes: [
      { name: "sm", size: "24px", strokeWidth: "3px" },
      { name: "md", size: "40px", strokeWidth: "4px" },
      { name: "lg", size: "56px", strokeWidth: "5px" },
    ],
    elements: [
      { name: "track", styles: "stroke: --bpi-gray-200" },
      { name: "arc", styles: "stroke: variant color; transition: --bpi-transition-normal (250ms)" },
      { name: "label", styles: "font-size: --bpi-font-size-xs (12px); font-weight: --bpi-font-weight-semibold (600)" },
    ],
    defaults: { size: "md", color: "--bpi-primary" },
    a11y: { role: "progressbar", ariaProps: ["aria-valuenow", "aria-valuemin=0", "aria-valuemax=100"] },
    notes: ["Stroke-linecap: round"],
  },
  stack: {
    name: "Stack", category: "atom",
    description: "Layout component for arranging children with consistent spacing",
    variants: [
      { name: "horizontal", direction: "row" },
      { name: "vertical", direction: "column" },
    ],
    defaults: { variant: "vertical", gap: "--bpi-space-3 (12px)" },
    notes: ["Uses CSS gap property with --bpi-space-* tokens", "Alignment configurable via align-items/justify-content"],
  },
  box: {
    name: "Box", category: "atom",
    description: "Generic container with configurable spacing and styling",
    defaults: { display: "block" },
    notes: ["Padding: --bpi-space-*", "Background: --bpi-bg-* or --bpi-surface-*", "Border-radius: --bpi-radius-*", "Shadow: --bpi-shadow-*", "Border: --bpi-border-*"],
  },

  // ── Layout Components ──
  "app-bar": {
    name: "AppBar", category: "layout",
    description: "Top-level horizontal bar for branding, navigation links, and action buttons",
    anatomy: "Container → Logo (left) + Nav links (center/left) + Actions (right)",
    sizes: { sm: "h-48px py-8px px-16px", md: "h-56px py-12px px-24px", lg: "h-64px py-16px px-32px" },
    variants: {
      filled: { bg: "--bpi-primary", text: "--bpi-primary-contrast" },
      light: { bg: "--bpi-bg-default", text: "--bpi-text-primary", border: "--bpi-border-default" },
      transparent: { bg: "transparent", text: "--bpi-text-primary" },
    },
    elements: ["container", "logo", "nav", "nav-link", "actions"],
    defaults: { size: "md", variant: "filled", position: "sticky" },
    notes: ["Position: sticky/fixed with z-index --bpi-z-fixed (1030)", "Scrolled state: add --bpi-shadow-md", "Mobile: collapse nav to hamburger at <768px", "Nav-link hover: --bpi-surface-hover bg", "Active nav-link: --bpi-primary color + semibold weight"],
  },
  "nav-bar": {
    name: "NavBar", category: "layout",
    description: "Vertical side navigation with expandable/collapsible groups and active state indicators",
    anatomy: "Container → Header (optional) + Nav groups → Nav items + Sub-items",
    sizes: { compact: "w-64px", default: "w-240px", wide: "w-280px" },
    variants: {
      light: { bg: "--bpi-bg-default", text: "--bpi-text-primary", border: "--bpi-border-default" },
      filled: { bg: "--bpi-bg-secondary", text: "--bpi-text-primary" },
      brand: { bg: "--bpi-primary-darker", text: "--bpi-primary-contrast" },
    },
    elements: ["container", "header", "group", "group-label", "item", "item-icon", "sub-items", "collapse-toggle"],
    defaults: { size: "default", variant: "light" },
    notes: ["Compact mode: icons only, labels via tooltip", "Active item: --bpi-primary-lighter bg + --bpi-primary text", "Group labels: uppercase --bpi-font-size-xs --bpi-text-muted", "Collapsible: animate with --bpi-transition-normal", "Mobile: slide-in drawer with --bpi-z-modal overlay"],
  },
  sidebar: {
    name: "Sidebar", category: "layout",
    description: "Secondary side panel for contextual content, filters, or auxiliary navigation",
    anatomy: "Container → Header (optional) + Content area + Footer (optional)",
    sizes: { sm: "w-240px", md: "w-320px", lg: "w-400px" },
    variants: {
      default: { bg: "--bpi-bg-default", text: "--bpi-text-primary", border: "--bpi-border-default" },
      elevated: { bg: "--bpi-surface-card", text: "--bpi-text-primary", shadow: "--bpi-shadow-lg" },
      overlay: { bg: "--bpi-surface-card", text: "--bpi-text-primary", backdrop: "rgba(0,0,0,0.3)" },
    },
    elements: ["container", "header", "content", "footer", "overlay-backdrop"],
    defaults: { size: "md", variant: "default", position: "right" },
    notes: ["Overlay: backdrop + --bpi-z-modal (1050)", "Open/Close: translateX animation --bpi-transition-normal", "Header: title + close button", "Mobile: always overlay variant"],
  },
  footer: {
    name: "Footer", category: "layout",
    description: "Bottom section for copyright, links, branding, and secondary navigation",
    anatomy: "Container → Content columns + Bottom bar (copyright)",
    sizes: { compact: "min-h-48px", default: "min-h-120px", expanded: "min-h-200px" },
    variants: {
      light: { bg: "--bpi-bg-secondary", text: "--bpi-text-secondary", border: "--bpi-border-default" },
      dark: { bg: "--bpi-primary-darker", text: "--bpi-primary-contrast" },
      transparent: { bg: "transparent", text: "--bpi-text-secondary", border: "--bpi-border-default" },
    },
    elements: ["container", "content", "column", "column-title", "link", "bottom-bar"],
    defaults: { size: "default", variant: "light" },
    notes: ["margin-top: auto to push to bottom", "Compact: single-line copyright only", "Default: 2-4 columns + copyright", "Expanded: columns + social/newsletter + copyright", "Mobile: stack columns vertically"],
  },
};

const COMPONENT_IDS = Object.keys(COMPONENT_SPECS);
// ═══════════════════════════════════════════════════════════════════
//  MCP SERVER
// ═══════════════════════════════════════════════════════════════════

const server = new McpServer({
  name: "bpi-design-system",
  version: "2.0.0",
});

// ── Token Tools ──────────────────────────────────────────────────

server.tool(
  "list_categories",
  "List all available design token categories",
  {},
  async () => ({
    content: [{ type: "text", text: JSON.stringify({ categories: TOKEN_CATEGORIES, docs: "https://ieproduct.github.io/bpi-design-system/" }, null, 2) }],
  })
);

server.tool(
  "get_tokens",
  "Get all design tokens for a specific category. All variables use --bpi- prefix.",
  { category: z.enum(TOKEN_CATEGORIES).describe("Token category"), mode: z.enum(["light", "dark"]).optional().describe("Color mode filter") },
  async ({ category, mode }) => {
    const data = getCategoryData(category);
    if (!data) return { content: [{ type: "text", text: `Unknown category: ${category}` }] };
    let result = data;
    if (mode && category === "semantic-colors") {
      result = {};
      for (const [name, color] of Object.entries(data)) {
        result[name] = { description: color.description, shades: {} };
        for (const [shade, vals] of Object.entries(color.shades)) {
          result[name].shades[shade] = { variable: vals.variable, hex: vals[mode] };
        }
      }
    }
    return { content: [{ type: "text", text: JSON.stringify({ category, ...(mode ? { mode } : {}), tokens: result }, null, 2) }] };
  }
);
server.tool(
  "get_color",
  "Get a specific semantic color with all shades for both light and dark mode",
  { name: z.enum(["primary", "secondary", "success", "danger", "warning", "info"]).describe("Color name") },
  async ({ name }) => {
    const color = SEMANTIC_COLORS[name];
    return { content: [{ type: "text", text: JSON.stringify({ name, description: color.description, shades: color.shades, usage: `Use var(--bpi-${name}) for main shade.` }, null, 2) }] };
  }
);

server.tool(
  "search_tokens",
  "Search design tokens by keyword across all categories",
  { query: z.string().describe("Search keyword (e.g., 'primary', 'shadow', 'font')") },
  async ({ query }) => {
    const q = query.toLowerCase();
    const results = [];
    for (const cat of TOKEN_CATEGORIES) {
      const data = getCategoryData(cat);
      const searchObj = (obj, path = "") => {
        for (const [key, val] of Object.entries(obj)) {
          const p = path ? `${path}.${key}` : key;
          if (typeof val === "object" && val !== null && !Array.isArray(val)) {
            if (val.variable && val.variable.toLowerCase().includes(q)) results.push({ category: cat, key: p, ...val });
            else if (key.toLowerCase().includes(q)) results.push({ category: cat, key: p, data: val });
            else searchObj(val, p);
          } else if (typeof val === "string" && val.toLowerCase().includes(q)) {
            results.push({ category: cat, key: p, value: val });
          }
        }
      };
      searchObj(data);
    }
    return { content: [{ type: "text", text: JSON.stringify({ query, resultCount: results.length, results: results.slice(0, 30) }, null, 2) }] };
  }
);
// ── Component Spec Tools ─────────────────────────────────────────

server.tool(
  "list_components",
  "List all atom-level component specifications (molecules & organisms coming soon)",
  { category: z.enum(["all", "atom"]).optional().describe("Filter by category. Default: all (currently atoms only)") },
  async ({ category }) => {
    const filter = category || "all";
    const list = COMPONENT_IDS
      .map(id => ({ id, name: COMPONENT_SPECS[id].name, category: COMPONENT_SPECS[id].category, description: COMPONENT_SPECS[id].description }))
      .filter(c => filter === "all" || c.category === filter);
    return { content: [{ type: "text", text: JSON.stringify({ filter, count: list.length, components: list }, null, 2) }] };
  }
);

server.tool(
  "get_component_spec",
  "Get the full design specification for a component — sizes, variants, states, elements, accessibility, defaults. All token references use --bpi-* prefix.",
  { id: z.enum(COMPONENT_IDS).describe("Component ID (e.g., 'button', 'input', 'checkbox')") },
  async ({ id }) => {
    const spec = COMPONENT_SPECS[id];
    return { content: [{ type: "text", text: JSON.stringify({ id, ...spec, docsUrl: `https://ieproduct.github.io/bpi-design-system/components/${id}` }, null, 2) }] };
  }
);

server.tool(
  "search_specs",
  "Search component specifications by keyword",
  { query: z.string().describe("Search keyword (e.g., 'hover', 'focus', 'padding')") },
  async ({ query }) => {
    const q = query.toLowerCase();
    const results = [];
    for (const id of COMPONENT_IDS) {
      const spec = COMPONENT_SPECS[id];
      const text = JSON.stringify(spec).toLowerCase();
      if (text.includes(q)) {
        results.push({ id, name: spec.name, category: spec.category, description: spec.description });
      }
    }
    return { content: [{ type: "text", text: JSON.stringify({ query, resultCount: results.length, results }, null, 2) }] };
  }
);
// ── CSS Snippet Tool ─────────────────────────────────────────────

server.tool(
  "get_css_snippet",
  "Generate ready-to-use CSS for a component based on its spec and BPI tokens (all --bpi-* variables)",
  {
    component: z.enum(COMPONENT_IDS).describe("Component to generate CSS for"),
    variant: z.string().optional().describe("Specific variant (e.g., 'contained', 'outlined')"),
    size: z.string().optional().describe("Specific size (e.g., 'sm', 'md', 'lg')"),
  },
  async ({ component, variant, size }) => {
    const spec = COMPONENT_SPECS[component];
    let css = `/* BPI Design System — ${spec.name} */\n`;
    css += `/* All variables use --bpi-* prefix */\n\n`;

    // Base styles
    css += `.bpi-${component} {\n`;
    if (spec.defaults) {
      for (const [key, val] of Object.entries(spec.defaults)) {
        if (["size", "variant", "placement", "animation", "display"].includes(key)) continue;
        if (typeof val === "string" && val.startsWith("--bpi-")) {
          css += `  ${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: var(${val.split(' ')[0]});\n`;
        }
      }
    }
    css += `  transition: all var(--bpi-transition-fast);\n`;
    css += `}\n`;

    // Size variant
    const sizeSpec = size && spec.sizes?.find(s => s.name === size);
    if (sizeSpec) {
      css += `\n.bpi-${component}--${size} {\n`;
      for (const [key, val] of Object.entries(sizeSpec)) {
        if (key === "name") continue;
        const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (typeof val === "string" && val.includes("--bpi-")) {
          const varName = val.match(/--bpi-[a-z0-9-]+/)?.[0];
          css += `  ${cssKey}: var(${varName});\n`;
        } else {
          css += `  ${cssKey}: ${val};\n`;
        }
      }
      css += `}\n`;
    }

    // Color variant
    const variantSpec = variant && spec.variants?.find(v => v.name === variant);
    if (variantSpec) {
      css += `\n.bpi-${component}--${variant} {\n`;
      for (const [key, val] of Object.entries(variantSpec)) {
        if (key === "name") continue;
        const cssKey = key === "bg" ? "background-color" : key === "text" ? "color" : key.replace(/([A-Z])/g, '-$1').toLowerCase();
        if (typeof val === "string" && val.includes("--bpi-")) {
          const varName = val.match(/--bpi-[a-z0-9-]+/)?.[0];
          css += `  ${cssKey}: var(${varName});\n`;
        } else {
          css += `  ${cssKey}: ${val};\n`;
        }
      }
      css += `}\n`;
    }

    // States
    if (spec.states) {
      for (const state of spec.states) {
        const pseudo = state.name === "focus-visible" ? ":focus-visible" : state.name === "disabled" ? ":disabled" : `:${state.name}`;
        css += `\n.bpi-${component}${pseudo} {\n`;
        if (state.css) {
          const props = state.css.split(";").map(s => s.trim()).filter(Boolean);
          for (const prop of props) {
            const [k, ...vParts] = prop.split(":");
            const v = vParts.join(":").trim();
            if (v.includes("--bpi-")) {
              const varName = v.match(/--bpi-[a-z0-9-]+/)?.[0];
              css += `  ${k.trim()}: var(${varName});\n`;
            } else {
              css += `  ${k.trim()}: ${v};\n`;
            }
          }
        }
        css += `}\n`;
      }
    }

    return { content: [{ type: "text", text: css }] };
  }
);
// ── Font Setup Tool ──────────────────────────────────────────────

server.tool(
  "get_font_setup",
  "Get font setup instructions for BPI Design System. Returns Google Fonts link, CSS import, and font-family tokens. Primary font: TH Sarabun New.",
  {},
  async () => {
    const setup = {
      primaryFont: "TH Sarabun New (Sarabun New on Google Fonts)",
      googleFontsUrl: "https://fonts.googleapis.com/css2?family=Sarabun+New:wght@300;400;500;600;700&display=swap",
      htmlLink: `<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n<link href="https://fonts.googleapis.com/css2?family=Sarabun+New:wght@300;400;500;600;700&display=swap" rel="stylesheet" />`,
      cssImport: `@import url('https://fonts.googleapis.com/css2?family=Sarabun+New:wght@300;400;500;600;700&display=swap');`,
      cssVariable: "--bpi-font-family-sans",
      cssUsage: "font-family: var(--bpi-font-family-sans);",
      weights: {
        light: { value: 300, variable: "--bpi-font-weight-light" },
        normal: { value: 400, variable: "--bpi-font-weight-normal" },
        medium: { value: 500, variable: "--bpi-font-weight-medium" },
        semibold: { value: 600, variable: "--bpi-font-weight-semibold" },
        bold: { value: 700, variable: "--bpi-font-weight-bold" },
      },
      monoFont: {
        name: "JetBrains Mono",
        variable: "--bpi-font-family-mono",
        googleFontsUrl: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap",
      },
      notes: [
        "TH Sarabun New supports both Thai and Latin characters",
        "Always use var(--bpi-font-family-sans) — never hard-code font names",
        "Include weights 300–700 for full design system support",
      ],
    };
    return { content: [{ type: "text", text: JSON.stringify(setup, null, 2) }] };
  }
);

// ── Resource ─────────────────────────────────────────────────────

server.resource(
  "design-system-reference",
  "bpi://design-system/reference",
  async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: "text/plain",
      text: `BPI Design System v2.0 — Design Tokens + Component Specs

Documentation: https://ieproduct.github.io/bpi-design-system/

CRITICAL RULES:
- ALL CSS variables use the --bpi- prefix (e.g., var(--bpi-primary), var(--bpi-space-4))
- NEVER hard-code hex values — always use var(--bpi-*)
- Dark mode: class="dark" on <html> — variables auto-swap
- Component specs are REFERENCE only — each team builds own implementation
- Framework-agnostic: works with React, Vue, Angular, Svelte, plain HTML

TOKEN CATEGORIES: ${TOKEN_CATEGORIES.join(", ")}
COMPONENT SPECS: ${COMPONENT_IDS.length} atom components (molecules & organisms coming soon)
COMPONENTS: ${COMPONENT_IDS.join(", ")}

Font: TH Sarabun New (Google Fonts) — use get_font_setup for setup instructions
Tools: list_categories, get_tokens, get_color, search_tokens, list_components, get_component_spec, search_specs, get_css_snippet, get_font_setup
`,
    }],
  })
);

// ── Start ────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);