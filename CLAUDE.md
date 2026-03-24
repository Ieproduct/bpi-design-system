# BPI Design System v2.0 — AI Agent Reference

> **Design tokens + component specifications for all BPI projects.**
> This file is the single source of truth for AI agents (Claude, Cursor, Copilot, etc.).
> **All CSS variables use the `--bpi-` prefix — never hard-code colors, spacing, or sizes.**
> Build components following the spec — each team implements their own.

---

## Quick Reference

| Resource | Link |
|----------|------|
| Full documentation (with interactive previews) | https://ieproduct.github.io/bpi-design-system/ |
| Token viewer & download | https://ieproduct.github.io/bpi-design-system/claude-md |
| Token data source | `docs/src/data/tokens.ts` |
| Component specs data | `docs/src/data/specs.ts` |
| CSS variables file | `docs/src/styles/app.css` |
| Atom previews | `docs/src/components/AtomPreviews.tsx` |
| Layout previews | `docs/src/components/LayoutPreviews.tsx` |
| MCP Server | `mcp/index.js` (see setup below) |
| Repository | https://github.com/Ieproduct/bpi-design-system |

---

## Architecture

BPI Design System is a **specification-only** package. It provides:

1. **Design Tokens** — CSS custom properties (all `--bpi-*` prefix) for colors, typography, spacing, radius, shadows, z-index
2. **Component Specs** — Structured specifications (sizes, variants, states, accessibility) for 21 atom components + 4 layout components
3. **Interactive Previews** — Every component spec page includes a live visual preview demonstrating sizes, variants, states, and interactions

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
| `get_css_snippet` | Generate CSS from spec + tokens | `get_css_snippet(component: "button", variant: "contained", size: "md")` |

### Available Components

**Atoms (21):** Alert, Avatar, Badge, Box, Button, Checkbox, Chip, CircularProgress, Divider, Icon, Input, LinearProgress, Radio, Select, Skeleton, Slider, Stack, Switch, TextField, Tooltip, Typography

**Layout (4):** AppBar, NavBar, Sidebar, Footer

---

## Core Rules

1. **All CSS variables use `--bpi-` prefix** — e.g., `var(--bpi-primary)`, `var(--bpi-space-4)` — NEVER hard-code hex values
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
| Primary | `--bpi-brand-primary` | `#E32321` |
| Secondary | `--bpi-brand-secondary` | `#262626` |
| Accent | `--bpi-brand-accent` | `#0891B2` |

### Semantic Colors

CSS variable pattern: `--bpi-{name}` (main) and `--bpi-{name}-{shade}`

Names: `primary`, `secondary`, `success`, `danger`, `warning`, `info`
Shades: `lighter`, `light`, (main = no suffix), `dark`, `darker`, `contrast`

Example: `var(--bpi-primary)` → `#E32321` (light) / `#F87171` (dark)

### Typography

| Token | CSS Variable | Value |
|-------|-------------|-------|
| Font Sans | `--bpi-font-family-sans` | Inter, system fonts |
| Font Mono | `--bpi-font-family-mono` | JetBrains Mono, monospace |
| Size XS | `--bpi-font-size-xs` | 12px |
| Size SM | `--bpi-font-size-sm` | 14px |
| Size Base | `--bpi-font-size-base` | 16px |
| Size LG | `--bpi-font-size-lg` | 18px |
| Size XL | `--bpi-font-size-xl` | 20px |
| Size 2XL | `--bpi-font-size-2xl` | 24px |
| Size 3XL | `--bpi-font-size-3xl` | 30px |
| Weight Light | `--bpi-font-weight-light` | 300 |
| Weight Normal | `--bpi-font-weight-normal` | 400 |
| Weight Medium | `--bpi-font-weight-medium` | 500 |
| Weight Semibold | `--bpi-font-weight-semibold` | 600 |
| Weight Bold | `--bpi-font-weight-bold` | 700 |
| Line Height Tight | `--bpi-line-height-tight` | 1.25 |
| Line Height Normal | `--bpi-line-height-normal` | 1.5 |
| Line Height Relaxed | `--bpi-line-height-relaxed` | 1.75 |

### Spacing

Pattern: `--bpi-space-{step}`

| Step | Variable | Value |
|------|----------|-------|
| 1 | `--bpi-space-1` | 4px |
| 2 | `--bpi-space-2` | 8px |
| 3 | `--bpi-space-3` | 12px |
| 4 | `--bpi-space-4` | 16px |
| 5 | `--bpi-space-5` | 20px |
| 6 | `--bpi-space-6` | 24px |
| 8 | `--bpi-space-8` | 32px |
| 10 | `--bpi-space-10` | 40px |
| 12 | `--bpi-space-12` | 48px |
| 16 | `--bpi-space-16` | 64px |
### Other Token Patterns

| Category | Pattern | Example |
|----------|---------|---------|
| Background | `--bpi-bg-{name}` | `--bpi-bg-default`, `--bpi-bg-primary` |
| Text | `--bpi-text-{name}` | `--bpi-text-primary`, `--bpi-text-secondary` |
| Surface | `--bpi-surface-{name}` | `--bpi-surface-card`, `--bpi-surface-hover` |
| Border | `--bpi-border-{name}` | `--bpi-border-default`, `--bpi-border-strong` |
| Radius | `--bpi-radius-{size}` | `--bpi-radius-md` (6px), `--bpi-radius-lg` (8px) |
| Shadow | `--bpi-shadow-{size}` | `--bpi-shadow-md`, `--bpi-shadow-lg` |
| Z-Index | `--bpi-z-{name}` | `--bpi-z-modal` (1050), `--bpi-z-tooltip` (1070) |
| Transition | `--bpi-transition-{speed}` | `--bpi-transition-fast` (150ms ease) |
| Focus Ring | `--bpi-focus-ring-{prop}` | `--bpi-focus-ring-width` (2px) |
| Gray Scale | `--bpi-gray-{shade}` | `--bpi-gray-50` … `--bpi-gray-950` |

---

## Example: Building a Button from Spec

```css
/* Get spec via MCP: get_component_spec(id: "button") */

.btn {
  /* Size: md (default) */
  padding: var(--bpi-space-2) var(--bpi-space-4);    /* 8px 16px */
  font-size: var(--bpi-font-size-sm);                 /* 14px */
  border-radius: var(--bpi-radius-md);                /* 6px */
  font-weight: var(--bpi-font-weight-semibold);       /* 600 */
  transition: all var(--bpi-transition-fast);          /* 150ms ease */
}

/* Variant: contained */
.btn-primary {
  background-color: var(--bpi-primary);
  color: var(--bpi-primary-contrast);
}
.btn-primary:hover {
  opacity: 0.9;
}
.btn-primary:focus-visible {
  outline: var(--bpi-focus-ring-width) solid var(--bpi-focus-ring-color);
  outline-offset: var(--bpi-focus-ring-offset);
}
.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

> For full token values and complete specs: use the MCP tools, or visit the [documentation website](https://ieproduct.github.io/bpi-design-system/).