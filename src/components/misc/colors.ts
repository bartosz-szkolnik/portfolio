import { Tool } from './tools';

type Color = {
  light: {
    color: string;
    backgroundColor: string;
    showBorder?: boolean;
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
    },
  },
  JavaScript: {
    light: {
      color: '#000',
      backgroundColor: '#e7a42b',
    },
  },
  HTML5: {
    light: {
      color: '#fff',
      backgroundColor: '#cc1000',
    },
  },
  CSS3: {
    light: {
      color: '#fff',
      backgroundColor: '#2062af',
    },
  },
  'Next.js': {
    light: {
      color: '#fff',
      backgroundColor: '#181818',
    },
  },
  Supabase: {
    light: {
      color: '#000',
      backgroundColor: '#3ecf8e',
    },
  },
  TailwindCSS: {
    light: {
      color: '#fff',
      backgroundColor: '#35bef8',
    },
  },
  React: {
    light: {
      color: '#000',
      backgroundColor: '#00d8ff',
    },
  },
  'Angular Material': {
    light: {
      color: '#fff',
      backgroundColor: '#fb8c00',
    },
  },
  'CSS-modules': {
    light: {
      color: '#000',
      backgroundColor: '#fff',
      showBorder: true,
    },
  },
  'Express.js': {
    light: {
      color: '#232323',
      backgroundColor: '#fff',
      showBorder: true,
    },
  },
  'Node.js': {
    light: {
      color: '#fff',
      backgroundColor: '#417e38',
    },
  },
  'Shadcn/ui': {
    light: {
      color: '#fff',
      backgroundColor: '#09090b',
    },
  },
  Angular: {
    light: {
      color: '#fff',
      backgroundColor: '#E70362',
    },
  },
  Bootstrap: {
    light: {
      color: '#fff',
      backgroundColor: '#6F10F5',
    },
  },
  Deno: {
    light: {
      color: '#000',
      backgroundColor: '#70FFAF',
    },
  },
  Docker: {
    light: {
      color: '#fff',
      backgroundColor: '#1D63ED',
    },
  },
  Drizzle: {
    light: {
      color: '#000',
      backgroundColor: '#D6FF6A',
    },
  },
  Fastify: {
    light: {
      color: '#fff',
      backgroundColor: '#202020',
    },
  },
  Figma: {
    light: {
      color: '#fff',
      backgroundColor: '#FF3737',
    },
  },
  Git: {
    light: {
      color: '#fff',
      backgroundColor: '#F44D27',
    },
  },
  Jira: {
    light: {
      color: '#fff',
      backgroundColor: '#0C66E4',
    },
  },
  MongoDB: {
    light: {
      color: '#000',
      backgroundColor: '#00ED64',
    },
  },
  MySQL: {
    light: {
      color: '#fff',
      backgroundColor: '#00758F',
    },
  },
  Nx: {
    light: {
      color: '#000',
      backgroundColor: '#fff',
      showBorder: true,
    },
  },
  PostgreSQL: {
    light: {
      color: '#fff',
      backgroundColor: '#336791',
    },
  },
  Prisma: {
    light: {
      color: '#fff',
      backgroundColor: '#0C344B',
    },
  },
  Redux: {
    light: {
      color: '#fff',
      backgroundColor: '#764ABC',
    },
  },
  Remix: {
    light: {
      color: '#000',
      backgroundColor: '#E3E3E3',
    },
  },
  RxJS: {
    light: {
      color: '#fff',
      backgroundColor: '#C2155B',
    },
  },
  Sass: {
    light: {
      color: '#fff',
      backgroundColor: '#CF649A',
    },
  },
  SQL: {
    light: {
      color: '#fff',
      backgroundColor: '#146AC1',
    },
  },
  Storybook: {
    light: {
      color: '#fff',
      backgroundColor: '#FF4785',
    },
  },
  Strapi: {
    light: {
      color: '#fff',
      backgroundColor: '#4945FF',
    },
  },
  Vercel: {
    light: {
      color: '#EDEDED',
      backgroundColor: '#0A0A0A',
    },
  },
  'Solid.js': {
    light: {
      color: '#fff',
      backgroundColor: '#5088C4',
    },
  },
  Vite: {
    light: {
      color: '#fff',
      backgroundColor: '#73279B',
    },
  },
};
