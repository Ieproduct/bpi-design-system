# BPI Design System

Web Components + CSS class library for the BPI multi-team ERP project. Works with React/Next.js, Vue/Nuxt, and plain HTML.

## Architecture

Built on **Web Components** with an **Atomic Design** structure:

```
src/
├── tokens/          Design Tokens (SCSS + CSS custom properties)
├── atoms/           Button, Input, Badge, Icon
├── molecules/       FormField, SearchBar, Card
├── organisms/       DataTable, Navbar, Sidebar
types/               TypeScript definitions (index, react, vue)
dist/                Built output (CSS, JS bundles)
```

## Installation

### CDN (GitHub Pages)

```html
<!-- CSS only (no JS needed for class-based usage) -->
<link rel="stylesheet" href="https://org.github.io/bpi-design-system/bpi.min.css">

<!-- Web Components (IIFE for script tag) -->
<script src="https://org.github.io/bpi-design-system/bpi.iife.js"></script>
```

### Git Submodule (for TypeScript types)

```bash
git submodule add https://github.com/org/bpi-design-system.git packages/bpi-design-system
```

### ESM Import

```js
import '@bpi/design-system'; // registers all web components
```

## Usage

### Plain HTML

```html
<script src="https://org.github.io/bpi-design-system/bpi.iife.js"></script>

<bpi-button variant="primary" size="md">Save</bpi-button>

<bpi-form-field label="Email" required error="Invalid format">
  <bpi-input type="email" placeholder="Enter email"></bpi-input>
</bpi-form-field>

<bpi-card title="User Profile" variant="elevated">
  <p>Card body content</p>
  <bpi-button slot="footer" variant="primary">Save</bpi-button>
</bpi-card>

<bpi-badge variant="success" dot>Active</bpi-badge>
```

### React + TypeScript

```tsx
/// <reference types="@bpi/design-system/react" />
import '@bpi/design-system';

function App() {
  return (
    <bpi-button variant="primary" onClick={handleSave}>
      Save
    </bpi-button>
  );
}
```

### Vue + TypeScript

```vue
<script setup lang="ts">
import '@bpi/design-system/vue';
import '@bpi/design-system';

function handleChange(e: CustomEvent<{ value: string }>) {
  console.log(e.detail.value);
}
</script>

<template>
  <bpi-input @bpi-change="handleChange" />
</template>
```

### CSS Classes Only (no JS)

```html
<link rel="stylesheet" href="https://org.github.io/bpi-design-system/bpi.min.css">

<button class="bpi-btn bpi-btn--primary bpi-btn--md">Save</button>
<span class="bpi-badge bpi-badge--success bpi-badge--dot">Active</span>
<input class="bpi-input bpi-input--md" placeholder="Search..." />
```

### SCSS Token Override

```scss
// Override tokens BEFORE importing
$bpi-primary: #FF6B00;
$bpi-font-family-sans: 'Kanit', sans-serif;

@use '@bpi/design-system/tokens' as *;
```

## Components

### Atoms

| Component | Tag | CSS Class | Variants |
|-----------|-----|-----------|----------|
| Button | `<bpi-button>` | `.bpi-btn` | primary, secondary, danger, outline, ghost, success |
| Input | `<bpi-input>` | `.bpi-input` | text, email, password, number, tel |
| Badge | `<bpi-badge>` | `.bpi-badge` | primary, success, warning, danger, info, neutral |
| Icon | `<bpi-icon>` | `.bpi-icon` | xs, sm, md, lg, xl |

### Molecules

| Component | Tag | CSS Class |
|-----------|-----|-----------|
| FormField | `<bpi-form-field>` | `.bpi-form-field` |
| SearchBar | `<bpi-search-bar>` | `.bpi-search-bar` |
| Card | `<bpi-card>` | `.bpi-card` |

### Organisms

| Component | Tag | CSS Class |
|-----------|-----|-----------|
| DataTable | `<bpi-data-table>` | `.bpi-table` |
| Navbar | `<bpi-navbar>` | `.bpi-navbar` |
| Sidebar | `<bpi-sidebar>` | `.bpi-sidebar` |

## Custom Events

| Event | Component | Detail |
|-------|-----------|--------|
| `bpi-input` | Input, SearchBar | `{ value: string }` |
| `bpi-change` | Input | `{ value: string }` |
| `bpi-blur` | Input | `{ value: string }` |
| `bpi-sort` | DataTable | `{ column: string, direction: 'asc' \| 'desc' }` |
| `bpi-page-change` | DataTable | `{ page: number }` |

## Naming Convention

- **Web Component tags:** `bpi-*` prefix (e.g., `<bpi-button>`)
- **Class/export names:** PascalCase, no prefix (e.g., `Button`)
- **CSS classes:** `bpi-` prefix with BEM (e.g., `.bpi-btn--primary`)

## Build

```bash
npm install
npm run build
```

Output in `dist/`:
- `bpi.css` / `bpi.min.css` — Full CSS bundle
- `bpi.js` + `.map` — ESM bundle with sourcemap
- `bpi.min.js` — ESM minified
- `bpi.iife.js` — IIFE for `<script>` tag

## Deployment

Push to `main` triggers GitHub Actions → builds → deploys `dist/` to GitHub Pages.

## License

MIT
