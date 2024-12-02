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
      'Quite large project that focuses on aggregating manga for users and displaying notifications when new chapters arrive. (Still in development)',
  },
  {
    title: 'Hiragana Teacher',
    stack: ['TypeScript', 'Solid.js', 'TailwindCSS', 'Vite'],
    appLink: 'https://hiragana-teacher.vercel.app/',
    githubLink: 'https://github.com/bartosz-szkolnik/hiragana-teacher',
    description: 'A rather simple project built over couple of evenings to teach myself japanese Hiragana alphabet.',
  },
  {
    title: 'Central Rest Apartment',
    stack: ['TypeScript', 'Next.js', 'TailwindCSS', 'React'],
    appLink: 'https://www.central-rest-apartment.com/',
    githubLink: 'https://github.com/bartosz-szkolnik/central-rest-apartment',
    description:
      'A project displaying an apartment in Paphos in Cyprus. Built with intention of displaying contact information for users to rent it.',
  },
] satisfies Project[];
