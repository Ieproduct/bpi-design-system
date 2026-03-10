#!/usr/bin/env node

/**
 * BPI Design System — MCP Server
 *
 * Serves design tokens (colors, typography, spacing, etc.) to AI agents
 * via the Model Context Protocol (MCP).
 *
 * Usage:
 *   node mcp/index.js          # stdio transport (for Claude, Cursor, etc.)
 *
 * Add to your claude_desktop_config.json or .mcp.json:
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

// ─── Token Data ────────────────────────────────────────────────────────────

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
  surface:         { variable: "--color-surface",         light: "#F8FAFC", dark: "#0F172A" },
  "surface-variant": { variable: "--color-surface-variant", light: "#F1F5F9", dark: "#1E293B" },
  "surface-hover":   { variable: "--color-surface-hover",   light: "#E2E8F0", dark: "#334155" },
  border:          { variable: "--color-border",          light: "#E2E8F0", dark: "#334155" },
  "border-strong":   { variable: "--color-border-strong",   light: "#CBD5E1", dark: "#475569" },
  sidebar:         { variable: "--color-sidebar",         light: "#F8FAFC", dark: "#0B1120" },
};

const TYPOGRAPHY = {
  families: {
    display: { variable: "--font-display", value: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
    body:    { variable: "--font-body",    value: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
    mono:    { variable: "--font-mono",    value: 'JetBrains Mono, Menlo, Monaco, "Courier New", monospace' },
    thai:    { variable: "--font-thai",    value: 'Sarabun, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
  },
  sizes: {
    xs:   { variable: "--text-xs",   value: "12px" },
    sm:   { variable: "--text-sm",   value: "14px" },
    base: { variable: "--text-base", value: "16px" },
    lg:   { variable: "--text-lg",   value: "18px" },
    xl:   { variable: "--text-xl",   value: "20px" },
    "2xl": { variable: "--text-2xl",  value: "24px" },
    "3xl": { variable: "--text-3xl",  value: "30px" },
  },
  weights: {
    light:    { variable: "--font-light",    value: "300" },
    normal:   { variable: "--font-normal",   value: "400" },
    medium:   { variable: "--font-medium",   value: "500" },
    semibold: { variable: "--font-semibold", value: "600" },
    bold:     { variable: "--font-bold",     value: "700" },
  },
};

const SPACING = {
  1:  { variable: "--spacing-1",  value: "4px" },
  2:  { variable: "--spacing-2",  value: "8px" },
  3:  { variable: "--spacing-3",  value: "12px" },
  4:  { variable: "--spacing-4",  value: "16px" },
  5:  { variable: "--spacing-5",  value: "20px" },
  6:  { variable: "--spacing-6",  value: "24px" },
  8:  { variable: "--spacing-8",  value: "32px" },
  10: { variable: "--spacing-10", value: "40px" },
  12: { variable: "--spacing-12", value: "48px" },
  14: { variable: "--spacing-14", value: "56px" },
  16: { variable: "--spacing-16", value: "64px" },
};

const BORDER_RADIUS = {
  none: { variable: "--radius-none", value: "0px" },
  sm:   { variable: "--radius-sm",   value: "4px" },
  md:   { variable: "--radius-md",   value: "6px" },
  lg:   { variable: "--radius-lg",   value: "8px" },
  xl:   { variable: "--radius-xl",   value: "12px" },
  "2xl": { variable: "--radius-2xl",  value: "16px" },
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
  dropdown:       { variable: "--z-dropdown",       value: 1000 },
  sticky:         { variable: "--z-sticky",         value: 1020 },
  fixed:          { variable: "--z-fixed",          value: 1030 },
  "modal-backdrop": { variable: "--z-modal-backdrop", value: 1040 },
  modal:          { variable: "--z-modal",          value: 1050 },
  popover:        { variable: "--z-popover",        value: 1060 },
  tooltip:        { variable: "--z-tooltip",        value: 1070 },
  toast:          { variable: "--z-toast",          value: 1080 },
};

const CATEGORIES = [
  "brand-colors", "semantic-colors", "background-colors", "text-colors",
  "surface-tokens", "typography", "spacing", "border-radius", "box-shadows", "z-index"
];

// ─── Helper ────────────────────────────────────────────────────────────────

function getCategoryData(category) {
  switch (category) {
    case "brand-colors":      return BRAND_COLORS;
    case "semantic-colors":   return SEMANTIC_COLORS;
    case "background-colors": return BACKGROUND_COLORS;
    case "text-colors":       return TEXT_COLORS;
    case "surface-tokens":    return SURFACE_TOKENS;
    case "typography":        return TYPOGRAPHY;
    case "spacing":           return SPACING;
    case "border-radius":     return BORDER_RADIUS;
    case "box-shadows":       return BOX_SHADOWS;
    case "z-index":           return Z_INDEX;
    default:                  return null;
  }
}

// ─── MCP Server ────────────────────────────────────────────────────────────

const server = new McpServer({
  name: "bpi-design-tokens",
  version: "1.0.0",
});

// Tool: list categories
server.tool(
  "list_categories",
  "List all available design token categories",
  {},
  async () => ({
    content: [{
      type: "text",
      text: JSON.stringify({
        categories: CATEGORIES,
        docs: "https://ieproduct.github.io/bpi-design-system/",
        usage: 'Use get_tokens(category) to fetch tokens for a specific category.',
      }, null, 2),
    }],
  })
);

// Tool: get tokens by category
server.tool(
  "get_tokens",
  "Get all design tokens for a specific category. Categories: brand-colors, semantic-colors, background-colors, text-colors, surface-tokens, typography, spacing, border-radius, box-shadows, z-index",
  {
    category: z.enum(CATEGORIES).describe("Token category to retrieve"),
    mode: z.enum(["light", "dark"]).optional().describe("Color mode (light or dark). Default: both"),
  },
  async ({ category, mode }) => {
    const data = getCategoryData(category);
    if (!data) {
      return { content: [{ type: "text", text: `Unknown category: ${category}` }] };
    }

    let result = data;

    // If mode is specified and data has light/dark values, filter
    if (mode && category === "semantic-colors") {
      result = {};
      for (const [name, color] of Object.entries(data)) {
        result[name] = {
          description: color.description,
          shades: {},
        };
        for (const [shade, vals] of Object.entries(color.shades)) {
          result[name].shades[shade] = {
            variable: vals.variable,
            hex: vals[mode],
          };
        }
      }
    }

    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          category,
          ...(mode ? { mode } : {}),
          tokens: result,
          tip: "Use CSS variables like var(--color-primary-main) — never hard-code hex values.",
        }, null, 2),
      }],
    };
  }
);

// Tool: get a specific color
server.tool(
  "get_color",
  "Get a specific semantic color with all its shades (lighter, light, main, dark, darker, contrast) for both light and dark mode",
  {
    name: z.enum(["primary", "secondary", "success", "danger", "warning", "info"]).describe("Semantic color name"),
  },
  async ({ name }) => {
    const color = SEMANTIC_COLORS[name];
    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          name,
          description: color.description,
          shades: color.shades,
          usage: `Use var(--color-${name}-main) for the primary shade. The variable auto-adapts between light/dark mode.`,
        }, null, 2),
      }],
    };
  }
);

// Tool: search tokens
server.tool(
  "search_tokens",
  "Search design tokens by keyword across all categories. Example: search('primary'), search('shadow'), search('font')",
  {
    query: z.string().describe("Search keyword (e.g., 'primary', 'shadow', 'font', 'spacing')"),
  },
  async ({ query }) => {
    const q = query.toLowerCase();
    const results = [];

    // Search all categories
    for (const cat of CATEGORIES) {
      const data = getCategoryData(cat);
      const searchObj = (obj, path = "") => {
        for (const [key, val] of Object.entries(obj)) {
          const currentPath = path ? `${path}.${key}` : key;
          if (typeof val === "object" && val !== null && !Array.isArray(val)) {
            // Check if this level has a 'variable' key (leaf node)
            if (val.variable && val.variable.toLowerCase().includes(q)) {
              results.push({ category: cat, key: currentPath, ...val });
            } else if (key.toLowerCase().includes(q)) {
              results.push({ category: cat, key: currentPath, data: val });
            } else {
              searchObj(val, currentPath);
            }
          } else if (typeof val === "string" && val.toLowerCase().includes(q)) {
            results.push({ category: cat, key: currentPath, value: val });
          }
        }
      };
      searchObj(data);
    }

    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          query,
          resultCount: results.length,
          results: results.slice(0, 30), // cap at 30
          docs: "https://ieproduct.github.io/bpi-design-system/",
        }, null, 2),
      }],
    };
  }
);

// Tool: get CSS snippet
server.tool(
  "get_css_snippet",
  "Generate a ready-to-use CSS snippet for common UI patterns using BPI design tokens",
  {
    pattern: z.enum(["button-primary", "button-secondary", "card", "alert-danger", "alert-success", "alert-warning", "alert-info", "input", "badge"])
      .describe("UI pattern to generate CSS for"),
  },
  async ({ pattern }) => {
    const snippets = {
      "button-primary": `.btn-primary {
  background-color: var(--color-primary-main);
  color: var(--color-primary-contrast);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  font-size: var(--text-sm);
  border: none;
  cursor: pointer;
  transition: background-color 150ms;
}
.btn-primary:hover {
  background-color: var(--color-primary-dark);
}`,
      "button-secondary": `.btn-secondary {
  background-color: var(--color-secondary-lighter);
  color: var(--color-secondary-main);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  font-size: var(--text-sm);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: background-color 150ms;
}
.btn-secondary:hover {
  background-color: var(--color-secondary-light);
  color: var(--color-secondary-contrast);
}`,
      "card": `.card {
  background: var(--color-bg-paper);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
}
.card-title {
  color: var(--color-text-primary);
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
  margin-bottom: var(--spacing-2);
}
.card-body {
  color: var(--color-text-secondary);
  font-size: var(--text-base);
}`,
      "alert-danger": `.alert-danger {
  background: var(--color-danger-lighter);
  border: 1px solid var(--color-danger-light);
  color: var(--color-danger-dark);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
}`,
      "alert-success": `.alert-success {
  background: var(--color-success-lighter);
  border: 1px solid var(--color-success-light);
  color: var(--color-success-dark);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
}`,
      "alert-warning": `.alert-warning {
  background: var(--color-warning-lighter);
  border: 1px solid var(--color-warning-light);
  color: var(--color-warning-dark);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
}`,
      "alert-info": `.alert-info {
  background: var(--color-info-lighter);
  border: 1px solid var(--color-info-light);
  color: var(--color-info-dark);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
}`,
      "input": `.input {
  background: var(--color-bg-paper);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  transition: border-color 150ms;
}
.input:focus {
  outline: none;
  border-color: var(--color-primary-main);
  box-shadow: 0 0 0 3px var(--color-primary-lighter);
}
.input::placeholder {
  color: var(--color-text-disabled);
}`,
      "badge": `.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  background: var(--color-primary-lighter);
  color: var(--color-primary-main);
}`,
    };

    return {
      content: [{
        type: "text",
        text: `/* BPI Design System — ${pattern} */\n${snippets[pattern]}`,
      }],
    };
  }
);

// Resource: full token reference
server.resource(
  "token-reference",
  "bpi://tokens/reference",
  async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: "text/plain",
      text: `BPI Design System — Token Reference

Documentation: https://ieproduct.github.io/bpi-design-system/
CLAUDE.md viewer: https://ieproduct.github.io/bpi-design-system/claude-md

RULES:
- Always use CSS variables (var(--color-primary-main)) — never hard-code hex values
- Dark mode activates via class="dark" on <html> — variables auto-swap
- Tokens are framework-agnostic (React, Vue, Angular, Svelte, plain HTML)

CATEGORIES: ${CATEGORIES.join(", ")}

Use the tools: list_categories, get_tokens, get_color, search_tokens, get_css_snippet
`,
    }],
  })
);

// ─── Start Server ──────────────────────────────────────────────────────────

const transport = new StdioServerTransport();
await server.connect(transport);
