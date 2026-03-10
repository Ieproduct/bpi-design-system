import { createFileRoute } from '@tanstack/react-router'
import { fontFamilies } from '~/data/tokens'

export const Route = createFileRoute('/tokens/typography')({
  component: TypographyPage,
})

// ── Spec per variant ────────────────────────────────────────
interface BreakpointSpec {
  fontSize: number   // px
  fontWeight: number
  lineHeight: number
}

interface VariantRow {
  variant: string
  mobile: BreakpointSpec
  tablet: BreakpointSpec
  desktop: BreakpointSpec
  letterSpacing?: string
  element: string
}

const variants: VariantRow[] = [
  // Headings
  { variant: 'h1',        mobile: { fontSize: 32, fontWeight: 700, lineHeight: 1.15 }, tablet: { fontSize: 40, fontWeight: 700, lineHeight: 1.15 }, desktop: { fontSize: 48, fontWeight: 700, lineHeight: 1.15 }, letterSpacing: '-0.02em', element: 'h1' },
  { variant: 'h2',        mobile: { fontSize: 28, fontWeight: 700, lineHeight: 1.2 },  tablet: { fontSize: 32, fontWeight: 700, lineHeight: 1.2 },  desktop: { fontSize: 40, fontWeight: 700, lineHeight: 1.2 },  letterSpacing: '-0.015em', element: 'h2' },
  { variant: 'h3',        mobile: { fontSize: 24, fontWeight: 700, lineHeight: 1.25 }, tablet: { fontSize: 28, fontWeight: 700, lineHeight: 1.25 }, desktop: { fontSize: 32, fontWeight: 700, lineHeight: 1.25 }, letterSpacing: '-0.01em', element: 'h3' },
  { variant: 'h4',        mobile: { fontSize: 20, fontWeight: 600, lineHeight: 1.3 },  tablet: { fontSize: 24, fontWeight: 600, lineHeight: 1.3 },  desktop: { fontSize: 28, fontWeight: 600, lineHeight: 1.3 },  letterSpacing: '-0.008em', element: 'h4' },
  { variant: 'h5',        mobile: { fontSize: 18, fontWeight: 600, lineHeight: 1.35 }, tablet: { fontSize: 20, fontWeight: 600, lineHeight: 1.35 }, desktop: { fontSize: 24, fontWeight: 600, lineHeight: 1.35 }, element: 'h5' },
  { variant: 'h6',        mobile: { fontSize: 16, fontWeight: 600, lineHeight: 1.4 },  tablet: { fontSize: 18, fontWeight: 600, lineHeight: 1.4 },  desktop: { fontSize: 20, fontWeight: 600, lineHeight: 1.4 },  element: 'h6' },
  // Titles
  { variant: 'title1',    mobile: { fontSize: 20, fontWeight: 600, lineHeight: 1.3 },  tablet: { fontSize: 22, fontWeight: 600, lineHeight: 1.3 },  desktop: { fontSize: 24, fontWeight: 600, lineHeight: 1.3 },  letterSpacing: '-0.006em', element: 'h2' },
  { variant: 'title2',    mobile: { fontSize: 18, fontWeight: 600, lineHeight: 1.35 }, tablet: { fontSize: 20, fontWeight: 600, lineHeight: 1.35 }, desktop: { fontSize: 22, fontWeight: 600, lineHeight: 1.35 }, element: 'h3' },
  { variant: 'title3',    mobile: { fontSize: 16, fontWeight: 500, lineHeight: 1.4 },  tablet: { fontSize: 17, fontWeight: 500, lineHeight: 1.4 },  desktop: { fontSize: 18, fontWeight: 500, lineHeight: 1.4 },  element: 'h4' },
  // Subtitles
  { variant: 'subtitle1', mobile: { fontSize: 16, fontWeight: 500, lineHeight: 1.5 },  tablet: { fontSize: 16, fontWeight: 500, lineHeight: 1.5 },  desktop: { fontSize: 16, fontWeight: 500, lineHeight: 1.5 },  letterSpacing: '0.0075em', element: 'h6' },
  { variant: 'subtitle2', mobile: { fontSize: 14, fontWeight: 500, lineHeight: 1.5 },  tablet: { fontSize: 14, fontWeight: 500, lineHeight: 1.5 },  desktop: { fontSize: 14, fontWeight: 500, lineHeight: 1.5 },  letterSpacing: '0.006em', element: 'h6' },
  { variant: 'subtitle3', mobile: { fontSize: 13, fontWeight: 500, lineHeight: 1.5 },  tablet: { fontSize: 13, fontWeight: 500, lineHeight: 1.5 },  desktop: { fontSize: 13, fontWeight: 500, lineHeight: 1.5 },  letterSpacing: '0.005em', element: 'h6' },
  // Body
  { variant: 'body1',     mobile: { fontSize: 16, fontWeight: 400, lineHeight: 1.5 },  tablet: { fontSize: 16, fontWeight: 400, lineHeight: 1.5 },  desktop: { fontSize: 16, fontWeight: 400, lineHeight: 1.5 },  element: 'p' },
  { variant: 'body2',     mobile: { fontSize: 14, fontWeight: 400, lineHeight: 1.55 }, tablet: { fontSize: 14, fontWeight: 400, lineHeight: 1.55 }, desktop: { fontSize: 14, fontWeight: 400, lineHeight: 1.55 }, element: 'p' },
  { variant: 'body3',     mobile: { fontSize: 13, fontWeight: 400, lineHeight: 1.55 }, tablet: { fontSize: 13, fontWeight: 400, lineHeight: 1.55 }, desktop: { fontSize: 13, fontWeight: 400, lineHeight: 1.55 }, element: 'p' },
  // Caption & Helper
  { variant: 'caption',     mobile: { fontSize: 12, fontWeight: 400, lineHeight: 1.5 },  tablet: { fontSize: 12, fontWeight: 400, lineHeight: 1.5 },  desktop: { fontSize: 12, fontWeight: 400, lineHeight: 1.5 },  letterSpacing: '0.03em', element: 'span' },
  { variant: 'text-helper', mobile: { fontSize: 11, fontWeight: 400, lineHeight: 1.5 },  tablet: { fontSize: 11, fontWeight: 400, lineHeight: 1.5 },  desktop: { fontSize: 11, fontWeight: 400, lineHeight: 1.5 },  letterSpacing: '0.025em', element: 'span' },
]

