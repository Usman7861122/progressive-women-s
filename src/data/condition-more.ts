// The other condition pages. Same structure as the menopause page (see condition-pages.ts).
// Text is written in plain English and should be reviewed by Dr. Mohsin before launch.
import { IMG } from './images';
import type { ConditionPage } from './condition-pages';

export const WELCOME = 'Patients are welcome from across Friendswood, Pearland, League City, Webster, Clear Lake and the greater Bay Area.';
export const TELE = 'Our Kenner, LA office is also available for telemedicine.';

const AREAS = [
  { city: 'Pearland', time: 'about 15 minutes' },
  { city: 'League City', time: 'about 15 minutes' },
  { city: 'Webster / Clear Lake', time: 'about 20 minutes' },
  { city: 'Alvin', time: 'about 20 minutes' },
  { city: 'Dickinson', time: 'about 20 minutes' },
  { city: 'Pasadena', time: 'about 25 minutes' },
  { city: 'Sugar Land', time: 'about 40 minutes' },
  { city: 'Downtown Houston', time: 'about 35 minutes' },
];

export const near = (what: string): ConditionPage['near'] => ({
  intro: `Dr. Asia Mohsin provides ${what} care at our Friendswood office and by telehealth. We welcome patients from across the Bay Area and south Houston.`,
  cities: ['Friendswood', 'Pearland', 'League City', 'Webster', 'Clear Lake', 'Alvin', 'Dickinson', 'Pasadena', 'Sugar Land', 'Houston'],
  closing: 'Not on the list? Call us, or ask about a telehealth visit.',
  guideTitle: 'A short guide to reach us',
  areas: AREAS,
  tips: [
    'Drive times are estimates and change with traffic. Leave a little early for morning visits.',
    'Tap “Get directions” to open your route in Google Maps from your city.',
    'Parking: [Practice to add parking details].',
    'Too far, or want to stay home? Ask about a telemedicine visit.',
  ],
  louisiana: {
    text: 'In Louisiana we offer telemedicine for now, with our Kenner office coming. You must be in Louisiana at the time of your visit.',
    cities: ['Kenner', 'Metairie', 'New Orleans', 'River Ridge', 'Harahan', 'LaPlace'],
  },
});

const STEPS = [
  { title: 'Request a telemedicine visit', text: 'Send a request and our team will call you to schedule your video visit.' },
  { title: 'Talk and review', text: 'We review your symptoms, health history and goals, and order tests only if they help.' },
  { title: 'Start and follow up', text: 'We start your plan, then check in to see how you feel and adjust.' },
];

const NOTICE =
  'Some services listed are elective, may not be covered by insurance, or may involve treatments used off-label. Your clinician will discuss risks, benefits, and alternatives before any treatment. Individual results vary.';

const R = {
  gyn: { label: 'Gynecology', text: 'Care for every stage, from first visit through menopause.', href: '/gynecology', img: IMG.examRoom },
  primary: { label: 'Primary care', text: 'Everyday care for adults, by video.', href: '/primary-care', img: IMG.stethoscope },
  psych: { label: 'Psychiatry', text: 'Mental health care that is part of your whole care.', href: '/psychiatry', img: IMG.meditate },
  counsel: { label: 'Counseling', text: 'A steady place to talk things through.', href: '/counseling', img: IMG.calm },
  weight: { label: 'Weight management', text: 'Physician-led medical weight care.', href: '/weight-management', img: IMG.workout },
  pain: { label: 'Pain management', text: 'Pain care from home.', href: '/pain-management', img: IMG.phone },
  menopause: { label: 'Menopause', text: 'Relief from hot flashes, poor sleep and more.', href: '/conditions/menopause', img: IMG.portraitD },
  fertility: { label: 'Infertility', text: 'Evaluation and guidance when pregnancy is slow to come.', href: '/conditions/infertility', img: IMG.familySunset },
  pcos: { label: 'PCOS', text: 'Long-term care for cycles and hormones.', href: '/conditions/polycystic-ovarian-syndrome-pcos', img: IMG.bowl },
  periods: { label: 'Heavy periods', text: 'Answers for heavy or long periods.', href: '/conditions/heavy-periods-menorrhagia', img: IMG.pills },
  exams: { label: 'Annual exams', text: 'Pap tests and well-woman care.', href: '/conditions/annual-exams', img: IMG.hands },
  genetic: { label: 'Genetic testing', text: 'Know your family cancer risk.', href: '/conditions/genetic-testing', img: IMG.lab },
};
const rel = (...k: (keyof typeof R)[]) => k.map((x) => R[x]);

