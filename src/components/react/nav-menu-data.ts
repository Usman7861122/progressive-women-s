import type { ElementType } from 'react';
import {
  Activity, Baby, BadgeCheck, CalendarCheck, Dna, Droplets, FlaskConical, Flower2,
  HeartPulse, Phone, Scale, Scan, ShieldCheck, Sparkles, Star, Stethoscope, Sun,
  Users, Video, Wallet, Waves,
} from 'lucide-react';
import { conditions, services } from '../../data/content';

export type MenuItem = { label: string; description?: string; href: string; icon: ElementType };
export type MenuGroup = { title: string; items: MenuItem[] };
export type NavEntry = { id: number; label: string; href: string; menus?: MenuGroup[]; all?: { label: string; href: string } };

const icons: Record<string, ElementType> = {
  'pelvic-pain': Activity,
  'ovarian-cysts': Waves,
  'lichen-sclerosus': Flower2,
  contraception: ShieldCheck,
  'std-testing': FlaskConical,
  hysteroscopy: Scan,
  menopause: Sun,
  'irregular-bleeding': Droplets,
  telemedicine: Video,
  'heavy-periods-menorrhagia': Droplets,
  'postmenopausal-bleeding': Sun,
  'polycystic-ovarian-syndrome-pcos': HeartPulse,
  'irregular-periods': CalendarCheck,
  'uterine-fibroids': Activity,
  infertility: Baby,
  'annual-exams': Stethoscope,
  'pregnancy-testing-and-early-pregnancy-care': Baby,
  'sexually-transmitted-infections': FlaskConical,
  'genetic-testing': Dna,
  'medical-weight-loss': Scale,
};

const chunk = <T,>(list: T[], size: number) =>
  Array.from({ length: Math.ceil(list.length / size) }, (_, i) => list.slice(i * size, i * size + size));

const serviceItems: MenuItem[] = services.map((s) => ({
  label: s.name,
  description: s.text,
  href: `/services#${s.slug}`,
  icon: icons[s.slug] ?? Sparkles,
}));
const conditionItems: MenuItem[] = conditions.map((c) => ({
  label: (c as { short?: string }).short ?? c.name,
  href: `/conditions#${c.slug}`,
  icon: icons[c.slug] ?? Sparkles,
}));

export const navEntries: NavEntry[] = [
  { id: 1, label: 'About', href: '/#about' },
  {
    id: 2,
    label: 'Services',
    href: '/#services',
    menus: [
      { title: 'Everyday care', items: serviceItems.slice(0, 5) },
      { title: 'Procedures and more', items: serviceItems.slice(5) },
    ],
    all: { label: 'View all services', href: '/services' },
  },
  {
    id: 3,
    label: 'Conditions',
    href: '/#conditions',
    menus: chunk(conditionItems, 5).map((items, i) => ({ title: ['Cycles and bleeding', 'Ovaries and hormones', 'Screening and family'][i] ?? 'More', items })),
    all: { label: 'View all conditions', href: '/conditions' },
  },
  {
    id: 4,
    label: 'Patients',
    href: '/#first-visit',
    menus: [
      {
        title: 'For patients',
        items: [
          { label: 'Your first visit', description: 'What to expect, step by step', href: '/#first-visit', icon: CalendarCheck },
          { label: 'Insurance', description: 'Plans we accept', href: '/#insurance', icon: Wallet },
          { label: 'Reviews', description: 'Words from our patients', href: '/#reviews', icon: Star },
          { label: 'Contact us', description: 'Call, visit or send a message', href: '/#contact', icon: Phone },
        ],
      },
      {
        title: 'Our practice',
        items: [
          { label: 'Meet Dr. Mohsin', description: 'Care built on trust', href: '/about', icon: Users },
          { label: 'Affiliations', description: 'Boards and awards', href: '/#affiliations', icon: BadgeCheck },
        ],
      },
    ],
  },
  { id: 5, label: 'Education', href: '/#education' },
  { id: 6, label: 'Blog', href: '/#blog' },
];