// Format a single breakpoint cell
function SpecCell({ spec }: { spec: BreakpointSpec }) {
  return (
    <div className="flex flex-col gap-0.5 font-mono text-xs leading-snug">
      <span>
        <span className="text-[var(--color-text-secondary)]">font-size:</span>{' '}
        <span className="text-[var(--color-text-primary)] font-semibold">{spec.fontSize}px</span>
      </span>
      <span>
        <span className="text-[var(--color-text-secondary)]">font-weight:</span>{' '}
        <span className="text-[var(--color-text-primary)] font-semibold">{spec.fontWeight}</span>
      </span>
      <span>
        <span className="text-[var(--color-text-secondary)]">line-height:</span>{' '}
        <span className="text-[var(--color-text-primary)] font-semibold">{spec.lineHeight}</span>
      </span>
    </div>
  )
}

// ── Main page ───────────────────────────────────────────────
function TypographyPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-3">Typography</h1>
        <div className="w-16 h-0.5 bg-[var(--color-text-primary)] mb-6" />
        <p className="text-[var(--color-text-secondary)] max-w-2xl">
          A minimal responsive type system with 17 variants. Each variant has a fixed size, weight, and line-height per breakpoint.
        </p>
      </section>

      {/* ══════════════════════════════════════════════════════
          Breakpoint legend
          ══════════════════════════════════════════════════════ */}
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Mobile {'<'}640px
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Tablet 640–1023px
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Desktop {'≥'}1024px
        </span>
      </div>

      {/* ══════════════════════════════════════════════════════
          Main spec table
          ══════════════════════════════════════════════════════ */}
      <section>
        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full min-w-[820px]">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-3 border-b border-[var(--color-border)] w-[140px]">Variant</th>
                <th className="px-4 py-3 border-b border-[var(--color-border)] w-[160px]">CSS Class</th>
                <th className="px-4 py-3 border-b border-[var(--color-border)]">
                  <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Mobile</span>
                </th>
                <th className="px-4 py-3 border-b border-[var(--color-border)]">
                  <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />Tablet</span>
                </th>
                <th className="px-4 py-3 border-b border-[var(--color-border)]">
                  <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Desktop</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {variants.map((row, i) => {
                const group = row.variant.replace(/[0-9]/g, '')
                const prevGroup = i > 0 ? variants[i - 1].variant.replace(/[0-9]/g, '') : ''
                const isNewGroup = group !== prevGroup && i > 0

                return (
                  <tr
                    key={row.variant}
                    className={`hover:bg-[var(--color-surface-variant)] transition-colors ${isNewGroup ? 'border-t-2 border-[var(--color-border)]' : 'border-t border-[var(--color-border)]'}`}
                  >
                    {/* Variant name */}
                    <td className="px-4 py-3 align-middle">
                      <code className="font-mono text-base font-semibold text-blue-600 dark:text-blue-400">
                        {row.variant}
                      </code>
                    </td>
                    {/* CSS Class */}
                    <td className="px-4 py-3 align-middle">
                      <code className="font-mono text-xs text-[var(--color-text-secondary)]">
                        .bpi-{row.variant}
                      </code>
                    </td>
                    {/* Mobile */}
                    <td className="px-4 py-3 align-top">
                      <SpecCell spec={row.mobile} />
                    </td>
                    {/* Tablet */}
                    <td className="px-4 py-3 align-top">
                      <SpecCell spec={row.tablet} />
                    </td>
                    {/* Desktop */}
                    <td className="px-4 py-3 align-top">
                      <SpecCell spec={row.desktop} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Live Preview — show all 3 breakpoint sizes side by side
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Live Preview</h2>
        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full min-w-[820px]">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-3 border-b border-[var(--color-border)]">
                  <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />Mobile</span>
                </th>
                <th className="px-4 py-3 border-b border-[var(--color-border)]">
                  <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" />Tablet</span>
                </th>
                <th className="px-4 py-3 border-b border-[var(--color-border)]">
                  <span className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" />Desktop</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {variants.map((row, i) => {
                const group = row.variant.replace(/[0-9]/g, '')
                const prevGroup = i > 0 ? variants[i - 1].variant.replace(/[0-9]/g, '') : ''
                const isNewGroup = group !== prevGroup && i > 0

                return (
                  <tr
                    key={row.variant}
                    className={`${isNewGroup ? 'border-t-2 border-[var(--color-border)]' : 'border-t border-[var(--color-border)]'}`}
                  >
                    <td className="px-4 py-3 align-middle">
                      <span
                        className="text-[var(--color-text-primary)]"
                        style={{ fontSize: `${row.mobile.fontSize}px`, fontWeight: row.mobile.fontWeight, lineHeight: row.mobile.lineHeight }}
                      >
                        {row.variant}
                      </span>
                    </td>
                    <td className="px-4 py-3 align-middle">
                      <span
                        className="text-[var(--color-text-primary)]"
                        style={{ fontSize: `${row.tablet.fontSize}px`, fontWeight: row.tablet.fontWeight, lineHeight: row.tablet.lineHeight }}
                      >
                        {row.variant}
                      </span>
                    </td>
                    <td className="px-4 py-3 align-middle">
                      <span
                        className="text-[var(--color-text-primary)]"
                        style={{ fontSize: `${row.desktop.fontSize}px`, fontWeight: row.desktop.fontWeight, lineHeight: row.desktop.lineHeight }}
                      >
                        {row.variant}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Font Families
          ══════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Font Families</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Sans (Primary)', family: fontFamilies.display, sample: 'The quick brown fox jumps over the lazy dog' },
            { label: 'Thai', family: fontFamilies.thai, sample: 'สุนัขจิ้งจอกสีน้ำตาลกระโดดข้ามหมาขี้เกียจ' },
            { label: 'Monospace', family: fontFamilies.mono, sample: 'const config = { theme: "dark" };' },
          ].map((f) => (
            <div key={f.label} className="space-y-3">
              <span className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wide font-medium">{f.label}</span>
              <p style={{ fontFamily: f.family }} className="text-lg text-[var(--color-text-primary)] leading-relaxed">
                {f.sample}
              </p>
              <code className="text-[10px] text-[var(--color-text-secondary)] block break-all font-mono">{f.family}</code>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
