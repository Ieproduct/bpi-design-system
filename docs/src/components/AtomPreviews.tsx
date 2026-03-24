import React, { useState } from 'react';

/* Shared wrapper */
function PreviewShell({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-[var(--color-border-strong)] bg-[var(--color-demo-bg)] overflow-hidden">
      {label && (
        <div className="px-3 py-1.5 bg-[var(--color-surface-variant)] border-b border-[var(--color-border)] text-xs font-medium text-[var(--color-text-secondary)]">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

/* Shared pill toggle */
function Toggle({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-2 mb-3">
      {options.map(o => (
        <button key={o} onClick={() => onChange(o)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${value === o
            ? 'bg-[var(--color-primary-500)] text-white'
            : 'bg-[var(--color-surface-variant)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]'
          }`}>{o}</button>
      ))}
    </div>
  );
}

const F = 'Inter, sans-serif';
const P = '#E32321'; // primary
const PC = '#fff'; // primary-contrast
const S = '#475569'; // secondary text
const B = '#E2E8F0'; // border
const BG = '#F8FAFC'; // bg

/* ═══ Button ═══ */
function ButtonPreview() {
  const [size, setSize] = useState('md');
  const sizes: Record<string, { px: string; py: string; fs: number }> = {
    sm: { px: '12px', py: '4px', fs: 12 },
    md: { px: '16px', py: '8px', fs: 14 },
    lg: { px: '24px', py: '12px', fs: 16 },
  };
  const s = sizes[size];
  return (
    <div>
      <Toggle options={['sm', 'md', 'lg']} value={size} onChange={setSize} />
      <PreviewShell label={`Button — size: ${size}`}>
        <div style={{ padding: 24, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', fontFamily: F }}>
          <button style={{ padding: `${s.py} ${s.px}`, fontSize: s.fs, fontWeight: 600, background: P, color: PC, border: 'none', borderRadius: 8, cursor: 'pointer' }}>Contained</button>
          <button style={{ padding: `${s.py} ${s.px}`, fontSize: s.fs, fontWeight: 600, background: 'transparent', color: P, border: `1.5px solid ${P}`, borderRadius: 8, cursor: 'pointer' }}>Outlined</button>
          <button style={{ padding: `${s.py} ${s.px}`, fontSize: s.fs, fontWeight: 600, background: 'transparent', color: P, border: 'none', borderRadius: 8, cursor: 'pointer' }}>Text</button>
          <button style={{ padding: `${s.py} ${s.px}`, fontSize: s.fs, fontWeight: 600, background: '#94A3B8', color: PC, border: 'none', borderRadius: 8, cursor: 'not-allowed', opacity: 0.5 }}>Disabled</button>
        </div>
      </PreviewShell>
    </div>
  );
}

/* ═══ Input ═══ */
function InputPreview() {
  return (
    <PreviewShell label="Input — variants">
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, fontFamily: F, maxWidth: 320 }}>
        <input type="text" placeholder="Default input" style={{ padding: '8px 12px', fontSize: 14, border: `1px solid ${B}`, borderRadius: 8, outline: 'none', width: '100%' }} />
        <input type="text" placeholder="Focused" style={{ padding: '8px 12px', fontSize: 14, border: `2px solid ${P}`, borderRadius: 8, outline: 'none', width: '100%' }} />
        <input type="text" placeholder="Error state" style={{ padding: '8px 12px', fontSize: 14, border: '2px solid #EF4444', borderRadius: 8, outline: 'none', width: '100%' }} />
        <input type="text" placeholder="Disabled" disabled style={{ padding: '8px 12px', fontSize: 14, border: `1px solid ${B}`, borderRadius: 8, outline: 'none', width: '100%', background: BG, color: '#94A3B8', cursor: 'not-allowed' }} />
      </div>
    </PreviewShell>
  );
}

/* ═══ TextField ═══ */
function TextFieldPreview() {
  return (
    <PreviewShell label="TextField — with label and helper text">
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 20, fontFamily: F, maxWidth: 320 }}>
        <div>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#0F172A', marginBottom: 4 }}>Email address</label>
          <input type="email" placeholder="you@example.com" style={{ padding: '8px 12px', fontSize: 14, border: `1px solid ${B}`, borderRadius: 8, outline: 'none', width: '100%', boxSizing: 'border-box' }} />
          <div style={{ fontSize: 12, color: S, marginTop: 4 }}>We'll never share your email.</div>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#0F172A', marginBottom: 4 }}>Password <span style={{ color: '#EF4444' }}>*</span></label>
          <input type="password" value="password" readOnly style={{ padding: '8px 12px', fontSize: 14, border: '2px solid #EF4444', borderRadius: 8, outline: 'none', width: '100%', boxSizing: 'border-box' }} />
          <div style={{ fontSize: 12, color: '#EF4444', marginTop: 4 }}>Password must be at least 8 characters.</div>
        </div>
      </div>
    </PreviewShell>
  );
}

/* ═══ Select ═══ */
function SelectPreview() {
  return (
    <PreviewShell label="Select">
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, fontFamily: F, maxWidth: 320 }}>
        <div>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#0F172A', marginBottom: 4 }}>Country</label>
          <div style={{ position: 'relative' }}>
            <select style={{ padding: '8px 36px 8px 12px', fontSize: 14, border: `1px solid ${B}`, borderRadius: 8, outline: 'none', width: '100%', appearance: 'none', background: '#fff', cursor: 'pointer', boxSizing: 'border-box' }}>
              <option>Thailand</option><option>Japan</option><option>USA</option>
            </select>
            <svg style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

/* ═══ Checkbox ═══ */
function CheckboxPreview() {
  const [checks, setChecks] = useState([true, false, false]);
  return (
    <PreviewShell label="Checkbox">
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 10, fontFamily: F }}>
        {['Accept terms and conditions', 'Subscribe to newsletter', 'Remember me'].map((label, i) => (
          <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14, color: '#0F172A' }}
            onClick={() => setChecks(p => { const n = [...p]; n[i] = !n[i]; return n; })}>
            <div style={{
              width: 20, height: 20, borderRadius: 4, border: checks[i] ? 'none' : `2px solid ${B}`,
              background: checks[i] ? P : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 150ms ease', flexShrink: 0,
            }}>
              {checks[i] && <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </div>
            {label}
          </label>
        ))}
      </div>
    </PreviewShell>
  );
}

/* ═══ Radio ═══ */
function RadioPreview() {
  const [selected, setSelected] = useState(0);
  const options = ['Standard shipping', 'Express shipping', 'Overnight delivery'];
  return (
    <PreviewShell label="Radio">
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 10, fontFamily: F }}>
        {options.map((label, i) => (
          <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14, color: '#0F172A' }}
            onClick={() => setSelected(i)}>
            <div style={{
              width: 20, height: 20, borderRadius: '50%', border: `2px solid ${selected === i ? P : B}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 150ms ease', flexShrink: 0,
            }}>
              {selected === i && <div style={{ width: 10, height: 10, borderRadius: '50%', background: P }} />}
            </div>
            {label}
          </label>
        ))}
      </div>
    </PreviewShell>
  );
}

/* ═══ Switch ═══ */
function SwitchPreview() {
  const [states, setStates] = useState([true, false, false]);
  const labels = ['Dark mode', 'Notifications', 'Auto-save'];
  return (
    <PreviewShell label="Switch">
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14, fontFamily: F }}>
        {labels.map((label, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 240 }}>
            <span style={{ fontSize: 14, color: '#0F172A' }}>{label}</span>
            <div onClick={() => setStates(p => { const n = [...p]; n[i] = !n[i]; return n; })}
              style={{
                width: 44, height: 24, borderRadius: 12, cursor: 'pointer', padding: 2,
                background: states[i] ? P : '#CBD5E1', transition: 'background 200ms ease',
              }}>
              <div style={{
                width: 20, height: 20, borderRadius: '50%', background: '#fff',
                transform: states[i] ? 'translateX(20px)' : 'translateX(0)',
                transition: 'transform 200ms ease', boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
              }} />
            </div>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

/* ═══ Slider ═══ */
function SliderPreview() {
  const [value, setValue] = useState(60);
  return (
    <PreviewShell label="Slider">
      <div style={{ padding: 24, fontFamily: F, maxWidth: 360 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: S }}>Volume</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#0F172A' }}>{value}%</span>
        </div>
        <div style={{ position: 'relative', height: 20, display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', width: '100%', height: 6, borderRadius: 3, background: '#E2E8F0' }} />
          <div style={{ position: 'absolute', width: `${value}%`, height: 6, borderRadius: 3, background: P }} />
          <input type="range" min={0} max={100} value={value}
            onChange={e => setValue(Number(e.target.value))}
            style={{ position: 'absolute', width: '100%', opacity: 0, cursor: 'pointer', height: 20, margin: 0 }} />
          <div style={{
            position: 'absolute', left: `${value}%`, transform: 'translateX(-50%)',
            width: 20, height: 20, borderRadius: '50%', background: P, border: '3px solid #fff',
            boxShadow: '0 1px 4px rgba(0,0,0,0.2)', pointerEvents: 'none',
          }} />
        </div>
      </div>
    </PreviewShell>
  );
}

/* ═══ Badge ═══ */
function BadgePreview() {
  const colors = [
    { name: 'primary', bg: '#FEF2F2', text: P, border: '#FECACA' },
    { name: 'success', bg: '#DCFCE7', text: '#16A34A', border: '#BBF7D0' },
    { name: 'warning', bg: '#FEF9C3', text: '#CA8A04', border: '#FDE68A' },
    { name: 'danger', bg: '#FEE2E2', text: '#DC2626', border: '#FECACA' },
    { name: 'info', bg: '#DBEAFE', text: '#2563EB', border: '#BFDBFE' },
  ];
  return (
    <PreviewShell label="Badge — variants">
      <div style={{ padding: 24, display: 'flex', gap: 10, flexWrap: 'wrap', fontFamily: F }}>
        {colors.map(c => (
          <span key={c.name} style={{
            padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600,
            background: c.bg, color: c.text, border: `1px solid ${c.border}`,
          }}>{c.name}</span>
        ))}
        <span style={{ padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600, background: P, color: '#fff' }}>solid</span>
      </div>
    </PreviewShell>
  );
}

/* ═══ Chip ═══ */
function ChipPreview() {
  const [chips, setChips] = useState(['React', 'TypeScript', 'Tailwind', 'Node.js']);
  return (
    <PreviewShell label="Chip — removable">
      <div style={{ padding: 24, display: 'flex', gap: 8, flexWrap: 'wrap', fontFamily: F }}>
        {chips.map(c => (
          <div key={c} style={{
            display: 'flex', alignItems: 'center', gap: 6, padding: '4px 10px',
            borderRadius: 16, background: BG, border: `1px solid ${B}`, fontSize: 13, color: '#0F172A',
          }}>
            {c}
            <span onClick={() => setChips(prev => prev.filter(x => x !== c))}
              style={{ cursor: 'pointer', color: '#94A3B8', fontSize: 16, lineHeight: 1, marginLeft: 2 }}>×</span>
          </div>
        ))}
        {chips.length === 0 && <span style={{ fontSize: 13, color: '#94A3B8' }}>All chips removed — refresh to reset</span>}
      </div>
    </PreviewShell>
  );
}

/* ═══ Avatar ═══ */
function AvatarPreview() {
  const sizes = [{ s: 32, fs: 12 }, { s: 40, fs: 14 }, { s: 48, fs: 16 }, { s: 56, fs: 18 }];
  const colors = ['#E32321', '#2563EB', '#16A34A', '#7C3AED'];
  return (
    <PreviewShell label="Avatar — sizes and variants">
      <div style={{ padding: 24, display: 'flex', gap: 16, alignItems: 'end', fontFamily: F }}>
        {sizes.map((sz, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: sz.s, height: sz.s, borderRadius: '50%', background: colors[i],
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 600, fontSize: sz.fs,
            }}>
              {['IE', 'AB', 'CD', '?'][i]}
            </div>
            <span style={{ fontSize: 11, color: S }}>{sz.s}px</span>
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%', background: '#E2E8F0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v2h20v-2c0-3.3-6.7-5-10-5z" fill="#94A3B8"/></svg>
          </div>
          <span style={{ fontSize: 11, color: S }}>fallback</span>
        </div>
      </div>
    </PreviewShell>
  );
}

/* ═══ Alert ═══ */
function AlertPreview() {
  const alerts = [
    { type: 'success', icon: '✓', bg: '#F0FDF4', border: '#BBF7D0', text: '#166534', msg: 'Changes saved successfully!' },
    { type: 'warning', icon: '⚠', bg: '#FFFBEB', border: '#FDE68A', text: '#854D0E', msg: 'Your session will expire in 5 minutes.' },
    { type: 'danger', icon: '✕', bg: '#FEF2F2', border: '#FECACA', text: '#991B1B', msg: 'Failed to delete the item. Please try again.' },
    { type: 'info', icon: 'ℹ', bg: '#EFF6FF', border: '#BFDBFE', text: '#1E40AF', msg: 'A new version is available.' },
  ];
  return (
    <PreviewShell label="Alert — variants">
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10, fontFamily: F }}>
        {alerts.map(a => (
          <div key={a.type} style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px',
            borderRadius: 8, background: a.bg, border: `1px solid ${a.border}`, fontSize: 13, color: a.text,
          }}>
            <span style={{ fontWeight: 700, fontSize: 15 }}>{a.icon}</span>
            {a.msg}
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

/* ═══ Tooltip ═══ */
function TooltipPreview() {
  return (
    <PreviewShell label="Tooltip — positions">
      <div style={{ padding: 40, display: 'flex', gap: 32, justifyContent: 'center', fontFamily: F }}>
        {['top', 'right', 'bottom'].map(pos => (
          <div key={pos} style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              position: 'absolute',
              ...(pos === 'top' ? { bottom: '100%', marginBottom: 8, left: '50%', transform: 'translateX(-50%)' } : {}),
              ...(pos === 'bottom' ? { top: '100%', marginTop: 8, left: '50%', transform: 'translateX(-50%)' } : {}),
              ...(pos === 'right' ? { left: '100%', marginLeft: 8, top: '50%', transform: 'translateY(-50%)' } : {}),
              background: '#1E293B', color: '#fff', padding: '4px 10px', borderRadius: 6,
              fontSize: 12, whiteSpace: 'nowrap',
            }}>
              Tooltip {pos}
            </div>
            <button style={{
              padding: '6px 16px', fontSize: 13, background: BG, border: `1px solid ${B}`,
              borderRadius: 6, cursor: 'pointer', fontFamily: F,
            }}>Hover me</button>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

/* ═══ Divider ═══ */
function DividerPreview() {
  return (
    <PreviewShell label="Divider">
      <div style={{ padding: 24, fontFamily: F }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 13, color: S }}>Horizontal dividers</div>
          <hr style={{ border: 'none', height: 1, background: B, margin: 0 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <hr style={{ border: 'none', height: 1, background: B, flex: 1 }} />
            <span style={{ fontSize: 12, color: '#94A3B8' }}>OR</span>
            <hr style={{ border: 'none', height: 1, background: B, flex: 1 }} />
          </div>
          <hr style={{ border: 'none', height: 2, background: P, margin: 0, borderRadius: 1 }} />
          <div style={{ display: 'flex', gap: 20, alignItems: 'stretch', height: 40 }}>
            <span style={{ fontSize: 13, color: '#0F172A' }}>Item A</span>
            <div style={{ width: 1, background: B }} />
            <span style={{ fontSize: 13, color: '#0F172A' }}>Item B</span>
            <div style={{ width: 1, background: B }} />
            <span style={{ fontSize: 13, color: '#0F172A' }}>Item C</span>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

/* ═══ Typography ═══ */
function TypographyPreview() {
  const typos = [
    { tag: 'h1 (3xl)', size: 30, weight: 700 },
    { tag: 'h2 (2xl)', size: 24, weight: 700 },
    { tag: 'h3 (xl)', size: 20, weight: 600 },
    { tag: 'body (base)', size: 16, weight: 400 },
    { tag: 'small (sm)', size: 14, weight: 400 },
    { tag: 'caption (xs)', size: 12, weight: 400 },
  ];
  return (
    <PreviewShell label="Typography — scale">
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: F }}>
        {typos.map(t => (
          <div key={t.tag} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <span style={{ fontSize: 11, color: '#94A3B8', width: 90, flexShrink: 0, fontFamily: 'JetBrains Mono, monospace' }}>{t.tag}</span>
            <span style={{ fontSize: t.size, fontWeight: t.weight, color: '#0F172A', lineHeight: 1.4 }}>
              BPI Design System
            </span>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

/* ═══ Skeleton ═══ */
function SkeletonPreview() {
  return (
    <PreviewShell label="Skeleton — loading states">
      <div style={{ padding: 24, fontFamily: F }}>
        <style>{`@keyframes bpiShimmer { 0% { background-position: -200px 0; } 100% { background-position: calc(200px + 100%) 0; } }`}</style>
        <div style={{ display: 'flex', gap: 16 }}>
          {/* Card skeleton */}
          <div style={{ width: 200, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: '100%', height: 100, borderRadius: 8, background: 'linear-gradient(90deg, #E2E8F0 25%, #F1F5F9 50%, #E2E8F0 75%)', backgroundSize: '200px 100%', animation: 'bpiShimmer 1.5s infinite linear' }} />
            <div style={{ width: '80%', height: 14, borderRadius: 4, background: 'linear-gradient(90deg, #E2E8F0 25%, #F1F5F9 50%, #E2E8F0 75%)', backgroundSize: '200px 100%', animation: 'bpiShimmer 1.5s infinite linear' }} />
            <div style={{ width: '60%', height: 10, borderRadius: 4, background: 'linear-gradient(90deg, #E2E8F0 25%, #F1F5F9 50%, #E2E8F0 75%)', backgroundSize: '200px 100%', animation: 'bpiShimmer 1.5s infinite linear' }} />
          </div>
          {/* List skeleton */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(90deg, #E2E8F0 25%, #F1F5F9 50%, #E2E8F0 75%)', backgroundSize: '200px 100%', animation: 'bpiShimmer 1.5s infinite linear', flexShrink: 0 }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ width: `${80 - n * 10}%`, height: 12, borderRadius: 4, background: 'linear-gradient(90deg, #E2E8F0 25%, #F1F5F9 50%, #E2E8F0 75%)', backgroundSize: '200px 100%', animation: 'bpiShimmer 1.5s infinite linear' }} />
                  <div style={{ width: `${60 - n * 5}%`, height: 10, borderRadius: 4, background: 'linear-gradient(90deg, #E2E8F0 25%, #F1F5F9 50%, #E2E8F0 75%)', backgroundSize: '200px 100%', animation: 'bpiShimmer 1.5s infinite linear' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

/* ═══ LinearProgress ═══ */
function LinearProgressPreview() {
  const [progress, setProgress] = useState(65);
  return (
    <PreviewShell label="LinearProgress">
      <div style={{ padding: 24, fontFamily: F, maxWidth: 400 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 13, color: S }}>Upload progress</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#0F172A' }}>{progress}%</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: '#E2E8F0', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progress}%`, borderRadius: 3, background: P, transition: 'width 300ms ease' }} />
            </div>
          </div>
          <div>
            <span style={{ fontSize: 13, color: S, marginBottom: 6, display: 'block' }}>Success</span>
            <div style={{ height: 6, borderRadius: 3, background: '#DCFCE7', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '100%', borderRadius: 3, background: '#16A34A' }} />
            </div>
          </div>
          <div>
            <span style={{ fontSize: 13, color: S, marginBottom: 6, display: 'block' }}>Indeterminate</span>
            <div style={{ height: 6, borderRadius: 3, background: '#E2E8F0', overflow: 'hidden', position: 'relative' }}>
              <style>{`@keyframes bpiIndeterminate { 0% { left: -40%; } 100% { left: 100%; } }`}</style>
              <div style={{ position: 'absolute', height: '100%', width: '40%', borderRadius: 3, background: P, animation: 'bpiIndeterminate 1.5s infinite ease-in-out' }} />
            </div>
          </div>
        </div>
        <input type="range" min={0} max={100} value={progress} onChange={e => setProgress(Number(e.target.value))}
          style={{ width: '100%', marginTop: 16, cursor: 'pointer' }} />
      </div>
    </PreviewShell>
  );
}

/* ═══ CircularProgress ═══ */
function CircularProgressPreview() {
  const items = [
    { pct: 25, size: 48, color: P },
    { pct: 65, size: 56, color: '#2563EB' },
    { pct: 100, size: 56, color: '#16A34A' },
  ];
  return (
    <PreviewShell label="CircularProgress">
      <div style={{ padding: 24, display: 'flex', gap: 24, alignItems: 'center', fontFamily: F }}>
        {items.map((it, i) => {
          const r = (it.size - 8) / 2;
          const circ = 2 * Math.PI * r;
          const offset = circ - (it.pct / 100) * circ;
          return (
            <div key={i} style={{ position: 'relative', width: it.size, height: it.size }}>
              <svg width={it.size} height={it.size} style={{ transform: 'rotate(-90deg)' }}>
                <circle cx={it.size / 2} cy={it.size / 2} r={r} fill="none" stroke="#E2E8F0" strokeWidth={4} />
                <circle cx={it.size / 2} cy={it.size / 2} r={r} fill="none" stroke={it.color} strokeWidth={4}
                  strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 300ms ease' }} />
              </svg>
              <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, color: '#0F172A' }}>
                {it.pct}%
              </span>
            </div>
          );
        })}
        {/* Indeterminate */}
        <div style={{ position: 'relative', width: 48, height: 48 }}>
          <style>{`@keyframes bpiSpin { 100% { transform: rotate(360deg); } }`}</style>
          <svg width={48} height={48} style={{ animation: 'bpiSpin 1s linear infinite' }}>
            <circle cx={24} cy={24} r={20} fill="none" stroke="#E2E8F0" strokeWidth={4} />
            <circle cx={24} cy={24} r={20} fill="none" stroke={P} strokeWidth={4} strokeDasharray={125.6} strokeDashoffset={90} strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </PreviewShell>
  );
}

/* ═══ Stack ═══ */
function StackPreview() {
  const [dir, setDir] = useState('horizontal');
  return (
    <div>
      <Toggle options={['horizontal', 'vertical']} value={dir} onChange={setDir} />
      <PreviewShell label={`Stack — ${dir}`}>
        <div style={{
          padding: 24, display: 'flex',
          flexDirection: dir === 'horizontal' ? 'row' : 'column',
          gap: 12, fontFamily: F,
        }}>
          {[1, 2, 3, 4].map(n => (
            <div key={n} style={{
              padding: '12px 20px', borderRadius: 8, background: `${P}15`,
              border: `1px solid ${P}40`, color: P, fontWeight: 600, fontSize: 13, textAlign: 'center',
            }}>Item {n}</div>
          ))}
        </div>
      </PreviewShell>
    </div>
  );
}

/* ═══ Box ═══ */
function BoxPreview() {
  return (
    <PreviewShell label="Box — configurable container">
      <div style={{ padding: 24, display: 'flex', gap: 16, flexWrap: 'wrap', fontFamily: F }}>
        <div style={{ padding: 16, borderRadius: 8, background: BG, border: `1px solid ${B}`, width: 140 }}>
          <div style={{ fontSize: 12, color: '#94A3B8', marginBottom: 4 }}>Default Box</div>
          <div style={{ fontSize: 13, color: '#0F172A' }}>bg + border + radius</div>
        </div>
        <div style={{ padding: 16, borderRadius: 12, background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', width: 140 }}>
          <div style={{ fontSize: 12, color: '#94A3B8', marginBottom: 4 }}>Elevated Box</div>
          <div style={{ fontSize: 13, color: '#0F172A' }}>shadow + radius</div>
        </div>
        <div style={{ padding: 16, borderRadius: 8, background: '#FEF2F2', border: `1px solid #FECACA`, width: 140 }}>
          <div style={{ fontSize: 12, color: P, marginBottom: 4 }}>Colored Box</div>
          <div style={{ fontSize: 13, color: '#991B1B' }}>custom bg + border</div>
        </div>
      </div>
    </PreviewShell>
  );
}

/* ═══ Resolver ═══ */
const PREVIEWS: Record<string, React.FC> = {
  button: ButtonPreview,
  input: InputPreview,
  'text-field': TextFieldPreview,
  select: SelectPreview,
  checkbox: CheckboxPreview,
  radio: RadioPreview,
  switch: SwitchPreview,
  slider: SliderPreview,
  badge: BadgePreview,
  chip: ChipPreview,
  avatar: AvatarPreview,
  alert: AlertPreview,
  tooltip: TooltipPreview,
  divider: DividerPreview,
  typography: TypographyPreview,
  skeleton: SkeletonPreview,
  'linear-progress': LinearProgressPreview,
  'circular-progress': CircularProgressPreview,
  stack: StackPreview,
  box: BoxPreview,
};

export function AtomPreview({ specId }: { specId: string }) {
  const Preview = PREVIEWS[specId];
  if (!Preview) return null;
  return <Preview />;
}
