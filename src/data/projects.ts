type Project = {
  title: string;
  stack: string[];
  appLink: string;
  githubLink: string;
  description: string;
};

export const PROJECTS = [
  {
    title: 'Manga Aggregator',
    stack: ['TypeScript', 'Next.js', 'Supabase', 'TailwindCSS', 'Shadcn/ui', 'React'],
    appLink: 'https://manga-aggregator.vercel.app/',
    githubLink: 'https://github.com/bartosz-szkolnik/manga-aggregator',
    description:
      'A project for aggregating manga and displaying notifications when new chapters arrive. (Still in development)',
  },
  {
    title: 'Hiragana Teacher',
    stack: ['TypeScript', 'Solid.js', 'TailwindCSS', 'Vite'],
    appLink: 'https://hiragana-teacher.vercel.app/',
    githubLink: 'https://github.com/bartosz-szkolnik/hiragana-teacher',
    description: 'A project built to help people memorize japanese Hiragana alphabet in a unique way.',
  },
  {
    title: 'Central Rest Apartment',
    stack: ['TypeScript', 'Next.js', 'TailwindCSS', 'React'],
    appLink: 'https://www.central-rest-apartment.com/',
    githubLink: 'https://github.com/bartosz-szkolnik/central-rest-apartment',
    description: 'A project displaying an apartment in Paphos in Cyprus. Built as an advertisement.',
  },
] satisfies Project[];
