# BPI Design System — AI Agent Reference

> **Design token reference for all BPI projects.**
> This file is the single source of truth for AI agents (Claude, Cursor, Copilot, etc.).
> Always use CSS variables from this file — never hard-code colors, spacing, or sizes.

**Full documentation:** https://ieproduct.github.io/bpi-design-system/
**Token data source:** `docs/src/data/tokens.ts`
**CSS variables file:** `docs/src/styles/app.css`

---

## How to Use

1. Import the design system CSS in your project
2. Use CSS variables like `var(--color-primary-main)` in your styles
3. Never hard-code hex values — always use CSS variables so dark mode works automatically
4. The tokens are framework-agnostic (React, Vue, Angular, Svelte, plain HTML)

---

## Dark Mode

- **Activate:** Add `class="dark"` to `<html>`
- **Toggle in JS:** `document.documentElement.classList.toggle('dark')`
- **Persist:** `localStorage.setItem('theme', 'dark' | 'light')`
- **System preference fallback:** `window.matchMedia('(prefers-color-scheme: dark)').matches`
- **What changes:** Semantic colors, background, text, and surface tokens swap. The 50–950 palette does NOT change.
- **AI rule:** Always use `var(--color-primary-main)` — never `#E32321`. The variable adapts to both modes.

---

## Brand Colors

| Name      | CSS Variable            | Hex       | Usage                           |
|-----------|-------------------------|-----------|---------------------------------|
| Primary   | `--color-brand-primary`   | `#E32321` | Primary brand color             |
| Secondary | `--color-brand-secondary` | `#262626` | Secondary brand color           |
| Accent    | `--color-brand-accent`    | `#0891B2` | Accent/emphasis color           |

---

## Semantic Colors (Light / Dark)

Each semantic color has 6 shades. CSS variable pattern: `--color-{name}-{shade}`

### Primary — Main actions and CTAs

| Shade    | CSS Variable               | Light     | Dark      |
|----------|----------------------------|-----------|-----------|
| lighter  | `--color-primary-lighter`  | `#FEF2F2` | `#3B1414` |
| light    | `--color-primary-light`    | `#F9A8A7` | `#F87171` |
| main     | `--color-primary-main`     | `#E32321` | `#EF4444` |
| dark     | `--color-primary-dark`     | `#B81C1A` | `#FCA5A5` |
| darker   | `--color-primary-darker`   | `#7A1312` | `#FEE2E2` |
| contrast | `--color-primary-contrast` | `#FFFFFF` | `#FFFFFF` |

### Secondary — Supporting UI

| Shade    | CSS Variable                 | Light     | Dark      |
|----------|------------------------------|-----------|-----------|
| lighter  | `--color-secondary-lighter`  | `#F5F5F5` | `#1E1E1E` |
| light    | `--color-secondary-light`    | `#A3A3A3` | `#A3A3A3` |
| main     | `--color-secondary-main`     | `#262626` | `#D4D4D4` |
| dark     | `--color-secondary-dark`     | `#1A1A1A` | `#E5E5E5` |
| darker   | `--color-secondary-darker`   | `#0D0D0D` | `#F5F5F5` |
| contrast | `--color-secondary-contrast` | `#FFFFFF` | `#171717` |

### Success — Positive states

| Shade    | CSS Variable                | Light     | Dark      |
|----------|-----------------------------|-----------|-----------|
| lighter  | `--color-success-lighter`   | `#ECFDF5` | `#052E16` |
| light    | `--color-success-light`     | `#86EFAC` | `#4ADE80` |
| main     | `--color-success-main`      | `#16A34A` | `#22C55E` |
| dark     | `--color-success-dark`      | `#15803D` | `#86EFAC` |
| darker   | `--color-success-darker`    | `#14532D` | `#DCFCE7` |
| contrast | `--color-success-contrast`  | `#FFFFFF` | `#FFFFFF` |

### Danger — Error states

| Shade    | CSS Variable               | Light     | Dark      |
|----------|----------------------------|-----------|-----------|
| lighter  | `--color-danger-lighter`   | `#FEF2F2` | `#450A0A` |
| light    | `--color-danger-light`     | `#FCA5A5` | `#F87171` |
| main     | `--color-danger-main`      | `#DC2626` | `#EF4444` |
| dark     | `--color-danger-dark`      | `#B91C1C` | `#FCA5A5` |
| darker   | `--color-danger-darker`    | `#7F1D1D` | `#FEE2E2` |
| contrast | `--color-danger-contrast`  | `#FFFFFF` | `#FFFFFF` |

### Warning — Caution states

| Shade    | CSS Variable                | Light     | Dark      |
|----------|-----------------------------|-----------|-----------|
| lighter  | `--color-warning-lighter`   | `#FFFBEB` | `#451A03` |
| light    | `--color-warning-light`     | `#FCD34D` | `#FBBF24` |
| main     | `--color-warning-main`      | `#D97706` | `#F59E0B` |
| dark     | `--color-warning-dark`      | `#B45309` | `#FCD34D` |
| darker   | `--color-warning-darker`    | `#78350F` | `#FEF3C7` |
| contrast | `--color-warning-contrast`  | `#FFFFFF` | `#171717` |

