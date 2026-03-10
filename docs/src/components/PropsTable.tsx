import React from 'react';

export interface PropDef {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props: PropDef[];
  title?: string;
}

export const PropsTable: React.FC<PropsTableProps> = ({ props, title }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
      {title && (
        <div className="px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-variant)]">
          <h3 className="text-sm font-semibold text-[var(--color-text)]">{title}</h3>
        </div>
      )}

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface-variant)]">
            <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">
              Name
            </th>
            <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">
              Type
            </th>
            <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">
              Default
            </th>
            <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, index) => (
            <tr
              key={prop.name}
              className={`border-b border-[var(--color-border)] ${
                index % 2 === 0
                  ? 'bg-[var(--color-surface)]'
                  : 'bg-[var(--color-surface-variant)]'
              }`}
            >
              <td className="px-4 py-3">
                <code className="font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900 px-2 py-1 rounded text-xs">
                  {prop.name}
                </code>
                {prop.required && (
                  <span className="ml-2 text-red-600 dark:text-red-400 font-semibold text-xs">
                    *
                  </span>
                )}
              </td>
              <td className="px-4 py-3">
                <code className="font-mono text-[var(--color-text-secondary)]">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3 text-[var(--color-text-secondary)]">
                {prop.default ? (
                  <code className="font-mono text-xs">{prop.default}</code>
                ) : (
                  '-'
                )}
              </td>
              <td className="px-4 py-3 text-[var(--color-text-secondary)]">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
