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
| 1 | Button | ✅ | ⬜ | ⬜ | Next |
| 2 | Input | ✅ | ⬜ | ⬜ | — |
| 3 | TextField | ✅ | ⬜ | ⬜ | — |
| 4 | Badge | ✅ | ⬜ | ⬜ | — |
| 5 | Icon | ✅ | ⬜ | ⬜ | — |
| 6 | Typography | ✅ | ⬜ | ⬜ | — |
| 7 | Alert | ✅ | ⬜ | ⬜ | — |
| 8 | Avatar | ✅ | ⬜ | ⬜ | — |
| 9 | Chip | ✅ | ⬜ | ⬜ | — |
| 10 | Tooltip | ✅ | ⬜ | ⬜ | — |
| 11 | Divider | ✅ | ⬜ | ⬜ | — |
| 12 | Checkbox | ✅ | ⬜ | ⬜ | — |
| 13 | Radio | ✅ | ⬜ | ⬜ | — |
| 14 | Switch | ✅ | ⬜ | ⬜ | — |
| 15 | Slider | ✅ | ⬜ | ⬜ | — |
| 16 | Skeleton | ✅ | ⬜ | ⬜ | — |
| 17 | CircularProgress | ✅ | ⬜ | ⬜ | — |
| 18 | LinearProgress | ✅ | ⬜ | ⬜ | — |
| 19 | Stack | ✅ | ⬜ | ⬜ | — |
| 20 | Box | ✅ | ⬜ | ⬜ | — |
| 21 | Table | ✅ | ⬜ | ⬜ | — |
| 22 | TableHead | ✅ | ⬜ | ⬜ | — |
| 23 | TableBody | ✅ | ⬜ | ⬜ | — |
| 24 | TableRow | ✅ | ⬜ | ⬜ | — |
| 25 | TableCell | ✅ | ⬜ | ⬜ | — |

### Molecules (Priority: Medium)
| # | Component | CSS | Docs | E2E | Status |
|---|-----------|-----|------|-----|--------|
| 26 | FormField | ✅ | ⬜ | ⬜ | — |
| 27 | SearchBar | ✅ | ⬜ | ⬜ | — |
| 28 | Card | ✅ | ⬜ | ⬜ | — |
| 29 | Dialog | ✅ | ⬜ | ⬜ | — |
| 30 | Snackbar | ✅ | ⬜ | ⬜ | — |
| 31 | Tabs | ✅ | ⬜ | ⬜ | — |
| 32 | Tab | ✅ | ⬜ | ⬜ | — |
| 33 | Breadcrumbs | ✅ | ⬜ | ⬜ | — |
| 34 | Pagination | ✅ | ⬜ | ⬜ | — |
| 35 | Menu | ✅ | ⬜ | ⬜ | — |
| 36 | MenuItem | ✅ | ⬜ | ⬜ | — |
| 37 | Select | ✅ | ⬜ | ⬜ | — |
| 38 | Autocomplete | ✅ | ⬜ | ⬜ | — |
| 39 | List | ✅ | ⬜ | ⬜ | — |
| 40 | ListItem | ✅ | ⬜ | ⬜ | — |
| 41 | Accordion | ✅ | ⬜ | ⬜ | — |
| 42 | Drawer | ✅ | ⬜ | ⬜ | — |
| 43 | DatePicker | ✅ | ⬜ | ⬜ | — |

### Organisms (Priority: Medium)
| # | Component | CSS | Docs | E2E | Status |
|---|-----------|-----|------|-----|--------|
| 44 | DataTable | ✅ | ⬜ | ⬜ | — |
| 45 | Navbar | ✅ | ⬜ | ⬜ | — |
| 46 | Sidebar | ✅ | ⬜ | ⬜ | — |

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