### Info — Informational

| Shade    | CSS Variable            | Light     | Dark      |
|----------|-------------------------|-----------|-----------|
| lighter  | `--color-info-lighter`  | `#F0F9FF` | `#082F49` |
| light    | `--color-info-light`    | `#7DD3FC` | `#38BDF8` |
| main     | `--color-info-main`     | `#0284C7` | `#0EA5E9` |
| dark     | `--color-info-dark`     | `#0369A1` | `#7DD3FC` |
| darker   | `--color-info-darker`   | `#0C2D48` | `#E0F2FE` |
| contrast | `--color-info-contrast` | `#FFFFFF` | `#FFFFFF` |

---

## Background Colors (Light / Dark)

| Name    | CSS Variable          | Light     | Dark      | Usage                       |
|---------|-----------------------|-----------|-----------|-----------------------------|
| Default | `--color-bg-default`  | `#F8FAFC` | `#0F172A` | Default page background     |
| Paper   | `--color-bg-paper`    | `#FFFFFF` | `#1E293B` | Cards, dialogs, elevated UI |

---

## Text Colors (Light / Dark)

| Name      | CSS Variable            | Light     | Dark      | Usage                      |
|-----------|-------------------------|-----------|-----------|----------------------------|
| Primary   | `--color-text-primary`  | `#0F172A` | `#F1F5F9` | Headings, body text        |
| Secondary | `--color-text-secondary`| `#64748B` | `#94A3B8` | Supporting text, labels    |
| Disabled  | `--color-text-disabled` | `#94A3B8` | `#64748B` | Disabled/placeholder text  |

---

## Surface & Utility Tokens (Light / Dark)

| Token          | CSS Variable              | Light     | Dark      | Usage                    |
|----------------|---------------------------|-----------|-----------|--------------------------|
| Surface        | `--color-surface`         | `#F8FAFC` | `#0F172A` | Main surface             |
| Surface Variant| `--color-surface-variant` | `#F1F5F9` | `#1E293B` | Alternate surface        |
| Surface Hover  | `--color-surface-hover`   | `#E2E8F0` | `#334155` | Hover state              |
| Border         | `--color-border`          | `#E2E8F0` | `#334155` | Default border           |
| Border Strong  | `--color-border-strong`   | `#CBD5E1` | `#475569` | Emphasized border        |
| Sidebar        | `--color-sidebar`         | `#F8FAFC` | `#0B1120` | Sidebar background       |

---

## Typography

### Font Families

| Name    | CSS Variable        | Value                                                        |
|---------|---------------------|--------------------------------------------------------------|
| Display | `--font-display`    | `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |
| Body    | `--font-body`       | `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |
| Mono    | `--font-mono`       | `JetBrains Mono, Menlo, Monaco, "Courier New", monospace`   |
| Thai    | `--font-thai`       | `Sarabun, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |

### Font Sizes

| Size  | CSS Variable      | Pixels | Usage          |
|-------|-------------------|--------|----------------|
| xs    | `--text-xs`       | 12px   | Extra small    |
| sm    | `--text-sm`       | 14px   | Small text     |
| base  | `--text-base`     | 16px   | Body text      |
| lg    | `--text-lg`       | 18px   | Large text     |
| xl    | `--text-xl`       | 20px   | Extra large    |
| 2xl   | `--text-2xl`      | 24px   | Heading 3      |
| 3xl   | `--text-3xl`      | 30px   | Heading 2      |

### Font Weights

| Name     | CSS Variable         | Value |
|----------|----------------------|-------|
| light    | `--font-light`       | 300   |
| normal   | `--font-normal`      | 400   |
| medium   | `--font-medium`      | 500   |
| semibold | `--font-semibold`    | 600   |
| bold     | `--font-bold`        | 700   |

---

## Spacing

CSS variable pattern: `--spacing-{step}`

| Step | CSS Variable    | Value |
|------|-----------------|-------|
| 1    | `--spacing-1`   | 4px   |
| 2    | `--spacing-2`   | 8px   |
| 3    | `--spacing-3`   | 12px  |
| 4    | `--spacing-4`   | 16px  |
| 5    | `--spacing-5`   | 20px  |
| 6    | `--spacing-6`   | 24px  |
| 8    | `--spacing-8`   | 32px  |
| 10   | `--spacing-10`  | 40px  |
| 12   | `--spacing-12`  | 48px  |
| 14   | `--spacing-14`  | 56px  |
| 16   | `--spacing-16`  | 64px  |

---

## Border Radius

| Size | CSS Variable     | Value  |
|------|------------------|--------|
| none | `--radius-none`  | 0px    |
| sm   | `--radius-sm`    | 4px    |
| md   | `--radius-md`    | 6px    |
| lg   | `--radius-lg`    | 8px    |
| xl   | `--radius-xl`    | 12px   |
| 2xl  | `--radius-2xl`   | 16px   |
| full | `--radius-full`  | 9999px |

---

## Box Shadows

| Size | CSS Variable    | Value                                                                      |
|------|-----------------|----------------------------------------------------------------------------|
| xs   | `--shadow-xs`   | `0 1px 2px 0 rgba(0,0,0,0.05)`                                            |
| sm   | `--shadow-sm`   | `0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)`              |
| md   | `--shadow-md`   | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)`        |
| lg   | `--shadow-lg`   | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`      |
| xl   | `--shadow-xl`   | `0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)`    |

---

## Z-Index Scale

| Name           | CSS Variable          | Value |
|----------------|-----------------------|-------|
| dropdown       | `--z-dropdown`        | 1000  |
| sticky         | `--z-sticky`          | 1020  |
| fixed          | `--z-fixed`           | 1030  |
| modal-backdrop | `--z-modal-backdrop`  | 1040  |
| modal          | `--z-modal`           | 1050  |
| popover        | `--z-popover`         | 1060  |
| tooltip        | `--z-tooltip`         | 1070  |
| toast          | `--z-toast`           | 1080  |

---

## Color Palette (50–950)

These are absolute values — they do NOT change between light/dark mode.
CSS variable pattern: `--color-{color}-{shade}`

Available colors: `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`, `slate`, `gray`, `zinc`, `neutral`, `stone`

Shades: `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `950`

