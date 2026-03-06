import * as sass from 'sass';
import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const SRC = resolve(ROOT, 'src');
const DIST = resolve(ROOT, 'dist');
const TMP = resolve(ROOT, '.tmp');

// ============================================================
// Helpers
// ============================================================

function compileSCSS(inputPath, style = 'expanded') {
  const result = sass.compile(inputPath, {
    style,
    loadPaths: [SRC],
  });
  return result.css;
}

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

// ============================================================
// Step 1: Compile main CSS bundle
// ============================================================

console.log('[1/3] Compiling SCSS...');
ensureDir(DIST);

const cssExpanded = compileSCSS(resolve(SRC, 'index.scss'), 'expanded');
writeFileSync(resolve(DIST, 'bpi.css'), cssExpanded);
console.log('  ✓ dist/bpi.css');

const cssCompressed = compileSCSS(resolve(SRC, 'index.scss'), 'compressed');
writeFileSync(resolve(DIST, 'bpi.min.css'), cssCompressed);
console.log('  ✓ dist/bpi.min.css');

// ============================================================
// Step 2: Compile individual component SCSS & inline into JS
// ============================================================

console.log('[2/3] Inlining component CSS into JS...');
ensureDir(TMP);

const components = [
  // --- Atoms ---
  { name: 'Button',           placeholder: '__BUTTON_CSS__',           scss: 'atoms/Button/Button.scss',                     js: 'atoms/Button/Button.js' },
  { name: 'Input',            placeholder: '__INPUT_CSS__',            scss: 'atoms/Input/Input.scss',                       js: 'atoms/Input/Input.js' },
  { name: 'Badge',            placeholder: '__BADGE_CSS__',            scss: 'atoms/Badge/Badge.scss',                       js: 'atoms/Badge/Badge.js' },
  { name: 'Icon',             placeholder: '__ICON_CSS__',             scss: 'atoms/Icon/Icon.scss',                         js: 'atoms/Icon/Icon.js' },
  { name: 'Stack',            placeholder: '__STACK_CSS__',            scss: 'atoms/Stack/Stack.scss',                       js: 'atoms/Stack/Stack.js' },
  { name: 'Box',              placeholder: '__BOX_CSS__',              scss: 'atoms/Box/Box.scss',                           js: 'atoms/Box/Box.js' },
  { name: 'Typography',       placeholder: '__TYPOGRAPHY_CSS__',       scss: 'atoms/Typography/Typography.scss',             js: 'atoms/Typography/Typography.js' },
  { name: 'TextField',        placeholder: '__TEXTFIELD_CSS__',        scss: 'atoms/TextField/TextField.scss',               js: 'atoms/TextField/TextField.js' },
  { name: 'Alert',            placeholder: '__ALERT_CSS__',            scss: 'atoms/Alert/Alert.scss',                       js: 'atoms/Alert/Alert.js' },
  { name: 'Skeleton',         placeholder: '__SKELETON_CSS__',         scss: 'atoms/Skeleton/Skeleton.scss',                 js: 'atoms/Skeleton/Skeleton.js' },
  { name: 'CircularProgress', placeholder: '__CIRCULARPROGRESS_CSS__', scss: 'atoms/CircularProgress/CircularProgress.scss', js: 'atoms/CircularProgress/CircularProgress.js' },
  { name: 'LinearProgress',   placeholder: '__LINEARPROGRESS_CSS__',   scss: 'atoms/LinearProgress/LinearProgress.scss',     js: 'atoms/LinearProgress/LinearProgress.js' },
  { name: 'Avatar',           placeholder: '__AVATAR_CSS__',           scss: 'atoms/Avatar/Avatar.scss',                     js: 'atoms/Avatar/Avatar.js' },
  { name: 'Chip',             placeholder: '__CHIP_CSS__',             scss: 'atoms/Chip/Chip.scss',                         js: 'atoms/Chip/Chip.js' },
  { name: 'Tooltip',          placeholder: '__TOOLTIP_CSS__',          scss: 'atoms/Tooltip/Tooltip.scss',                   js: 'atoms/Tooltip/Tooltip.js' },
  { name: 'Divider',          placeholder: '__DIVIDER_CSS__',          scss: 'atoms/Divider/Divider.scss',                   js: 'atoms/Divider/Divider.js' },
  { name: 'Checkbox',         placeholder: '__CHECKBOX_CSS__',         scss: 'atoms/Checkbox/Checkbox.scss',                 js: 'atoms/Checkbox/Checkbox.js' },
  { name: 'Radio',            placeholder: '__RADIO_CSS__',            scss: 'atoms/Radio/Radio.scss',                       js: 'atoms/Radio/Radio.js' },
  { name: 'Switch',           placeholder: '__SWITCH_CSS__',           scss: 'atoms/Switch/Switch.scss',                     js: 'atoms/Switch/Switch.js' },
  { name: 'Slider',           placeholder: '__SLIDER_CSS__',           scss: 'atoms/Slider/Slider.scss',                     js: 'atoms/Slider/Slider.js' },
  // --- Molecules ---
  { name: 'FormField',        placeholder: '__FORMFIELD_CSS__',        scss: 'molecules/FormField/FormField.scss',           js: 'molecules/FormField/FormField.js' },
  { name: 'SearchBar',        placeholder: '__SEARCHBAR_CSS__',        scss: 'molecules/SearchBar/SearchBar.scss',           js: 'molecules/SearchBar/SearchBar.js' },
  { name: 'Card',             placeholder: '__CARD_CSS__',             scss: 'molecules/Card/Card.scss',                     js: 'molecules/Card/Card.js' },
  { name: 'Dialog',           placeholder: '__DIALOG_CSS__',           scss: 'molecules/Dialog/Dialog.scss',                 js: 'molecules/Dialog/Dialog.js' },
  { name: 'Snackbar',         placeholder: '__SNACKBAR_CSS__',         scss: 'molecules/Snackbar/Snackbar.scss',             js: 'molecules/Snackbar/Snackbar.js' },
  { name: 'Tabs',             placeholder: '__TABS_CSS__',             scss: 'molecules/Tabs/Tabs.scss',                     js: 'molecules/Tabs/Tabs.js' },
  { name: 'Tab',              placeholder: '__TAB_CSS__',              scss: 'molecules/Tab/Tab.scss',                       js: 'molecules/Tab/Tab.js' },
  { name: 'Breadcrumbs',      placeholder: '__BREADCRUMBS_CSS__',      scss: 'molecules/Breadcrumbs/Breadcrumbs.scss',       js: 'molecules/Breadcrumbs/Breadcrumbs.js' },
  { name: 'Pagination',       placeholder: '__PAGINATION_CSS__',       scss: 'molecules/Pagination/Pagination.scss',         js: 'molecules/Pagination/Pagination.js' },
  { name: 'Menu',             placeholder: '__MENU_CSS__',             scss: 'molecules/Menu/Menu.scss',                     js: 'molecules/Menu/Menu.js' },
  { name: 'MenuItem',         placeholder: '__MENUITEM_CSS__',         scss: 'molecules/MenuItem/MenuItem.scss',             js: 'molecules/MenuItem/MenuItem.js' },
  { name: 'Select',           placeholder: '__SELECT_CSS__',           scss: 'molecules/Select/Select.scss',                 js: 'molecules/Select/Select.js' },
  { name: 'Autocomplete',     placeholder: '__AUTOCOMPLETE_CSS__',     scss: 'molecules/Autocomplete/Autocomplete.scss',     js: 'molecules/Autocomplete/Autocomplete.js' },
  { name: 'List',             placeholder: '__LIST_CSS__',             scss: 'molecules/List/List.scss',                     js: 'molecules/List/List.js' },
  { name: 'ListItem',         placeholder: '__LISTITEM_CSS__',         scss: 'molecules/ListItem/ListItem.scss',             js: 'molecules/ListItem/ListItem.js' },
  { name: 'Accordion',        placeholder: '__ACCORDION_CSS__',        scss: 'molecules/Accordion/Accordion.scss',           js: 'molecules/Accordion/Accordion.js' },
  { name: 'Drawer',           placeholder: '__DRAWER_CSS__',           scss: 'molecules/Drawer/Drawer.scss',                 js: 'molecules/Drawer/Drawer.js' },
  { name: 'DatePicker',       placeholder: '__DATEPICKER_CSS__',       scss: 'molecules/DatePicker/DatePicker.scss',         js: 'molecules/DatePicker/DatePicker.js' },
  // --- Organisms ---
  { name: 'DataTable',        placeholder: '__DATATABLE_CSS__',        scss: 'organisms/DataTable/DataTable.scss',           js: 'organisms/DataTable/DataTable.js' },
  { name: 'Navbar',           placeholder: '__NAVBAR_CSS__',           scss: 'organisms/Navbar/Navbar.scss',                 js: 'organisms/Navbar/Navbar.js' },
  { name: 'Sidebar',          placeholder: '__SIDEBAR_CSS__',          scss: 'organisms/Sidebar/Sidebar.scss',               js: 'organisms/Sidebar/Sidebar.js' },
];

