import React from 'react';
import { ComponentSpec, getSpec } from '~/data/specs';

interface SpecPageProps {
  specId: string;
}

/* ── tiny color swatch ── */
function ColorDot({ token }: { token: string }) {
  if (!token || token === 'transparent' || token === 'N/A' || token === '—') return null;
  // token is a --bpi-* CSS variable name; use it directly
  const cssVar = token.startsWith('--') ? `var(${token})` : token;
  return (
    <span
      className="inline-block w-3 h-3 rounded-full border border-[var(--color-border)] mr-1 align-middle"
      style={{ backgroundColor: cssVar }}
      title={token}
    />
  );
}

/* ── section heading ── */
function SH({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-[var(--color-text)] mt-10 mb-4 scroll-mt-20">
      {children}
    </h2>
  );
}

/* ── table wrapper ── */
function TW({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
      <table className="w-full text-sm">
        {children}
      </table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left px-4 py-3 font-semibold text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)] text-xs uppercase tracking-wide">
      {children}
    </th>
  );
}

function Td({ children, mono }: { children: React.ReactNode; mono?: boolean }) {
  return (
    <td className={`px-4 py-3 border-t border-[var(--color-border)] text-[var(--color-text)] ${mono ? 'font-mono text-xs' : ''}`}>
      {children}
    </td>
  );
}

/* ════════════════════════════════════════════════ */

