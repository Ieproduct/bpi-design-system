# BPI Design System v2.0 — AI Agent Reference

> **Design tokens + component specifications for all BPI projects.**
> This file is the single source of truth for AI agents (Claude, Cursor, Copilot, etc.).
> Always use CSS variables — never hard-code colors, spacing, or sizes.
> Build components following the spec — each team implements their own.

---

## Quick Reference

| Resource | Link |
|----------|------|
| Full documentation | https://ieproduct.github.io/bpi-design-system/ |
| Token viewer & download | https://ieproduct.github.io/bpi-design-system/claude-md |
| Token data source | `docs/src/data/tokens.ts` |
| Component specs data | `docs/src/data/specs.ts` |
| CSS variables file | `docs/src/styles/app.css` |
| MCP Server | `mcp/index.js` (see setup below) |
| Repository | https://github.com/Ieproduct/bpi-design-system |

---

## Architecture

BPI Design System is a **specification-only** package. It provides:

1. **Design Tokens** — CSS custom properties for colors, typography, spacing, radius, shadows, z-index
2. **Component Specs** — Structured specifications (sizes, variants, states, accessibility) for 37 components

Each project team implements their own components using their preferred framework (React, Vue, Angular, Svelte, etc.) following these specs. There is no component library to install.

---

## Option 1: MCP Server (Recommended)

Use the MCP server to let AI query design tokens and component specs in real-time.

### Setup for Claude Desktop / Claude Code

Add to your `claude_desktop_config.json` or `.mcp.json`:

```json
{
  "mcpServers": {
    "bpi-design": {
      "command": "node",
      "args": ["<path-to-project>/mcp/index.js"]
    }
  }
}
```

### Setup for Cursor

Add to `.cursor/mcp.json` in your project:

```json
{
  "mcpServers": {
    "bpi-design": {
      "command": "node",
      "args": ["<path-to>/bpi-design-system/mcp/index.js"]
    }
  }
}
```

### Available MCP Tools

#### Token Tools

| Tool | Description | Example |
|------|-------------|---------|
| `list_categories` | List all token categories | `list_categories()` |
| `get_tokens` | Get all tokens in a category | `get_tokens(category: "semantic-colors")` |
| `get_color` | Get a specific semantic color with all shades | `get_color(name: "primary")` |
| `search_tokens` | Search tokens by keyword | `search_tokens(query: "shadow")` |

#### Component Spec Tools

| Tool | Description | Example |
|------|-------------|---------|
| `list_components` | List all component specs (filter by category) | `list_components(category: "atom")` |
| `get_component_spec` | Get full spec for a component | `get_component_spec(id: "button")` |
| `search_specs` | Search component specs by keyword | `search_specs(query: "padding")` |

#### CSS Generation

| Tool | Description | Example |
|------|-------------|---------|
| `get_css_snippet` | Generate CSS from spec + tokens | `get_css_snippet(component: "button", variant: "primary", size: "md")` |

### Available Components (Atoms — 21)

Alert, Avatar, Badge, Box, Button, Checkbox, Chip, CircularProgress, Divider, Icon, Input, LinearProgress, Radio, Select, Skeleton, Slider, Stack, Switch, TextField, Tooltip, Typography

> Molecules & Organisms coming soon.

---

## Option 2: Read from Documentation Website

If MCP is not set up, AI can fetch token and spec pages directly.

**Full reference:** https://ieproduct.github.io/bpi-design-system/

| Page | URL |
|------|-----|
| Colors (palettes + semantic) | https://ieproduct.github.io/bpi-design-system/tokens/colors |
| Typography (families, sizes, weights) | https://ieproduct.github.io/bpi-design-system/tokens/typography |
| Spacing (scale) | https://ieproduct.github.io/bpi-design-system/tokens/spacing |
| Misc (radius, shadows, z-index) | https://ieproduct.github.io/bpi-design-system/tokens/misc |
| Component specs | https://ieproduct.github.io/bpi-design-system/components/button (etc.) |
| CLAUDE.md viewer + download | https://ieproduct.github.io/bpi-design-system/claude-md |

