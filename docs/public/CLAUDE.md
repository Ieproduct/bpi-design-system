# BPI Design System — AI Agent Reference

> **Design token reference for all BPI projects.**
> This file is the single source of truth for AI agents (Claude, Cursor, Copilot, etc.).
> Always use CSS variables from this file — never hard-code colors, spacing, or sizes.

---

## Quick Reference

| Resource | Link |
|----------|------|
| Full documentation | https://ieproduct.github.io/bpi-design-system/ |
| Token viewer & download | https://ieproduct.github.io/bpi-design-system/claude-md |
| Token data source | `docs/src/data/tokens.ts` |
| CSS variables file | `docs/src/styles/app.css` |
| MCP Server | `mcp/index.js` (see setup below) |
| Repository | https://github.com/Ieproduct/bpi-design-system |

---

## Option 1: MCP Server (Recommended)

ใช้ MCP server เพื่อให้ AI query design tokens ได้โดยตรง ไม่ต้องอ่านไฟล์ทั้งหมด

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
      "args": ["./node_modules/@bpi/design-system/mcp/index.js"]
    }
  }
}
```

### Available MCP Tools

| Tool | Description | Example |
|------|-------------|---------|
| `list_categories` | List all token categories | `list_categories()` |
| `get_tokens` | Get all tokens in a category | `get_tokens(category: "semantic-colors")` |
| `get_color` | Get a specific semantic color with all shades | `get_color(name: "primary")` |
| `search_tokens` | Search tokens by keyword | `search_tokens(query: "shadow")` |
| `get_css_snippet` | Get ready-to-use CSS for UI patterns | `get_css_snippet(pattern: "button-primary")` |

### MCP CSS Snippet Patterns

`button-primary`, `button-secondary`, `card`, `alert-danger`, `alert-success`, `alert-warning`, `alert-info`, `input`, `badge`

---

## Option 2: Read from Documentation Website

ถ้าไม่ได้ตั้ง MCP ให้ AI เปิดเว็บ docs อ่าน token ได้เลย

**Full token reference:** https://ieproduct.github.io/bpi-design-system/

| Page | URL |
|------|-----|
| Colors (all palettes + semantic) | https://ieproduct.github.io/bpi-design-system/tokens/colors |
| Typography (families, sizes, weights) | https://ieproduct.github.io/bpi-design-system/tokens/typography |
| Spacing (scale) | https://ieproduct.github.io/bpi-design-system/tokens/spacing |
| Misc (radius, shadows, z-index) | https://ieproduct.github.io/bpi-design-system/tokens/misc |
| CLAUDE.md viewer + download | https://ieproduct.github.io/bpi-design-system/claude-md |

> **AI instruction:** If you need token values, fetch the relevant page above and extract the CSS variables from the tables.

---

## Core Rules

1. **Always use CSS variables** like `var(--color-primary-main)` — never hard-code hex values
2. **Dark mode** activates via `class="dark"` on `<html>` — CSS variables auto-swap
3. **Framework-agnostic** — works with React, Vue, Angular, Svelte, plain HTML
4. **Toggle dark mode in JS:** `document.documentElement.classList.toggle('dark')`
5. **Persist theme:** `localStorage.setItem('theme', 'dark' | 'light')`

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

## Quick Example

```css
.btn-primary {
  background-color: var(--color-primary-main);
  color: var(--color-primary-contrast);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
}
```

> For full token values: use the MCP tools, or visit the [documentation website](https://ieproduct.github.io/bpi-design-system/).