// Compile each component SCSS and write temp JS with inlined CSS
for (const comp of components) {
  const css = compileSCSS(resolve(SRC, comp.scss), 'compressed');
  const jsContent = readFileSync(resolve(SRC, comp.js), 'utf-8');
  // Escape backticks and backslashes in CSS for template literal
  const escapedCSS = css.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  const inlinedJS = jsContent.replace(`\`${comp.placeholder}\``, '`' + escapedCSS + '`');
  writeFileSync(resolve(TMP, `${comp.name}.js`), inlinedJS);
  console.log(`  ✓ ${comp.name}`);
}

// Write temp index.js that imports from tmp
const tmpIndex = components
  .map((c) => `export { ${c.name} } from './${c.name}.js';`)
  .join('\n') + '\n';
writeFileSync(resolve(TMP, 'index.js'), tmpIndex);

// ============================================================
// Step 3: Bundle with esbuild
// ============================================================

console.log('[3/3] Bundling with esbuild...');

// ESM bundle
await esbuild.build({
  entryPoints: [resolve(TMP, 'index.js')],
  bundle: true,
  format: 'esm',
  outfile: resolve(DIST, 'bpi.js'),
  sourcemap: true,
  target: 'es2020',
  logLevel: 'warning',
});
console.log('  ✓ dist/bpi.js (ESM + sourcemap)');

// ESM minified
await esbuild.build({
  entryPoints: [resolve(TMP, 'index.js')],
  bundle: true,
  format: 'esm',
  outfile: resolve(DIST, 'bpi.min.js'),
  minify: true,
  target: 'es2020',
  logLevel: 'warning',
});
console.log('  ✓ dist/bpi.min.js (ESM minified)');

// IIFE for plain script tag
await esbuild.build({
  entryPoints: [resolve(TMP, 'index.js')],
  bundle: true,
  format: 'iife',
  globalName: 'BpiDesignSystem',
  outfile: resolve(DIST, 'bpi.iife.js'),
  target: 'es2020',
  logLevel: 'warning',
});
console.log('  ✓ dist/bpi.iife.js (IIFE)');

// Cleanup temp (ignore errors if permission denied)
try { rmSync(TMP, { recursive: true, force: true }); } catch { /* ok */ }

console.log('\n✅ Build complete!');