type Input = Omit<ConditionPage, 'welcome' | 'telemedicine' | 'near' | 'steps' | 'notice'> & { what: string; steps?: ConditionPage['steps']; notice?: string };
export const make = ({ what, steps, notice, ...c }: Input): ConditionPage => ({
  ...c,
  welcome: WELCOME,
  telemedicine: TELE,
  near: near(what),
  steps: steps ?? STEPS,
  notice: notice ?? NOTICE,
});

export const moreConditions: ConditionPage[] = [
  make({
    slug: 'heavy-periods-menorrhagia', name: 'Heavy periods', what: 'heavy period',
    title: 'Heavy period care in Friendswood, TX',
    summary: 'Soaking through pads, planning your life around your period, or feeling tired all the time? Heavy periods are common, and they can be treated. We look for the cause and explain every option.',
    heroImg: IMG.lake,
    overview: {
      heading: 'What are heavy periods?',
      paragraphs: [
        'Heavy periods, also called menorrhagia, mean bleeding that is very heavy or lasts longer than about seven days. You may pass large clots, need to change protection every hour or two, or bleed through at night.',
        'There are many possible causes, including fibroids, polyps, hormone changes and thickening of the uterine lining. Finding the cause is the first step to the right treatment.',
      ],
      photos: [IMG.pills, IMG.portraitE],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'If your periods get in the way of work, sleep, exercise or plans, it is a good time to ask for help. You do not have to put up with it.',
      signsTitle: 'Common signs',
      signs: ['Changing a pad or tampon every one to two hours', 'Periods longer than seven days', 'Large blood clots', 'Bleeding through clothes or sheets', 'Tiredness or looking pale', 'Pain or pressure in the lower belly'],
      helpTitle: 'How we can help',
      help: ['Heavy menstrual bleeding (menorrhagia)', 'Abnormal uterine bleeding (irregular periods)', 'Medical management of the menstrual cycle', 'Procedural recommendations, including hysteroscopy, endometrial ablation, uterine fibroid embolization and hysterectomy'],
      note: 'Very heavy bleeding with dizziness, fainting or a racing heart is an emergency. Call 911.',
    },
    benefits: [
      { title: 'Lighter periods', text: 'Many treatments reduce bleeding a lot.' },
      { title: 'More energy', text: 'Less blood loss can mean less tiredness.' },
      { title: 'Freedom to plan', text: 'Go to work and events without worry.' },
      { title: 'A clear cause', text: 'We look for the reason, not only the symptom.' },
    ],
    safety: { heading: 'Which treatment is right?', text: 'It depends on the cause, your age, your health, and whether you want to become pregnant. Options range from medicines and hormone treatments to procedures. Your clinician explains the benefits and risks of each, and you choose together.' },
    faq: [
      { q: 'How heavy is too heavy?', a: 'If you soak a pad or tampon every hour or two, pass large clots, or bleed longer than a week, please let us know.' },
      { q: 'Will I need tests?', a: 'Often a blood test and an ultrasound help. Sometimes a small sample of the uterine lining is needed. We only order what will help.' },
      { q: 'Do I need surgery?', a: 'Most women do not. Medicines work for many people. We talk about procedures only if they make sense for you.' },
      { q: 'Can this be done by video?', a: 'Your first talk and follow-ups can be by video. If an exam or test is needed, we will help you arrange it.' },
    ],
    related: rel('gyn', 'primary', 'fertility', 'pcos'),
  }),
  make({
    slug: 'postmenopausal-bleeding', name: 'Postmenopausal bleeding', what: 'postmenopausal bleeding',
    title: 'Postmenopausal bleeding care in Friendswood, TX',
    summary: 'Any bleeding after menopause needs to be checked. Most causes are not serious, but it is always right to ask. We find the cause quickly and explain what comes next.',
    heroImg: IMG.sunset,
    overview: {
      heading: 'What is postmenopausal bleeding?',
      paragraphs: [
        'Postmenopausal bleeding is any vaginal bleeding after you have gone 12 months without a period. It can be light spotting or heavier bleeding.',
        'Common causes include thin, dry vaginal tissue, polyps and changes in the uterine lining. Less often, it can be a sign of cancer, which is why every case should be checked.',
      ],
      photos: [IMG.sunrise, IMG.examRoom],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'Anyone who bleeds after menopause, even once and even a little, should call us. Please do not wait to see if it comes back.',
      signsTitle: 'What to watch for',
      signs: ['Spotting or light bleeding after menopause', 'Pink or brown discharge', 'Bleeding after intercourse', 'Bleeding while taking hormone therapy that is new or unexpected', 'Pelvic pain or pressure'],
      helpTitle: 'How we can help',
      help: ['Review of your history and symptoms', 'Ultrasound and other tests when needed', 'Sampling of the uterine lining (biopsy) when needed', 'Treatment of the cause', 'Perimenopause & menopause management'],
      note: 'If bleeding is heavy, or you feel dizzy or faint, call 911.',
    },
    benefits: [
      { title: 'Peace of mind', text: 'Most causes are not serious, and you will know.' },
      { title: 'Early answers', text: 'Finding a problem early gives more options.' },
      { title: 'Clear next steps', text: 'We explain every test before it is done.' },
      { title: 'Treatment of the cause', text: 'Whether it is dryness, a polyp or something else.' },
    ],
    safety: { heading: 'Why a biopsy?', text: 'A small sample of the uterine lining is the best way to rule out cancer. It is usually quick and done in the office. We explain the steps, and we can give you options to make it more comfortable.' },
    faq: [
      { q: 'Is it normal to spot after menopause?', a: 'It is common, but it is not considered normal. It should always be checked.' },
      { q: 'Could it be serious?', a: 'Usually not. Most cases have a simple cause. Because a small number are serious, we always look carefully.' },
      { q: 'What tests will I need?', a: 'Often an ultrasound and sometimes a biopsy. We decide together after we talk.' },
      { q: 'Can we start by video?', a: 'Yes. We can talk by video first, then arrange tests and exams in person.' },
    ],
    related: rel('menopause', 'gyn', 'primary', 'counsel'),
  }),
  make({
    slug: 'ovarian-cysts', name: 'Ovarian cysts', what: 'ovarian cyst',
    title: 'Ovarian cyst care in Friendswood, TX',
    summary: 'Most ovarian cysts are harmless and go away on their own. We help you tell the difference, check larger or unusual cysts carefully, and treat pain when it comes.',
    heroImg: IMG.stethoscope,
    overview: {
      heading: 'What are ovarian cysts?',
      paragraphs: [
        'An ovarian cyst is a fluid-filled sac on or inside an ovary. Many women have one at some point, often without knowing.',
        'Most cysts are simple and shrink without treatment. Some grow large, cause pain, or look unusual on an ultrasound. Those need a closer look.',
      ],
      photos: [IMG.stethoscope, IMG.calm],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'If a scan found a cyst, or you have pelvic pain or a swollen belly, we can help you understand what it means.',
      signsTitle: 'Common signs',
      signs: ['A dull or sharp ache in the lower belly', 'Bloating or a feeling of fullness', 'Pain during sex', 'Changes in your period', 'A cyst found on a scan'],
      helpTitle: 'How we can help',
      help: ['Ovarian cysts & adnexal masses', 'Chronic pelvic pain', 'Polycystic ovary syndrome (PCOS)', 'Endometriosis'],
      note: 'Sudden, severe belly pain with fever, vomiting or fainting needs urgent care. Call 911 or go to the nearest emergency room.',
    },
    benefits: [
      { title: 'Clear answers', text: 'We explain what your scan shows.' },
      { title: 'Watch or treat', text: 'Many cysts only need a repeat scan.' },
      { title: 'Pain relief', text: 'Ways to ease discomfort while you heal.' },
      { title: 'Careful checks', text: 'Unusual cysts are looked at closely.' },
    ],
    safety: { heading: 'When is a cyst a concern?', text: 'Size, how it looks on ultrasound, your age and your symptoms all matter. Large or complex cysts are followed closely and, when needed, tested to rule out cancer. Your clinician will explain your plan, and refer you to a specialist if needed.' },
    faq: [
      { q: 'Will it go away by itself?', a: 'Many simple cysts do within a few cycles. We may repeat the scan to be sure.' },
      { q: 'Do I need surgery?', a: 'Not usually. Surgery is considered for large cysts, ongoing pain or cysts that look unusual.' },
      { q: 'Can cysts affect pregnancy?', a: 'Most do not. If you are trying to conceive, we will take that into account.' },
      { q: 'Can this be discussed by video?', a: 'Yes. You can share your scan results, and we will plan next steps with you.' },
    ],
    related: rel('gyn', 'pcos', 'pain', 'fertility'),
  }),
  make({
    slug: 'polycystic-ovarian-syndrome-pcos', name: 'PCOS', what: 'PCOS',
    title: 'PCOS care in Friendswood, TX',
    summary: 'Polycystic ovary syndrome (PCOS) can affect your periods, skin, weight and fertility. We help you understand it and build a long-term plan that fits your life.',
    heroImg: IMG.bowl,
    overview: {
      heading: 'What is PCOS?',
      paragraphs: [
        'PCOS is a common hormone condition. It can cause irregular or missed periods, extra hair growth, acne, and trouble with weight or blood sugar.',
        'No two people have it the same way. Care focuses on your symptoms and goals, whether that is regular periods, clearer skin, or getting pregnant.',
      ],
      photos: [IMG.bowl, IMG.workout],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'If your cycles are unpredictable or you notice several of the signs below, ask us about PCOS. Early care can protect your long-term health.',
      signsTitle: 'Common signs',
      signs: ['Irregular, missed or very few periods', 'Extra hair on the face or body', 'Acne or oily skin', 'Thinning hair on the scalp', 'Weight gain that is hard to change', 'Trouble getting pregnant'],
      helpTitle: 'How we can help',
      help: ['Polycystic ovary syndrome (PCOS)', 'Abnormal uterine bleeding (irregular periods)', 'Infertility evaluation', 'Menopause-associated weight gain', 'Medical weight care'],
    },
    benefits: [
      { title: 'More regular cycles', text: 'Treatment can help bring your cycle back on track.' },
      { title: 'Clearer skin and hair', text: 'Options for acne and unwanted hair.' },
      { title: 'Healthier long term', text: 'We watch blood sugar, cholesterol and more.' },
      { title: 'Support for pregnancy', text: 'Help when you are ready to conceive.' },
    ],
    safety: { heading: 'Is PCOS a lifelong condition?', text: 'PCOS does not go away, but it can be managed well. The plan may change over time, from birth control pills to other medicines, nutrition support, or fertility care. Regular check-ups help protect your heart, blood sugar and uterine lining.' },
    faq: [
      { q: 'How is PCOS diagnosed?', a: 'We look at your periods, signs of high androgens, blood tests and sometimes an ultrasound.' },
      { q: 'Can I still get pregnant?', a: 'Yes, many women with PCOS do. If it takes longer, there are safe ways to help.' },
      { q: 'Does weight loss help?', a: 'For many people, even a small amount helps. We offer medical weight support if you want it.' },
      { q: 'Can you manage PCOS by video?', a: 'Yes. Most follow-up visits work well by video, with lab work done near you.' },
    ],
    related: rel('gyn', 'weight', 'fertility', 'periods'),
  }),
  make({
    slug: 'irregular-periods', name: 'Irregular periods', what: 'irregular period',
    title: 'Irregular period care in Friendswood, TX',
    summary: 'Periods that come too often, too rarely, or without a pattern can have many causes. We work out why your cycle changed and treat the cause, not only the symptom.',
    heroImg: IMG.hiker,
    overview: {
      heading: 'What are irregular periods?',
      paragraphs: [
        'A typical cycle lasts about 21 to 35 days. Periods that are much shorter, longer, missed, or different every month may be called irregular.',
        'Stress, weight changes, thyroid problems, PCOS, perimenopause and other conditions can all play a part. A few simple questions and tests often point to the answer.',
      ],
      photos: [IMG.hiker, IMG.stretch],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'Call us if your cycle changes suddenly, or stays unpredictable for more than a few months. If you could be pregnant, take a test first.',
      signsTitle: 'Common signs',
      signs: ['Cycles shorter than 21 or longer than 35 days', 'Missed periods', 'Spotting between periods', 'Periods that are much heavier or lighter than before', 'A cycle that is different every month'],
      helpTitle: 'How we can help',
      help: ['Abnormal uterine bleeding (irregular periods)', 'Polycystic ovary syndrome (PCOS)', 'Medical management of the menstrual cycle', 'Perimenopause & menopause management'],
    },
    benefits: [
      { title: 'A clear cause', text: 'We look for what changed your cycle.' },
      { title: 'A steadier cycle', text: 'Treatment can bring more predictable periods.' },
      { title: 'Protection for your health', text: 'We check that your uterine lining stays healthy.' },
      { title: 'Fertility guidance', text: 'Help if you are planning for pregnancy.' },
    ],
    safety: { heading: 'Is this serious?', text: 'Often the cause is simple and treatable. Because long gaps between periods can affect the uterine lining and fertility, it is worth getting checked. We explain each test and what the results mean.' },
    faq: [
      { q: 'What tests might I need?', a: 'A pregnancy test, blood tests such as thyroid and hormones, and sometimes an ultrasound.' },
      { q: 'Can stress change my period?', a: 'Yes. Stress, travel, illness and weight change can all shift your cycle.' },
      { q: 'Is birth control a treatment?', a: 'It can help regulate cycles for many people, but we first look for the cause.' },
      { q: 'Can I be seen by video?', a: 'Yes. Many first visits for cycle changes work well by video.' },
    ],
    related: rel('pcos', 'periods', 'gyn', 'fertility'),
  }),
  make({
    slug: 'uterine-fibroids', name: 'Uterine fibroids', what: 'uterine fibroid',
    title: 'Uterine fibroid care in Friendswood, TX',
    summary: 'Fibroids are very common and are not cancer. When they cause heavy bleeding, pressure or pain, you have clear options. We walk you through each one.',
    heroImg: IMG.elderConsult,
    overview: {
      heading: 'What are uterine fibroids?',
      paragraphs: [
        'Fibroids are growths in or on the wall of the uterus. They can be as small as a seed or as large as a grapefruit. Many women have them and never know.',
        'When they do cause symptoms, the most common are heavy periods, pelvic pressure and pain. Treatment depends on their size and place, your symptoms and your plans for pregnancy.',
      ],
      photos: [IMG.elderConsult, IMG.examRoom],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'If you have heavy periods, a feeling of pressure in your lower belly, or a scan that showed fibroids, we can help you decide what is next.',
      signsTitle: 'Common signs',
      signs: ['Heavy or long periods', 'Pressure or fullness in the lower belly', 'Needing to urinate often', 'Pain in the back or pelvis', 'Pain during sex', 'Trouble getting pregnant'],
      helpTitle: 'How we can help',
      help: ['Uterine fibroids (leiomyomas)', 'Heavy menstrual bleeding (menorrhagia)', 'Procedural recommendations, including uterine fibroid embolization and hysterectomy', 'Chronic pelvic pain'],
    },
    benefits: [
      { title: 'Fewer symptoms', text: 'Treatment can ease bleeding and pressure.' },
      { title: 'Options that fit you', text: 'From medicines to procedures.' },
      { title: 'Plans for pregnancy', text: 'We consider your family goals.' },
      { title: 'Watch and wait', text: 'If fibroids do not bother you, you may not need treatment.' },
    ],
    safety: { heading: 'Do fibroids turn into cancer?', text: 'Fibroids are almost always benign. Rarely, a growth that looks like a fibroid is something else, so we watch for changes. Your clinician will explain your options and the benefits and risks of each.' },
    faq: [
      { q: 'Will fibroids go away?', a: 'They often shrink after menopause. Before that, treatment depends on your symptoms.' },
      { q: 'Do I need surgery?', a: 'Many women never do. Options include medicines, procedures that block blood flow, and surgery. We help you compare.' },
      { q: 'Can I get pregnant with fibroids?', a: 'Many women do. Some fibroids can make it harder, so we look at their size and place.' },
      { q: 'Can we talk by video?', a: 'Yes. You can share your scan results and we will plan the next steps.' },
    ],
    related: rel('periods', 'gyn', 'pain', 'fertility'),
  }),
  make({
    slug: 'infertility', name: 'Infertility', what: 'fertility',
    title: 'Infertility care in Friendswood, TX',
    summary: 'Trouble getting pregnant is stressful, and you are not alone. We start with a careful look at why, explain your choices, and support you at every step.',
    heroImg: IMG.familySunset,
    overview: {
      heading: 'What is infertility?',
      paragraphs: [
        'Infertility usually means not getting pregnant after a year of trying, or after six months if you are over 35. It can come from the woman, the man, both, or have no clear cause.',
        'Many causes can be treated. A good first step is a simple review of your cycles, health and timing, followed by only the tests that help.',
      ],
      photos: [IMG.familySunset, IMG.portraitE],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'You do not need to wait a full year if you already have a reason for concern, such as very irregular periods, endometriosis, or a past pelvic infection.',
      signsTitle: 'Common reasons to talk to us',
      signs: ['Trying for 12 months or more without pregnancy', 'Over 35 and trying for six months', 'Irregular or missing periods', 'Known endometriosis, fibroids or PCOS', 'A history of pelvic infection or surgery', 'Planning ahead and want advice'],
      helpTitle: 'How we can help',
      help: ['Infertility evaluation', 'Fertility after 35 (advanced maternal age)', 'Intrauterine insemination (IUI) & IVF counseling', 'Oocyte cryopreservation (egg freezing) counseling', 'Embryo cryopreservation (embryo freezing) counseling', 'Gestational carrier (surrogacy) counseling & resources'],
    },
    benefits: [
      { title: 'A clear starting point', text: 'We look for the most likely causes first.' },
      { title: 'Honest guidance', text: 'We explain your chances and your choices.' },
      { title: 'Support for your feelings', text: 'Counseling is available if the process feels heavy.' },
      { title: 'Care that continues', text: 'We refer you to fertility specialists when needed.' },
    ],
    safety: { heading: 'What treatments are there?', text: 'Options range from timing and lifestyle changes to medicines, insemination and IVF. Some treatments are provided by fertility specialists, and we help you reach them. Each has benefits and risks, which your clinician will explain.' },
    faq: [
      { q: 'When should we ask for help?', a: 'After a year of trying, or six months if you are over 35. Sooner if you have known concerns.' },
      { q: 'Do both partners need testing?', a: 'Often yes. A male factor is part of the cause in many couples.' },
      { q: 'Do you offer IVF?', a: 'We provide counseling and the first steps of evaluation, and refer you to fertility specialists for treatments such as IVF.' },
      { q: 'Can we begin by video?', a: 'Yes. Your first talk and follow-ups can be by video.' },
    ],
    related: rel('pcos', 'counsel', 'gyn', 'weight'),
  }),
  make({
    slug: 'annual-exams', name: 'Annual exams', what: 'well-woman',
    title: 'Annual well-woman exams in Friendswood, TX',
    summary: 'Pap tests, HPV testing and pelvic exams, with every step explained. A yearly visit is a good time to ask anything, from periods to birth control to menopause.',
    heroImg: IMG.hands,
    overview: {
      heading: 'What is an annual exam?',
      paragraphs: [
        'An annual well-woman exam is a yearly check-up for your reproductive and overall health. It can include a talk about your history, a breast and pelvic exam, and screening tests.',
        'Not everyone needs a Pap test every year. How often depends on your age and past results. We tell you what you need and why.',
      ],
      photos: [IMG.hands, IMG.examRoom],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'Every adult woman benefits from regular check-ups. It is also a good time to ask about anything you have been wondering about.',
      signsTitle: 'Good reasons to book',
      signs: ['It has been a year or more since your last visit', 'You are due for a Pap or HPV test', 'You want to change or start birth control', 'You have questions about periods, sex or menopause', 'You want to talk about your family cancer risk'],
      helpTitle: 'How we can help',
      help: ['Annual well-woman examinations', 'Cervical cancer screening (Pap & HPV co-testing)', 'Abnormal Pap & HPV follow-up', 'Sexually transmitted infection (STI) screening', 'Breast cancer risk assessment & reduction', 'Contraceptive counseling & method selection'],
    },
    benefits: [
      { title: 'Catch problems early', text: 'Screening finds changes before symptoms.' },
      { title: 'Ask anything', text: 'A private, judgment-free place to talk.' },
      { title: 'Know your schedule', text: 'We tell you which tests you need and when.' },
      { title: 'One plan for your health', text: 'We tie in vaccines, screenings and lifestyle.' },
    ],
    safety: { heading: 'What should I expect?', text: 'We start by talking. If you need an exam or a Pap test, we explain each step first and you can pause at any time. Part of your visit, such as reviewing your history and planning, can be done by video before an in-person exam.' },
    faq: [
      { q: 'How often do I need a Pap test?', a: 'It depends on your age and past results. Many women are screened every three to five years. We will tell you your schedule.' },
      { q: 'Do I need a pelvic exam every year?', a: 'Not always. We decide together based on your age, symptoms and history.' },
      { q: 'Can I come while on my period?', a: 'For a Pap test it is best to reschedule, but for a talk visit it is fine.' },
      { q: 'Can part of it be done by video?', a: 'Yes. The talk portion can be by video. Exams and Pap tests need an in-person visit.' },
    ],
    related: rel('gyn', 'genetic', 'menopause', 'primary'),
  }),
  make({
    slug: 'pregnancy-testing-and-early-pregnancy-care', name: 'Early pregnancy care', what: 'early pregnancy',
    title: 'Early pregnancy care in Friendswood, TX',
    summary: 'From confirming a pregnancy to caring for ectopic pregnancy or miscarriage, we provide kind, careful support in the first weeks, when questions are many.',
    heroImg: IMG.baby,
    overview: {
      heading: 'What is early pregnancy care?',
      paragraphs: [
        'Early pregnancy care starts with confirming the pregnancy and checking that it is growing in the right place. We review your health, your medicines and what to expect in the weeks ahead.',
        'Sadly, not every pregnancy continues. If you have bleeding, pain, or a loss, we are here to explain what is happening and to care for you, in body and in mind.',
      ],
      photos: [IMG.baby, IMG.portraitD],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'If you have a positive test, a missed period, or worrying symptoms in early pregnancy, please reach out as soon as you can.',
      signsTitle: 'Reasons to call us',
      signs: ['A positive home pregnancy test', 'Spotting or bleeding in early pregnancy', 'Pain on one side of the lower belly', 'A past miscarriage or ectopic pregnancy', 'Questions about medicines during pregnancy'],
      helpTitle: 'How we can help',
      help: ['Pregnancy confirmation', 'Ectopic pregnancy follow-up care', 'Miscarriage care, including D&C when needed', 'Grief & bereavement counseling', 'Perinatal mental health counseling'],
      note: 'Severe one-sided belly pain, heavy bleeding, dizziness or fainting in early pregnancy is an emergency. Call 911.',
    },
    benefits: [
      { title: 'Early answers', text: 'Know where the pregnancy is and how it is doing.' },
      { title: 'Safe care', text: 'Prompt help if something is not right.' },
      { title: 'Kind support', text: 'Care and counseling through loss.' },
      { title: 'A clear plan', text: 'What to do, what to avoid, and when to call.' },
    ],
    safety: { heading: 'When is it urgent?', text: 'Heavy bleeding, severe pain, dizziness, fainting, or shoulder pain in early pregnancy need urgent care. Call 911 or go to the nearest emergency room. For other concerns, call us and we will help you the same day when we can.' },
    faq: [
      { q: 'When should I come in?', a: 'Soon after a positive test, or right away if you have pain or bleeding.' },
      { q: 'What is an ectopic pregnancy?', a: 'It is a pregnancy that grows outside the uterus. It needs prompt care.' },
      { q: 'What is a D&C?', a: 'A short procedure to remove tissue from the uterus after a miscarriage when needed. We explain your options first.' },
      { q: 'Is support available after a loss?', a: 'Yes. Our counseling team offers grief and bereavement support, including after pregnancy loss.' },
    ],
    related: rel('counsel', 'gyn', 'fertility', 'psych'),
  }),
  make({
    slug: 'sexually-transmitted-infections', name: 'STIs', what: 'STI',
    title: 'STI testing and care in Friendswood, TX',
    summary: 'Private testing, treatment and prevention, with no judgment. Most STIs are easy to treat when found early, and getting tested is a sign of taking good care of yourself.',
    heroImg: IMG.lab,
    overview: {
      heading: 'What are STIs?',
      paragraphs: [
        'Sexually transmitted infections (STIs) are infections passed through sexual contact. Many have no symptoms, so testing is the only way to know.',
        'Most are treated with simple medicines. Untreated, some can lead to pelvic pain, problems getting pregnant, or spread to a partner. We keep every visit private and respectful.',
      ],
      photos: [IMG.labWoman, IMG.talking],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'Anyone who is sexually active can benefit from testing, especially with a new partner or if a partner has been diagnosed.',
      signsTitle: 'Reasons to get tested',
      signs: ['A new partner or more than one partner', 'A partner who has an STI', 'Unusual discharge, itching or burning', 'Sores, bumps or a rash', 'Pain during sex or urination', 'No symptoms, but you want to be sure'],
      helpTitle: 'How we can help',
      help: ['Sexually transmitted infection (STI) screening', 'Treatment and follow-up', 'Prevention education', 'Cervical cancer screening (Pap & HPV co-testing)', 'Contraceptive counseling & method selection'],
    },
    benefits: [
      { title: 'Private and respectful', text: 'No judgment, ever.' },
      { title: 'Clear results', text: 'We explain what they mean.' },
      { title: 'Simple treatment', text: 'Most infections clear up with medicine.' },
      { title: 'Protection going forward', text: 'Tips to lower your risk.' },
    ],
    safety: { heading: 'What about my partner?', text: 'If you test positive, your partner may need testing and treatment too, so the infection does not pass back and forth. We can talk through how to approach this, and what is safe to do while you are being treated.' },
    faq: [
      { q: 'How soon can I test?', a: 'Some tests work best a few days to a few weeks after contact. We tell you what is best for your situation.' },
      { q: 'Will my results be private?', a: 'Yes. Your health information is protected by law.' },
      { q: 'Can all STIs be cured?', a: 'Many can. Others, such as herpes and HPV, cannot be cured but can be managed.' },
      { q: 'Can I talk to someone by video first?', a: 'Yes. Questions and treatment planning can be done by video. Testing needs a visit or a lab near you.' },
    ],
    related: rel('gyn', 'exams', 'counsel', 'primary'),
  }),
  make({
    slug: 'genetic-testing', name: 'Genetic testing', what: 'genetic testing',
    title: 'Genetic testing in Friendswood, TX',
    summary: 'If breast or ovarian cancer runs in your family, genetic testing can show your own risk. We explain who should test, what results mean, and what you can do about them.',
    heroImg: IMG.labWoman,
    overview: {
      heading: 'What is genetic testing?',
      paragraphs: [
        'Genetic testing looks for changes in your genes that can raise your risk of certain cancers, such as changes in BRCA1 and BRCA2. It is usually done with a blood or saliva sample.',
        'A result does not decide your future. It gives you information, so you and your clinician can plan check-ups and prevention that fit you.',
      ],
      photos: [IMG.labWoman, IMG.lab],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'Testing is most helpful when there is a pattern of cancer in the family, or a diagnosis at a young age.',
      signsTitle: 'Reasons to consider testing',
      signs: ['Breast cancer in a close relative, especially before age 50', 'Ovarian cancer in any relative', 'Cancer in more than one close relative', 'A known family gene change', 'Male breast cancer in the family', 'Questions about your own cancer risk'],
      helpTitle: 'How we can help',
      help: ['Breast cancer risk assessment & reduction', 'Colorectal cancer risk assessment & reduction', 'Melanoma (skin cancer) risk assessment & reduction', 'Referral to genetic counselors', 'Screening plans based on your risk'],
    },
    benefits: [
      { title: 'Know your risk', text: 'Clear information about your family history.' },
      { title: 'A plan that fits you', text: 'Earlier or extra screening if you need it.' },
      { title: 'Support when deciding', text: 'We never rush you.' },
      { title: 'Help for your family', text: 'Your result can guide relatives too.' },
    ],
    safety: { heading: 'Is genetic testing right for me?', text: 'Testing is a personal choice. It can bring relief, or news that is hard to hear, so we talk first about what the results could mean. A genetic counselor can help you decide. Insurance coverage varies, and we help you check before you test.' },
    faq: [
      { q: 'Does a positive result mean I will get cancer?', a: 'No. It means your risk is higher. Many people with a result never develop cancer, and there are ways to lower the risk.' },
      { q: 'What if my result is negative?', a: 'It is reassuring, but it does not remove all risk. Regular screening still matters.' },
      { q: 'Is it covered by insurance?', a: 'Often, when you meet certain criteria. We help you check.' },
      { q: 'Can the first talk be by video?', a: 'Yes. We can review your family history and plan testing by video.' },
    ],
    related: rel('exams', 'gyn', 'counsel', 'primary'),
  }),
  make({
    slug: 'medical-weight-loss', name: 'Medical weight loss', what: 'medical weight loss',
    title: 'Medical weight loss in Friendswood, TX',
    summary: 'Physician-led weight care built around you. We look at your health, set realistic goals, and offer nutrition support, medicines when they are right for you, and bariatric surgery referrals.',
    heroImg: IMG.scale,
    overview: {
      heading: 'What is medical weight loss?',
      paragraphs: [
        'Medical weight loss means care from a doctor who looks at the whole picture: hormones, sleep, medicines, mood, food and movement. It is more than a diet.',
        'For some people, prescription medicines can help. For others, a referral for bariatric surgery may be the right step. We help you understand each path.',
      ],
      photos: [IMG.scale, IMG.workout],
    },
    candidate: {
      heading: 'Who may need care?',
      text: 'If weight is affecting your health, or you have tried on your own and are stuck, we can help you build a plan.',
      signsTitle: 'Reasons to ask for help',
      signs: ['Weight that is hard to lose despite effort', 'Weight gain with PCOS or menopause', 'Weight-related health issues such as high blood pressure or blood sugar', 'Weight changes after pregnancy', 'Questions about weight loss medicines'],
      helpTitle: 'How we can help',
      help: ['A medical evaluation and a plan made for you', 'Nutrition and lifestyle support', 'Prescription options when they are appropriate for you', 'Follow-up to review your progress', 'Menopause-associated weight gain', 'Bariatric surgery referrals'],
    },
    benefits: [
      { title: 'A plan made for you', text: 'Based on your health and goals.' },
      { title: 'Care for the causes', text: 'We look at hormones, sleep and medicines.' },
      { title: 'Safe use of medicines', text: 'Only when they are right for you.' },
      { title: 'Steady follow-up', text: 'Regular check-ins to keep you on track.' },
    ],
    safety: { heading: 'Are weight loss medicines safe?', text: 'Eligibility is decided by the clinician after an evaluation. Some medicines are not safe in pregnancy or while trying to conceive, and some may be used off-label. Results are not guaranteed and vary from person to person.' },
    faq: [
      { q: 'Do I need medicine to lose weight?', a: 'No. Many people do well with nutrition and lifestyle changes. Medicine is one option, not the only one.' },
      { q: 'Is it covered by insurance?', a: 'Coverage varies. We help you understand your options.' },
      { q: 'What about surgery?', a: 'If it may help, we refer you to a bariatric surgery team and continue to support you.' },
      { q: 'Can I do this by video?', a: 'Yes. Most visits and follow-ups work well by video.' },
    ],
    related: rel('weight', 'pcos', 'menopause', 'primary'),
  }),
];
