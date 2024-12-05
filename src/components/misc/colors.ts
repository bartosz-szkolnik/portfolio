import { Tool } from './tools';

type Color = {
  light: {
    color: string;
    backgroundColor: string;
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
      color: '#fff',
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
      color: '#fff',
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
    },
  },
  'Express.js': {
    light: {
      color: '#232323',
      backgroundColor: '#fff',
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
      backgroundColor: '#181818',
    },
  },
};
