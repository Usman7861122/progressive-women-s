// Page content for each service area. Wording follows the approved prototype word for word.
// [Brackets] mark text the practice still has to supply.
import { IMG } from './images';

export type Item = string | { text: string; sub: string[] };
export type Group = { title: string; items: Item[] };
export type Card = { title: string; text: string };

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
      { title: 'Preventive care & wellness', items: ['Annual physical examinations', 'Age-appropriate cancer & health screenings', 'Immunization review & recommendations', 'Cardiovascular risk assessment', 'Tobacco cessation', 'Preoperative medical evaluations'] },
      { title: 'Chronic disease management', items: ['Hypertension (high blood pressure)', 'Type 2 diabetes mellitus & prediabetes', 'Hyperlipidemia (high cholesterol)', 'Hypothyroidism & other thyroid disorders', 'Asthma', 'Gastroesophageal reflux disease (GERD)', 'Osteopenia & osteoporosis'] },
      { title: 'Acute & minor illness', items: ['Upper respiratory infections (common cold)', 'Acute sinusitis', 'Pharyngitis (sore throat)', 'Influenza & COVID-19', 'Acute bronchitis', 'Uncomplicated urinary tract infections', 'Allergic rhinitis (seasonal allergies)', 'Acute gastroenteritis'] },
      { title: 'Skin conditions', items: ['Atopic & contact dermatitis (eczema)', 'Fungal skin infections', 'Mild skin infections (cellulitis, impetigo)', 'Conjunctivitis (pink eye)', 'Insect bites & minor rashes'] },
      { title: 'Common symptoms & musculoskeletal concerns', items: ['Headaches & migraine', 'Acute & chronic low back pain', 'Joint pain & osteoarthritis', 'Fatigue evaluation', 'Iron-deficiency anemia', 'Vitamin D & B12 deficiency', 'Insomnia & sleep concerns'] },
      { title: 'Behavioral health screening & care coordination', items: ['Depression & anxiety screening', 'Alcohol use screening', 'Medication reconciliation & refills', 'Lab ordering & result review', 'Specialist referrals & care coordination', 'Telehealth follow-up visits'] },
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
      { title: 'Sexual health & vulvar disorders', items: ['Hypoactive sexual desire disorder (low libido)', 'Female orgasmic disorder (anorgasmia)', 'Androgen deficiency evaluation', 'Painful intercourse (dyspareunia)', 'Vulvovaginal pruritus (itching)', 'Lichen sclerosus'] },
      { title: 'Menopause & hormonal health', items: ['Perimenopause & menopause management', 'Menopausal hormone therapy (HRT)', 'Subcutaneous hormone pellet therapy', 'Menopause-associated weight gain', 'Menopause-related mood disorders', 'Male hormone therapy (testosterone replacement)'] },
      { title: 'Menstrual disorders & abnormal bleeding', items: ['Heavy menstrual bleeding (menorrhagia)', 'Abnormal uterine bleeding (irregular periods)', 'Medical management of the menstrual cycle', { text: 'Procedural recommendations, including:', sub: ['Hysteroscopy', 'Endometrial ablation', 'Uterine fibroid embolization', 'Hysterectomy'] }] },
      { title: 'Pelvic pain & benign gynecologic conditions', items: ['Endometriosis', 'Chronic pelvic pain', 'Ovarian cysts & adnexal masses', 'Uterine fibroids (leiomyomas)', 'Polycystic ovary syndrome (PCOS)'] },
      { title: 'Fertility & reproductive health', items: ['Infertility evaluation', 'Fertility after 35 (advanced maternal age)', 'Intrauterine insemination (IUI) & IVF counseling', 'Oocyte cryopreservation (egg freezing) counseling', 'Embryo cryopreservation (embryo freezing) counseling', 'Ectopic pregnancy follow-up care', 'Gestational carrier (surrogacy) counseling & resources'] },
      { title: 'Preventive care & screening', items: ['Annual well-woman examinations', 'Cervical cancer screening (Pap & HPV co-testing)', 'Abnormal Pap & HPV follow-up', 'Sexually transmitted infection (STI) screening', 'Breast cancer risk assessment & reduction', 'Colorectal cancer risk assessment & reduction', 'Melanoma (skin cancer) risk assessment & reduction'] },
      { title: 'Contraception', items: ['Contraceptive counseling & method selection', 'Combined & progestin-only oral contraceptive pills', 'Transdermal contraceptive patch', 'Contraceptive vaginal ring', 'Recommendations for intrauterine devices (IUDs) and the etonogestrel contraceptive implant (Nexplanon®)', 'Injectable contraception (DMPA)', 'Choosing the right method'] },
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
      { title: 'Men’s well exams', items: ['Annual men’s well examinations', 'Age-appropriate cancer screenings, including colorectal and lung (for eligible patients)', 'Prostate cancer screening discussion (PSA testing)', 'Abdominal aortic aneurysm screening (for eligible patients)', 'Cardiovascular risk assessment', 'Immunization review & recommendations'] },
      { title: 'Testosterone & hormonal health', items: ['Evaluation of low testosterone (male hypogonadism)', 'Confirmatory morning testosterone testing', 'Testosterone replacement therapy (TRT)', 'Ongoing monitoring of testosterone, hematocrit & PSA', 'Fertility counseling before starting TRT', 'Thyroid & other hormonal evaluations'] },
      { title: 'Men’s primary care', items: ['Hypertension (high blood pressure)', 'Type 2 diabetes mellitus & prediabetes', 'Hyperlipidemia (high cholesterol)', 'Gout', 'Gastroesophageal reflux disease (GERD)', 'Obstructive sleep apnea screening & referral', 'Acute illness & minor infections'] },
      { title: 'Sexual & urologic health', items: ['Erectile dysfunction', 'Low libido', 'Premature ejaculation', 'Benign prostatic hyperplasia (BPH) & urinary symptoms', 'STI screening', 'Urology referrals & care coordination'] },
      { title: 'Common concerns', items: ['Male pattern hair loss (androgenetic alopecia)', 'Acne', 'Fatigue & low energy', 'Low back & joint pain', 'Headaches & migraine', 'Weight & metabolic health'] },
      { title: 'Mental health & lifestyle', items: ['Depression & anxiety screening', 'Stress & burnout', 'Alcohol use screening', 'Tobacco cessation', 'Nutrition & exercise counseling', 'Telehealth follow-up visits'] },
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
      { title: 'Psychiatric evaluation', text: 'A thorough first visit to understand your history, symptoms, and goals.' },
      { title: 'Medication management', text: 'Regular follow-up to review how you’re doing and adjust your plan.' },
      { title: 'Telepsychiatry', text: 'Video visits from home for new and returning patients.' },
      { title: 'Psychotherapy', text: 'Talk therapy with your psychiatrist or our counseling team.' },
      { title: 'ADHD diagnostic evaluation', text: 'Assessment of attention, focus, and organization concerns.' },
      { title: 'Pharmacogenomic testing', text: 'Genetic testing to help guide medication selection.' },
      { title: 'Treatment-resistant depression', text: 'Recommendations for transcranial magnetic stimulation (TMS) and ketamine therapy.' },
      { title: 'Perinatal & reproductive psychiatry', text: 'Pregnancy, postpartum, PMDD, and menopause-related mood care.' },
      { title: 'Long-acting injectable medications', text: 'An option for people who prefer fewer daily medications.' },
      { title: 'Lab & medication monitoring', text: 'Safety checks and lab work when your medications call for it.' },
      { title: 'Diagnostic second opinions', text: 'A fresh review of your diagnosis and current treatment.' },
      { title: 'Coordinated care', text: 'Working with our gynecology, counseling, and pain teams.' },
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
      { title: 'Individual psychotherapy', text: 'One-on-one sessions for anxiety, low mood, stress, and more.' },
      { title: 'Couples counseling', text: 'Support with communication, conflict, and connection.' },
      { title: 'Marriage counseling', text: 'Helping spouses strengthen communication, rebuild trust, resolve conflict, and navigate major life changes together, including premarital counseling.' },
      { title: 'Sexual health counseling', text: 'Support for low desire, orgasmic difficulties, painful intercourse, and intimacy concerns after childbirth, menopause, or illness, coordinated with our gynecology team.' },
      { title: 'Family therapy', text: 'Helping families work through challenges together.' },
      { title: 'Group psychotherapy', text: 'Shared support with others facing similar experiences.' },
      { title: 'Trauma-focused therapy', text: 'Trauma-informed care to help you process difficult experiences.' },
      { title: 'Grief & bereavement counseling', text: 'Support through loss, including pregnancy loss.' },
      { title: 'Perinatal mental health counseling', text: 'Counseling during pregnancy and the months after birth.' },
      { title: 'Infertility counseling', text: 'Help with the stress and emotions of trying to conceive.' },
      { title: 'Preconception counseling', text: 'Guidance before pregnancy on emotional readiness, mental health and medication planning, and family planning decisions, coordinated with our gynecology team.' },
      { title: 'Stress & burnout', text: 'Practical tools for work, caregiving, and daily pressure.' },
      { title: 'Adjustment & life transitions', text: 'Divorce, new parenthood, menopause, and other big changes.' },
      { title: 'Emotion regulation skills training', text: 'Skills for managing intense emotions and reactions.' },
      { title: 'Telehealth counseling', text: 'Secure video sessions from home.' },
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
      { title: 'Pain medicine consultations', items: ['Review of your history and symptoms', 'Review of prior treatments, records, and imaging', 'A clear, written care plan', 'Referrals for in-person care when needed'] },
      { title: 'Medication management', items: ['Regular follow-up visits by video', 'Adjusting medications as your needs change', 'Monitoring for side effects', 'Coordination with your other clinicians'] },
      { title: 'Medical marijuana evaluations', items: ['Telemedicine evaluation, including review of your records and current medications', 'A recommendation only if you qualify and it’s clinically appropriate — an evaluation doesn’t guarantee one', 'Discussion of risks, side effects, drug interactions, and alternatives', 'Coordination with your oncology team'] },
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
    groups: [
      { title: 'What we offer', items: ['A medical evaluation and a plan made for you', 'Nutrition and lifestyle support', 'Prescription options when they are appropriate for you', 'Follow-up to review your progress'] },
    ],
    barLeft: INS, barRight: 'Telehealth visits available',
    notice: 'Eligibility is decided by the clinician after an evaluation. Some medicines are not safe in pregnancy or while trying to conceive. Some may be used off-label. Results are not guaranteed and vary from person to person. [Practice to supply final wording.]',
  },
  {
    slug: 'aesthetics', nav: 'Aesthetics', name: 'Aesthetics', img: IMG.portraitA,
    headline: 'Aesthetic care that starts with a medical consultation.',
    intro: 'Intimate aesthetics, acne, pigmentation, hair loss, and medical-grade skin care, starting with a medical consultation.',
    cta: 'Request an aesthetics consultation',
    groups: [
      { title: 'What we offer', items: ['Intimate aesthetics', 'Acne', 'Pigmentation', 'Hair loss', 'Medical-grade skin care'] },
    ],
    barLeft: INS, barRight: 'Medical consultation first',
    notice: 'Treatment starts with a medical consultation and depends on your health and eligibility. Results are not guaranteed and vary from person to person. [Practice to supply final wording.]',
  },
];
