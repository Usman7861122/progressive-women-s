import type { ElementType } from 'react';
import { BadgeCheck, CalendarCheck, GraduationCap, Newspaper, Receipt, Star, Wallet, Stethoscope } from 'lucide-react';
import { specialtyPages, type SpecialtyPage } from '../../data/specialty-pages';

export type MenuItem = { label: string; description?: string; href: string; icon: ElementType };
export type MenuGroup = { title: string; items: MenuItem[] };
export type NavEntry = {
  id: number;
  label: string;
  href: string;
  menus?: MenuGroup[]; // simple dropdown, also used for the mobile list
  all?: { label: string; href: string };
  mega?: SpecialtyPage[]; // tabbed mega menu, shows each service page's exact wording
};

// Mobile list and fallback: one link per service, named exactly as in the navigation.
const serviceLinks: MenuItem[] = specialtyPages.map((s) => ({
  label: s.nav,
  href: `/${s.slug}`,
  icon: Stethoscope,
}));

export const navEntries: NavEntry[] = [
  {
    id: 1,
    label: 'Services',
    href: '/gynecology',
    mega: specialtyPages,
    menus: [{ title: 'Services', items: serviceLinks }],
  },
  {
    id: 2,
    label: 'Patients',
    href: '/#first-visit',
    menus: [
      {
        title: 'For patients',
        items: [
          { label: 'Your first visit', description: 'What to expect, step by step', href: '/#first-visit', icon: CalendarCheck },
          { label: 'Insurance', description: 'Plans we accept', href: '/#insurance', icon: Wallet },
          { label: 'Pay my bill', description: 'Secure online payment', href: '/pay-bill', icon: Receipt },
          { label: 'Reviews', description: 'Words from our patients', href: '/#reviews', icon: Star },
        ],
      },
      {
        title: 'Learn more',
        items: [
          { label: 'Education', description: 'Short guides on your health', href: '/#education', icon: GraduationCap },
          { label: 'Affiliations', description: 'Boards and awards', href: '/#affiliations', icon: BadgeCheck },
          { label: 'Blog', description: 'News and articles', href: '/#blog', icon: Newspaper },
        ],
      },
    ],
  },
  { id: 3, label: 'Shop', href: '/shop' },
  { id: 4, label: 'Our Team', href: '/about' },
  { id: 5, label: 'Contact', href: '/#contact' },
];
