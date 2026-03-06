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
  { name: 'Button',    placeholder: '__BUTTON_CSS__',    scss: 'atoms/Button/Button.scss',       js: 'atoms/Button/Button.js' },
  { name: 'Input',     placeholder: '__INPUT_CSS__',     scss: 'atoms/Input/Input.scss',         js: 'atoms/Input/Input.js' },
  { name: 'Badge',     placeholder: '__BADGE_CSS__',     scss: 'atoms/Badge/Badge.scss',         js: 'atoms/Badge/Badge.js' },
  { name: 'Icon',      placeholder: '__ICON_CSS__',      scss: 'atoms/Icon/Icon.scss',           js: 'atoms/Icon/Icon.js' },
  { name: 'FormField', placeholder: '__FORMFIELD_CSS__', scss: 'molecules/FormField/FormField.scss', js: 'molecules/FormField/FormField.js' },
  { name: 'SearchBar', placeholder: '__SEARCHBAR_CSS__', scss: 'molecules/SearchBar/SearchBar.scss', js: 'molecules/SearchBar/SearchBar.js' },
  { name: 'Card',      placeholder: '__CARD_CSS__',      scss: 'molecules/Card/Card.scss',       js: 'molecules/Card/Card.js' },
  { name: 'DataTable', placeholder: '__DATATABLE_CSS__', scss: 'organisms/DataTable/DataTable.scss', js: 'organisms/DataTable/DataTable.js' },
  { name: 'Navbar',    placeholder: '__NAVBAR_CSS__',    scss: 'organisms/Navbar/Navbar.scss',   js: 'organisms/Navbar/Navbar.js' },
  { name: 'Sidebar',   placeholder: '__SIDEBAR_CSS__',   scss: 'organisms/Sidebar/Sidebar.scss', js: 'organisms/Sidebar/Sidebar.js' },
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
