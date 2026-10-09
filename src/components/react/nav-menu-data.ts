import type { ElementType } from 'react';
import {
  Activity, Baby, BadgeCheck, CalendarCheck, Dna, Droplets, FlaskConical, Flower2,
  HeartPulse, Newspaper, Scale, Scan, ShieldCheck, Sparkles, Star, Stethoscope, Sun,
  Video, Wallet, Waves, Receipt, GraduationCap, Brain, MessagesSquare, Mars,
} from 'lucide-react';
import { conditions, services, specialties } from '../../data/content';

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
  'primary-care': Stethoscope,
  'mens-health': Mars,
  psychiatry: Brain,
  counseling: MessagesSquare,
  'pain-management': Video,
  'weight-management': Scale,
  aesthetics: Sparkles,
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

const specItem = (slug: string): MenuItem => {
  const s = specialties.find((x) => x.slug === slug)!;
  return { label: s.name, description: s.text, href: `/${s.slug}`, icon: icons[s.slug] ?? Sparkles };
};

export const navEntries: NavEntry[] = [
  {
    id: 1,
    label: 'Gynecology',
    href: '/gynecology',
    menus: [
      { title: 'Everyday care', items: serviceItems.slice(0, 5) },
      { title: 'Procedures and more', items: serviceItems.slice(5) },
    ],
    all: { label: 'View all gynecology services', href: '/gynecology' },
  },
  {
    id: 2,
    label: 'Conditions',
    href: '/#conditions',
    menus: chunk(conditionItems, 5).map((items, i) => ({ title: ['Cycles and bleeding', 'Ovaries and hormones', 'Screening and family'][i] ?? 'More', items })),
    all: { label: 'View all conditions', href: '/conditions' },
  },
  {
    id: 3,
    label: 'Specialties',
    href: '/#services',
    menus: [
      { title: 'Medical care', items: ['primary-care', 'mens-health', 'pain-management', 'weight-management'].map(specItem) },
      { title: 'Mind and body', items: ['psychiatry', 'counseling', 'aesthetics'].map(specItem) },
    ],
    all: { label: 'See all our services', href: '/#services' },
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
  { id: 5, label: 'Shop', href: '/shop' },
  { id: 6, label: 'Our Team', href: '/about' },
  { id: 7, label: 'Contact', href: '/#contact' },
];
