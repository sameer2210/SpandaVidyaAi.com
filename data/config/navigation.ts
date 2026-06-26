import { NavLink } from '@/types';

export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Approach', href: '#approach' },
  { label: 'Progress', href: '#progress' },
  { label: 'Mission', href: '#mission' },
  { label: 'Contact', href: '#contact' },
  { label: 'Team', href: '#team' }
] as const satisfies readonly NavLink[];
