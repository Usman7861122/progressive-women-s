// Practice locations. [Brackets] mark details the practice still has to confirm.
import { IMG } from './images';

export type LocationPage = {
  slug: string;
  name: string; // "Friendswood, TX"
  short: string; // "Friendswood"
  tagline: string;
  badge: string; // short status
  telemedicineOnly: boolean;
  title: string; // H1
  summary: string;
  lines: [string, string];
  phone: string;
  email: string;
  mapQuery: string;
  img: string;
  hours: { days: string; time: string }[];
  hoursNote: string;
  services: { label: string; href: string }[];
  cities: string[];
  guide: { title: string; intro: string; areas?: { city: string; time: string }[]; steps?: { title: string; text: string }[]; tips: string[] };
  bring: string[];
  faq: { q: string; a: string }[];
  notice: string;
};

const SERVICES = [
  { label: 'Primary Care', href: '/primary-care' },
  { label: 'Gynecology', href: '/gynecology' },
  { label: 'Men’s Health', href: '/mens-health' },
  { label: 'Psychiatry', href: '/psychiatry' },
  { label: 'Counseling', href: '/counseling' },
  { label: 'Pain Management', href: '/pain-management' },
  { label: 'Weight Management', href: '/weight-management' },
  { label: 'Aesthetics', href: '/aesthetics' },
];

export const locationPages: LocationPage[] = [
  {
    slug: 'friendswood',
    name: 'Friendswood, TX',
    short: 'Friendswood',
    tagline: 'Our main office, with in-person and telemedicine visits',
    badge: 'In person + telemedicine',
    telemedicineOnly: false,
    title: 'Progressive Women’s Health in Friendswood, TX',
    summary:
      'Our Friendswood office is where our Providers see patients in person. You can also choose a telemedicine visit from home. We welcome patients from across the Bay Area and south Houston.',
    lines: ['907 South Friendswood Drive, Suite 109', 'Friendswood, TX 77546'],
    phone: '281-626-7694',
    email: 'contact@progressivewomenshealthonline.com',
    mapQuery: '907 South Friendswood Drive Suite 109 Friendswood TX 77546',
    img: IMG.examRoom,
    hours: [
      { days: 'Monday – Thursday', time: '[Practice to confirm]' },
      { days: 'Friday', time: '[Practice to confirm]' },
      { days: 'Saturday – Sunday', time: '[Practice to confirm]' },
    ],
    hoursNote: 'Telemedicine visits are available by appointment. Please call us to find the best time.',
    services: SERVICES,
    cities: ['Friendswood', 'Pearland', 'League City', 'Webster', 'Clear Lake', 'Alvin', 'Dickinson', 'Pasadena', 'Sugar Land', 'Houston'],
    guide: {
      title: 'How to get here',
      intro: 'We are on South Friendswood Drive, Suite 109. Tap “Get directions” to open your route from your city.',
      areas: [
        { city: 'Pearland', time: 'about 15 minutes' },
        { city: 'League City', time: 'about 15 minutes' },
        { city: 'Webster / Clear Lake', time: 'about 20 minutes' },
        { city: 'Alvin', time: 'about 20 minutes' },
        { city: 'Dickinson', time: 'about 20 minutes' },
        { city: 'Pasadena', time: 'about 25 minutes' },
        { city: 'Sugar Land', time: 'about 40 minutes' },
        { city: 'Downtown Houston', time: 'about 35 minutes' },
      ],
      tips: [
        'Drive times are estimates and change with traffic. Please leave a little early.',
        'Parking: [Practice to add parking details].',
        'Accessibility: [Practice to add accessibility details].',
        'Too far, or want to stay home? Ask about a telemedicine visit.',
      ],
    },
    bring: ['A photo ID', 'Your insurance card, if you have one', 'A list of your medicines and allergies', 'Any recent records, scans or test results', 'Your questions, written down if it helps'],
    faq: [
      { q: 'Do I need an appointment?', a: 'Yes. Please request a visit or call us, and our team will schedule you.' },
      { q: 'Can I have a telemedicine visit instead?', a: 'Yes. Many visits can be done by video. Some exams and tests need an in-person visit, and we will tell you.' },
      { q: 'Which insurance do you take?', a: 'Please see our insurance list or call us. [Practice to confirm accepted plans.]' },
      { q: 'What if I am running late?', a: 'Please call us as soon as you can so we can help.' },
    ],
    notice: 'Telemedicine is not for emergencies. If you think you are having a medical emergency, call 911.',
  },
  {
    slug: 'kenner',
    name: 'Kenner, LA',
    short: 'Kenner',
    tagline: 'Telemedicine for now, with the office coming soon',
    badge: 'Telemedicine for now',
    telemedicineOnly: true,
    title: 'Progressive Women’s Health in Kenner, LA',
    summary:
      'Our Kenner, LA practice currently provides care by telemedicine only. You can meet with us by secure video from home anywhere in Louisiana. In-person exams and vaccinations will be available once our Kenner office opens.',
    lines: ['4113 Williams Blvd', 'Kenner, LA 70065'],
    phone: '281-993-4072',
    email: 'contact@progressivewomenshealthonline.com',
    mapQuery: '4113 Williams Blvd Kenner LA 70065',
    img: IMG.stethLaptop,
    hours: [
      { days: 'Monday – Thursday', time: '[Practice to confirm]' },
      { days: 'Friday', time: '[Practice to confirm]' },
      { days: 'Saturday – Sunday', time: '[Practice to confirm]' },
    ],
    hoursNote: 'Hours shown are for telemedicine appointments. The Kenner office does not yet see patients in person.',
    services: SERVICES,
    cities: ['Kenner', 'Metairie', 'New Orleans', 'River Ridge', 'Harahan', 'LaPlace', 'Gretna', 'Harvey', 'Baton Rouge'],
    guide: {
      title: 'How telemedicine works',
      intro: 'You do not need to travel. You only need a phone or computer with a camera, and to be in Louisiana during your visit.',
      steps: [
        { title: 'Request a visit', text: 'Send a request or call us. Our team will help you pick a time and get set up.' },
        { title: 'Meet by video', text: 'Join a secure video visit from home. There is no waiting room and no drive.' },
        { title: 'Follow up', text: 'Regular check-ins to review how you are doing. We help arrange in-person care if you need an exam or test.' },
      ],
      tips: [
        'You must be physically located in Louisiana at the time of each visit.',
        'Choose a private, quiet spot with a good internet connection.',
        'Have your medicines and any recent records nearby.',
        'The Kenner office address is shown for mailing and for when we open. Please do not come in person yet.',
      ],
    },
    bring: ['A phone, tablet or computer with a camera', 'A private place with good internet', 'A list of your medicines and allergies', 'Any recent records, scans or test results', 'Your questions, written down if it helps'],
    faq: [
      { q: 'Can I visit the Kenner office?', a: 'Not yet. The office is for telemedicine only for now. In-person exams and vaccinations will be available once the office opens.' },
      { q: 'Where do I need to be during a visit?', a: 'You must be physically in Louisiana at the time of each telemedicine visit.' },
      { q: 'What if I need an exam or lab test?', a: 'We will help you arrange it near you, and review the results with you.' },
      { q: 'Is telemedicine for emergencies?', a: 'No. For chest pain, trouble breathing or other emergencies, call 911.' },
    ],
    notice: 'Telemedicine is not for emergencies. If you think you are having a medical emergency, call 911. Telemedicine visits are available only to patients physically located in Louisiana at the time of the visit.',
  },
];
