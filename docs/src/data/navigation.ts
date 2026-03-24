export interface NavItem {
  label: string;
  path?: string;
  icon?: string;
  children?: NavItem[];
}

export const navigationStructure: NavItem[] = [
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
    label: 'Component Specs — Layout',
    icon: '🏗️',
    children: [
      { label: 'AppBar', path: '/components/app-bar' },
      { label: 'NavBar', path: '/components/nav-bar' },
      { label: 'Sidebar', path: '/components/sidebar' },
      { label: 'Footer', path: '/components/footer' },
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
