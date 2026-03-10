import React, { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { navigationStructure, type NavItem } from '~/data/navigation';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const ChevronIcon: React.FC<{ expanded: boolean }> = ({ expanded }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const SidebarContent: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [expanded, setExpanded] = useState<Set<string>>(
    new Set(['Getting Started', 'Components', 'Atoms', 'Molecules', 'Organisms', 'Design Tokens'])
  );
  const location = useLocation();

  const toggle = (label: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  const isActive = (path?: string) => path ? location.pathname === path : false;

  const renderItem = (item: NavItem, depth: number = 0): React.ReactNode => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = expanded.has(item.label);
    const active = isActive(item.path);
    const pl = depth === 0 ? 'pl-3' : depth === 1 ? 'pl-5' : 'pl-8';

    return (
      <div key={item.label + (item.path || '')}>
        {item.path && !hasChildren ? (
          /* Leaf link — navigates */
          <Link
            to={item.path}
            onClick={onClose}
            className={`block py-1.5 pr-3 ${pl} rounded-md text-[13px] transition-colors ${
              active
                ? 'bg-primary-100 text-primary-700 font-semibold dark:bg-primary-900/40 dark:text-primary-300'
                : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]'
            }`}
          >
            {item.label}
          </Link>
        ) : (
          /* Category header — toggles expand/collapse */
          <button
            onClick={() => toggle(item.label)}
            className={`w-full flex items-center justify-between py-2 pr-3 ${pl} rounded-md text-[13px] font-semibold transition-colors text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]`}
          >
            <span className="flex items-center gap-2">
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </span>
            <ChevronIcon expanded={isOpen} />
          </button>
        )}

        {hasChildren && isOpen && (
          <div className={depth === 0 ? 'mt-0.5 mb-2' : 'mt-0.5'}>
            {item.children!.map((child) => renderItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="flex flex-col gap-0.5 p-3 pt-4">
      {navigationStructure.map((section) => renderItem(section))}
    </nav>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onClose} />
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-[260px] min-w-[260px] h-[calc(100vh-56px)] border-r border-[var(--color-border)] bg-[var(--color-sidebar)] sticky top-[56px] overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[280px] border-r border-[var(--color-border)] bg-[var(--color-sidebar)] z-50 overflow-y-auto transition-transform lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-14 flex items-center px-4 border-b border-[var(--color-border)] font-bold text-lg">
          BPI Design System
        </div>
        <SidebarContent onClose={onClose} />
      </aside>
    </>
  );
};

export default Sidebar;