> **AI instruction:** Fetch the relevant page and extract CSS variables and spec data from the tables.

---

## Core Rules

1. **Always use CSS variables** like `var(--color-primary-main)` — never hard-code hex values
2. **Dark mode** activates via `class="dark"` on `<html>` — CSS variables auto-swap
3. **Framework-agnostic** — use any framework, follow the component specs
4. **Follow component specs** — use the specified sizes, variants, states, and accessibility rules
5. **Toggle dark mode in JS:** `document.documentElement.classList.toggle('dark')`
6. **Persist theme:** `localStorage.setItem('theme', 'dark' | 'light')`

---

## Essential Tokens (Quick Reference)

### Brand Colors

| Name | CSS Variable | Hex |
|------|-------------|-----|
| Primary | `--color-brand-primary` | `#E32321` |
| Secondary | `--color-brand-secondary` | `#262626` |
| Accent | `--color-brand-accent` | `#0891B2` |

### Semantic Color Pattern

CSS variable pattern: `--color-{name}-{shade}`

Names: `primary`, `secondary`, `success`, `danger`, `warning`, `info`
Shades: `lighter`, `light`, `main`, `dark`, `darker`, `contrast`

Example: `var(--color-primary-main)` → `#E32321` (light) / `#EF4444` (dark)

### Other Token Patterns

| Pattern | Example | Category |
|---------|---------|----------|
| `--color-bg-{name}` | `--color-bg-default` | Background |
| `--color-text-{name}` | `--color-text-primary` | Text |
| `--color-surface` / `--color-border` | `--color-surface-variant` | Surface |
| `--spacing-{step}` | `--spacing-4` (16px) | Spacing |
| `--radius-{size}` | `--radius-md` (6px) | Border radius |
| `--shadow-{size}` | `--shadow-md` | Box shadows |
| `--z-{name}` | `--z-modal` (1050) | Z-index |
| `--font-{name}` | `--font-body` | Font family |
| `--text-{size}` | `--text-base` (16px) | Font size |
| `--font-{weight}` | `--font-semibold` (600) | Font weight |

### Color Palette (50–950)

Absolute values — do NOT change between light/dark mode.
Pattern: `--color-{color}-{shade}`

Available colors: `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`

Shades: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`

---

## Component Spec Structure

Each component spec includes:

| Section | Description |
|---------|-------------|
| **Sizes** | Padding, font-size, border-radius per size (sm, md, lg) |
| **Variants** | Background, text, border, hover colors per variant |
| **States** | Default, hover, active, focus, disabled CSS properties |
| **Elements** | Sub-parts of the component (label, icon, container, etc.) |
| **Accessibility** | Keyboard interactions, ARIA roles, required attributes |
| **Defaults** | Default size, variant, and other default values |

### Example: Building a Button from Spec

```css
/* Get spec via MCP: get_component_spec(id: "button") */

.btn {
  /* Size: md (default) */
  padding: var(--spacing-2) var(--spacing-4);    /* 8px 16px */
  font-size: var(--text-sm);                      /* 14px */
  border-radius: var(--radius-md);                /* 6px */
  font-weight: var(--font-semibold);              /* 600 */
  transition: background-color 150ms ease, box-shadow 150ms ease;
}

/* Variant: primary */
.btn-primary {
  background-color: var(--color-primary-main);
  color: var(--color-primary-contrast);
}
.btn-primary:hover {
  background-color: var(--color-primary-dark);
}
.btn-primary:focus-visible {
  outline: 2px solid var(--color-primary-main);
  outline-offset: 2px;
}
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

> For full token values and complete specs: use the MCP tools, or visit the [documentation website](https://ieproduct.github.io/bpi-design-system/).
