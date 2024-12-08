import { CalendarDays, ChevronsUpDown } from 'lucide-react';
import { experienceData, ExperienceItem as ExperienceItemType } from '../data/experience';
import { Card, CardContent } from './common/card';
import Image from 'next/image';
import { AnimatedCollapsibleContent, Collapsible, CollapsibleTrigger } from './common/collapsible';
import { Button } from './common/button';

export function ExperienceSection() {
  return (
    <>
      <h2 className="mb-4 text-xl font-bold">Work Experience & Education</h2>
      <Card>
        <CardContent className="pt-6">
          <ul>
            {experienceData.map(({ company, title, bodyLeasing, ...rest }) => (
              <li key={company + title} className="relative ml-4 border-b pt-8 first:pt-0 last:border-b-0 last:pb-0">
                <ExperienceItem company={company} title={title} {...rest} />
                {bodyLeasing ? <BodyLeasingJob bodyLeasing={bodyLeasing} /> : <div className="pb-8" />}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}

function BodyLeasingJob({ bodyLeasing }: { bodyLeasing: NonNullable<ExperienceItemType['bodyLeasing']> }) {
  return (
    <Collapsible className="py-4">
      <CollapsibleTrigger asChild>
        <Button variant="outline" size="sm" className="w-full px-2">
          <ChevronsUpDown className="h-4 w-4" />
          <span>Show projects that I&apos;ve been body leased to...</span>
          <span className="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
      <AnimatedCollapsibleContent className="ml-10 pt-2">
        <ul>
          {bodyLeasing.map(({ company, ...rest }) => (
            <li key={company} className="relative border-b py-4 first:pt-0 last:border-b-0 last:pb-0">
              <ExperienceItem company={company} {...rest} className="py-4" />
            </li>
          ))}
        </ul>
      </AnimatedCollapsibleContent>
    </Collapsible>
  );
}

type ExperienceItemProps = ExperienceItemType & {
  className?: string;
};

function ExperienceItem({ title, company, duration, description, logo, years, link, className }: ExperienceItemProps) {
  return (
    <div className={className}>
      <div className="absolute -left-6 -top-[2px] h-full border-l border-l-gray-400 dark:border-l-stone-700" />
      <div className="absolute -left-[1.825rem] z-10 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-700 dark:border-stone-900 dark:bg-stone-700" />

      <div className="flex items-center space-x-4">
        {logo && (
          <Image src={logo} alt={company} width={40} height={40} className="rounded-md border object-cover shadow-md" />
        )}
        <div>
          <div className="flex items-center">
            <h3 className="font-semibold">{title}</h3>
          </div>
          {link ? (
            <a target="_blank" href={link} className="underline">
              <p className="text-sm text-muted-foreground">{company}</p>
            </a>
          ) : (
            <p className="text-sm text-muted-foreground">{company}</p>
          )}
        </div>
      </div>
      <p className="mt-2 flex items-center text-xs text-muted-foreground">
        <CalendarDays className="mr-2 size-3" />
        {years} <span className="ml-2 whitespace-nowrap">({duration})</span>
      </p>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
}
