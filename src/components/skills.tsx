import { Badge } from './common/badge';
import { Card, CardContent, CardHeader, CardTitle } from './common/card';

const SKILLS = ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'];

export function SkillsSection() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map(skill => (
            <Badge key={skill} variant="default">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
