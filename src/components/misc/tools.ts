type Language = 'TypeScript' | 'JavaScript' | 'HTML5' | 'CSS3';

type FullstackTool = never;

type FrontendTool =
  | 'React'
  | 'Redux'
  | 'Next.js'
  | 'TailwindCSS'
  | 'CSS-modules'
  | 'Shadcn/ui'
  | 'Remix'
  | 'Storybook'
  | 'Angular'
  | 'Angular Material'
  | 'RxJS'
  | 'Sass'
  | 'Bootstrap';

type BackendTool =
  | 'Node.js'
  | 'Deno'
  | 'Express.js'
  | 'Fastify'
  | 'Drizzle'
  | 'Prisma'
  | 'SQL'
  | 'MySQL'
  | 'PostgreSQL'
  | 'MongoDB'
  | 'Supabase';

type OtherTool = 'Jira' | 'Git' | 'Vercel' | 'Docker' | 'Figma' | 'Strapi' | 'Nginx';

export type Tool = Language | FullstackTool | FrontendTool | BackendTool | OtherTool;
