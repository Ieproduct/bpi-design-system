// ============================================================
// BPI Design System — TypeScript Definitions
// ============================================================

// --- Component Prop Interfaces ---

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'success';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps {
  type?: InputType;
  size?: InputSize;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  error?: string;
  hint?: string;
  name?: string;
  required?: boolean;
}

export type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export interface BadgeProps {
  variant?: BadgeVariant;
  dot?: boolean;
}

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name?: string;
  size?: IconSize;
}

export interface FormFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
}

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
}

export type CardVariant = 'elevated' | 'flat';

export interface CardProps {
  title?: string;
  variant?: CardVariant;
}

export interface DataTableProps {
  columns?: string;
  striped?: boolean;
  page?: number;
  'page-size'?: number;
  total?: number;
  'empty-text'?: string;
}

export interface NavbarProps {
  brand?: string;
}

export interface SidebarProps {
  collapsed?: boolean;
}

// --- Custom Event Interfaces ---

export interface BpiInputEventDetail {
  value: string;
}

export interface BpiChangeEventDetail {
  value: string;
}

export interface BpiBlurEventDetail {
  value: string;
}

export interface BpiTableSortEventDetail {
  column: string;
  direction: 'asc' | 'desc';
}

export interface BpiTableSelectEventDetail {
  selectedRows: number[];
}

export interface BpiPageChangeEventDetail {
  page: number;
}

export interface BpiInputEvent extends CustomEvent<BpiInputEventDetail> {
  type: 'bpi-input';
}

export interface BpiChangeEvent extends CustomEvent<BpiChangeEventDetail> {
  type: 'bpi-change';
}

export interface BpiBlurEvent extends CustomEvent<BpiBlurEventDetail> {
  type: 'bpi-blur';
}

export interface BpiTableSortEvent extends CustomEvent<BpiTableSortEventDetail> {
  type: 'bpi-sort';
}

export interface BpiTableSelectEvent extends CustomEvent<BpiTableSelectEventDetail> {
  type: 'bpi-table-select';
}

export interface BpiPageChangeEvent extends CustomEvent<BpiPageChangeEventDetail> {
  type: 'bpi-page-change';
}

// --- Web Component Class Exports ---

export declare class Button extends HTMLElement {
  variant: ButtonVariant;
  size: ButtonSize;
  loading: boolean;
  block: boolean;
}

export declare class Input extends HTMLElement {
  value: string;
}

export declare class Badge extends HTMLElement {}
export declare class Icon extends HTMLElement {}
export declare class FormField extends HTMLElement {}
export declare class SearchBar extends HTMLElement {
  value: string;
}
export declare class Card extends HTMLElement {}
export declare class DataTable extends HTMLElement {}
export declare class Navbar extends HTMLElement {}
export declare class Sidebar extends HTMLElement {
  collapsed: boolean;
  toggle(): void;
}

// --- Global HTMLElementTagNameMap ---

declare global {
  interface HTMLElementTagNameMap {
    'bpi-button': Button;
    'bpi-input': Input;
    'bpi-badge': Badge;
    'bpi-icon': Icon;
    'bpi-form-field': FormField;
    'bpi-search-bar': SearchBar;
    'bpi-card': Card;
    'bpi-data-table': DataTable;
    'bpi-navbar': Navbar;
    'bpi-sidebar': Sidebar;
  }

  interface HTMLElementEventMap {
    'bpi-input': BpiInputEvent;
    'bpi-change': BpiChangeEvent;
    'bpi-blur': BpiBlurEvent;
    'bpi-sort': BpiTableSortEvent;
    'bpi-table-select': BpiTableSelectEvent;
    'bpi-page-change': BpiPageChangeEvent;
  }
}
