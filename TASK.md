# BPI Design System — Component Implementation Plan

## Overview
Implement all components with MUI-style documentation. Work through components one by one:
1. Implement/verify component CSS classes
2. Write documentation page (MUI-style examples)
3. E2E test the doc page
4. Fix issues and re-test until passing
5. Move to next component

## Component Status

### Atoms (Priority: High)
| # | Component | CSS | Docs | E2E | Status |
|---|-----------|-----|------|-----|--------|
| 1 | Button | ✅ | ✅ | ✅ | Done |
| 2 | Input | ✅ | ✅ | ✅ | Done |
| 3 | TextField | ✅ | ✅ | ✅ | Done |
| 4 | Badge | ✅ | ✅ | ✅ | Done |
| 5 | Icon | ✅ | ✅ | ✅ | Done |
| 6 | Typography | ✅ | ✅ | ✅ | Done |
| 7 | Alert | ✅ | ✅ | ✅ | Done |
| 8 | Avatar | ✅ | ✅ | ✅ | Done |
| 9 | Chip | ✅ | ✅ | ✅ | Done |
| 10 | Tooltip | ✅ | ✅ | ✅ | Done |
| 11 | Divider | ✅ | ✅ | ✅ | Done |
| 12 | Checkbox | ✅ | ✅ | ✅ | Done |
| 13 | Radio | ✅ | ✅ | ✅ | Done |
| 14 | Switch | ✅ | ✅ | ✅ | Done |
| 15 | Slider | ✅ | ✅ | ✅ | Done |
| 16 | Skeleton | ✅ | ✅ | ✅ | Done |
| 17 | CircularProgress | ✅ | ✅ | ✅ | Done |
| 18 | LinearProgress | ✅ | ✅ | ✅ | Done |
| 19 | Stack | ✅ | ✅ | ✅ | Done |
| 20 | Box | ✅ | ✅ | ✅ | Done |
| 21 | Table | ✅ | ✅ | ✅ | Done |
| 22 | TableHead | ✅ | ✅ | ✅ | Done |
| 23 | TableBody | ✅ | ✅ | ✅ | Done |
| 24 | TableRow | ✅ | ✅ | ✅ | Done |
| 25 | TableCell | ✅ | ✅ | ✅ | Done |

### Molecules (Priority: Medium)
| # | Component | CSS | Docs | E2E | Status |
|---|-----------|-----|------|-----|--------|
| 26 | FormField | ✅ | ✅ | ✅ | Done |
| 27 | SearchBar | ✅ | ✅ | ✅ | Done |
| 28 | Card | ✅ | ✅ | ✅ | Done |
| 29 | Dialog | ✅ | ✅ | ✅ | Done |
| 30 | Snackbar | ✅ | ✅ | ✅ | Done |
| 31 | Tabs | ✅ | ✅ | ✅ | Done |
| 32 | Tab | ✅ | ✅ | ✅ | Done |
| 33 | Breadcrumbs | ✅ | ✅ | ✅ | Done |
| 34 | Pagination | ✅ | ✅ | ✅ | Done |
| 35 | Menu | ✅ | ✅ | ✅ | Done |
| 36 | MenuItem | ✅ | ✅ | ✅ | Done |
| 37 | Select | ✅ | ✅ | ✅ | Done |
| 38 | Autocomplete | ✅ | ✅ | ✅ | Done |
| 39 | List | ✅ | ✅ | ✅ | Done |
| 40 | ListItem | ✅ | ✅ | ✅ | Done |
| 41 | Accordion | ✅ | ✅ | ✅ | Done |
| 42 | Drawer | ✅ | ✅ | ✅ | Done |
| 43 | DatePicker | ✅ | ✅ | ✅ | Done |

### Organisms (Priority: Medium)
| # | Component | CSS | Docs | E2E | Status |
|---|-----------|-----|------|-----|--------|
| 44 | DataTable | ✅ | ✅ | ✅ | Done |
| 45 | Navbar | ✅ | ✅ | ✅ | Done |
| 46 | Sidebar | ✅ | ✅ | ✅ | Done |

## Doc Page Structure (MUI Style)
Each component page includes:
1. **Header** — Component name, category badge, description
2. **Installation** — CDN + npm import snippets
3. **Basic Usage** — Minimal working example
4. **Variants** — Color/style variants (primary, secondary, danger, etc.)
5. **Sizes** — sm, md, lg
6. **States** — Disabled, loading, active, focus
7. **With Icons** — Icon combinations (where applicable)
8. **Customization** — CSS variable overrides
9. **Props/API Table** — CSS classes reference
10. **Accessibility** — ARIA attributes, keyboard nav

## Notes
- npm is broken on build VM — use `npx -y sass` and `npx -y esbuild`
- Tokens synced: primary=#E32321, secondary=#262626, accent=#0891B2
- Dark mode via `.dark` class on `<html>`
- All components use BEM: `.bpi-{block}__{element}--{modifier}`
