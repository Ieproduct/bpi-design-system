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
    label: 'Resources',
    icon: '📦',
    children: [
      { label: 'CLAUDE.md', path: '/claude-md' },
    ],
  },
];

export default navigationStructure;
