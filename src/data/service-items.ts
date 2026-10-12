// Detail pages for single items inside a service page, e.g. Primary Care > Annual physical examinations.
// They use the same layout as the condition pages.
import { IMG } from './images';
import type { ConditionPage } from './condition-pages';
import { make } from './condition-more';

export const serviceItemPages: ConditionPage[] = [
  make({
    slug: 'annual-physical-examinations',
    name: 'Annual physical examinations',
    what: 'annual physical',
    kicker: 'Primary care',
    parent: { label: 'Primary Care', href: '/primary-care' },
    nearHeading: 'Annual physicals in Friendswood and nearby cities',
    benefitsHeading: 'Why a yearly physical helps',
    title: 'Annual physical examinations',
    summary:
      'A yearly check-up is the best way to stay ahead of your health. We review your history, check your risks, update your screenings and vaccines, and make a simple plan for the year. Much of the visit can be done by video.',
    heroImg: IMG.doctor,
    overview: {
      heading: 'What is an annual physical?',
      paragraphs: [
        'An annual physical is a yearly visit with your clinician, even when you feel well. We look at the big picture: your health history, medicines, family history, habits, blood pressure, weight and screening tests.',
        'The goal is to catch small problems early, keep long-term conditions steady, and answer the questions you have been saving up. It is also the visit where we make sure your vaccines and screenings are up to date.',
      ],
      photos: [IMG.stethLaptop, IMG.consult],
    },
    candidate: {
      heading: 'Who should book one?',
      text: 'Every adult 18 and older benefits from a regular physical. It is a good time to ask for one if any of the reasons below sound like you.',
      signsTitle: 'Good reasons to book',
      signs: [
        'It has been a year or more since your last physical',
        'You are new to the area or new to us',
        'You have a new job, school or sport form to complete',
        'You have a family history of heart disease, diabetes or cancer',
        'You are managing a long-term condition',
        'You want a clear picture of your health today',
      ],
      helpTitle: 'What is included',
      help: [
        'Annual physical examinations',
        'Age-appropriate cancer & health screenings',
        'Immunization review & recommendations',
        'Cardiovascular risk assessment',
        'Tobacco cessation',
        'Preoperative medical evaluations',
      ],
      note: 'Chest pain, trouble breathing or stroke symptoms are emergencies. Call 911.',
    },
    benefits: [
      { title: 'Catch problems early', text: 'Screening can find changes before you feel them.' },
      { title: 'Know your numbers', text: 'Blood pressure, cholesterol, blood sugar and more, explained.' },
      { title: 'Stay up to date', text: 'Vaccines and screenings matched to your age and risk.' },
      { title: 'One simple plan', text: 'Clear next steps for the year, in plain words.' },
    ],
    steps: [
      { title: 'Request a telemedicine visit', text: 'Send a request and our team will call you to schedule your video visit.' },
      { title: 'Talk and plan', text: 'We review your history, risks and goals, and order any labs or screenings that are due.' },
      { title: 'Finish and follow up', text: 'We help you complete any hands-on exam or tests, then review your results with you.' },
    ],
    safety: {
      heading: 'What can be done by video?',
      text: 'Much of a physical can be done by video: reviewing your history, medicines and risks, planning screenings and vaccines, and going over lab results. Some parts, such as listening to your heart and lungs, or giving vaccines, need an in-person visit. We tell you exactly what is needed, and help you arrange it. In-person exams at our Kenner office will begin once it opens.',
    },
    faq: [
      { q: 'How often do I need a physical?', a: 'Most adults benefit from one every year. If you are young and healthy, your clinician may suggest a longer gap. We will tell you what is right for you.' },
      { q: 'Do I need to fast?', a: 'Only if we order certain blood tests. We tell you before your visit.' },
      { q: 'What should I bring or have ready?', a: 'A list of your medicines and allergies, past records or test results, and your questions. For a video visit, a quiet spot and a good internet connection.' },
      { q: 'Does insurance cover it?', a: 'Many plans cover a yearly preventive visit, but coverage varies. [Practice to confirm accepted plans.]' },
    ],
    related: [
      { label: 'Preventive care & wellness', text: 'See everything in this group.', href: '/primary-care#preventive-care-and-wellness', img: IMG.doctor },
      { label: 'Chronic disease management', text: 'Steady care for long-term conditions.', href: '/primary-care#chronic-disease-management', img: IMG.elderConsult },
      { label: 'Annual well-woman exams', text: 'Pap tests and women’s health.', href: '/conditions/annual-exams', img: IMG.hands },
      { label: 'Psychiatry', text: 'Mental health, part of your whole care.', href: '/psychiatry', img: IMG.meditate },
    ],
    notice:
      'Primary care services are for adults 18 and older. Our Louisiana practice currently provides care by telemedicine only, and you must be physically located in Louisiana at the time of each visit. Some parts of a physical need an in-person exam. Telemedicine is not for emergencies: call 911.',
  }),
  make({
    slug: 'age-appropriate-cancer-and-health-screenings',
    name: 'Age-appropriate cancer & health screenings',
    what: 'screening',
    kicker: 'Primary care',
    parent: { label: 'Primary Care', href: '/primary-care' },
    nearHeading: 'Health screenings in Friendswood and nearby cities',
    benefitsHeading: 'Why screening matters',
    title: 'Cancer and health screenings',
    summary:
      'Screening finds problems before they cause symptoms, when they are easiest to treat. We review your age, history and family risks, tell you which tests you need and when, and help you get them done.',
    heroImg: IMG.scans,
    overview: {
      heading: 'What are age-appropriate screenings?',
      paragraphs: [
        'Screening means testing for a condition before you have any signs of it. Which tests you need depends on your age, sex, health history, family history and habits, so a plan that fits one person may not fit another.',
        'We go through your risks and build a simple screening schedule. We order the tests, help you book them near you, and go over the results with you.',
      ],
      photos: [IMG.scans, IMG.labWoman],
    },
    candidate: {
      heading: 'Who should be screened?',
      text: 'Most adults need some screening, and the list grows with age. These are common examples. Your own plan may start earlier or later, based on your risk.',
      signsTitle: 'Common screenings (general guide)',
      signs: [
        'Breast cancer: mammogram, often every one to two years from about age 40',
        'Cervical cancer: Pap and HPV tests, from age 21 to 65',
        'Colorectal cancer: from about age 45 to 75',
        'Lung cancer: low-dose CT for some current or past heavy smokers',
        'Blood pressure, cholesterol and blood sugar checks',
        'Bone density, hepatitis C and other tests, based on your risk',
      ],
      helpTitle: 'How we can help',
      help: [
        'Age-appropriate cancer & health screenings',
        'Cardiovascular risk assessment',
        'Immunization review & recommendations',
        'Breast cancer risk assessment & reduction',
        'Colorectal cancer risk assessment & reduction',
        'Melanoma (skin cancer) risk assessment & reduction',
      ],
      note: 'New lumps, bleeding, unexplained weight loss or pain should be checked right away. Please do not wait for your next screening.',
    },
    benefits: [
      { title: 'Early detection', text: 'Many problems are easier to treat when found early.' },
      { title: 'A clear schedule', text: 'You know what you need and when.' },
      { title: 'Less worry', text: 'Normal results bring peace of mind.' },
      { title: 'Help with every step', text: 'We order tests, explain results and plan next steps.' },
    ],
    steps: [
      { title: 'Request a telemedicine visit', text: 'Send a request and our team will call you to schedule your video visit.' },
      { title: 'Review your risks', text: 'We go over your age, history and family risks, and build your screening plan.' },
      { title: 'Get tested and follow up', text: 'We order your tests, help you book them near you, and review the results with you.' },
    ],
    safety: {
      heading: 'What can be done by video?',
      text: 'Planning your screenings and reviewing your results can be done by video. The tests themselves, such as a mammogram, a Pap test or a colonoscopy, are done at a lab or imaging center, and we help you arrange them. Screening guidelines change over time and depend on your risks, so your clinician will explain the benefits and limits of each test before you decide.',
    },
    faq: [
      { q: 'How do I know which screenings I need?', a: 'It depends on your age, health and family history. We review these with you and write a plan.' },
      { q: 'What if I have a family history of cancer?', a: 'You may need to start earlier, or be tested more often. We can also talk about genetic testing.' },
      { q: 'What happens if a test is abnormal?', a: 'An abnormal result does not always mean cancer. We explain what it means and arrange follow-up tests or specialists.' },
      { q: 'Does insurance cover screening?', a: 'Many screenings are covered when they meet guidelines, but coverage varies. [Practice to confirm accepted plans.]' },
    ],
    related: [
      { label: 'Preventive care & wellness', text: 'See everything in this group.', href: '/primary-care#preventive-care-and-wellness', img: IMG.doctor },
      { label: 'Annual physical examinations', text: 'Your yearly check-up.', href: '/primary-care/annual-physical-examinations', img: IMG.stethLaptop },
      { label: 'Genetic testing', text: 'Know your family cancer risk.', href: '/conditions/genetic-testing', img: IMG.lab },
      { label: 'Annual well-woman exams', text: 'Pap tests and women’s health.', href: '/conditions/annual-exams', img: IMG.hands },
    ],
    notice:
      'Primary care services are for adults 18 and older. Screening recommendations are general and depend on your personal and family history. Our Louisiana practice currently provides care by telemedicine only, and you must be physically located in Louisiana at the time of each visit. Telemedicine is not for emergencies: call 911.',
  }),
];
