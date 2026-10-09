// Page content for each service area. Wording follows the approved prototype word for word.
// [Brackets] mark text the practice still has to supply.
import { IMG } from './images';

export type Item = string | { text: string; sub: string[] };
export type Group = { title: string; items: Item[]; excerpt?: string; img?: string };
export type Card = { title: string; text: string; img?: string };

export type SpecialtyPage = {
  slug: string;
  nav: string; // label in the navigation
  name: string; // kicker above the headline
  img: string;
  headline: string;
  intro: string;
  cta: string;
  badge?: string;
  groups?: Group[]; // lists of conditions and services, in cards
  cards?: { title: string; items: Card[] }; // "Our services" cards
  chips?: { title: string; items: string[] };
  pain?: boolean; // special layout for pain management
  barLeft: string;
  barRight: string;
  notice: string;
};

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const INS = 'Insurance: [List accepted plans or self-pay options]';
const CRISIS = 'In crisis? Call or text 988 (Suicide & Crisis Lifeline) or call 911.';

export const specialtyPages: SpecialtyPage[] = [
  {
    slug: 'primary-care', nav: 'Primary Care', name: 'Primary care', img: IMG.stethoscope,
    headline: 'Everyday care for adults, from prevention to chronic conditions.',
    intro: 'A primary care home for check-ups, new symptoms, and long-term conditions, coordinated with our specialty services. Visits are currently by telemedicine.',
    cta: 'Request a primary care visit',
    groups: [
      { title: 'Preventive care & wellness', excerpt: 'Yearly exams, screenings and vaccines that keep small things from becoming big ones.', img: IMG.doctor, items: ['Annual physical examinations', 'Age-appropriate cancer & health screenings', 'Immunization review & recommendations', 'Cardiovascular risk assessment', 'Tobacco cessation', 'Preoperative medical evaluations'] },
      { title: 'Chronic disease management', excerpt: 'Steady, long-term care for blood pressure, diabetes, thyroid and more.', img: IMG.elderConsult, items: ['Hypertension (high blood pressure)', 'Type 2 diabetes mellitus & prediabetes', 'Hyperlipidemia (high cholesterol)', 'Hypothyroidism & other thyroid disorders', 'Asthma', 'Gastroesophageal reflux disease (GERD)', 'Osteopenia & osteoporosis'] },
      { title: 'Acute & minor illness', excerpt: 'Fast help for colds, infections and sudden symptoms, from home.', img: IMG.lab, items: ['Upper respiratory infections (common cold)', 'Acute sinusitis', 'Pharyngitis (sore throat)', 'Influenza & COVID-19', 'Acute bronchitis', 'Uncomplicated urinary tract infections', 'Allergic rhinitis (seasonal allergies)', 'Acute gastroenteritis'] },
      { title: 'Skin conditions', excerpt: 'Rashes, eczema and common skin infections, looked at and treated.', img: IMG.portraitC, items: ['Atopic & contact dermatitis (eczema)', 'Fungal skin infections', 'Mild skin infections (cellulitis, impetigo)', 'Conjunctivitis (pink eye)', 'Insect bites & minor rashes'] },
      { title: 'Common symptoms & musculoskeletal concerns', excerpt: 'Headaches, aches, tiredness and sleep trouble, explained and treated.', img: IMG.workout, items: ['Headaches & migraine', 'Acute & chronic low back pain', 'Joint pain & osteoarthritis', 'Fatigue evaluation', 'Iron-deficiency anemia', 'Vitamin D & B12 deficiency', 'Insomnia & sleep concerns'] },
      { title: 'Behavioral health screening & care coordination', excerpt: 'Mood checks, refills, labs and referrals, all kept in one place.', img: IMG.calm, items: ['Depression & anxiety screening', 'Alcohol use screening', 'Medication reconciliation & refills', 'Lab ordering & result review', 'Specialist referrals & care coordination', 'Telehealth follow-up visits'] },
    ],
    barLeft: INS, barRight: 'Telemedicine visits',
    notice: 'Primary care services are for adults 18 and older. Our Louisiana practice currently provides care by telemedicine only, and you must be physically located in Louisiana at the time of each visit. Some conditions need an in-person exam, testing, or urgent care; if so, we will help you arrange it. In-person exams and vaccinations will be available once our Kenner office opens. Telemedicine is not for emergencies: for chest pain, trouble breathing, stroke symptoms, or other emergencies, call 911.',
  },
  {
    slug: 'gynecology', nav: 'Gynecology', name: 'Gynecology', img: IMG.hands,
    headline: 'Gynecologic care for every stage, from first visit through menopause.',
    intro: 'We explain what we find, what the evidence says, and the options that fit your goals. Many visits are also available by telehealth.',
    cta: 'Request a gynecology visit',
    groups: [
      { title: 'Sexual health & vulvar disorders', excerpt: 'Low desire, pain with sex, itching and skin conditions, treated with care.', img: IMG.reach, items: ['Hypoactive sexual desire disorder (low libido)', 'Female orgasmic disorder (anorgasmia)', 'Androgen deficiency evaluation', 'Painful intercourse (dyspareunia)', 'Vulvovaginal pruritus (itching)', 'Lichen sclerosus'] },
      { title: 'Menopause & hormonal health', excerpt: 'Clear options for hot flashes, mood, weight and hormone therapy.', img: IMG.portraitD, items: ['Perimenopause & menopause management', 'Menopausal hormone therapy (HRT)', 'Subcutaneous hormone pellet therapy', 'Menopause-associated weight gain', 'Menopause-related mood disorders', 'Male hormone therapy (testosterone replacement)'] },
      { title: 'Menstrual disorders & abnormal bleeding', excerpt: 'Answers and treatment for heavy, painful or irregular periods.', img: IMG.pills, items: ['Heavy menstrual bleeding (menorrhagia)', 'Abnormal uterine bleeding (irregular periods)', 'Medical management of the menstrual cycle', { text: 'Procedural recommendations, including:', sub: ['Hysteroscopy', 'Endometrial ablation', 'Uterine fibroid embolization', 'Hysterectomy'] }] },
      { title: 'Pelvic pain & benign gynecologic conditions', excerpt: 'Find the cause of pelvic pain, cysts, fibroids and PCOS.', img: IMG.massage, items: ['Endometriosis', 'Chronic pelvic pain', 'Ovarian cysts & adnexal masses', 'Uterine fibroids (leiomyomas)', 'Polycystic ovary syndrome (PCOS)'] },
      { title: 'Fertility & reproductive health', excerpt: 'Guidance on trying to conceive, fertility options and family planning.', img: IMG.familySunset, items: ['Infertility evaluation', 'Fertility after 35 (advanced maternal age)', 'Intrauterine insemination (IUI) & IVF counseling', 'Oocyte cryopreservation (egg freezing) counseling', 'Embryo cryopreservation (embryo freezing) counseling', 'Ectopic pregnancy follow-up care', 'Gestational carrier (surrogacy) counseling & resources'] },
      { title: 'Preventive care & screening', excerpt: 'Well-woman exams, Pap and HPV tests, and cancer risk checks.', img: IMG.examRoom, items: ['Annual well-woman examinations', 'Cervical cancer screening (Pap & HPV co-testing)', 'Abnormal Pap & HPV follow-up', 'Sexually transmitted infection (STI) screening', 'Breast cancer risk assessment & reduction', 'Colorectal cancer risk assessment & reduction', 'Melanoma (skin cancer) risk assessment & reduction'] },
      { title: 'Contraception', excerpt: 'Every birth control method explained, so you can choose what fits.', img: IMG.blisters, items: ['Contraceptive counseling & method selection', 'Combined & progestin-only oral contraceptive pills', 'Transdermal contraceptive patch', 'Contraceptive vaginal ring', 'Recommendations for intrauterine devices (IUDs) and the etonogestrel contraceptive implant (Nexplanon®)', 'Injectable contraception (DMPA)', 'Choosing the right method'] },
    ],
    barLeft: INS, barRight: 'Telehealth visits available',
    notice: 'Some services listed are elective, may not be covered by insurance, or may involve treatments used off-label. Your clinician will discuss risks, benefits, and alternatives before any treatment. Individual results vary.',
  },
  {
    slug: 'mens-health', nav: 'Men’s Health', name: 'Men’s health', img: IMG.doctorMan,
    headline: 'Men’s health, from annual exams to hormone care.',
    intro: 'Well exams, testosterone evaluation and treatment, and everyday primary care for men, with straightforward explanations and a plan that fits your goals. Visits are currently by telemedicine.',
    cta: 'Request a men’s health visit',
    groups: [
      { title: 'Men’s well exams', excerpt: 'Yearly exams and age-based screenings that catch problems early.', img: IMG.examRoom, items: ['Annual men’s well examinations', 'Age-appropriate cancer screenings, including colorectal and lung (for eligible patients)', 'Prostate cancer screening discussion (PSA testing)', 'Abdominal aortic aneurysm screening (for eligible patients)', 'Cardiovascular risk assessment', 'Immunization review & recommendations'] },
      { title: 'Testosterone & hormonal health', excerpt: 'Careful testing, treatment and monitoring for low testosterone.', img: IMG.weights, items: ['Evaluation of low testosterone (male hypogonadism)', 'Confirmatory morning testosterone testing', 'Testosterone replacement therapy (TRT)', 'Ongoing monitoring of testosterone, hematocrit & PSA', 'Fertility counseling before starting TRT', 'Thyroid & other hormonal evaluations'] },
      { title: 'Men’s primary care', excerpt: 'Blood pressure, diabetes, cholesterol and everyday illness.', img: IMG.heart, items: ['Hypertension (high blood pressure)', 'Type 2 diabetes mellitus & prediabetes', 'Hyperlipidemia (high cholesterol)', 'Gout', 'Gastroesophageal reflux disease (GERD)', 'Obstructive sleep apnea screening & referral', 'Acute illness & minor infections'] },
      { title: 'Sexual & urologic health', excerpt: 'Private, respectful care for sexual and urinary concerns.', img: IMG.sunrise, items: ['Erectile dysfunction', 'Low libido', 'Premature ejaculation', 'Benign prostatic hyperplasia (BPH) & urinary symptoms', 'STI screening', 'Urology referrals & care coordination'] },
      { title: 'Common concerns', excerpt: 'Hair loss, acne, tiredness, aches and weight, looked at together.', img: IMG.stretch, items: ['Male pattern hair loss (androgenetic alopecia)', 'Acne', 'Fatigue & low energy', 'Low back & joint pain', 'Headaches & migraine', 'Weight & metabolic health'] },
      { title: 'Mental health & lifestyle', excerpt: 'Stress, mood, sleep, nutrition and exercise support.', img: IMG.hiker, items: ['Depression & anxiety screening', 'Stress & burnout', 'Alcohol use screening', 'Tobacco cessation', 'Nutrition & exercise counseling', 'Telehealth follow-up visits'] },
    ],
    barLeft: INS, barRight: 'Telemedicine visits',
    notice: 'Men’s health services are for adults 18 and older. Testosterone is a controlled medication. It is prescribed only after an evaluation that includes confirmatory lab testing, requires ongoing monitoring, and is not appropriate for men who are trying to conceive because it can lower sperm production. Prescribing follows federal and state telemedicine rules and the Louisiana Prescription Monitoring Program. Our Louisiana practice currently provides care by telemedicine only, and you must be physically located in Louisiana at the time of each visit; some concerns need an in-person exam, and we will help you arrange it. Your clinician will discuss risks, benefits, and alternatives before any treatment. For emergencies, call 911.',
  },
  {
    slug: 'psychiatry', nav: 'Psychiatry', name: 'Psychiatry', img: IMG.meditate,
    headline: 'Mental health care that’s part of your whole care.',
    intro: 'A careful evaluation, a clear explanation of what’s going on, and a treatment plan you understand and help shape.',
    cta: 'Request a psychiatry visit',
    cards: { title: 'Our services', items: [
      { title: 'Psychiatric evaluation', img: IMG.smilePaper, text: 'A thorough first visit to understand your history, symptoms, and goals.' },
      { title: 'Medication management', img: IMG.pills, text: 'Regular follow-up to review how you’re doing and adjust your plan.' },
      { title: 'Telepsychiatry', img: IMG.laptopWoman, text: 'Video visits from home for new and returning patients.' },
      { title: 'Psychotherapy', img: IMG.talking, text: 'Talk therapy with your psychiatrist or our counseling team.' },
      { title: 'ADHD diagnostic evaluation', img: IMG.brain, text: 'Assessment of attention, focus, and organization concerns.' },
      { title: 'Pharmacogenomic testing', img: IMG.blisters, text: 'Genetic testing to help guide medication selection.' },
      { title: 'Treatment-resistant depression', img: IMG.brain2, text: 'Recommendations for transcranial magnetic stimulation (TMS) and ketamine therapy.' },
      { title: 'Perinatal & reproductive psychiatry', img: IMG.portraitD, text: 'Pregnancy, postpartum, PMDD, and menopause-related mood care.' },
      { title: 'Long-acting injectable medications', img: IMG.examRoom, text: 'An option for people who prefer fewer daily medications.' },
      { title: 'Lab & medication monitoring', img: IMG.scans, text: 'Safety checks and lab work when your medications call for it.' },
      { title: 'Diagnostic second opinions', img: IMG.womenLaptop, text: 'A fresh review of your diagnosis and current treatment.' },
      { title: 'Coordinated care', img: IMG.friends, text: 'Working with our gynecology, counseling, and pain teams.' },
    ] },
    chips: { title: 'Conditions we treat', items: ['Major depressive disorder', 'Generalized anxiety disorder', 'Panic disorder', 'Bipolar disorder', 'Post-traumatic stress disorder (PTSD)', 'Obsessive-compulsive disorder (OCD)', 'Attention-deficit/hyperactivity disorder (ADHD)', 'Perinatal mood & anxiety disorders', 'Premenstrual dysphoric disorder (PMDD)', 'Perimenopausal depression', 'Insomnia disorder', 'Eating disorders', 'Psychotic disorders', 'Substance use disorders'] },
    barLeft: CRISIS, barRight: 'Insurance: [List accepted plans]',
    notice: 'Telepsychiatry is available only to patients physically located in Louisiana at the time of the visit. Controlled medications, including ADHD stimulants, are prescribed only in accordance with federal and Louisiana law, which may require an in-person evaluation. Some treatments discussed, including ketamine for depression, may be used off-label.',
  },
  {
    slug: 'counseling', nav: 'Counseling', name: 'Counseling', img: IMG.calm,
    headline: 'A steady place to talk things through.',
    intro: 'Our counselors help you make sense of what you’re going through and build practical ways to cope.',
    cta: 'Request a counseling session',
    cards: { title: 'Our services', items: [
      { title: 'Individual psychotherapy', img: IMG.hiker, text: 'One-on-one sessions for anxiety, low mood, stress, and more.' },
      { title: 'Couples counseling', img: IMG.reach, text: 'Support with communication, conflict, and connection.' },
      { title: 'Marriage counseling', img: IMG.friends, text: 'Helping spouses strengthen communication, rebuild trust, resolve conflict, and navigate major life changes together, including premarital counseling.' },
      { title: 'Sexual health counseling', img: IMG.livingRoom, text: 'Support for low desire, orgasmic difficulties, painful intercourse, and intimacy concerns after childbirth, menopause, or illness, coordinated with our gynecology team.' },
      { title: 'Family therapy', img: IMG.familySunset, text: 'Helping families work through challenges together.' },
      { title: 'Group psychotherapy', img: IMG.womenLaptop, text: 'Shared support with others facing similar experiences.' },
      { title: 'Trauma-focused therapy', img: IMG.smilePaper, text: 'Trauma-informed care to help you process difficult experiences.' },
      { title: 'Grief & bereavement counseling', img: IMG.sunrise, text: 'Support through loss, including pregnancy loss.' },
      { title: 'Perinatal mental health counseling', img: IMG.portraitD, text: 'Counseling during pregnancy and the months after birth.' },
      { title: 'Infertility counseling', img: IMG.portraitE, text: 'Help with the stress and emotions of trying to conceive.' },
      { title: 'Preconception counseling', img: IMG.sleeping, text: 'Guidance before pregnancy on emotional readiness, mental health and medication planning, and family planning decisions, coordinated with our gynecology team.' },
      { title: 'Stress & burnout', img: IMG.lake, text: 'Practical tools for work, caregiving, and daily pressure.' },
      { title: 'Adjustment & life transitions', img: IMG.runner, text: 'Divorce, new parenthood, menopause, and other big changes.' },
      { title: 'Emotion regulation skills training', img: IMG.singingBowl, text: 'Skills for managing intense emotions and reactions.' },
      { title: 'Telehealth counseling', img: IMG.laptopWoman, text: 'Secure video sessions from home.' },
    ] },
    chips: { title: 'Approaches we use', items: ['Cognitive behavioral therapy (CBT)', 'Dialectical behavior therapy (DBT) skills', 'EMDR', 'Acceptance & commitment therapy (ACT)', 'Mindfulness-based therapy', 'Solution-focused therapy', 'Motivational interviewing', 'Trauma-informed care'] },
    barLeft: CRISIS, barRight: 'Insurance: [List accepted plans or session fees]',
    notice: 'Telehealth counseling is available only to clients physically located in Louisiana at the time of the session. Counseling is not a crisis service; if you are in immediate danger, call 911.',
  },
  {
    slug: 'pain-management', nav: 'Pain Management', name: 'Pain management', img: IMG.phone, badge: 'Telemedicine', pain: true,
    headline: 'Pain care from home, with a plan you understand.',
    intro: 'Our pain management services, including medical marijuana evaluations, are currently offered by secure video visit. We listen, review your history, and walk you through your options.',
    cta: 'Request a telemedicine visit',
    cards: { title: 'How it works', items: [
      { title: 'Request a visit', text: 'Send a request and our team will call to schedule and help you get set up.' },
      { title: 'Meet by video', text: 'Join from your phone or computer — no travel or waiting room.' },
      { title: 'Follow up', text: 'Regular check-ins to review how you’re doing and adjust your plan.' },
    ] },
    groups: [
      { title: 'Pain medicine consultations', excerpt: 'A full review of your pain and a clear written plan.', img: IMG.stethLaptop, items: ['Review of your history and symptoms', 'Review of prior treatments, records, and imaging', 'A clear, written care plan', 'Referrals for in-person care when needed'] },
      { title: 'Medication management', excerpt: 'Regular video follow-ups to keep your plan working for you.', img: IMG.blisters, items: ['Regular follow-up visits by video', 'Adjusting medications as your needs change', 'Monitoring for side effects', 'Coordination with your other clinicians'] },
      { title: 'Medical marijuana evaluations', excerpt: 'A careful evaluation by video to see whether it is right for you.', img: IMG.lake, items: ['Telemedicine evaluation, including review of your records and current medications', 'A recommendation only if you qualify and it’s clinically appropriate — an evaluation doesn’t guarantee one', 'Discussion of risks, side effects, drug interactions, and alternatives', 'Coordination with your oncology team'] },
    ],
    chips: { title: 'Common concerns we help with', items: ['Chronic low back pain', 'Cervical (neck) pain', 'Osteoarthritis & joint pain', 'Fibromyalgia', 'Peripheral neuropathy', 'Migraine & chronic headache', 'Chronic pelvic pain', 'Post-traumatic & postsurgical pain', 'Gynecologic cancer–related pain'] },
    barLeft: '', barRight: '',
    notice: 'Telemedicine visits are available only to patients physically located in Louisiana at the time of the visit and are not for emergencies. Medical marijuana recommendations are made at the clinician’s discretion for patients who meet Louisiana’s requirements. Controlled medications are prescribed only in accordance with federal and Louisiana law, which may require an in-person evaluation and a review of the Louisiana Prescription Monitoring Program.',
  },
  {
    slug: 'weight-management', nav: 'Weight Management', name: 'Weight management', img: IMG.scale,
    headline: 'Physician-led medical weight care, built around you.',
    intro: 'Physician-led medical weight care, including prescription options when appropriate.',
    cta: 'Request a weight management visit',
    cards: { title: 'What we offer', items: [
      { title: 'A medical evaluation and a plan made for you', img: IMG.scans, text: 'We start with your health history and goals, then build a plan around you.' },
      { title: 'Nutrition and lifestyle support', img: IMG.bowl, text: 'Practical guidance on food, movement, sleep and habits you can keep.' },
      { title: 'Prescription options when they are appropriate for you', img: IMG.blisters, text: 'Medicines are considered only when they are safe and right for you.' },
      { title: 'Follow-up to review your progress', img: IMG.runner, text: 'Regular check-ins to see how you are doing and adjust the plan.' },
    ] },
    barLeft: INS, barRight: 'Telehealth visits available',
    notice: 'Eligibility is decided by the clinician after an evaluation. Some medicines are not safe in pregnancy or while trying to conceive. Some may be used off-label. Results are not guaranteed and vary from person to person. [Practice to supply final wording.]',
  },
  {
    slug: 'aesthetics', nav: 'Aesthetics', name: 'Aesthetics', img: IMG.portraitA,
    headline: 'Aesthetic care that starts with a medical consultation.',
    intro: 'Intimate aesthetics, acne, pigmentation, hair loss, and medical-grade skin care, starting with a medical consultation.',
    cta: 'Request an aesthetics consultation',
    cards: { title: 'What we offer', items: [
      { title: 'Intimate aesthetics', img: IMG.livingRoom, text: 'Discreet, medically led options for intimate comfort and confidence.' },
      { title: 'Acne', img: IMG.facial2, text: 'Clear plans for breakouts and acne scars, guided by a clinician.' },
      { title: 'Pigmentation', img: IMG.facial, text: 'Care for dark spots and uneven skin tone.' },
      { title: 'Hair loss', img: IMG.portraitE, text: 'Find the cause of thinning hair and discuss treatment options.' },
      { title: 'Medical-grade skin care', img: IMG.avocadoMask, text: 'Skin care chosen for your skin, with medical guidance.' },
    ] },
    barLeft: INS, barRight: 'Medical consultation first',
    notice: 'Treatment starts with a medical consultation and depends on your health and eligibility. Results are not guaranteed and vary from person to person. [Practice to supply final wording.]',
  },
];
