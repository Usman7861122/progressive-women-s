// Our providers. Credentials are as supplied by the practice.
export type Provider = {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  credentials: { title: string; lines: string[] }[];
};

export const team: Provider[] = [
  {
    name: 'Asia Mohsin, MD',
    role: 'Physician',
    initials: 'AM',
    photo: '/images/about/asia-mohsin.jpg',
    credentials: [
      { title: 'Medical school', lines: ['Rawalpindi Medical College, Rawalpindi, Pakistan | 2001'] },
      { title: 'Residency', lines: ['SUNY, Buffalo, NY | 2009'] },
      { title: 'Affiliated hospitals', lines: ['Houston Methodist Clear Lake Hospital', 'Memorial Hermann Southeast Hospital'] },
    ],
  },
  {
    name: 'Muhammad Asif Yasin, MD',
    role: 'Psychiatrist',
    initials: 'MY',
    credentials: [
      { title: 'Medical school', lines: ['Dow Medical University | 1992'] },
      { title: 'Residency', lines: ['Psychiatry residency, University of South Alabama | 2009'] },
      { title: 'Fellowship', lines: ['Child and Adolescent Psychiatry, Louisiana State University (LSU) | 2011'] },
    ],
  },
  {
    name: 'Hala Saadeh, MSN, APRN, FNP-C',
    role: 'Family Nurse Practitioner',
    initials: 'HS',
    credentials: [
      { title: 'Graduate school', lines: ['Walden University: Master of Science in Nursing, Family Nurse Practitioner'] },
      { title: 'Undergraduate school', lines: ['University of St. Thomas: Bachelor of Science in Nursing'] },
      { title: 'Certifications', lines: ['Board-Certified Family Nurse Practitioner (FNP-C)', 'Women’s Health and Obesity Management Certified', 'American Academy of Facial Aesthetics Certified'] },
    ],
  },
];
