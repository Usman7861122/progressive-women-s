// Content for each condition page. Structure follows the reference page:
// hero, overview, who it is for, "near you" with cities and a short guide to get here,
// benefits, what to expect, safety, FAQ, related care, closing call to action.
// [Brackets] mark text the practice should confirm.
import { IMG } from './images';

export type Area = { city: string; time: string };

export type ConditionPage = {
  slug: string;
  name: string;
  title: string; // H1
  summary: string;
  welcome: string;
  telemedicine: string;
  heroImg: string;
  overview: { heading: string; paragraphs: string[]; photos: [string, string] };
  candidate: { heading: string; text: string; signsTitle: string; signs: string[]; helpTitle: string; help: string[]; note?: string };
  near: {
    intro: string;
    cities: string[];
    closing: string;
    guideTitle: string;
    areas: Area[]; // drive time to the Friendswood office
    tips: string[];
    louisiana: { text: string; cities: string[] };
  };
  benefits: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  safety: { heading: string; text: string };
  faq: { q: string; a: string }[];
  related: { label: string; text: string; href: string; img: string }[];
  notice: string;
};

export const conditionPages: ConditionPage[] = [
  {
    slug: 'menopause',
    name: 'Menopause',
    title: 'Menopause care in Friendswood, TX',
    summary:
      'Hot flashes, poor sleep, mood changes and more can make this stage hard. We listen, explain your options in plain words, and build a plan that fits your life. Many visits are also available by telehealth.',
    welcome: 'Patients are welcome from across Friendswood, Pearland, League City, Webster, Clear Lake and the greater Bay Area.',
    telemedicine: 'Our Kenner, LA office is also available for telemedicine.',
    heroImg: IMG.sunrise,
    overview: {
      heading: 'What is menopause?',
      paragraphs: [
        'Menopause is the time when your periods have stopped for 12 months in a row. Most women reach it in their late 40s or early 50s. The years before it, called perimenopause, can bring changes much earlier.',
        'As hormone levels shift, many women notice hot flashes, night sweats, poor sleep, vaginal dryness, mood changes, and weight changes. Symptoms are common, they are real, and you do not have to just put up with them.',
      ],
      photos: [IMG.portraitD, IMG.sleeping],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'You do not need to wait until symptoms are severe. If changes in your body, sleep or mood are affecting your day, it is a good time to talk with us.',
      signsTitle: 'Common signs',
      signs: [
        'Hot flashes and night sweats',
        'Trouble falling or staying asleep',
        'Vaginal dryness and painful intercourse',
        'Low mood, anxiety or irritability',
        'Weight gain around the middle',
        'Brain fog and low energy',
        'Periods that change or become irregular',
      ],
      helpTitle: 'How we can help',
      help: [
        'Perimenopause & menopause management',
        'Menopausal hormone therapy (HRT)',
        'Subcutaneous hormone pellet therapy',
        'Menopause-associated weight gain',
        'Menopause-related mood disorders',
      ],
      note: 'Bleeding after menopause always needs to be checked. Please call us if this happens.',
    },
    near: {
      intro:
        'Dr. Asia Mohsin provides menopause care at our Friendswood office and by telehealth. We welcome patients from across the Bay Area and south Houston.',
      cities: ['Friendswood', 'Pearland', 'League City', 'Webster', 'Clear Lake', 'Alvin', 'Dickinson', 'Pasadena', 'Sugar Land', 'Houston'],
      closing: 'Not on the list? Call us, or ask about a telehealth visit.',
      guideTitle: 'A short guide to reach us',
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
        'Drive times are estimates and change with traffic. Leave a little early for morning visits.',
        'Tap “Get directions” to open your route in Google Maps from your city.',
        'Parking: [Practice to add parking details].',
        'Too far, or want to stay home? Ask about a telehealth visit.',
      ],
      louisiana: {
        text: 'In Louisiana we offer telemedicine for now, with our Kenner office coming. You must be in Louisiana at the time of your visit.',
        cities: ['Kenner', 'Metairie', 'New Orleans', 'River Ridge', 'Harahan', 'LaPlace'],
      },
    },
    benefits: [
      { title: 'Fewer hot flashes', text: 'Treatment can ease hot flashes and night sweats.' },
      { title: 'Better sleep', text: 'Better rest often means more energy and a steadier mood.' },
      { title: 'More comfort', text: 'Care for dryness and pain can make intimacy comfortable again.' },
      { title: 'A plan that is yours', text: 'Options with and without hormones, chosen with you.' },
    ],
    steps: [
      { title: 'Request a telemedicine visit', text: 'Send a request and our team will call you to schedule your video visit.' },
      { title: 'Talk and review', text: 'We review your symptoms, health history and goals, and order tests only if they help.' },
      { title: 'Start and follow up', text: 'We start your plan, then check in to see how you feel and adjust.' },
    ],
    safety: {
      heading: 'Is hormone therapy safe?',
      text: 'For many women, hormone therapy is a safe and helpful choice, but it is not right for everyone. Risks depend on your age, how long since menopause, and your health history, including past blood clots, stroke, or certain cancers. Your clinician will talk through the risks, benefits and other options before any treatment. Non-hormone options are also available.',
    },
    faq: [
      { q: 'When does menopause start?', a: 'Menopause is confirmed after 12 months without a period. Most women reach it in their late 40s to early 50s, and symptoms can start years before.' },
      { q: 'Do I need blood tests?', a: 'Often your symptoms and history are enough. We order tests when they will change your care.' },
      { q: 'Is hormone therapy right for me?', a: 'It depends on your health, age, and goals. We review everything with you and explain all of your options.' },
      { q: 'Can I be seen by video?', a: 'Yes. Many menopause visits are available by telehealth. Louisiana patients must be in Louisiana during the visit.' },
    ],
    related: [
      { label: 'Menopause & hormonal health', text: 'See everything we offer for this stage.', href: '/gynecology#menopause-and-hormonal-health', img: IMG.portraitD },
      { label: 'Psychiatry', text: 'Support for menopause-related mood changes.', href: '/psychiatry', img: IMG.meditate },
      { label: 'Weight management', text: 'Medical help with weight gain.', href: '/weight-management', img: IMG.workout },
      { label: 'Counseling', text: 'A steady place to talk things through.', href: '/counseling', img: IMG.calm },
    ],
    notice:
      'Some services listed are elective, may not be covered by insurance, or may involve treatments used off-label. Your clinician will discuss risks, benefits, and alternatives before any treatment. Individual results vary.',
  },
];
