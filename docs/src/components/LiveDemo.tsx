import React, { useState, useRef, useEffect } from 'react';
import CodeBlock from './CodeBlock';

// Map PascalCase component names to actual web component tags
const componentTagMap: Record<string, string> = {
  Button: 'bpi-button',
  Input: 'bpi-input',
  Badge: 'bpi-badge',
  Icon: 'bpi-icon',
  FormField: 'bpi-form-field',
  SearchBar: 'bpi-search-bar',
  Card: 'bpi-card',
  DataTable: 'bpi-data-table',
  Navbar: 'bpi-navbar',
  Sidebar: 'bpi-sidebar',
  Stack: 'bpi-stack',
  Box: 'bpi-box',
  Typography: 'bpi-typography',
  TextField: 'bpi-text-field',
  Alert: 'bpi-alert',
  Skeleton: 'bpi-skeleton',
  CircularProgress: 'bpi-circular-progress',
  LinearProgress: 'bpi-linear-progress',
  Avatar: 'bpi-avatar',
  Chip: 'bpi-chip',
  Tooltip: 'bpi-tooltip',
  Divider: 'bpi-divider',
  Checkbox: 'bpi-checkbox',
  Radio: 'bpi-radio',
  Switch: 'bpi-switch',
  Slider: 'bpi-slider',
  Dialog: 'bpi-dialog',
  Snackbar: 'bpi-snackbar',
  Tabs: 'bpi-tabs',
  Tab: 'bpi-tab',
  Breadcrumbs: 'bpi-breadcrumbs',
  Pagination: 'bpi-pagination',
  Menu: 'bpi-menu',
  MenuItem: 'bpi-menu-item',
  Select: 'bpi-select',
  Autocomplete: 'bpi-autocomplete',
  List: 'bpi-list',
  ListItem: 'bpi-list-item',
  Accordion: 'bpi-accordion',
  Drawer: 'bpi-drawer',
  DatePicker: 'bpi-date-picker',
  Table: 'bpi-table',
  TableHead: 'bpi-table-head',
  TableBody: 'bpi-table-body',
  TableRow: 'bpi-table-row',
  TableCell: 'bpi-table-cell',
};

/**
 * Transform JSX-style code to actual HTML for live preview.
 * Converts PascalCase tags to bpi-* web component tags,
 * self-closing tags to open/close pairs, and JSX expressions to HTML attributes.
 */
function transformCodeToHtml(code: string): string {
  let html = code;

  // Convert JSX expressions like prop={1} to prop="1"
  html = html.replace(/(\w+)=\{([^}]+)\}/g, '$1="$2"');

  // Convert self-closing PascalCase tags: <Component ... />
  for (const [name, tag] of Object.entries(componentTagMap)) {
    const selfCloseRegex = new RegExp(`<${name}(\\s[^>]*)?\\/\\s*>`, 'g');
    html = html.replace(selfCloseRegex, `<${tag}$1></${tag}>`);
  }

  // Convert opening and closing PascalCase tags: <Component> ... </Component>
  for (const [name, tag] of Object.entries(componentTagMap)) {
    const openRegex = new RegExp(`<${name}(\\s|>)`, 'g');
    html = html.replace(openRegex, `<${tag}$1`);
    const closeRegex = new RegExp(`</${name}>`, 'g');
    html = html.replace(closeRegex, `</${tag}>`);
  }

  return html;
}

interface LiveDemoProps {
  title: string;
  description?: string;
  code: string;
  children?: React.ReactNode;
}

/**
 * Component that safely injects HTML preserving table elements.
 * Uses a <table> wrapper trick: wraps table child content in a temporary
 * <table> for parsing, then moves the parsed nodes into the actual custom element.
 */
