import { Card, CardContent, CardHeader, CardTitle } from './common/card';

export function AboutMeSection() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          I am a <strong>professional Frontend Developer</strong> and an <strong>aspiring Full-stack Developer</strong>.
          What brought me to the programming world was the ability to create things and solve problems with code. I
          specialize in building usable, modern, efficient and user friendly interfaces and solutions on both frontend
          and backend sides.
        </p>
        <br />
        <p className="mb-1 text-muted-foreground">
          Across all the projects I&apos;ve been hired to work on I&apos;ve specialized in:
        </p>
        <ul className="ml-4 list-disc space-y-1 text-justify text-muted-foreground">
          <li>building interfaces and completing the necessary tasks with modern solutions</li>
          <li>fixing the arising problems in the codebase</li>
          <li>locating the code smells (weird solutions, quick hacks, inefficient algorithms etc.)</li>
          <li>providing a modern solution to these problems (whilst still building new stuff)</li>
          <li>slowly implementing these modern solutions into codebase</li>
        </ul>
      </CardContent>
    </Card>
  );
}
