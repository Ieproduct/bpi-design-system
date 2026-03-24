import React, { useState } from 'react';

/* ═══════════════════════════════════════════════════════════════
   Layout Component Visual Previews
   Live HTML/CSS mockups using BPI design tokens
   ═══════════════════════════════════════════════════════════════ */

/* ── Shared wrapper ── */
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

/* ══════════════════════ AppBar ══════════════════════ */

function AppBarFilledPreview() {
  return (
    <div style={{
      height: 56, display: 'flex', alignItems: 'center', padding: '0 24px',
      background: '#E32321', color: '#fff', fontFamily: 'Inter, sans-serif',
      gap: 24, position: 'relative',
    }}>
      <div style={{ fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="rgba(255,255,255,0.2)"/><text x="4" y="17" fill="#fff" fontSize="12" fontWeight="700">B</text></svg>
        BPI App
      </div>
      <nav style={{ display: 'flex', gap: 4 }}>
        {['Home', 'Dashboard', 'Reports'].map((item, i) => (
          <a key={item} style={{
            padding: '4px 12px', borderRadius: 8, fontSize: 14, fontWeight: i === 0 ? 600 : 500,
            color: '#fff', textDecoration: 'none', cursor: 'pointer',
            background: i === 0 ? 'rgba(255,255,255,0.15)' : 'transparent',
          }}>{item}</a>
        ))}
      </nav>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
        <button style={{
          width: 36, height: 36, borderRadius: 8, border: 'none', cursor: 'pointer',
          background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
        </button>
        <div style={{
          width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600,
        }}>IE</div>
      </div>
    </div>
  );
}

function AppBarLightPreview() {
  return (
    <div style={{
      height: 56, display: 'flex', alignItems: 'center', padding: '0 24px',
      background: '#fff', color: '#0F172A', fontFamily: 'Inter, sans-serif',
      gap: 24, borderBottom: '1px solid #E2E8F0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    }}>
      <div style={{ fontWeight: 700, fontSize: 18, color: '#E32321', display: 'flex', alignItems: 'center', gap: 8 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#FEE2E2"/><text x="4" y="17" fill="#E32321" fontSize="12" fontWeight="700">B</text></svg>
        BPI App
      </div>
      <nav style={{ display: 'flex', gap: 4 }}>
        {['Home', 'Dashboard', 'Reports'].map((item, i) => (
          <a key={item} style={{
            padding: '4px 12px', borderRadius: 8, fontSize: 14,
            fontWeight: i === 0 ? 600 : 500,
            color: i === 0 ? '#E32321' : '#475569',
            textDecoration: 'none', cursor: 'pointer',
            background: i === 0 ? '#FEF2F2' : 'transparent',
          }}>{item}</a>
        ))}
      </nav>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, alignItems: 'center' }}>
        <button style={{
          width: 36, height: 36, borderRadius: 8, border: '1px solid #E2E8F0', cursor: 'pointer',
          background: '#fff', color: '#475569', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
        </button>
        <div style={{
          width: 36, height: 36, borderRadius: '50%', background: '#FEE2E2', color: '#E32321',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600,
        }}>IE</div>
      </div>
    </div>
  );
}

export function AppBarPreview() {
  const [variant, setVariant] = useState<'filled' | 'light'>('filled');
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {(['filled', 'light'] as const).map(v => (
          <button key={v} onClick={() => setVariant(v)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${variant === v
              ? 'bg-[var(--color-primary-500)] text-white'
              : 'bg-[var(--color-surface-variant)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]'
            }`}>{v}</button>
        ))}
      </div>
      <PreviewShell label={`AppBar — variant: ${variant}`}>
        {variant === 'filled' ? <AppBarFilledPreview /> : <AppBarLightPreview />}
      </PreviewShell>
    </div>
  );
}

/* ══════════════════════ NavBar ══════════════════════ */

export function NavBarPreview() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState('Dashboard');

  const items = [
    { icon: '🏠', label: 'Home' },
    { icon: '📊', label: 'Dashboard' },
    { icon: '📋', label: 'Reports' },
    { icon: '👥', label: 'Users' },
    { icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <button onClick={() => setCollapsed(false)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${!collapsed
            ? 'bg-[var(--color-primary-500)] text-white'
            : 'bg-[var(--color-surface-variant)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]'
          }`}>expanded (240px)</button>
        <button onClick={() => setCollapsed(true)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${collapsed
            ? 'bg-[var(--color-primary-500)] text-white'
            : 'bg-[var(--color-surface-variant)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]'
          }`}>compact (64px)</button>
      </div>
      <PreviewShell label={`NavBar — ${collapsed ? 'compact' : 'expanded'}`}>
        <div style={{
          width: collapsed ? 64 : 240, minHeight: 320,
          background: '#fff', borderRight: '1px solid #E2E8F0',
          fontFamily: 'Inter, sans-serif', transition: 'width 250ms ease',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Header */}
          <div style={{
            padding: collapsed ? '16px 12px' : '16px',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex', alignItems: 'center', gap: 10,
            justifyContent: collapsed ? 'center' : 'flex-start',
          }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="6" fill="#FEE2E2"/><text x="6" y="20" fill="#E32321" fontSize="14" fontWeight="700">B</text></svg>
            {!collapsed && <span style={{ fontWeight: 600, fontSize: 15, color: '#0F172A' }}>BPI App</span>}
          </div>

          {/* Group label */}
          {!collapsed && (
            <div style={{
              padding: '12px 16px 4px', fontSize: 11, fontWeight: 600,
              color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              Main Menu
            </div>
          )}

          {/* Items */}
          <div style={{ padding: collapsed ? 8 : '4px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {items.map(item => {
              const isActive = item.label === active;
              return (
                <div key={item.label} onClick={() => setActive(item.label)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: collapsed ? '10px' : '8px 12px',
                    borderRadius: 8, cursor: 'pointer', fontSize: 14,
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    background: isActive ? '#FEF2F2' : 'transparent',
                    color: isActive ? '#E32321' : '#475569',
                    fontWeight: isActive ? 600 : 400,
                    transition: 'all 150ms ease',
                    position: 'relative',
                  }}
                  title={collapsed ? item.label : undefined}
                >
                  {isActive && (
                    <div style={{
                      position: 'absolute', left: 0, top: '20%', bottom: '20%', width: 3,
                      background: '#E32321', borderRadius: '0 4px 4px 0',
                    }} />
                  )}
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </div>
              );
            })}
          </div>
        </div>
      </PreviewShell>
    </div>
  );
}

/* ══════════════════════ Sidebar ══════════════════════ */

export function SidebarPreview() {
  const [open, setOpen] = useState(true);

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <button onClick={() => setOpen(true)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${open
            ? 'bg-[var(--color-primary-500)] text-white'
            : 'bg-[var(--color-surface-variant)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]'
          }`}>open</button>
        <button onClick={() => setOpen(false)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${!open
            ? 'bg-[var(--color-primary-500)] text-white'
            : 'bg-[var(--color-surface-variant)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]'
          }`}>closed</button>
      </div>
      <PreviewShell label={`Sidebar — ${open ? 'open' : 'closed'}`}>
        <div style={{
          display: 'flex', height: 360, fontFamily: 'Inter, sans-serif', overflow: 'hidden',
          position: 'relative', maxWidth: '100%',
        }}>
          {/* Main content area mock */}
          <div style={{
            flex: 1, minWidth: 0, padding: 20, background: '#F8FAFC',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ width: '60%', height: 14, background: '#E2E8F0', borderRadius: 4 }} />
            <div style={{ width: '80%', height: 10, background: '#E2E8F0', borderRadius: 4 }} />
            <div style={{ width: '70%', height: 10, background: '#E2E8F0', borderRadius: 4 }} />
            <div style={{ width: '50%', height: 10, background: '#E2E8F0', borderRadius: 4 }} />
            <div style={{ marginTop: 8, width: '90%', height: 50, background: '#E2E8F0', borderRadius: 8 }} />
            <div style={{ width: '75%', height: 10, background: '#E2E8F0', borderRadius: 4 }} />
          </div>

          {/* Sidebar */}
          <div style={{
            width: 220, flexShrink: 0, background: '#fff', borderLeft: '1px solid #E2E8F0',
            display: 'flex', flexDirection: 'column',
            transform: open ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 250ms ease',
            position: open ? 'relative' : 'absolute',
            right: 0, top: 0, bottom: 0,
            boxShadow: open ? 'none' : '-4px 0 12px rgba(0,0,0,0.1)',
          }}>
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 16px', borderBottom: '1px solid #E2E8F0',
            }}>
              <span style={{ fontWeight: 600, fontSize: 16, color: '#0F172A' }}>Details</span>
              <button onClick={() => setOpen(false)} style={{
                width: 28, height: 28, borderRadius: 6, border: '1px solid #E2E8F0',
                background: '#fff', cursor: 'pointer', fontSize: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569',
              }}>✕</button>
            </div>

            {/* Content */}
            <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ fontSize: 12, color: '#94A3B8', marginBottom: 4, fontWeight: 500 }}>STATUS</div>
                <span style={{
                  background: '#DCFCE7', color: '#16A34A', padding: '2px 10px',
                  borderRadius: 12, fontSize: 12, fontWeight: 600,
                }}>Active</span>
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#94A3B8', marginBottom: 6, fontWeight: 500 }}>DESCRIPTION</div>
                <div style={{ width: '100%', height: 8, background: '#F1F5F9', borderRadius: 4, marginBottom: 4 }} />
                <div style={{ width: '80%', height: 8, background: '#F1F5F9', borderRadius: 4, marginBottom: 4 }} />
                <div style={{ width: '60%', height: 8, background: '#F1F5F9', borderRadius: 4 }} />
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#94A3B8', marginBottom: 6, fontWeight: 500 }}>TAGS</div>
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                  {['Design', 'Layout', 'v2.0'].map(t => (
                    <span key={t} style={{
                      background: '#F1F5F9', color: '#475569', padding: '2px 8px',
                      borderRadius: 6, fontSize: 11, fontWeight: 500,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{
              padding: '10px 16px', borderTop: '1px solid #E2E8F0',
              display: 'flex', gap: 8,
            }}>
              <button style={{
                flex: 1, padding: '8px', borderRadius: 8, border: 'none',
                background: '#E32321', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer',
              }}>Save</button>
              <button style={{
                padding: '8px 16px', borderRadius: 8, border: '1px solid #E2E8F0',
                background: '#fff', color: '#475569', fontSize: 13, fontWeight: 500, cursor: 'pointer',
              }}>Cancel</button>
            </div>
          </div>
        </div>
      </PreviewShell>
    </div>
  );
}

/* ══════════════════════ Footer ══════════════════════ */

export function FooterPreview() {
  const [variant, setVariant] = useState<'light' | 'dark'>('light');

  const isDark = variant === 'dark';
  const bg = isDark ? '#1a1a1a' : '#F8FAFC';
  const text = isDark ? '#ccc' : '#475569';
  const heading = isDark ? '#fff' : '#0F172A';
  const border = isDark ? '#333' : '#E2E8F0';
  const muted = isDark ? '#666' : '#94A3B8';
  const hoverColor = isDark ? '#fff' : '#0F172A';

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {(['light', 'dark'] as const).map(v => (
          <button key={v} onClick={() => setVariant(v)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${variant === v
              ? 'bg-[var(--color-primary-500)] text-white'
              : 'bg-[var(--color-surface-variant)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)]'
            }`}>{v}</button>
        ))}
      </div>
      <PreviewShell label={`Footer — variant: ${variant}`}>
        <div style={{
          background: bg, padding: '32px 32px 16px', fontFamily: 'Inter, sans-serif',
          borderTop: `1px solid ${border}`,
        }}>
          {/* Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: heading, marginBottom: 12 }}>Product</div>
              {['Features', 'Pricing', 'Changelog', 'Docs'].map(item => (
                <div key={item} style={{
                  fontSize: 13, color: text, padding: '3px 0', cursor: 'pointer',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = text)}
                >{item}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: heading, marginBottom: 12 }}>Company</div>
              {['About', 'Blog', 'Careers', 'Contact'].map(item => (
                <div key={item} style={{
                  fontSize: 13, color: text, padding: '3px 0', cursor: 'pointer',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = text)}
                >{item}</div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: heading, marginBottom: 12 }}>Legal</div>
              {['Privacy', 'Terms', 'Cookies'].map(item => (
                <div key={item} style={{
                  fontSize: 13, color: text, padding: '3px 0', cursor: 'pointer',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = text)}
                >{item}</div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: `1px solid ${border}`, paddingTop: 16,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ fontSize: 12, color: muted }}>
              © 2026 BPI Group. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              {['GitHub', 'Twitter', 'LinkedIn'].map(item => (
                <span key={item} style={{ fontSize: 12, color: muted, cursor: 'pointer' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = muted)}
                >{item}</span>
              ))}
            </div>
          </div>
        </div>
      </PreviewShell>
    </div>
  );
}

/* ══════════════════════ Full Layout ══════════════════════ */

export function FullLayoutPreview() {
  return (
    <PreviewShell label="Full Page Layout — AppBar + NavBar + Content + Footer">
      <div style={{ fontFamily: 'Inter, sans-serif', height: 400, display: 'flex', flexDirection: 'column' }}>
        {/* AppBar */}
        <div style={{
          height: 44, background: '#E32321', color: '#fff', display: 'flex',
          alignItems: 'center', padding: '0 16px', gap: 16, fontSize: 13, flexShrink: 0,
        }}>
          <span style={{ fontWeight: 700 }}>BPI App</span>
          <span style={{ opacity: 0.8 }}>Home</span>
          <span style={{ opacity: 0.8 }}>Dashboard</span>
          <div style={{ marginLeft: 'auto', width: 28, height: 28, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>IE</div>
        </div>

        {/* Body */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          {/* NavBar */}
          <div style={{
            width: 180, background: '#fff', borderRight: '1px solid #E2E8F0',
            padding: 8, display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0,
          }}>
            {['🏠 Home', '📊 Dashboard', '📋 Reports', '👥 Users', '⚙️ Settings'].map((item, i) => (
              <div key={item} style={{
                padding: '6px 10px', borderRadius: 6, fontSize: 12,
                background: i === 1 ? '#FEF2F2' : 'transparent',
                color: i === 1 ? '#E32321' : '#475569',
                fontWeight: i === 1 ? 600 : 400,
              }}>{item}</div>
            ))}
          </div>

          {/* Content */}
          <div style={{ flex: 1, background: '#F8FAFC', padding: 20, overflow: 'auto' }}>
            <div style={{ width: '40%', height: 12, background: '#CBD5E1', borderRadius: 4, marginBottom: 12 }} />
            <div style={{ width: '70%', height: 8, background: '#E2E8F0', borderRadius: 4, marginBottom: 6 }} />
            <div style={{ width: '55%', height: 8, background: '#E2E8F0', borderRadius: 4, marginBottom: 16 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[1, 2, 3, 4].map(n => (
                <div key={n} style={{ height: 60, background: '#fff', borderRadius: 8, border: '1px solid #E2E8F0' }} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '10px 16px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0',
          fontSize: 11, color: '#94A3B8', textAlign: 'center', flexShrink: 0,
        }}>
          © 2026 BPI Group. All rights reserved.
        </div>
      </div>
    </PreviewShell>
  );
}

/* ══════════════════════ Resolver ══════════════════════ */

const PREVIEWS: Record<string, React.FC> = {
  'app-bar': AppBarPreview,
  'nav-bar': NavBarPreview,
  'sidebar': SidebarPreview,
  'footer': FooterPreview,
};

export function LayoutPreview({ specId }: { specId: string }) {
  const Preview = PREVIEWS[specId];
  if (!Preview) return null;
  return (
    <div>
      <Preview />
      {specId === 'app-bar' && (
        <div className="mt-6">
          <div className="text-sm font-medium text-[var(--color-text-secondary)] mb-2">Combined Layout Example</div>
          <FullLayoutPreview />
        </div>
      )}
    </div>
  );
}
