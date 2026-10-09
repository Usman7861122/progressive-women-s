import { IMG } from './images';

export const services = [
  { slug: 'pelvic-pain', name: 'Pelvic pain', text: 'Find the cause of ongoing pain and build a plan to ease it.', img: IMG.calm },
  { slug: 'ovarian-cysts', name: 'Ovarian cysts', text: 'Careful evaluation of cysts, including ruling out cancer when needed.', img: IMG.stethoscope },
  { slug: 'lichen-sclerosus', name: 'Lichen sclerosus', text: 'Diagnosis and treatment for this chronic skin condition.', img: IMG.flowers },
  { slug: 'contraception', name: 'Contraception', text: 'Honest counseling and prescriptions that fit your life.', img: IMG.portraitA },
  { slug: 'std-testing', name: 'STD testing', text: 'Private testing, treatment and prevention education.', img: IMG.consult },
  { slug: 'hysteroscopy', name: 'Hysteroscopy', text: 'A look inside the uterus to find and treat the cause of bleeding.', img: IMG.surgery },
  { slug: 'menopause', name: 'Menopause', text: 'Relief from hot flashes, poor sleep and vaginal dryness.', img: IMG.sunset },
  { slug: 'irregular-bleeding', name: 'Irregular bleeding', text: 'Answers for heavy, frequent or unpredictable periods.', img: IMG.yoga },
  { slug: 'telemedicine', name: 'Telemedicine', text: 'Virtual visits with Dr. Mohsin from the comfort of home.', img: IMG.phone },
];

export const conditions = [
  { slug: 'menopause', name: 'Menopause', text: 'Care for hot flashes, insomnia, vaginal dryness and changes in sexual health, with a plan made for you.', img: IMG.meditate },
  { slug: 'heavy-periods-menorrhagia', short: 'Heavy periods', name: 'Heavy periods (menorrhagia)', text: 'We look for causes such as fibroids, polyps or endometrial changes. Options include the Mirena IUD, ablation, hormones and, when needed, surgery.', img: IMG.bath },
  { slug: 'postmenopausal-bleeding', name: 'Postmenopausal bleeding', text: 'Any bleeding after menopause deserves a check. A biopsy is usually needed to find the cause.', img: IMG.sunset },
  { slug: 'ovarian-cysts', name: 'Ovarian cysts', text: 'Most cysts are harmless. Large or complex cysts are checked carefully to rule out ovarian cancer.', img: IMG.stethoscope },
  { slug: 'polycystic-ovarian-syndrome-pcos', short: 'PCOS', name: 'Polycystic ovarian syndrome (PCOS)', text: 'Diagnosis and long-term management of irregular cycles, hormone imbalance and related symptoms.', img: IMG.food },
  { slug: 'irregular-periods', short: 'Irregular periods', name: 'Irregular periods', text: 'We work out why your cycle changed and treat the cause, not only the symptom.', img: IMG.workout },
  { slug: 'uterine-fibroids', name: 'Uterine fibroids', text: 'Clear options for fibroids that cause heavy bleeding, pressure or pain.', img: IMG.elderConsult },
  { slug: 'infertility', name: 'Infertility', text: 'Evaluation and guidance if you have trouble getting pregnant.', img: IMG.family },
  { slug: 'annual-exams', name: 'Annual exams', text: 'Pap smears, HPV testing and pelvic exams, with every step explained.', img: IMG.hands },
  { slug: 'pregnancy-testing-and-early-pregnancy-care', short: 'Early pregnancy', name: 'Pregnancy testing and early pregnancy care', text: 'Confirmation, and care for ectopic pregnancy or miscarriage, including D&C when needed.', img: IMG.baby },
  { slug: 'sexually-transmitted-infections', short: 'STIs', name: 'Sexually transmitted infections', text: 'Diagnosis, treatment and prevention education, with no judgment.', img: IMG.lab },
  { slug: 'genetic-testing', name: 'Genetic testing', text: 'BRCA testing and referrals to genetic counselors if breast or ovarian cancer runs in your family.', img: IMG.labWoman },
  { slug: 'medical-weight-loss', name: 'Medical weight loss', text: 'Medical support for weight loss, plus referrals for bariatric surgery.', img: IMG.scale },
];