### Most-used palette values

| Variable              | Hex       |
|-----------------------|-----------|
| `--color-red-500`     | `#ef4444` |
| `--color-orange-500`  | `#f97316` |
| `--color-amber-500`   | `#f59e0b` |
| `--color-yellow-500`  | `#eab308` |
| `--color-green-500`   | `#22c55e` |
| `--color-teal-500`    | `#14b8a6` |
| `--color-cyan-500`    | `#06b6d4` |
| `--color-sky-500`     | `#0ea5e9` |
| `--color-blue-500`    | `#3b82f6` |
| `--color-indigo-500`  | `#6366f1` |
| `--color-violet-500`  | `#8b5cf6` |
| `--color-purple-500`  | `#a855f7` |
| `--color-pink-500`    | `#ec4899` |
| `--color-rose-500`    | `#f43f5e` |
| `--color-slate-500`   | `#64748b` |
| `--color-gray-500`    | `#6b7280` |
| `--color-neutral-500` | `#737373` |

Full palette reference: https://ieproduct.github.io/bpi-design-system/tokens/colors

---

## CSS Variable Naming Convention

| Pattern                              | Example                        | Category         |
|--------------------------------------|--------------------------------|------------------|
| `--color-{name}-{shade}`            | `--color-primary-main`         | Semantic colors  |
| `--color-{color}-{50-950}`          | `--color-blue-500`             | Palette colors   |
| `--color-bg-{name}`                 | `--color-bg-default`           | Backgrounds      |
| `--color-text-{name}`               | `--color-text-primary`         | Text colors      |
| `--color-brand-{name}`              | `--color-brand-primary`        | Brand colors     |
| `--color-surface` / `--color-border`| `--color-surface-variant`      | Surface/utility  |
| `--spacing-{step}`                  | `--spacing-4`                  | Spacing          |
| `--radius-{size}`                   | `--radius-md`                  | Border radius    |
| `--shadow-{size}`                   | `--shadow-md`                  | Box shadows      |
| `--z-{name}`                        | `--z-modal`                    | Z-index          |
| `--font-{name}`                     | `--font-body`                  | Font families    |
| `--text-{size}`                     | `--text-base`                  | Font sizes       |
| `--font-{weight}`                   | `--font-semibold`              | Font weights     |

---

## Quick Examples

```html
<!-- Primary button -->
<button style="
  background: var(--color-primary-main);
  color: var(--color-primary-contrast);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
">
  Submit
</button>

<!-- Card -->
<div style="
  background: var(--color-bg-paper);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
">
  <h3 style="color: var(--color-text-primary);">Title</h3>
  <p style="color: var(--color-text-secondary);">Description</p>
</div>

<!-- Alert -->
<div style="
  background: var(--color-danger-lighter);
  border: 1px solid var(--color-danger-light);
  color: var(--color-danger-dark);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-md);
">
  Error: Something went wrong.
</div>
```

```css
/* Tailwind-style utility using tokens */
.btn-primary {
  background-color: var(--color-primary-main);
  color: var(--color-primary-contrast);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  font-size: var(--text-sm);
  transition: background-color 150ms;
}
.btn-primary:hover {
  background-color: var(--color-primary-dark);
}
```

---

## Repository

- **Repo:** https://github.com/Ieproduct/bpi-design-system
- **Docs site:** https://ieproduct.github.io/bpi-design-system/
- **Token data:** `docs/src/data/tokens.ts`
- **CSS variables:** `docs/src/styles/app.css`
- **Deploy:** Push to `main` → GitHub Actions auto-builds → GitHub Pages
