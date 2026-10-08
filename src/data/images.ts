// All photos are from Unsplash. Swap any ID to change a picture.
export const photo = (id: string, w = 1200, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}${h ? `&h=${h}` : ''}`;

export const IMG = {
  hero: '1544367567-0f2fcb009e0b',
  doctor: '1559839734-2b71ea197ec2',
  consult: '1666214280557-f1b5022eb634',
  stethoscope: '1505751172876-fa1923c5c528',
  surgery: '1516549655169-df83a0774514',
  phone: '1576091160399-112ba8d25d1d',
  sunset: '1470252649378-9c29740c9fa8',
  flowers: '1490750967868-88aa4486c946',
  yoga: '1544367567-0f2fcb009e0b',
  calm: '1522337360788-8b13dee7a37e',
  portraitA: '1531746020798-e6953c6e8e04',
  portraitB: '1494790108377-be9c29b29330',
  portraitC: '1438761681033-6461ffad8d80',
  pen: '1455390582262-044cdead277a',
  library: '1481627834876-b7833e8f5570',
  baby: '1555252333-9f8e92e65df9',
  meditate: '1506126613408-eca07ce68773',
  bath: '1507652313519-d4e9174996dd',
  food: '1490645935967-10de6ba17061',
  labWoman: '1527613426441-4da17471b66d',
  lab: '1532187863486-abf9dbad1b69',
  elderConsult: '1581056771107-24ca5f033842',
  family: '1476703993599-0035a21b17a9',
  hands: '1584515933487-779824d29309',
  scale: '1522844990619-4951c40f7eda',
  workout: '1518611012118-696072aa579a',
} as const;
