type WeekOffDays = number[][];
const weekOffDays: WeekOffDays = [
  [], // Placeholder for 0 index
  [6], // Week 1: Saturday
  [1, 2], // Week 2: Monday, Tuesday
  [3], // Week 3: Wednesday
  [1], // Week 4: Monday
  [4], // Week 5: Thursday
  [5, 6], // Week 6: Friday, Saturday
  [1], // Week 7: Monday
  [6], // Week 8: Saturday
  [1], // Week 9: Monday
];

type NavLink = { to: string; label: string };
const navLinks: NavLink[] = [
  { to: '/calendar', label: 'calendar' },
  { to: '/controllbook', label: 'controllBook' },
  { to: '/barcodes', label: 'barcodesNav' },
  { to: '/phones', label: 'telephonesNav' },
];

type Language = { code: string; lang: string };
const languages: Language[] = [
  { code: 'GB', lang: 'en' },
  { code: 'BG', lang: 'bg' },
  { code: 'RO', lang: 'ro' },
  { code: 'DE', lang: 'de' },
  { code: 'AL', lang: 'al' },
  { code: 'GR', lang: 'gr' },
  { code: 'IT', lang: 'it' },
  { code: 'TR', lang: 'tr' },
  { code: 'RS', lang: 'ru' },
  { code: 'HU', lang: 'hu' },
];

export { weekOffDays, navLinks, languages };
