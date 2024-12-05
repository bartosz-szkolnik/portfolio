import { ADVANCED_SKILLS, STILL_LEARNING_SKILLS } from '../data/skills';
import { Card, CardContent, CardHeader, CardTitle } from './common/card';
import { ColoredBadge } from './common/colored-badge';

export function SkillsSection() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2 font-semibold">I&apos;m proficient with:</p>
        <div className="flex flex-wrap gap-2">
          {ADVANCED_SKILLS.map(skill => (
            <ColoredBadge key={skill} text={skill} />
          ))}
        </div>
        <p className="mb-2 mt-6 font-semibold">I&apos;m still learning:</p>
        <div className="flex flex-wrap gap-2">
          {STILL_LEARNING_SKILLS.map(skill => (
            <ColoredBadge key={skill} text={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
