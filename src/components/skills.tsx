import { Card, CardContent, CardHeader, CardTitle } from './common/card';
import { ColoredBadge } from './common/colored-badge';

const ADVANCED_SKILLS = [
  'TypeScript',
  'JavaScript',
  'Next.js',
  'React',
  'HTML5',
  'CSS3',
  'TailwindCSS',
  'Git',
  'Angular',
];
const STILL_LEARNING_SKILLS = ['NodeJS', 'ExpressJS', 'PostgreSQL', 'Drizzle', 'Docker', 'SQL'];

export function SkillsSection() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2 font-semibold">Advanced:</p>
        <div className="flex flex-wrap gap-2">
          {ADVANCED_SKILLS.map(skill => (
            <ColoredBadge key={skill} text={skill} />
          ))}
        </div>
        <p className="mb-2 mt-6 font-semibold">Still learning:</p>
        <div className="flex flex-wrap gap-2">
          {STILL_LEARNING_SKILLS.map(skill => (
            <ColoredBadge key={skill} text={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
