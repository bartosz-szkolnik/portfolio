import Link from 'next/link';
import { PROJECTS } from '../data/projects';
import { Card, CardContent } from '@components/common/card';
import { ExternalLink } from 'lucide-react';
import { ColoredBadge } from '@components/common/colored-badge';
import { Button } from '@components/common/button';

export function ProjectsSection() {
  return (
    <>
      <h2 className="mb-4 text-xl font-bold">Featured Projects</h2>
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {PROJECTS.map(({ title, appLink, description, stack, githubLink }) => (
          <Card key={title}>
            <CardContent className="h-full pb-5 pt-6">
              <div className="flex h-full flex-col">
                <p className="text-lg font-semibold text-primary">{title}</p>
                <p className="mb-5 mt-1 text-sm text-muted-foreground">{description}</p>
                <p className="mb-2 mt-auto text-xs font-semibold text-primary">Tech stack:</p>
                <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
                  {stack.map(tool => (
                    <ColoredBadge key={tool} text={tool} />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Button asChild variant="link" size="narrow">
                    <Link
                      href={appLink}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      View Project
                      <ExternalLink className="inline-block size-3" />
                    </Link>
                  </Button>
                  <Button asChild variant="link" size="narrow">
                    <Link
                      href={githubLink}
                      target="_blank"
                      className="my-0 flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      View Code
                      <ExternalLink className="inline-block size-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