const HtmlPreview: React.FC<{ html: string }> = ({ html }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = '';

    // Strategy: find custom elements that contain table children (thead/tbody/tr)
    // and parse their inner content inside a <table> context so the browser preserves them.
    const tableTagRegex = /<(bpi-data-table|bpi-table)(\s[^>]*)?>[\s\S]*?<\/\1>/gi;
    const hasTableComponent = tableTagRegex.test(html);

    if (hasTableComponent) {
      // Parse the HTML by replacing table-containing custom elements
      // with a temporary marker, parse table content separately, then reassemble
      const tempDiv = document.createElement('div');

      // Extract all bpi-data-table / bpi-table blocks
      const parts: Array<{ type: 'html' | 'table'; content: string; tag: string; attrs: string }> = [];
      let lastIndex = 0;
      const regex = /<(bpi-data-table|bpi-table)(\s[^>]*)?>([\s\S]*?)<\/\1>/gi;
      let match;

      while ((match = regex.exec(html)) !== null) {
        // Add any HTML before this match
        if (match.index > lastIndex) {
          parts.push({ type: 'html', content: html.slice(lastIndex, match.index), tag: '', attrs: '' });
        }
        parts.push({
          type: 'table',
          content: match[3], // inner content (thead, tbody, etc.)
          tag: match[1],     // bpi-data-table or bpi-table
          attrs: match[2] || '', // attributes
        });
        lastIndex = match.index + match[0].length;
      }
      // Add remaining HTML
      if (lastIndex < html.length) {
        parts.push({ type: 'html', content: html.slice(lastIndex), tag: '', attrs: '' });
      }

      for (const part of parts) {
        if (part.type === 'html') {
          const frag = document.createElement('div');
          frag.innerHTML = part.content;
          while (frag.firstChild) {
            tempDiv.appendChild(frag.firstChild);
          }
        } else {
          // Create the custom element
          const customEl = document.createElement(part.tag);
          // Parse attributes
          const attrStr = part.attrs.trim();
          if (attrStr) {
            const attrRegex = /(\w[\w-]*)(?:="([^"]*)")?/g;
            let attrMatch;
            while ((attrMatch = attrRegex.exec(attrStr)) !== null) {
              customEl.setAttribute(attrMatch[1], attrMatch[2] ?? '');
            }
          }
          // Parse table content inside a real <table> to preserve thead/tbody/tr/th/td
          const tableWrapper = document.createElement('table');
          tableWrapper.innerHTML = part.content;
          // Move parsed children (thead, tbody, tr) from table into custom element
          while (tableWrapper.firstChild) {
            customEl.appendChild(tableWrapper.firstChild);
          }
          tempDiv.appendChild(customEl);
        }
      }

      while (tempDiv.firstChild) {
        containerRef.current.appendChild(tempDiv.firstChild);
      }
    } else {
      containerRef.current.innerHTML = html;
    }
  }, [html]);

  return <div ref={containerRef} className="w-full" />;
};

export const LiveDemo: React.FC<LiveDemoProps> = ({
  title,
  description,
  code,
  children,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  // The code prop contains JSX-style PascalCase tags for display.
  // For preview, we transform them to actual bpi-* web component tags.
  const previewHtml = transformCodeToHtml(code);

  return (
    <div className="rounded-lg border border-[var(--color-demo-border)] overflow-hidden bg-[var(--color-surface)]">
      {/* Header */}
      <div className="px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-variant)]">
        <h3 className="text-sm font-semibold text-[var(--color-text)]">{title}</h3>
        {description && (
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">
            {description}
          </p>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-[var(--color-border)]">
        <button
          onClick={() => setActiveTab('preview')}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
            activeTab === 'preview'
              ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
              : 'text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text)]'
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
            activeTab === 'code'
              ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
              : 'text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text)]'
          }`}
        >
          Code
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'preview' ? (
          <div className="rounded-lg border-2 border-dashed border-[var(--color-demo-border)] p-6 bg-[var(--color-demo-bg)] min-h-[200px] flex items-center justify-center">
            {children ? (
              <div className="w-full">{children}</div>
            ) : (
              <HtmlPreview html={previewHtml} />
            )}
          </div>
        ) : (
          <CodeBlock code={code} language="tsx" />
        )}
      </div>
    </div>
  );
};

export default LiveDemo;
