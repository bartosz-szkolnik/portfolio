import { CalendarDays } from 'lucide-react';
import { experienceData } from '../data/experience';
import { Card, CardContent } from './common/card';
import Image from 'next/image';

export function ExperienceSection() {
  return (
    <>
      <h2 className="mb-4 text-xl font-bold">Work Experience & Education</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="">
            {experienceData.map(({ title, company, duration, description, logo, years, link }) => (
              <li key={title} className="relative ml-4 border-b py-8 first:pt-0 last:border-b-0 last:pb-0">
                <div className="absolute -left-6 -top-[2px] h-full border-l border-l-gray-300 dark:border-l-stone-700"></div>
                <div className="absolute -left-[1.825rem] mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300 dark:border-stone-900 dark:bg-stone-700" />
                <div className="flex items-center space-x-4">
                  {logo && (
                    <Image
                      src={logo}
                      alt={company}
                      width={40}
                      height={40}
                      className="rounded-md border object-cover shadow-md"
                    />
                  )}
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold">{title}</h3>
                      <div className="ml-4 text-xs leading-none text-muted-foreground">{duration}</div>
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
                  {years}
                </p>
                <p className="mt-2 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
//
