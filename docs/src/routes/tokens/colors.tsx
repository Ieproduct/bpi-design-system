import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { brandColors, semanticColors, grayScale, backgroundColors, textColors, colorScales } from '~/data/tokens'

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
          Semantic Colors — 6 shades each (table format for AI)
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Semantic Colors</h2>
          <p className="text-[var(--color-text-secondary)]">
            Each semantic color has 6 shades. Use the CSS variable or hex value directly.
          </p>
        </div>

        {semanticColors.map((color) => {
          const baseName = color.name.toLowerCase()
          return (
            <div key={color.name} className="space-y-3">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                {color.name}
                {color.description && (
                  <span className="text-sm font-normal text-[var(--color-text-secondary)] ml-2">— {color.description}</span>
                )}
              </h3>
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
                    {shadeKeys.map((shade) => {
                      const hex = color[shade]
                      const cssVar = `--color-${baseName}-${shade}`
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
          )
        })}
      </section>

      {/* ══════════════════════════════════════════════════════
          Background Colors
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Background</h2>
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
              {backgroundColors.map((c) => {
                const cssVar = `--color-bg-${c.name.toLowerCase()}`
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
          Text Colors
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Text</h2>
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
              {textColors.map((c) => {
                const cssVar = `--color-text-${c.name.toLowerCase()}`
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
