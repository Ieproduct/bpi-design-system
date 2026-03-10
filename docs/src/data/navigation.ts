export interface NavItem {
  label: string;
  path?: string;
  icon?: string;
  children?: NavItem[];
}

export const navigationStructure: NavItem[] = [
  {
    label: 'Getting Started',
    icon: '🚀',
    children: [
      { label: 'Installation', path: '/getting-started/installation' },
      { label: 'Usage', path: '/getting-started/usage' },
      { label: 'Customization', path: '/getting-started/customization' },
    ],
  },
  {
    label: 'Design Tokens',
    icon: '🎨',
    children: [
      { label: 'Colors', path: '/tokens/colors' },
      { label: 'Typography', path: '/tokens/typography' },
      { label: 'Spacing', path: '/tokens/spacing' },
      { label: 'Misc', path: '/tokens/misc' },
    ],
  },
  {
    label: 'Component Specs — Atoms',
    icon: '⚛️',
    children: [
      { label: 'Alert', path: '/components/alert' },
      { label: 'Avatar', path: '/components/avatar' },
      { label: 'Badge', path: '/components/badge' },
      { label: 'Box', path: '/components/box' },
      { label: 'Button', path: '/components/button' },
      { label: 'Checkbox', path: '/components/checkbox' },
      { label: 'Chip', path: '/components/chip' },
      { label: 'Circular Progress', path: '/components/circular-progress' },
      { label: 'Divider', path: '/components/divider' },
      { label: 'Icon', path: '/components/icon' },
      { label: 'Input', path: '/components/input' },
      { label: 'Linear Progress', path: '/components/linear-progress' },
      { label: 'Radio', path: '/components/radio' },
      { label: 'Select', path: '/components/select' },
      { label: 'Skeleton', path: '/components/skeleton' },
      { label: 'Slider', path: '/components/slider' },
      { label: 'Stack', path: '/components/stack' },
      { label: 'Switch', path: '/components/switch' },
      { label: 'Text Field', path: '/components/text-field' },
      { label: 'Tooltip', path: '/components/tooltip' },
      { label: 'Typography', path: '/components/typography' },
    ],
  },
  {
    label: 'Component Specs — Molecules',
    icon: '🧩',
    children: [
      { label: 'Accordion', path: '/components/accordion' },
      { label: 'Autocomplete', path: '/components/autocomplete' },
      { label: 'Breadcrumbs', path: '/components/breadcrumbs' },
      { label: 'Card', path: '/components/card' },
      { label: 'Date Picker', path: '/components/date-picker' },
      { label: 'Dialog', path: '/components/dialog' },
      { label: 'Drawer', path: '/components/drawer' },
      { label: 'Form Field', path: '/components/form-field' },
      { label: 'List', path: '/components/list' },
      { label: 'Menu', path: '/components/menu' },
      { label: 'Pagination', path: '/components/pagination' },
      { label: 'Search Bar', path: '/components/search-bar' },
      { label: 'Snackbar', path: '/components/snackbar' },
      { label: 'Tabs', path: '/components/tabs' },
    ],
  },
  {
    label: 'Component Specs — Organisms',
    icon: '🏗️',
    children: [
      { label: 'Data Table', path: '/components/data-table' },
      { label: 'Navbar', path: '/components/navbar-component' },
      { label: 'Sidebar', path: '/components/sidebar-component' },
    ],
  },
  {
    label: 'Resources',
    icon: '📦',
    children: [
      { label: 'CLAUDE.md', path: '/claude-md' },
    ],
  },
];

export default navigationStructure;