export const steps = [
  { title: 'Book your visit', text: 'Use the online scheduler, call the office, or choose a virtual visit. Most patients are booked within minutes.', img: IMG.phone },
  { title: 'Share your story', text: 'Tell us your history and what is worrying you. There is no rush, and no question is too small.', img: IMG.portraitC },
  { title: 'Your exam, explained', text: 'Dr. Mohsin explains each step before it happens, so you always know what comes next.', img: IMG.consult },
  { title: 'Your plan', text: 'You leave with clear answers and a follow-up plan you understand.', img: IMG.pen },
];

export const topics = [
  'Heavy menstrual cycle', 'Contraceptive counseling', 'Genetic testing', 'Infertility',
  'Irregular menstruation', 'Medical weight loss', 'Menopause care', 'Menorrhagia',
  'Ovarian cysts', 'Polycystic ovarian syndrome', 'Post-menopausal bleeding', 'Pregnancy testing',
  'Routine annual exams', 'Sexually transmitted infections', 'Uterine fibroids', 'Well woman exam',
];

export const affiliations = [
  { name: 'American College of Obstetricians and Gynecologists', slug: 'acog' },
  { name: 'American Board of Obstetrics and Gynecology', slug: 'abog' },
  { name: 'American Society for Reproductive Medicine', slug: 'asrm' },
  { name: 'UTMB Health Physician Assistant Studies', slug: 'utmb' },
  { name: 'BioTE Certified Practitioner', slug: 'biote' },
  { name: 'Vitals Compassionate Doctor Award', slug: 'vitals-compassionate' },
  { name: "Vitals Patient's Choice Award", slug: 'vitals-patients-choice' },
  { name: 'Vitals On-Time Doctor Award', slug: 'vitals-on-time' },
];

export const insurances = [
  { name: 'Aetna', slug: 'aetna' },
  { name: 'Blue Cross Blue Shield of Texas', slug: 'bcbstx' },
  { name: 'Bright Health', slug: 'bright-health' },
  { name: 'CareCredit', slug: 'carecredit' },
  { name: 'Cigna', slug: 'cigna' },
  { name: 'Coventry', slug: 'coventry' },
  { name: 'Humana', slug: 'humana' },
  { name: 'Medicare', slug: 'medicare' },
  { name: 'Memorial Hermann', slug: 'memorial-hermann' },
  { name: 'Multiplan', slug: 'multiplan' },
  { name: 'UnitedHealthcare', slug: 'unitedhealthcare' },
  { name: 'Self-pay', slug: 'self-pay' },
];

// Featured on the homepage. Full list lives on /education.
export const featuredTopics = [
  { slug: 'menopause-care', title: 'Menopause care', text: 'What changes, what helps, and when to ask for support.', img: IMG.sunset },
  { slug: 'pcos', title: 'PCOS', text: 'Understanding irregular cycles and hormone balance.', img: IMG.calm },
  { slug: 'heavy-menstrual-cycle', title: 'Heavy periods', text: 'Why it happens and the options that can help.', img: IMG.flowers },
  { slug: 'infertility', title: 'Infertility', text: 'Where to start when pregnancy is taking longer.', img: IMG.baby },
];

export const reviews = [
  { quote: 'Dr. Mohsin is what doctors should aspire to be.', who: 'Verified patient' },
  { quote: 'Her utmost concern is your comfort.', who: 'Lisa D.' },
  { quote: 'From the first day I met Dr. Mohsin I knew she was the best person to take care of me.', who: 'Brandi K.' },
  { quote: 'Doctor Asia is the best gynecologist I have ever had. 100% recommend.', who: 'Melanie B.' },
  { quote: 'She explains each procedure and makes you feel you are in good hands.', who: 'Donna R.' },
  { quote: 'I highly recommend her to everyone and to my family.', who: 'Ida M.' },
];

export const posts = [
  {
    title: '7 signs your low libido may benefit from hormone therapy',
    text: 'A low sex drive can be linked to hormone changes. Learn what to watch for and how hormone therapy may help.',
    img: IMG.portraitB, href: '#',
  },
  {
    title: 'Why your OB/GYN is the safest choice for pubic laser hair removal',
    text: 'Why treatment from a gynecologist can be safer than a med-spa visit.',
    img: IMG.portraitC, href: '#',
  },
  {
    title: 'Vaginal tightening: nonsurgical options for improved confidence',
    text: 'A look at gentler options and how they compare with surgery.',
    img: IMG.flowers, href: '#',
  },
];

