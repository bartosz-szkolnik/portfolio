import { Tool } from './tools';

type Color = {
  light: {
    textColor: string;
    // Color of the brand/logo taken from site
    backgroundColor: string;
    // Color taken from Tailwind colors, as closely as possible
    bgColor: string;
    borderColor: string;
  };
  dark: {
    textColor: string;
    // Color of the brand/logo taken from site
    backgroundColor: string;
    // Color taken from Tailwind colors, as closely as possible
    bgColor: string;
    borderColor: string;
  };
};

export const COLORS: Record<Tool, Color> = {
  TypeScript: {
    dark: {
      textColor: 'text-blue-500 hover:text-white',
      bgColor: 'bg-background hover:bg-blue-500',
      borderColor: 'border-blue-500',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-blue-500',
      borderColor: 'border-blue-500',
      backgroundColor: '#3178C6',
    },
  },
  JavaScript: {
    dark: {
      textColor: 'text-yellow-300 hover:text-black',
      bgColor: 'bg-background hover:bg-yellow-300',
      borderColor: 'border-yellow-300',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-yellow-300',
      borderColor: 'border-transparent',
      backgroundColor: '#e7a42b',
    },
  },
  HTML5: {
    dark: {
      textColor: 'text-orange-500 hover:text-black',
      bgColor: 'bg-background hover:bg-orange-500',
      borderColor: 'border-orange-500',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-orange-500',
      borderColor: 'border-transparent',
      backgroundColor: '#cc1000',
    },
  },
  CSS3: {
    dark: {
      textColor: 'text-violet-700 hover:text-white',
      bgColor: 'bg-background hover:bg-violet-700',
      borderColor: 'border-violet-700',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-violet-700',
      borderColor: 'border-transparent',
      backgroundColor: '#2062af',
    },
  },
  'Next.js': {
    dark: {
      textColor: 'text-white hover:text-stone-950',
      bgColor: 'bg-background hover:bg-white',
      borderColor: 'border-white',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-stone-950',
      borderColor: 'border-transparent',
      backgroundColor: '#181818',
    },
  },
  Supabase: {
    dark: {
      textColor: 'text-green-500 hover:text-black',
      bgColor: 'bg-background hover:bg-green-500',
      borderColor: 'border-green-500',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-green-500',
      borderColor: 'border-transparent',
      backgroundColor: '#3ecf8e',
    },
  },
  TailwindCSS: {
    dark: {
      textColor: 'text-sky-400 hover:text-black',
      bgColor: 'bg-background hover:bg-sky-400',
      borderColor: 'border-sky-400',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-sky-400',
      borderColor: 'border-transparent',
      backgroundColor: '#35bef8',
    },
  },
  React: {
    dark: {
      textColor: 'text-cyan-400 hover:text-black',
      bgColor: 'bg-background hover:bg-cyan-400',
      borderColor: 'border-cyan-400',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-cyan-400',
      borderColor: 'border-transparent',
      backgroundColor: '#00d8ff',
    },
  },
  'Angular Material': {
    dark: {
      textColor: 'text-orange-400 hover:text-white',
      bgColor: 'bg-background hover:bg-orange-400',
      borderColor: 'border-orange-400',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-orange-400',
      borderColor: 'border-transparent',
      backgroundColor: '#fb8c00',
    },
  },
  'CSS-modules': {
    dark: {
      textColor: 'text-blue-50 hover:text-black',
      bgColor: 'bg-background hover:bg-blue-50',
      borderColor: 'border-blue-50',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      borderColor: 'border-gray-400',
      bgColor: 'bg-blue-50',
      backgroundColor: '#fff',
    },
  },
  'Express.js': {
    dark: {
      textColor: 'text-white hover:text-black',
      bgColor: 'bg-background hover:bg-zinc-100',
      borderColor: 'border-zinc-100',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      borderColor: 'border-gray-400',
      bgColor: 'bg-zinc-100',
      backgroundColor: '#fff',
    },
  },
  'Node.js': {
    dark: {
      textColor: 'text-lime-700 hover:text-white',
      bgColor: 'bg-background hover:bg-lime-700',
      borderColor: 'border-lime-700',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-lime-700',
      borderColor: 'border-transparent',
      backgroundColor: '#417e38',
    },
  },
  'Shadcn/ui': {
    dark: {
      textColor: 'text-white hover:text-stone-950',
      bgColor: 'bg-background hover:bg-white',
      borderColor: 'border-white',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-neutral-950',
      borderColor: 'border-transparent',
      backgroundColor: '#09090b',
    },
  },
  Angular: {
    dark: {
      textColor: 'text-red-600 hover:text-white',
      bgColor: 'bg-background hover:bg-gradient-to-tr from-red-600 to-violet-700',
      borderColor: 'border-red-600',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-gradient-to-tr from-red-600 to-violet-700',
      borderColor: 'border-transparent',
      backgroundColor: '#E70362',
    },
  },
  Bootstrap: {
    dark: {
      textColor: 'text-violet-600 hover:text-white',
      bgColor: 'bg-background hover:bg-violet-600',
      borderColor: 'border-violet-600',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-violet-600',
      borderColor: 'border-transparent',
      backgroundColor: '#6F10F5',
    },
  },
  Deno: {
    dark: {
      textColor: 'text-green-300 hover:text-black',
      bgColor: 'bg-background hover:bg-green-300',
      borderColor: 'border-green-300',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-green-300',
      borderColor: 'border-transparent',
      backgroundColor: '#70FFAF',
    },
  },
  Docker: {
    dark: {
      textColor: 'text-blue-600 hover:text-white',
      bgColor: 'bg-background hover:bg-blue-600',
      borderColor: 'border-blue-600',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-blue-600',
      borderColor: 'border-transparent',
      backgroundColor: '#1D63ED',
    },
  },
  Drizzle: {
    dark: {
      textColor: 'text-lime-400 hover:text-black',
      bgColor: 'bg-background hover:bg-lime-400',
      borderColor: 'border-lime-400',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-lime-400',
      borderColor: 'border-transparent',
      backgroundColor: '#D6FF6A',
    },
  },
  Fastify: {
    dark: {
      textColor: 'text-white hover:text-neutral-950 ',
      bgColor: 'bg-background hover:bg-white',
      borderColor: 'border-white',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-neutral-950',
      borderColor: 'border-transparent',
      backgroundColor: '#202020',
    },
  },
  Figma: {
    dark: {
      textColor: 'text-white hover:text-neutral-800',
      bgColor: 'bg-background hover:bg-white',
      borderColor: 'border-white',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-neutral-800',
      borderColor: 'border-transparent',
      backgroundColor: '#FF3737',
    },
  },
  Git: {
    dark: {
      textColor: 'text-orange-600 hover:text-white',
      bgColor: 'bg-background hover:bg-orange-600',
      borderColor: 'border-orange-600',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-orange-600',
      borderColor: 'border-transparent',
      backgroundColor: '#F44D27',
    },
  },
  Jira: {
    dark: {
      textColor: 'text-blue-700 hover:text-white',
      bgColor: 'bg-background hover:bg-blue-700',
      borderColor: 'border-blue-700',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-blue-700',
      borderColor: 'border-transparent',
      backgroundColor: '#0C66E4',
    },
  },
  MongoDB: {
    dark: {
      textColor: 'text-green-500 hover:text-black',
      bgColor: 'bg-background hover:bg-green-500',
      borderColor: 'border-green-500',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-green-500',
      borderColor: 'border-transparent',
      backgroundColor: '#00ED64',
    },
  },
  MySQL: {
    dark: {
      textColor: 'text-sky-700 hover:text-white',
      bgColor: 'bg-background hover:bg-sky-700',
      borderColor: 'border-sky-700',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-sky-700',
      borderColor: 'border-transparent',
      backgroundColor: '#00758F',
    },
  },
  Nx: {
    dark: {
      textColor: 'text-sky-200 hover:text-black',
      bgColor: 'bg-background hover:bg-sky-200',
      borderColor: 'border-sky-200',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-sky-200',
      borderColor: 'border-gray-400',
      backgroundColor: '#fff',
    },
  },
  PostgreSQL: {
    dark: {
      textColor: 'text-sky-900 hover:text-white',
      bgColor: 'bg-background hover:bg-sky-900',
      borderColor: 'border-sky-900',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-sky-900',
      borderColor: 'border-transparent',
      backgroundColor: '#336791',
    },
  },
  Prisma: {
    dark: {
      textColor: 'text-blue-800 hover:text-white',
      bgColor: 'bg-background hover:bg-blue-800',
      borderColor: 'border-blue-800',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-blue-950',
      borderColor: 'border-transparent',
      backgroundColor: '#0C344B',
    },
  },
  Redux: {
    dark: {
      textColor: 'text-violet-500 hover:text-white',
      bgColor: 'bg-background hover:bg-violet-500',
      borderColor: 'border-violet-500',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-violet-500',
      borderColor: 'border-transparent',
      backgroundColor: '#764ABC',
    },
  },
  Remix: {
    dark: {
      textColor: 'text-slate-300 hover:text-black',
      bgColor: 'bg-background hover:bg-slate-300',
      borderColor: 'border-slate-300',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-slate-300',
      borderColor: 'border-transparent',
      backgroundColor: '#E3E3E3',
    },
  },
  RxJS: {
    dark: {
      textColor: 'text-pink-600 hover:text-white',
      bgColor: 'bg-background hover:bg-pink-600',
      borderColor: 'border-pink-600',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-pink-600',
      borderColor: 'border-transparent',
      backgroundColor: '#C2155B',
    },
  },
  Sass: {
    dark: {
      textColor: 'text-pink-400 hover:text-white',
      bgColor: 'bg-background hover:bg-pink-400',
      borderColor: 'border-pink-400',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-pink-400',
      borderColor: 'border-transparent',
      backgroundColor: '#CF649A',
    },
  },
  SQL: {
    dark: {
      textColor: 'text-orange-400 hover:text-white',
      bgColor: 'bg-background hover:bg-orange-400',
      borderColor: 'border-orange-400',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-orange-400',
      borderColor: 'border-transparent',
      backgroundColor: '#146AC1',
    },
  },
  Storybook: {
    dark: {
      textColor: 'text-pink-500 hover:text-white',
      bgColor: 'bg-background hover:bg-pink-500',
      borderColor: 'border-pink-500',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-pink-500',
      borderColor: 'border-transparent',
      backgroundColor: '#FF4785',
    },
  },
  Strapi: {
    dark: {
      textColor: 'text-indigo-600 hover:text-white',
      bgColor: 'bg-background hover:bg-indigo-600',
      borderColor: 'border-indigo-600',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-indigo-600',
      borderColor: 'border-transparent',
      backgroundColor: '#4945FF',
    },
  },
  Vercel: {
    dark: {
      textColor: 'text-white hover:text-zinc-950',
      bgColor: 'bg-background hover:bg-zinc-100',
      borderColor: 'border-white',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-zinc-950',
      borderColor: 'border-transparent',
      backgroundColor: '#0A0A0A',
    },
  },
  'Solid.js': {
    dark: {
      textColor: 'text-blue-600 hover:text-white',
      bgColor: 'bg-background hover:bg-blue-600',
      borderColor: 'border-blue-600',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-blue-600',
      borderColor: 'border-transparent',
      backgroundColor: '#5088C4',
    },
  },
  Vite: {
    dark: {
      textColor: 'text-fuchsia-600 hover:text-white',
      bgColor: 'bg-background hover:bg-gradient-to-br from-blue-500 to-fuchsia-600',
      borderColor: 'border-fuchsia-600',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-gradient-to-br from-blue-500 to-fuchsia-600',
      borderColor: 'border-transparent',
      backgroundColor: '#73279B',
    },
  },
  GraphQL: {
    dark: {
      textColor: 'text-fuchsia-500 hover:text-white',
      bgColor: 'bg-background hover:bg-fuchsia-500',
      borderColor: 'border-fuchsia-500',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-fuchsia-500',
      borderColor: 'border-transparent',
      backgroundColor: '',
    },
  },
  Jest: {
    dark: {
      textColor: 'text-green-400 hover:text-black',
      bgColor: 'bg-background hover:bg-green-400',
      borderColor: 'border-green-400',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-green-400',
      borderColor: 'border-transparent',
      backgroundColor: '',
    },
  },
  'Testing-library': {
    dark: {
      textColor: 'text-red-500 hover:text-white',
      bgColor: 'bg-background hover:bg-red-500',
      borderColor: 'border-red-500',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-red-500',
      borderColor: 'border-transparent',
      backgroundColor: '',
    },
  },
  XState: {
    dark: {
      textColor: 'text-slate-500 hover:text-white',
      bgColor: 'bg-background hover:bg-slate-500',
      borderColor: 'border-slate-500',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-slate-500',
      borderColor: 'border-transparent',
      backgroundColor: '',
    },
  },
  OpenAPI: {
    dark: {
      textColor: 'text-lime-600 hover:text-white',
      bgColor: 'bg-background hover:bg-lime-600',
      borderColor: 'border-lime-600',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-lime-600',
      borderColor: 'border-transparent',
      backgroundColor: '',
    },
  },
  Electron: {
    dark: {
      textColor: 'text-cyan-200 hover:text-black',
      bgColor: 'bg-background hover:bg-cyan-200',
      borderColor: 'border-cyan-200',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-black',
      bgColor: 'bg-cyan-200',
      borderColor: 'border-transparent',
      backgroundColor: '',
    },
  },
  Vitest: {
    dark: {
      textColor: 'text-lime-600 hover:text-white',
      bgColor: 'bg-background hover:bg-lime-600',
      borderColor: 'border-lime-600',
      backgroundColor: '#000',
    },
    light: {
      textColor: 'text-white',
      bgColor: 'bg-lime-600',
      borderColor: 'border-transparent',
      backgroundColor: '',
    },
  },
};
