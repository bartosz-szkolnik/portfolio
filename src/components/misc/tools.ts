type Language = 'TypeScript' | 'JavaScript' | 'HTML5' | 'CSS3';

type FullstackTool = 'XState' | 'OpenAPI' | 'Electron';

type FrontendTool =
  | 'React'
  | 'Redux'
  | 'Next.js'
  | 'TailwindCSS'
  | 'CSS-modules'
  | 'Shadcn/ui'
  | 'Remix'
  | 'Solid.js'
  | 'Vite'
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
  | 'GraphQL'
  | 'Fastify'
  | 'Drizzle'
  | 'Prisma'
  | 'SQL'
  | 'MySQL'
  | 'PostgreSQL'
  | 'MongoDB'
  | 'Supabase';

type TestingTool = 'Jest' | 'Testing-library' | 'Vitest';

type OtherTool = 'Jira' | 'Git' | 'Vercel' | 'Docker' | 'Figma' | 'Strapi' | 'Nx';

export type Tool = Language | FullstackTool | FrontendTool | BackendTool | TestingTool | OtherTool;
