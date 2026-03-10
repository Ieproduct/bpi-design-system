import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  brandColors,
  semanticColors,
  darkSemanticColors,
  backgroundColors,
  darkBackgroundColors,
  textColors,
  darkTextColors,
  colorScales,
} from '~/data/tokens'

export const Route = createFileRoute('/tokens/colors')({
  component: ColorsPage,
})

const shadeKeys = ['lighter', 'light', 'main', 'dark', 'darker', 'contrast'] as const

function ColorsPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(null), 2000)
  }

  const CopiedBadge = ({ value }: { value: string }) =>
    copiedText === value ? (
      <span className="text-[10px] text-green-600 font-semibold ml-1">Copied!</span>
    ) : null

  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-3">Colors</h1>
        <div className="w-16 h-0.5 bg-[var(--color-text-primary)] mb-6" />
        <p className="text-[var(--color-text-secondary)] max-w-2xl">
          BPI Design System color tokens. Click any value to copy. Use CSS variable names or hex values in your project.
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════
          DARK MODE GUIDE (AI-readable)
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Dark Mode Guide</h2>
        <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-3 text-sm text-[var(--color-text)]">
          <p><strong>How dark mode works:</strong> Add <code className="text-xs font-mono text-blue-600 dark:text-blue-400">class="dark"</code> to <code className="text-xs font-mono text-blue-600 dark:text-blue-400">&lt;html&gt;</code>. All CSS variables automatically switch to dark values.</p>
          <p><strong>For AI agents:</strong> Use the SAME CSS variable names in both modes. The values change automatically. For example, <code className="text-xs font-mono text-blue-600 dark:text-blue-400">--color-primary-main</code> is <code className="text-xs font-mono">#E32321</code> in light and <code className="text-xs font-mono">#EF4444</code> in dark.</p>
          <p><strong>Toggle method:</strong> <code className="text-xs font-mono text-blue-600 dark:text-blue-400">document.documentElement.classList.toggle('dark')</code></p>
          <p><strong>Persist preference:</strong> <code className="text-xs font-mono text-blue-600 dark:text-blue-400">localStorage.setItem('theme', 'dark' | 'light')</code></p>
          <p><strong>System preference:</strong> <code className="text-xs font-mono text-blue-600 dark:text-blue-400">window.matchMedia('(prefers-color-scheme: dark)').matches</code></p>
          <p><strong>Color palette (50–950):</strong> The full color scales do NOT change between modes — they are absolute values. Only semantic, background, text, and surface tokens swap.</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Semantic Colors — Light vs Dark comparison
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Semantic Colors</h2>
          <p className="text-[var(--color-text-secondary)]">
            Each semantic color has 6 shades. Light and dark mode values are shown side by side.
          </p>
        </div>

        {semanticColors.map((lightColor, idx) => {
          const darkColor = darkSemanticColors[idx]
          const baseName = lightColor.name.toLowerCase()
          return (
            <div key={lightColor.name} className="space-y-3">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                {lightColor.name}
                {lightColor.description && (
                  <span className="text-sm font-normal text-[var(--color-text-secondary)] ml-2">— {lightColor.description}</span>
                )}
              </h3>
              <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
                <table className="w-full min-w-[750px]">
                  <thead>
                    <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                      <th className="px-4 py-2 border-b border-[var(--color-border)]">Shade</th>
                      <th className="px-4 py-2 border-b border-[var(--color-border)]">CSS Variable</th>
                      <th className="px-4 py-2 border-b border-[var(--color-border)]" colSpan={2}>Light Mode</th>
                      <th className="px-4 py-2 border-b border-[var(--color-border)]" colSpan={2}>Dark Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shadeKeys.map((shade) => {
                      const lightHex = lightColor[shade]
                      const darkHex = darkColor[shade]
                      const cssVar = `--color-${baseName}-${shade}`
                      return (
                        <tr key={shade} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)] transition-colors">
                          <td className="px-4 py-2 text-sm font-medium text-[var(--color-text-primary)]">{shade}</td>
                          <td className="px-4 py-2">
                            <code
                              className="text-xs font-mono text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
                              onClick={() => copy(cssVar)}
                            >
                              {cssVar}
                            </code>
                            <CopiedBadge value={cssVar} />
                          </td>
                          {/* Light mode swatch + hex */}
                          <td className="px-4 py-1 w-10">
                            <div style={{ backgroundColor: lightHex }} className="w-8 h-8 rounded border border-[var(--color-border)]" />
                          </td>
                          <td className="px-4 py-2">
                            <code
                              className="text-xs font-mono text-[var(--color-text-secondary)] cursor-pointer hover:underline"
                              onClick={() => copy(lightHex)}
                            >
                              {lightHex}
                            </code>
                            <CopiedBadge value={lightHex} />
                          </td>
                          {/* Dark mode swatch + hex */}
                          <td className="px-4 py-1 w-10">
                            <div style={{ backgroundColor: darkHex }} className="w-8 h-8 rounded border border-[var(--color-border)]" />
                          </td>
                          <td className="px-4 py-2">
                            <code
                              className="text-xs font-mono text-[var(--color-text-secondary)] cursor-pointer hover:underline"
                              onClick={() => copy(darkHex)}
                            >
                              {darkHex}
                            </code>
                            <CopiedBadge value={darkHex} />
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </section>

      {/* ══════════════════════════════════════════════════════
          Background Colors — Light vs Dark
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Background</h2>
        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Name</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">CSS Variable</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]" colSpan={2}>Light Mode</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]" colSpan={2}>Dark Mode</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Description</th>
              </tr>
            </thead>
            <tbody>
              {backgroundColors.map((c, idx) => {
                const darkC = darkBackgroundColors[idx]
                const cssVar = `--color-bg-${c.name.toLowerCase()}`
                return (
                  <tr key={c.name} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)]">
                    <td className="px-4 py-2 text-sm font-medium text-[var(--color-text-primary)]">{c.name}</td>
                    <td className="px-4 py-2">
                      <code className="text-xs font-mono text-blue-600 dark:text-blue-400 cursor-pointer hover:underline" onClick={() => copy(cssVar)}>
                        {cssVar}
                      </code>
                      <CopiedBadge value={cssVar} />
                    </td>
                    <td className="px-4 py-1 w-10">
                      <div style={{ backgroundColor: c.value }} className="w-8 h-8 rounded border border-[var(--color-border)]" />
                    </td>
                    <td className="px-4 py-2">
                      <code className="text-xs font-mono text-[var(--color-text-secondary)] cursor-pointer hover:underline" onClick={() => copy(c.value)}>
                        {c.value}
                      </code>
                      <CopiedBadge value={c.value} />
                    </td>
                    <td className="px-4 py-1 w-10">
                      <div style={{ backgroundColor: darkC.value }} className="w-8 h-8 rounded border border-[var(--color-border)]" />
                    </td>
                    <td className="px-4 py-2">
                      <code className="text-xs font-mono text-[var(--color-text-secondary)] cursor-pointer hover:underline" onClick={() => copy(darkC.value)}>
                        {darkC.value}
                      </code>
                      <CopiedBadge value={darkC.value} />
                    </td>
                    <td className="px-4 py-2 text-xs text-[var(--color-text-secondary)]">{c.description}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Text Colors — Light vs Dark
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Text</h2>
        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Name</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">CSS Variable</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]" colSpan={2}>Light Mode</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]" colSpan={2}>Dark Mode</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Description</th>
              </tr>
            </thead>
            <tbody>
              {textColors.map((c, idx) => {
                const darkC = darkTextColors[idx]
                const cssVar = `--color-text-${c.name.toLowerCase()}`
                return (
                  <tr key={c.name} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)]">
                    <td className="px-4 py-2 text-sm font-medium text-[var(--color-text-primary)]">{c.name}</td>
                    <td className="px-4 py-2">
                      <code className="text-xs font-mono text-blue-600 dark:text-blue-400 cursor-pointer hover:underline" onClick={() => copy(cssVar)}>
                        {cssVar}
                      </code>
                      <CopiedBadge value={cssVar} />
                    </td>
                    <td className="px-4 py-1 w-10">
                      <div style={{ backgroundColor: c.value }} className="w-8 h-8 rounded border border-[var(--color-border)]" />
                    </td>
                    <td className="px-4 py-2">
                      <code className="text-xs font-mono text-[var(--color-text-secondary)] cursor-pointer hover:underline" onClick={() => copy(c.value)}>
                        {c.value}
                      </code>
                      <CopiedBadge value={c.value} />
                    </td>
                    <td className="px-4 py-1 w-10">
                      <div style={{ backgroundColor: darkC.value }} className="w-8 h-8 rounded border border-[var(--color-border)]" />
                    </td>
                    <td className="px-4 py-2">
                      <code className="text-xs font-mono text-[var(--color-text-secondary)] cursor-pointer hover:underline" onClick={() => copy(darkC.value)}>
                        {darkC.value}
                      </code>
                      <CopiedBadge value={darkC.value} />
                    </td>
                    <td className="px-4 py-2 text-xs text-[var(--color-text-secondary)]">{c.description}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Surface & Utility Tokens — Dark Mode
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Surface &amp; Utility Tokens</h2>
        <p className="text-[var(--color-text-secondary)]">
          These tokens control layout surfaces, borders, and hover states. They swap automatically in dark mode.
        </p>
        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-2 border-b border-[var(--color-border)]">CSS Variable</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]" colSpan={2}>Light Mode</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]" colSpan={2}>Dark Mode</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Usage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['--color-surface', '#FFFFFF', '#0F172A', 'Main page background'],
                ['--color-surface-variant', '#F8FAFC', '#1E293B', 'Subtle background (table headers, code blocks)'],
                ['--color-surface-hover', '#F1F5F9', '#334155', 'Hover state background'],
                ['--color-border', '#E2E8F0', '#334155', 'Default border color'],
                ['--color-border-strong', '#CBD5E1', '#475569', 'Strong/emphasized borders'],
                ['--color-sidebar', '#FAFBFC', '#0B1120', 'Sidebar background'],
              ].map(([cssVar, lightVal, darkVal, usage]) => (
                <tr key={cssVar} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)]">
                  <td className="px-4 py-2">
                    <code className="text-xs font-mono text-blue-600 dark:text-blue-400 cursor-pointer hover:underline" onClick={() => copy(cssVar)}>
                      {cssVar}
                    </code>
                    <CopiedBadge value={cssVar} />
                  </td>
                  <td className="px-4 py-1 w-10">
                    <div style={{ backgroundColor: lightVal }} className="w-8 h-8 rounded border border-[var(--color-border)]" />
                  </td>
                  <td className="px-4 py-2">
                    <code className="text-xs font-mono text-[var(--color-text-secondary)] cursor-pointer hover:underline" onClick={() => copy(lightVal)}>
                      {lightVal}
                    </code>
                    <CopiedBadge value={lightVal} />
                  </td>
                  <td className="px-4 py-1 w-10">
                    <div style={{ backgroundColor: darkVal }} className="w-8 h-8 rounded border border-[var(--color-border)]" />
                  </td>
                  <td className="px-4 py-2">
                    <code className="text-xs font-mono text-[var(--color-text-secondary)] cursor-pointer hover:underline" onClick={() => copy(darkVal)}>
                      {darkVal}
                    </code>
                    <CopiedBadge value={darkVal} />
                  </td>
                  <td className="px-4 py-2 text-xs text-[var(--color-text-secondary)]">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Brand Colors
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Brand Colors</h2>
        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-2 border-b border-[var(--color-border)] w-10">Swatch</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Name</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">CSS Variable</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Hex</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Description</th>
              </tr>
            </thead>
            <tbody>
              {brandColors.map((c) => {
                const cssVar = `--color-brand-${c.name.toLowerCase()}`
                return (
                  <tr key={c.name} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)]">
                    <td className="px-4 py-2">
                      <div style={{ backgroundColor: c.value }} className="w-8 h-8 rounded border border-[var(--color-border)]" />
                    </td>
                    <td className="px-4 py-2 text-sm font-medium text-[var(--color-text-primary)]">{c.name}</td>
                    <td className="px-4 py-2">
                      <code className="text-xs font-mono text-blue-600 dark:text-blue-400 cursor-pointer hover:underline" onClick={() => copy(cssVar)}>
                        {cssVar}
                      </code>
                      <CopiedBadge value={cssVar} />
                    </td>
                    <td className="px-4 py-2">
                      <code className="text-xs font-mono text-[var(--color-text-secondary)] cursor-pointer hover:underline" onClick={() => copy(c.value)}>
                        {c.value}
                      </code>
                      <CopiedBadge value={c.value} />
                    </td>
                    <td className="px-4 py-2 text-xs text-[var(--color-text-secondary)]">{c.description}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Color Palette (50–950 shades per color)
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Color Palette</h2>
          <p className="text-[var(--color-text-secondary)]">
            Full color scales from 50 (lightest) to 950 (darkest). Each color has 11 shades.
            These are absolute values — they do NOT change between light and dark mode.
            Use CSS variable <code className="text-xs font-mono">--color-{'{'}<em>name</em>{'}'}-{'{'}<em>shade</em>{'}'}</code> or hex value.
          </p>
        </div>

        {Object.entries(colorScales).map(([colorName, shades]) => (
          <div key={colorName} className="space-y-3">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] capitalize">{colorName}</h3>

            {/* Visual swatch strip */}
            <div className="flex gap-1">
              {Object.entries(shades).map(([shade, hex]) => (
                <div key={shade} className="flex-1 text-center">
                  <div
                    style={{ backgroundColor: hex }}
                    className="h-10 rounded-md border border-[var(--color-border)] cursor-pointer hover:ring-2 hover:ring-blue-400"
                    title={`${colorName}-${shade}: ${hex}`}
                    onClick={() => copy(hex)}
                  />
                  <span className="text-[9px] text-[var(--color-text-secondary)] mt-0.5 block">{shade}</span>
                </div>
              ))}
            </div>

            {/* Data table */}
            <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                    <th className="px-4 py-2 border-b border-[var(--color-border)] w-10">Swatch</th>
                    <th className="px-4 py-2 border-b border-[var(--color-border)]">Shade</th>
                    <th className="px-4 py-2 border-b border-[var(--color-border)]">CSS Variable</th>
                    <th className="px-4 py-2 border-b border-[var(--color-border)]">Hex</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(shades).map(([shade, hex]) => {
                    const cssVar = `--color-${colorName}-${shade}`
                    return (
                      <tr key={shade} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)] transition-colors">
                        <td className="px-4 py-2">
                          <div style={{ backgroundColor: hex }} className="w-8 h-8 rounded border border-[var(--color-border)]" />
                        </td>
                        <td className="px-4 py-2 text-sm font-medium text-[var(--color-text-primary)]">{shade}</td>
                        <td className="px-4 py-2">
                          <code
                            className="text-xs font-mono text-blue-600 dark:text-blue-400 cursor-pointer hover:underline"
                            onClick={() => copy(cssVar)}
                          >
                            {cssVar}
                          </code>
                          <CopiedBadge value={cssVar} />
                        </td>
                        <td className="px-4 py-2">
                          <code
                            className="text-xs font-mono text-[var(--color-text-secondary)] cursor-pointer hover:underline"
                            onClick={() => copy(hex)}
                          >
                            {hex}
                          </code>
                          <CopiedBadge value={hex} />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