// The eight areas of care. "gynecology" has its own page with services and conditions; the rest use the specialty template.
export const specialties = [
  { slug: 'primary-care', name: 'Primary care', group: 'Medical care', text: 'Check-ups, preventive screening, chronic conditions, and common illnesses for adults.', img: IMG.stethoscope,
    intro: 'A steady, familiar clinician for your everyday health, with time to listen and explain.',
    points: ['Annual check-ups and preventive screening', 'Care for chronic conditions such as blood pressure and diabetes', 'Visits for common illnesses', 'Referrals and coordination with our other services when you need them'] },
  { slug: 'gynecology', name: 'Gynecology', group: 'Medical care', text: 'Well-woman care, menopause management, and evaluation of gynecologic conditions.', img: IMG.hands, href: '/gynecology', intro: '', points: [] },
  { slug: 'mens-health', name: 'Men’s health', group: 'Medical care', text: 'Men’s well exams, testosterone evaluation and treatment, and primary care for men.', img: IMG.doctorMan,
    intro: 'Care built around men’s health, from routine exams to hormone questions.',
    points: ['Men’s well exams and preventive screening', 'Evaluation of symptoms that may relate to low testosterone', 'Treatment when it is medically appropriate, with follow-up', 'Primary care for men'] },
  { slug: 'psychiatry', name: 'Psychiatry', group: 'Mind and body', text: 'Psychiatric evaluation and medication management.', img: IMG.meditate,
    intro: 'A calm, private place to talk about your mental health and to build a plan that fits you.',
    points: ['Psychiatric evaluation', 'Medication management with regular follow-up', 'Coordination with your counselor and your primary care clinician'],
    notice: 'If you are in crisis or thinking about harming yourself, call or text 988 right away.' },
  { slug: 'counseling', name: 'Counseling', group: 'Mind and body', text: 'Psychotherapy for stress, adjustment, and mood and anxiety concerns.', img: IMG.calm,
    intro: 'Talk therapy for the pressures of everyday life, with a clinician who takes the time to listen.',
    points: ['Psychotherapy for stress and life changes', 'Support for mood and anxiety concerns', 'Care that works alongside psychiatry and primary care when needed'],
    notice: 'Counseling is not for emergencies. If you are in crisis, call or text 988.' },
  { slug: 'pain-management', name: 'Pain management', group: 'Medical care', text: 'Telemedicine consultations, medication management, and medical marijuana evaluations.', img: IMG.phone,
    intro: 'Pain care by video visit, from the comfort of home.',
    points: ['Telemedicine consultations', 'Medication management', 'Medical marijuana evaluations'],
    notice: 'Pain management is offered by telemedicine only for now. Whether a medication or a medical marijuana recommendation is right for you is decided by the clinician after an evaluation, and controlled medications are prescribed only when medically appropriate. [Practice to supply final eligibility and legal wording before launch.]' },
  { slug: 'weight-management', name: 'Weight management', group: 'Medical care', text: 'Physician-led medical weight care, including prescription options when appropriate.', img: IMG.scale,
    intro: 'Medical weight care led by a physician, built around your health and your goals.',
    points: ['A medical evaluation and a plan made for you', 'Nutrition and lifestyle support', 'Prescription options when they are appropriate for you'],
    notice: 'Eligibility is decided by the clinician after an evaluation. Some medicines are not safe in pregnancy or while trying to conceive. Some may be used off-label. Results are not guaranteed and vary from person to person.' },
  { slug: 'aesthetics', name: 'Aesthetics', group: 'Mind and body', text: 'Intimate aesthetics, acne, pigmentation, hair loss, and medical-grade skin care, starting with a medical consultation.', img: IMG.portraitA,
    intro: 'Aesthetic care that starts with a medical consultation, so every plan is safe and fits you.',
    points: ['Intimate aesthetics', 'Acne and pigmentation', 'Hair loss', 'Medical-grade skin care'],
    notice: 'Treatment starts with a medical consultation and depends on your health and eligibility. Results are not guaranteed and vary from person to person.' },
] as { slug: string; name: string; group: string; text: string; img: string; href?: string; intro: string; points: string[]; notice?: string }[];
