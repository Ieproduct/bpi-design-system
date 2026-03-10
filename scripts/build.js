import * as sass from 'sass';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const SRC = resolve(ROOT, 'src');
const DIST = resolve(ROOT, 'dist');

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
// Step 1: Compile token SCSS → CSS custom properties
// ============================================================

console.log('[1/2] Compiling design tokens SCSS...');
ensureDir(DIST);

const cssExpanded = compileSCSS(resolve(SRC, 'tokens/index.scss'), 'expanded');
writeFileSync(resolve(DIST, 'bpi-tokens.css'), cssExpanded);
console.log('  ✓ dist/bpi-tokens.css');

const cssCompressed = compileSCSS(resolve(SRC, 'tokens/index.scss'), 'compressed');
writeFileSync(resolve(DIST, 'bpi.min.css'), cssCompressed);
console.log('  ✓ dist/bpi.min.css');

// ============================================================
// Step 2: Generate tokens.json from SCSS variables
// ============================================================

console.log('[2/2] Generating tokens.json...');

// Parse the compiled CSS to extract custom properties
const tokenJson = {};
const cssLines = cssExpanded.split('\n');
let currentBlock = null;

for (const line of cssLines) {
  const trimmed = line.trim();

  // Detect :root or .dark block
  if (trimmed === ':root {') currentBlock = 'light';
  else if (trimmed === '.dark {') currentBlock = 'dark';
  else if (trimmed === '}') currentBlock = null;

  if (!currentBlock) continue;

  // Extract --bpi-* properties
  const match = trimmed.match(/^(--bpi-[\w-]+):\s*(.+);$/);
  if (match) {
    const [, prop, value] = match;
    if (!tokenJson[currentBlock]) tokenJson[currentBlock] = {};
    tokenJson[currentBlock][prop] = value;
  }
}

writeFileSync(resolve(DIST, 'tokens.json'), JSON.stringify(tokenJson, null, 2));
console.log('  ✓ dist/tokens.json');

console.log('\n✅ Build complete — tokens only!');
