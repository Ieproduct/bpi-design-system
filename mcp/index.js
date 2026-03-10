#!/usr/bin/env node

/**
 * BPI Design System — MCP Server v2.0
 *
 * Serves design tokens AND component specifications to AI agents
 * via the Model Context Protocol (MCP).
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
 *
 * Setup (claude_desktop_config.json / .mcp.json):
 *   {
 *     "mcpServers": {
 *       "bpi-design": {
 *         "command": "node",
 *         "args": ["<path-to-project>/mcp/index.js"]
 *       }
 *     }
 *   }
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// ═══════════════════════════════════════════════════════════════════
//  TOKEN DATA
// ═══════════════════════════════════════════════════════════════════

const BRAND_COLORS = {
  primary:   { variable: "--color-brand-primary",   hex: "#E32321", usage: "Primary brand color" },
  secondary: { variable: "--color-brand-secondary", hex: "#262626", usage: "Secondary brand color" },
  accent:    { variable: "--color-brand-accent",    hex: "#0891B2", usage: "Accent/emphasis color" },
};

const SEMANTIC_COLORS = {
  primary: {
    description: "Main actions and CTAs",
    shades: {
      lighter:  { variable: "--color-primary-lighter",  light: "#FEF2F2", dark: "#3B1414" },
      light:    { variable: "--color-primary-light",     light: "#F9A8A7", dark: "#F87171" },
      main:     { variable: "--color-primary-main",      light: "#E32321", dark: "#EF4444" },
      dark:     { variable: "--color-primary-dark",      light: "#B81C1A", dark: "#FCA5A5" },
      darker:   { variable: "--color-primary-darker",    light: "#7A1312", dark: "#FEE2E2" },
      contrast: { variable: "--color-primary-contrast",  light: "#FFFFFF", dark: "#FFFFFF" },
    },
  },
  secondary: {
    description: "Supporting UI",
    shades: {
      lighter:  { variable: "--color-secondary-lighter",  light: "#F5F5F5", dark: "#1E1E1E" },
      light:    { variable: "--color-secondary-light",     light: "#A3A3A3", dark: "#A3A3A3" },
      main:     { variable: "--color-secondary-main",      light: "#262626", dark: "#D4D4D4" },
      dark:     { variable: "--color-secondary-dark",      light: "#1A1A1A", dark: "#E5E5E5" },
      darker:   { variable: "--color-secondary-darker",    light: "#0D0D0D", dark: "#F5F5F5" },
      contrast: { variable: "--color-secondary-contrast",  light: "#FFFFFF", dark: "#171717" },
    },
  },
  success: {
    description: "Positive states",
    shades: {
      lighter:  { variable: "--color-success-lighter",  light: "#ECFDF5", dark: "#052E16" },
      light:    { variable: "--color-success-light",     light: "#86EFAC", dark: "#4ADE80" },
      main:     { variable: "--color-success-main",      light: "#16A34A", dark: "#22C55E" },
      dark:     { variable: "--color-success-dark",      light: "#15803D", dark: "#86EFAC" },
      darker:   { variable: "--color-success-darker",    light: "#14532D", dark: "#DCFCE7" },
      contrast: { variable: "--color-success-contrast",  light: "#FFFFFF", dark: "#FFFFFF" },
    },
  },
  danger: {
    description: "Error states",
    shades: {
      lighter:  { variable: "--color-danger-lighter",  light: "#FEF2F2", dark: "#450A0A" },
      light:    { variable: "--color-danger-light",     light: "#FCA5A5", dark: "#F87171" },
      main:     { variable: "--color-danger-main",      light: "#DC2626", dark: "#EF4444" },
      dark:     { variable: "--color-danger-dark",      light: "#B91C1C", dark: "#FCA5A5" },
      darker:   { variable: "--color-danger-darker",    light: "#7F1D1D", dark: "#FEE2E2" },
      contrast: { variable: "--color-danger-contrast",  light: "#FFFFFF", dark: "#FFFFFF" },
    },
  },
  warning: {
    description: "Caution states",
    shades: {
      lighter:  { variable: "--color-warning-lighter",  light: "#FFFBEB", dark: "#451A03" },
      light:    { variable: "--color-warning-light",     light: "#FCD34D", dark: "#FBBF24" },
      main:     { variable: "--color-warning-main",      light: "#D97706", dark: "#F59E0B" },
      dark:     { variable: "--color-warning-dark",      light: "#B45309", dark: "#FCD34D" },
      darker:   { variable: "--color-warning-darker",    light: "#78350F", dark: "#FEF3C7" },
      contrast: { variable: "--color-warning-contrast",  light: "#FFFFFF", dark: "#171717" },
    },
  },
  info: {
    description: "Informational",
    shades: {
      lighter:  { variable: "--color-info-lighter",  light: "#F0F9FF", dark: "#082F49" },
      light:    { variable: "--color-info-light",     light: "#7DD3FC", dark: "#38BDF8" },
      main:     { variable: "--color-info-main",      light: "#0284C7", dark: "#0EA5E9" },
      dark:     { variable: "--color-info-dark",      light: "#0369A1", dark: "#7DD3FC" },
      darker:   { variable: "--color-info-darker",    light: "#0C2D48", dark: "#E0F2FE" },
      contrast: { variable: "--color-info-contrast",  light: "#FFFFFF", dark: "#FFFFFF" },
    },
  },
};

const BACKGROUND_COLORS = {
  default: { variable: "--color-bg-default", light: "#F8FAFC", dark: "#0F172A", usage: "Default page background" },
  paper:   { variable: "--color-bg-paper",   light: "#FFFFFF", dark: "#1E293B", usage: "Cards, dialogs, elevated UI" },
};

const TEXT_COLORS = {
  primary:   { variable: "--color-text-primary",   light: "#0F172A", dark: "#F1F5F9", usage: "Headings, body text" },
  secondary: { variable: "--color-text-secondary", light: "#64748B", dark: "#94A3B8", usage: "Supporting text, labels" },
  disabled:  { variable: "--color-text-disabled",  light: "#94A3B8", dark: "#64748B", usage: "Disabled/placeholder" },
};

const SURFACE_TOKENS = {
  surface:           { variable: "--color-surface",           light: "#F8FAFC", dark: "#0F172A" },
  "surface-variant": { variable: "--color-surface-variant",   light: "#F1F5F9", dark: "#1E293B" },
  "surface-hover":   { variable: "--color-surface-hover",     light: "#E2E8F0", dark: "#334155" },
  border:            { variable: "--color-border",            light: "#E2E8F0", dark: "#334155" },
  "border-strong":   { variable: "--color-border-strong",     light: "#CBD5E1", dark: "#475569" },
  sidebar:           { variable: "--color-sidebar",           light: "#F8FAFC", dark: "#0B1120" },
};

const TYPOGRAPHY = {
  families: {
    display: { variable: "--font-display", value: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
    body:    { variable: "--font-body",    value: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
    mono:    { variable: "--font-mono",    value: 'JetBrains Mono, Menlo, Monaco, "Courier New", monospace' },
    thai:    { variable: "--font-thai",    value: 'Sarabun, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
  },
  sizes: {
    xs: { variable: "--text-xs", value: "12px" }, sm: { variable: "--text-sm", value: "14px" },
    base: { variable: "--text-base", value: "16px" }, lg: { variable: "--text-lg", value: "18px" },
    xl: { variable: "--text-xl", value: "20px" }, "2xl": { variable: "--text-2xl", value: "24px" },
    "3xl": { variable: "--text-3xl", value: "30px" },
  },
  weights: {
    light: { variable: "--font-light", value: "300" }, normal: { variable: "--font-normal", value: "400" },
    medium: { variable: "--font-medium", value: "500" }, semibold: { variable: "--font-semibold", value: "600" },
    bold: { variable: "--font-bold", value: "700" },
  },
};

const SPACING = {
  1: { variable: "--spacing-1", value: "4px" }, 2: { variable: "--spacing-2", value: "8px" },
  3: { variable: "--spacing-3", value: "12px" }, 4: { variable: "--spacing-4", value: "16px" },
  5: { variable: "--spacing-5", value: "20px" }, 6: { variable: "--spacing-6", value: "24px" },
  8: { variable: "--spacing-8", value: "32px" }, 10: { variable: "--spacing-10", value: "40px" },
  12: { variable: "--spacing-12", value: "48px" }, 14: { variable: "--spacing-14", value: "56px" },
  16: { variable: "--spacing-16", value: "64px" },
};

const BORDER_RADIUS = {
  none: { variable: "--radius-none", value: "0px" }, sm: { variable: "--radius-sm", value: "4px" },
  md: { variable: "--radius-md", value: "6px" }, lg: { variable: "--radius-lg", value: "8px" },
  xl: { variable: "--radius-xl", value: "12px" }, "2xl": { variable: "--radius-2xl", value: "16px" },
  full: { variable: "--radius-full", value: "9999px" },
};

const BOX_SHADOWS = {
  xs: { variable: "--shadow-xs", value: "0 1px 2px 0 rgba(0,0,0,0.05)" },
  sm: { variable: "--shadow-sm", value: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)" },
  md: { variable: "--shadow-md", value: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)" },
  lg: { variable: "--shadow-lg", value: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)" },
  xl: { variable: "--shadow-xl", value: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" },
};

const Z_INDEX = {
  dropdown: { variable: "--z-dropdown", value: 1000 }, sticky: { variable: "--z-sticky", value: 1020 },
  fixed: { variable: "--z-fixed", value: 1030 }, "modal-backdrop": { variable: "--z-modal-backdrop", value: 1040 },
  modal: { variable: "--z-modal", value: 1050 }, popover: { variable: "--z-popover", value: 1060 },
  tooltip: { variable: "--z-tooltip", value: 1070 }, toast: { variable: "--z-toast", value: 1080 },
};

const TOKEN_CATEGORIES = [
  "brand-colors", "semantic-colors", "background-colors", "text-colors",
  "surface-tokens", "typography", "spacing", "border-radius", "box-shadows", "z-index",
];

function getCategoryData(category) {
  const map = {
    "brand-colors": BRAND_COLORS, "semantic-colors": SEMANTIC_COLORS,
    "background-colors": BACKGROUND_COLORS, "text-colors": TEXT_COLORS,
    "surface-tokens": SURFACE_TOKENS, "typography": TYPOGRAPHY,
    "spacing": SPACING, "border-radius": BORDER_RADIUS,
    "box-shadows": BOX_SHADOWS, "z-index": Z_INDEX,
  };
  return map[category] || null;
}

// ═══════════════════════════════════════════════════════════════════
//  COMPONENT SPEC DATA
// ═══════════════════════════════════════════════════════════════════

const COMPONENT_SPECS = {
  button: {
    name: "Button", category: "atom",
    description: "Interactive element that triggers actions",
    sizes: [
      { name: "sm", height: "32px", padding: "spacing-1 spacing-3", fontSize: "text-xs", iconSize: "16px" },
      { name: "md", height: "40px", padding: "spacing-2 spacing-4", fontSize: "text-sm", iconSize: "20px" },
      { name: "lg", height: "48px", padding: "spacing-3 spacing-6", fontSize: "text-base", iconSize: "24px" },
    ],
    variants: [
      { name: "contained", bg: "primary-main", text: "primary-contrast", border: "none" },
      { name: "outlined", bg: "transparent", text: "primary-main", border: "1px solid primary-main" },
      { name: "text", bg: "transparent", text: "primary-main", border: "none" },
      { name: "danger", bg: "danger-main", text: "danger-contrast", border: "none" },
      { name: "secondary", bg: "secondary-main", text: "secondary-contrast", border: "none" },
    ],
    states: [
      { name: "hover", opacity: "0.9", cursor: "pointer" },
      { name: "active", opacity: "0.8", transform: "scale(0.98)" },
      { name: "disabled", opacity: "0.5", cursor: "not-allowed" },
      { name: "focus", outline: "2px solid primary-light", outlineOffset: "2px" },
    ],
    defaults: { size: "md", variant: "contained", radius: "radius-md" },
    a11y: { role: "button", minTouchTarget: "44px", focusVisible: true },
  },
  input: {
    name: "Input", category: "atom",
    description: "Single-line text input field",
    sizes: [
      { name: "sm", height: "32px", padding: "spacing-1 spacing-2", fontSize: "text-xs" },
      { name: "md", height: "40px", padding: "spacing-2 spacing-3", fontSize: "text-sm" },
      { name: "lg", height: "48px", padding: "spacing-3 spacing-4", fontSize: "text-base" },
    ],
    variants: [
      { name: "outlined", bg: "bg-paper", border: "1px solid border" },
      { name: "filled", bg: "surface-variant", border: "none" },
    ],
    states: [
      { name: "focus", borderColor: "primary-main", shadow: "0 0 0 3px primary-lighter" },
      { name: "error", borderColor: "danger-main", shadow: "0 0 0 3px danger-lighter" },
      { name: "disabled", opacity: "0.5", bg: "surface-variant" },
    ],
    defaults: { size: "md", variant: "outlined", radius: "radius-md" },
    a11y: { role: "textbox", labelRequired: true },
  },
      { name: "outlined", bg: "bg-paper", shadow: "none", border: "1px solid border" },
      { name: "filled", bg: "surface-variant", shadow: "none", border: "none" },
    ],
    elements: [
      { name: "header", padding: "spacing-4 spacing-6", borderBottom: "1px solid border" },
      { name: "body", padding: "spacing-4 spacing-6" },
      { name: "footer", padding: "spacing-4 spacing-6", borderTop: "1px solid border" },
    ],
    defaults: { variant: "elevated", radius: "radius-lg" },
  },
      { name: "md", width: "560px", maxHeight: "80vh" },
      { name: "lg", width: "720px", maxHeight: "80vh" },
      { name: "fullscreen", width: "100vw", maxHeight: "100vh" },
    ],
    elements: [
      { name: "overlay", bg: "rgba(0,0,0,0.5)", zIndex: "z-modal-backdrop" },
      { name: "container", bg: "bg-paper", shadow: "shadow-xl", zIndex: "z-modal" },
      { name: "header", padding: "spacing-4 spacing-6", fontSize: "text-lg", fontWeight: "font-semibold" },
      { name: "body", padding: "spacing-4 spacing-6" },
      { name: "footer", padding: "spacing-4 spacing-6", gap: "spacing-3" },
    ],
    defaults: { size: "md", radius: "radius-xl" },
    a11y: { role: "dialog", ariaModal: true, focusTrap: true, escClose: true },
  },
  badge: {
    name: "Badge", category: "atom",
    description: "Small label for status or count",
    sizes: [
      { name: "sm", height: "20px", padding: "0 spacing-1", fontSize: "10px" },
      { name: "md", height: "24px", padding: "0 spacing-2", fontSize: "text-xs" },
    ],
    variants: [
      { name: "primary", bg: "primary-lighter", text: "primary-main" },
      { name: "success", bg: "success-lighter", text: "success-dark" },
      { name: "danger", bg: "danger-lighter", text: "danger-dark" },
      { name: "warning", bg: "warning-lighter", text: "warning-dark" },
      { name: "info", bg: "info-lighter", text: "info-dark" },
      { name: "neutral", bg: "surface-variant", text: "text-secondary" },
    ],
    defaults: { size: "md", variant: "primary", radius: "radius-full" },
  },
  checkbox: {
    name: "Checkbox", category: "atom",
    description: "Toggle selection control",
    sizes: [
      { name: "sm", box: "16px", fontSize: "text-xs" },
      { name: "md", box: "20px", fontSize: "text-sm" },
    ],
    states: [
      { name: "checked", bg: "primary-main", border: "primary-main", icon: "white checkmark" },
      { name: "unchecked", bg: "transparent", border: "border-strong" },
      { name: "indeterminate", bg: "primary-main", border: "primary-main", icon: "white minus" },
      { name: "disabled", opacity: "0.5" },
    ],
    defaults: { size: "md", radius: "radius-sm" },
    a11y: { role: "checkbox", minTouchTarget: "44px" },
  },
  switch: {
    name: "Switch", category: "atom",
    description: "Toggle between on and off",
    sizes: [
      { name: "sm", track: "32x18", thumb: "14px" },
      { name: "md", track: "44x24", thumb: "20px" },
    ],
    states: [
      { name: "on", trackBg: "primary-main", thumbPosition: "right" },
      { name: "off", trackBg: "border-strong", thumbPosition: "left" },
      { name: "disabled", opacity: "0.5" },
    ],
    defaults: { size: "md" },
    a11y: { role: "switch", minTouchTarget: "44px" },
  },
      { name: "contained", activeBg: "bg-paper", inactiveBg: "transparent" },
      { name: "pills", activeBg: "primary-main", activeText: "primary-contrast", radius: "radius-full" },
    ],
    elements: [
      { name: "tab", padding: "spacing-2 spacing-4", fontSize: "text-sm", fontWeight: "font-medium" },
      { name: "panel", padding: "spacing-4" },
    ],
    defaults: { variant: "underline" },
    a11y: { role: "tablist", arrowNavigation: true },
  },
  avatar: {
    name: "Avatar", category: "atom",
    description: "User profile image or initials",
    sizes: [
      { name: "xs", size: "24px", fontSize: "10px" },
      { name: "sm", size: "32px", fontSize: "text-xs" },
      { name: "md", size: "40px", fontSize: "text-sm" },
      { name: "lg", size: "48px", fontSize: "text-base" },
      { name: "xl", size: "64px", fontSize: "text-xl" },
    ],
    variants: [
      { name: "image", overflow: "hidden", objectFit: "cover" },
      { name: "initials", bg: "primary-lighter", text: "primary-main", fontWeight: "font-semibold" },
      { name: "icon", bg: "surface-variant", iconColor: "text-secondary" },
    ],
    defaults: { size: "md", radius: "radius-full" },
  },
  alert: {
    name: "Alert", category: "atom",
    description: "Contextual feedback message",
    variants: [
      { name: "success", bg: "success-lighter", border: "success-light", text: "success-dark", icon: "check-circle" },
      { name: "danger", bg: "danger-lighter", border: "danger-light", text: "danger-dark", icon: "x-circle" },
      { name: "warning", bg: "warning-lighter", border: "warning-light", text: "warning-dark", icon: "alert-triangle" },
      { name: "info", bg: "info-lighter", border: "info-light", text: "info-dark", icon: "info" },
    ],
    elements: [
      { name: "container", padding: "spacing-3 spacing-4", radius: "radius-md", borderWidth: "1px" },
      { name: "icon", size: "20px", marginRight: "spacing-3" },
      { name: "title", fontWeight: "font-semibold", fontSize: "text-sm" },
      { name: "description", fontSize: "text-sm", opacity: "0.9" },
    ],
    defaults: { variant: "info", dismissible: false },
    a11y: { role: "alert", ariaLive: "polite" },
  },
  select: {
    name: "Select", category: "atom",
    description: "Dropdown selection control",
    sizes: [
      { name: "sm", height: "32px", fontSize: "text-xs" },
      { name: "md", height: "40px", fontSize: "text-sm" },
      { name: "lg", height: "48px", fontSize: "text-base" },
    ],
    defaults: { size: "md", radius: "radius-md" },
    a11y: { role: "listbox", keyboardNavigation: true },
  },
  tooltip: {
    name: "Tooltip", category: "atom",
    description: "Contextual information on hover",
    defaults: { bg: "secondary-main", text: "secondary-contrast", fontSize: "text-xs", padding: "spacing-1 spacing-2", radius: "radius-sm", zIndex: "z-tooltip", maxWidth: "240px" },
    a11y: { role: "tooltip", delay: "300ms" },
  },
      { name: "content", padding: "spacing-4", borderTop: "1px solid border" },
      { name: "icon", size: "20px", transition: "transform 200ms" },
    ],
    defaults: { radius: "radius-md", border: "1px solid border" },
    a11y: { role: "region", ariaExpanded: true },
  },
      { name: "body-cell", padding: "spacing-3 spacing-4", fontSize: "text-sm", borderBottom: "1px solid border" },
      { name: "row-hover", bg: "surface-hover" },
      { name: "row-selected", bg: "primary-lighter" },
    ],
    defaults: { radius: "radius-lg", border: "1px solid border" },
    a11y: { role: "table", ariaSort: true },
  },
  },
  },
      { name: "active", bg: "primary-main", text: "primary-contrast" },
      { name: "inactive", bg: "transparent", text: "text-primary" },
    ],
    defaults: { gap: "spacing-1" },
    a11y: { role: "navigation", ariaLabel: "Pagination" },
  },
      { name: "md", width: "400px" },
      { name: "lg", width: "560px" },
    ],
    defaults: { size: "md", bg: "bg-paper", shadow: "shadow-xl", zIndex: "z-modal" },
    a11y: { role: "dialog", focusTrap: true, escClose: true },
  },
    a11y: { role: "status", ariaLive: "polite", autoHide: "5000ms" },
  },
      { name: "item", padding: "spacing-2 spacing-3", fontSize: "text-sm", hoverBg: "surface-hover" },
      { name: "divider", height: "1px", bg: "border", margin: "spacing-1 0" },
    ],
    a11y: { role: "menu", keyboardNavigation: true },
  },
      { name: "active", color: "text-primary", fontWeight: "font-medium" },
      { name: "separator", margin: "0 spacing-2", color: "text-disabled" },
    ],
    a11y: { role: "navigation", ariaLabel: "Breadcrumb" },
  },
  divider: {
    name: "Divider", category: "atom",
    description: "Visual separator between content",
    variants: [
      { name: "horizontal", height: "1px", width: "100%", bg: "border" },
      { name: "vertical", width: "1px", height: "100%", bg: "border" },
    ],
    defaults: { variant: "horizontal" },
  },
  skeleton: {
    name: "Skeleton", category: "atom",
    description: "Loading placeholder",
    variants: [
      { name: "text", height: "1em", radius: "radius-sm" },
      { name: "circular", radius: "radius-full" },
      { name: "rectangular", radius: "radius-md" },
    ],
    defaults: { bg: "surface-variant", animation: "pulse 1.5s ease-in-out infinite" },
  },
  slider: {
    name: "Slider", category: "atom",
    description: "Range value selector",
    elements: [
      { name: "track", height: "4px", bg: "border", radius: "radius-full" },
      { name: "fill", height: "4px", bg: "primary-main", radius: "radius-full" },
      { name: "thumb", size: "20px", bg: "primary-main", radius: "radius-full", shadow: "shadow-sm" },
    ],
    a11y: { role: "slider", minTouchTarget: "44px" },
  },
  "circular-progress": {
    name: "CircularProgress", category: "atom",
    description: "Circular loading indicator",
    sizes: [
      { name: "sm", size: "24px", strokeWidth: "3px" },
      { name: "md", size: "40px", strokeWidth: "4px" },
      { name: "lg", size: "56px", strokeWidth: "5px" },
    ],
    defaults: { color: "primary-main", trackColor: "border" },
  },
  "linear-progress": {
    name: "LinearProgress", category: "atom",
    description: "Linear loading bar",
    defaults: { height: "4px", bg: "border", fillColor: "primary-main", radius: "radius-full" },
  },
  chip: {
    name: "Chip", category: "atom",
    description: "Compact element for tags/filters",
    sizes: [
      { name: "sm", height: "24px", fontSize: "text-xs", padding: "0 spacing-2" },
      { name: "md", height: "32px", fontSize: "text-sm", padding: "0 spacing-3" },
    ],
    variants: [
      { name: "filled", bg: "surface-variant", text: "text-primary" },
      { name: "outlined", bg: "transparent", text: "text-primary", border: "1px solid border" },
    ],
    defaults: { size: "md", variant: "filled", radius: "radius-full" },
  },
  },
      { name: "helper", fontSize: "text-xs", color: "text-secondary", marginTop: "spacing-1" },
      { name: "error", fontSize: "text-xs", color: "danger-main", marginTop: "spacing-1" },
    ],
    defaults: { gap: "spacing-1" },
  },
    a11y: { role: "combobox", ariaExpanded: true, ariaAutocomplete: "list" },
  },
    a11y: { keyboardNavigation: true, ariaLabel: "Choose date" },
  },
      { name: "divider", height: "1px", bg: "border" },
    ],
    a11y: { role: "list" },
  },
  typography: {
    name: "Typography", category: "atom",
    description: "Text display component",
    variants: [
      { name: "h1", fontSize: "text-3xl", fontWeight: "font-bold", lineHeight: "1.2" },
      { name: "h2", fontSize: "text-2xl", fontWeight: "font-bold", lineHeight: "1.3" },
      { name: "h3", fontSize: "text-xl", fontWeight: "font-semibold", lineHeight: "1.4" },
      { name: "h4", fontSize: "text-lg", fontWeight: "font-semibold", lineHeight: "1.4" },
      { name: "body1", fontSize: "text-base", fontWeight: "font-normal", lineHeight: "1.6" },
      { name: "body2", fontSize: "text-sm", fontWeight: "font-normal", lineHeight: "1.5" },
      { name: "caption", fontSize: "text-xs", fontWeight: "font-normal", lineHeight: "1.4", color: "text-secondary" },
    ],
  },
  icon: {
    name: "Icon", category: "atom",
    description: "Scalable icon display",
    sizes: [
      { name: "xs", size: "16px" }, { name: "sm", size: "20px" },
      { name: "md", size: "24px" }, { name: "lg", size: "32px" },
    ],
    defaults: { size: "md", color: "currentColor" },
  },
  stack: {
    name: "Stack", category: "atom",
    description: "Flex layout helper",
    defaults: { direction: "column", gap: "spacing-2", align: "stretch" },
  },
  box: {
    name: "Box", category: "atom",
    description: "Generic container with design token props",
    defaults: { display: "block" },
  },
  "text-field": {
    name: "TextField", category: "atom",
    description: "Full text field with label, input, and helper",
    sizes: [
      { name: "sm", height: "32px", fontSize: "text-xs" },
      { name: "md", height: "40px", fontSize: "text-sm" },
      { name: "lg", height: "48px", fontSize: "text-base" },
    ],
    defaults: { size: "md", variant: "outlined", radius: "radius-md" },
  },
  radio: {
    name: "Radio", category: "atom",
    description: "Single-select radio button",
    defaults: { size: "20px", checkedColor: "primary-main", uncheckedBorder: "border-strong" },
    a11y: { role: "radio", minTouchTarget: "44px" },
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
  "Get all design tokens for a specific category",
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
    return { content: [{ type: "text", text: JSON.stringify({ name, description: color.description, shades: color.shades, usage: `Use var(--color-${name}-main) for primary shade.` }, null, 2) }] };
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
    return { content: [{ type: "text", text: JSON.stringify({ filter, count: list.length, components: list, docs: "https://ieproduct.github.io/bpi-design-system/" }, null, 2) }] };
  }
);

server.tool(
  "get_component_spec",
  "Get the full design specification for a component — sizes, variants, states, sub-elements, accessibility, defaults",
  { id: z.enum(COMPONENT_IDS).describe("Component ID (e.g., 'button', 'input', 'checkbox')") },
  async ({ id }) => {
    const spec = COMPONENT_SPECS[id];
    return { content: [{ type: "text", text: JSON.stringify({ id, ...spec, docsUrl: `https://ieproduct.github.io/bpi-design-system/components/${id}` }, null, 2) }] };
  }
);

server.tool(
  "search_specs",
  "Search component specifications by keyword",
  { query: z.string().describe("Search keyword (e.g., 'modal', 'hover', 'focus', 'navigation')") },
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
  "Generate ready-to-use CSS for a component based on its spec and BPI tokens",
  {
    component: z.enum(COMPONENT_IDS).describe("Component to generate CSS for"),
    variant: z.string().optional().describe("Specific variant (e.g., 'contained', 'outlined')"),
    size: z.string().optional().describe("Specific size (e.g., 'sm', 'md', 'lg')"),
  },
  async ({ component, variant, size }) => {
    const spec = COMPONENT_SPECS[component];
    let css = `/* BPI Design System — ${spec.name} */\n`;

    // Base styles from defaults
    if (spec.defaults) {
      css += `.bpi-${component} {\n`;
      for (const [key, val] of Object.entries(spec.defaults)) {
        if (["size", "variant", "dismissible"].includes(key)) continue;
        const cssVal = val.startsWith?.("radius-") ? `var(--${val})` :
                       val.startsWith?.("spacing-") ? `var(--${val})` :
                       val.startsWith?.("shadow-") ? `var(--${val})` :
                       val.startsWith?.("z-") ? `var(--${val})` :
                       val.startsWith?.("font-") ? `var(--${val})` :
                       val.startsWith?.("text-") ? `var(--${val})` : val;
        css += `  ${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${cssVal};\n`;
      }
      css += `}\n`;
    }

    // Size variant
    const sizeSpec = size && spec.sizes?.find(s => s.name === size);
    if (sizeSpec) {
      css += `\n.bpi-${component}--${size} {\n`;
      for (const [key, val] of Object.entries(sizeSpec)) {
        if (key === "name") continue;
        const cssVal = val.startsWith?.("spacing-") ? `var(--${val})` :
                       val.startsWith?.("text-") ? `var(--${val})` : val;
        css += `  ${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${cssVal};\n`;
      }
      css += `}\n`;
    }

    // Color variant
    const variantSpec = variant && spec.variants?.find(v => v.name === variant);
    if (variantSpec) {
      css += `\n.bpi-${component}--${variant} {\n`;
      for (const [key, val] of Object.entries(variantSpec)) {
        if (key === "name") continue;
        const cssKey = key === "bg" ? "background-color" : key === "text" ? "color" : key;
        const cssVal = val.includes("-") && !val.includes("px") && !val.includes("solid") ? `var(--color-${val})` : val;
        css += `  ${cssKey}: ${cssVal};\n`;
      }
      css += `}\n`;
    }

    // States
    if (spec.states) {
      for (const state of spec.states) {
        css += `\n.bpi-${component}:${state.name === "focus" ? "focus-visible" : state.name} {\n`;
        for (const [key, val] of Object.entries(state)) {
          if (key === "name") continue;
          const cssVal = val.includes?.("-") && !val.includes("px") && !val.includes("(") ? `var(--color-${val})` : val;
          css += `  ${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${cssVal};\n`;
        }
        css += `}\n`;
      }
    }

    return { content: [{ type: "text", text: css }] };
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

RULES:
- Always use CSS variables (var(--color-primary-main)) — never hard-code hex values
- Dark mode: class="dark" on <html> — variables auto-swap
- Component specs are REFERENCE only — each team builds own implementation
- Framework-agnostic: works with React, Vue, Angular, Svelte, plain HTML

TOKEN CATEGORIES: ${TOKEN_CATEGORIES.join(", ")}
COMPONENT SPECS: ${COMPONENT_IDS.length} atom components (molecules & organisms coming soon)

Tools: list_categories, get_tokens, get_color, search_tokens, list_components, get_component_spec, search_specs, get_css_snippet
`,
    }],
  })
);

// ── Start ────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
