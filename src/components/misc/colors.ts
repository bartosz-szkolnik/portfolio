import { Tool } from './tools';

type Color = {
  light: {
    color: string;
    // Color of the brand/logo taken from site
    backgroundColor: string;
    // Color taken from Tailwind colors, as closely as possible
    bgColor: string;
    showBorder?: boolean;
    borderColor?: string;
  };
  dark?: {
    color: string;
    backgroundColor: string;
  };
};

export const COLORS: Record<Tool, Color> = {
  TypeScript: {
    light: {
      color: '#fff',
      backgroundColor: '#3178C6',
      bgColor: 'bg-blue-500',
    },
  },
  JavaScript: {
    light: {
      color: '#000',
      backgroundColor: '#e7a42b',
      bgColor: 'bg-yellow-300',
    },
  },
  HTML5: {
    light: {
      color: '#000',
      backgroundColor: '#cc1000',
      bgColor: 'bg-orange-500',
    },
  },
  CSS3: {
    light: {
      color: '#fff',
      backgroundColor: '#2062af',
      bgColor: 'bg-violet-700',
    },
  },
  'Next.js': {
    light: {
      color: '#fff',
      backgroundColor: '#181818',
      bgColor: 'bg-stone-950',
      showBorder: true,
      borderColor: 'border-gray-400',
    },
  },
  Supabase: {
    light: {
      color: '#000',
      backgroundColor: '#3ecf8e',
      bgColor: 'bg-green-500',
    },
  },
  TailwindCSS: {
    light: {
      color: '#000',
      backgroundColor: '#35bef8',
      bgColor: 'bg-sky-400',
    },
  },
  React: {
    light: {
      color: '#000',
      backgroundColor: '#00d8ff',
      bgColor: 'bg-cyan-400',
    },
  },
  'Angular Material': {
    light: {
      color: '#fff',
      backgroundColor: '#fb8c00',
      bgColor: 'bg-orange-400',
    },
  },
  'CSS-modules': {
    light: {
      color: '#000',
      backgroundColor: '#fff',
      showBorder: true,
      borderColor: 'border-gray-400',
      bgColor: 'bg-blue-50',
    },
  },
  'Express.js': {
    light: {
      color: '#232323',
      backgroundColor: '#fff',
      showBorder: true,
      borderColor: 'border-gray-400',
      bgColor: 'bg-zinc-100',
    },
  },
  'Node.js': {
    light: {
      color: '#fff',
      backgroundColor: '#417e38',
      bgColor: 'bg-lime-700',
    },
  },
  'Shadcn/ui': {
    light: {
      color: '#fff',
      backgroundColor: '#09090b',
      bgColor: 'bg-neutral-950',
      showBorder: true,
      borderColor: 'border-gray-400',
    },
  },
  Angular: {
    light: {
      color: '#fff',
      backgroundColor: '#E70362',
      bgColor: 'bg-gradient-to-tr from-red-600 to-violet-700',
      // showBorder: true,
      // borderColor: 'bg-slate-900',
    },
  },
  Bootstrap: {
    light: {
      color: '#fff',
      backgroundColor: '#6F10F5',
      bgColor: 'bg-violet-600',
    },
  },
  Deno: {
    light: {
      color: '#000',
      backgroundColor: '#70FFAF',
      bgColor: 'bg-green-300',
    },
  },
  Docker: {
    light: {
      color: '#fff',
      backgroundColor: '#1D63ED',
      bgColor: 'bg-blue-600',
    },
  },
  Drizzle: {
    light: {
      color: '#000',
      backgroundColor: '#D6FF6A',
      bgColor: 'bg-lime-400',
    },
  },
  Fastify: {
    light: {
      color: '#fff',
      backgroundColor: '#202020',
      bgColor: 'bg-neutral-950',
      showBorder: true,
      borderColor: 'border-gray-400',
    },
  },
  Figma: {
    light: {
      color: '#fff',
      backgroundColor: '#FF3737',
      bgColor: 'bg-neutral-800',
    },
  },
  Git: {
    light: {
      color: '#fff',
      backgroundColor: '#F44D27',
      bgColor: 'bg-orange-600',
    },
  },
  Jira: {
    light: {
      color: '#fff',
      backgroundColor: '#0C66E4',
      bgColor: 'bg-blue-700',
    },
  },
  MongoDB: {
    light: {
      color: '#000',
      backgroundColor: '#00ED64',
      bgColor: 'bg-green-500',
    },
  },
  MySQL: {
    light: {
      color: '#fff',
      backgroundColor: '#00758F',
      bgColor: 'bg-sky-700',
    },
  },
  Nx: {
    light: {
      color: '#000',
      backgroundColor: '#fff',
      bgColor: 'bg-sky-200',
      showBorder: true,
      borderColor: 'border-gray-400',
    },
  },
  PostgreSQL: {
    light: {
      color: '#fff',
      backgroundColor: '#336791',
      bgColor: 'bg-sky-900',
    },
  },
  Prisma: {
    light: {
      color: '#fff',
      backgroundColor: '#0C344B',
      bgColor: 'bg-blue-950',
    },
  },
  Redux: {
    light: {
      color: '#fff',
      backgroundColor: '#764ABC',
      bgColor: 'bg-violet-500',
    },
  },
  Remix: {
    light: {
      color: '#000',
      backgroundColor: '#E3E3E3',
      bgColor: 'bg-slate-300',
    },
  },
  RxJS: {
    light: {
      color: '#fff',
      backgroundColor: '#C2155B',
      bgColor: 'bg-pink-600',
    },
  },
  Sass: {
    light: {
      color: '#fff',
      backgroundColor: '#CF649A',
      bgColor: 'bg-pink-400',
    },
  },
  SQL: {
    light: {
      color: '#fff',
      backgroundColor: '#146AC1',
      bgColor: 'bg-orange-400',
    },
  },
  Storybook: {
    light: {
      color: '#fff',
      backgroundColor: '#FF4785',
      bgColor: 'bg-pink-500',
    },
  },
  Strapi: {
    light: {
      color: '#fff',
      backgroundColor: '#4945FF',
      bgColor: 'bg-indigo-600',
    },
  },
  Vercel: {
    light: {
      color: '#EDEDED',
      backgroundColor: '#0A0A0A',
      bgColor: 'bg-zinc-950',
      showBorder: true,
      borderColor: 'border-gray-400',
    },
  },
  'Solid.js': {
    light: {
      color: '#fff',
      backgroundColor: '#5088C4',
      bgColor: 'bg-blue-600',
    },
  },
  Vite: {
    light: {
      color: '#fff',
      backgroundColor: '#73279B',
      bgColor: 'bg-gradient-to-br from-blue-500 to-fuchsia-600',
    },
  },
};