export const SpecPage: React.FC<SpecPageProps> = ({ specId }) => {
  const spec = getSpec(specId);

  if (!spec) {
    return (
      <div className="p-8">
        <p className="text-[var(--color-text-secondary)]">Spec not found: {specId}</p>
      </div>
    );
  }

  const catLabel = spec.category === 'atom' ? 'Atom' : spec.category === 'layout' ? 'Layout' : 'Component';
  const catColor = spec.category === 'atom'
    ? 'bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300'
    : spec.category === 'layout'
      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300'
      : 'bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide ${catColor}`}>
          {catLabel}
        </span>
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-2">{spec.name}</h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-4">{spec.description}</p>
        <div className="flex gap-3 items-center text-sm text-[var(--color-text-secondary)]">
          <span className="font-medium text-[var(--color-text)]">Anatomy:</span>
          <code className="bg-[var(--color-surface-variant)] px-2 py-1 rounded font-mono text-xs">
            {spec.anatomy}
          </code>
        </div>
        {spec.defaults && (
          <div className="flex gap-3 items-center text-sm text-[var(--color-text-secondary)] mt-2">
            <span className="font-medium text-[var(--color-text)]">Defaults:</span>
            {Object.entries(spec.defaults).map(([k, v]) => (
              <code key={k} className="bg-[var(--color-surface-variant)] px-2 py-1 rounded font-mono text-xs">
                {k}: {v}
              </code>
            ))}
          </div>
        )}
      </div>

      {/* Sizes */}
      {spec.sizes && spec.sizes.length > 0 && (
        <>
          <SH>Sizes</SH>
          <TW>
            <thead>
              <tr>
                <Th>Size</Th>
                <Th>Padding</Th>
                <Th>Font Size</Th>
                <Th>Border Radius</Th>
                {spec.sizes.some(s => s.extra) && <Th>Extra</Th>}
              </tr>
            </thead>
            <tbody>
              {spec.sizes.map(s => (
                <tr key={s.name}>
                  <Td><code className="font-mono font-semibold text-[var(--color-primary-main)]">{s.name}</code></Td>
                  <Td mono>{s.padding}</Td>
                  <Td mono>{s.fontSize}</Td>
                  <Td mono>{s.borderRadius}</Td>
                  {spec.sizes!.some(x => x.extra) && (
                    <Td mono>
                      {s.extra ? Object.entries(s.extra).map(([k, v]) => (
                        <div key={k}><span className="text-[var(--color-text-secondary)]">{k}:</span> {v}</div>
                      )) : '—'}
                    </Td>
                  )}
                </tr>
              ))}
            </tbody>
          </TW>
        </>
      )}

      {/* Variants */}
      {spec.variants && spec.variants.length > 0 && (
        <>
          <SH>Variants</SH>
          <TW>
            <thead>
              <tr>
                <Th>Variant</Th>
                <Th>Background</Th>
                <Th>Text</Th>
                {spec.variants.some(v => v.border) && <Th>Border</Th>}
                {spec.variants.some(v => v.hoverBg) && <Th>Hover BG</Th>}
              </tr>
            </thead>
            <tbody>
              {spec.variants.map(v => (
                <tr key={v.name}>
                  <Td><code className="font-mono font-semibold text-[var(--color-primary-main)]">{v.name}</code></Td>
                  <Td mono><ColorDot token={v.background} />{v.background}</Td>
                  <Td mono><ColorDot token={v.text} />{v.text}</Td>
                  {spec.variants!.some(x => x.border) && <Td mono>{v.border ? <><ColorDot token={v.border} />{v.border}</> : '—'}</Td>}
                  {spec.variants!.some(x => x.hoverBg) && <Td mono>{v.hoverBg ? <><ColorDot token={v.hoverBg} />{v.hoverBg}</> : '—'}</Td>}
                </tr>
              ))}
            </tbody>
          </TW>
        </>
      )}

      {/* States */}
      {spec.states && spec.states.length > 0 && (
        <>
          <SH>States</SH>
          <TW>
            <thead>
              <tr>
                <Th>State</Th>
                <Th>Description</Th>
                <Th>CSS Properties</Th>
                {spec.states.some(s => s.transition) && <Th>Transition</Th>}
              </tr>
            </thead>
            <tbody>
              {spec.states.map(s => (
                <tr key={s.name}>
                  <Td><code className="font-mono font-semibold text-[var(--color-primary-main)]">{s.name}</code></Td>
                  <Td>{s.description}</Td>
                  <Td mono>
                    {Object.entries(s.css).map(([k, v]) => (
                      <div key={k}><span className="text-[var(--color-text-secondary)]">{k}:</span> {v}</div>
                    ))}
                  </Td>
                  {spec.states!.some(x => x.transition) && <Td mono>{s.transition || '—'}</Td>}
                </tr>
              ))}
            </tbody>
          </TW>
        </>
      )}

      {/* Sub-elements */}
      {spec.elements && spec.elements.length > 0 && (
        <>
          <SH>Sub-elements</SH>
          <TW>
            <thead>
              <tr>
                <Th>Element</Th>
                <Th>Description</Th>
                <Th>Key Styles</Th>
              </tr>
            </thead>
            <tbody>
              {spec.elements.map(el => (
                <tr key={el.name}>
                  <Td><code className="font-mono font-semibold text-[var(--color-primary-main)]">{el.name}</code></Td>
                  <Td>{el.description}</Td>
                  <Td mono>
                    {Object.entries(el.styles).map(([k, v]) => (
                      <div key={k}><span className="text-[var(--color-text-secondary)]">{k}:</span> {v}</div>
                    ))}
                  </Td>
                </tr>
              ))}
            </tbody>
          </TW>
        </>
      )}

      {/* Accessibility */}
      {spec.a11y && (
        <>
          <SH>Accessibility</SH>
          <div className="rounded-lg border border-[var(--color-border)] p-5 space-y-3">
            {spec.a11y.role && (
              <div className="flex gap-2 text-sm">
                <span className="font-medium text-[var(--color-text)] min-w-[100px]">ARIA Role:</span>
                <code className="font-mono text-xs bg-[var(--color-surface-variant)] px-2 py-1 rounded">{spec.a11y.role}</code>
              </div>
            )}
            {spec.a11y.keyboard && spec.a11y.keyboard.length > 0 && (
              <div className="flex gap-2 text-sm">
                <span className="font-medium text-[var(--color-text)] min-w-[100px]">Keyboard:</span>
                <div className="flex flex-wrap gap-2">
                  {spec.a11y.keyboard.map((k, i) => (
                    <code key={i} className="font-mono text-xs bg-[var(--color-surface-variant)] px-2 py-1 rounded">{k}</code>
                  ))}
                </div>
              </div>
            )}
            {spec.a11y.ariaProps && spec.a11y.ariaProps.length > 0 && (
              <div className="flex gap-2 text-sm">
                <span className="font-medium text-[var(--color-text)] min-w-[100px]">ARIA Props:</span>
                <div className="flex flex-wrap gap-2">
                  {spec.a11y.ariaProps.map((p, i) => (
                    <code key={i} className="font-mono text-xs bg-[var(--color-surface-variant)] px-2 py-1 rounded">{p}</code>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Implementation Notes */}
      {spec.notes && spec.notes.length > 0 && (
        <>
          <SH>Implementation Notes</SH>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-variant)] p-5">
            <ul className="space-y-2 text-sm text-[var(--color-text)]">
              {spec.notes.map((note, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[var(--color-text-secondary)] select-none">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Token Reference */}
      <section className="mt-12 pt-8 border-t border-[var(--color-border)]">
        <p className="text-sm text-[var(--color-text-secondary)]">
          All token values reference the BPI Design Token system. See{' '}
          <a href="/tokens/colors" className="text-[var(--color-primary-main)] hover:underline">Colors</a>,{' '}
          <a href="/tokens/spacing" className="text-[var(--color-primary-main)] hover:underline">Spacing</a>,{' '}
          <a href="/tokens/typography" className="text-[var(--color-primary-main)] hover:underline">Typography</a>, and{' '}
          <a href="/tokens/misc" className="text-[var(--color-primary-main)] hover:underline">Misc</a>{' '}
          token pages for resolved values.
        </p>
      </section>
    </div>
  );
};

export default SpecPage;
