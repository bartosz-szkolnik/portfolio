import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from './common/card';
import { Button } from './common/button';
import { ReactNode } from 'react';
import { GithubIcon, LinkedInIcon } from './icons';
import { cn } from '@lib/utils';
import { geistMono } from '@ui/font';
import { MailIcon } from 'lucide-react';

type Social = {
  name: string;
  text: string;
  href: string;
  icon: ReactNode;
};

const SOCIALS = [
  {
    name: 'Github',
    text: '/bartosz-szkolnik',
    href: 'https://github.com/bartosz-szkolnik',
    icon: <GithubIcon className="size-4" />,
  },
  {
    name: 'LinkedIn',
    text: '/bartosz-szkolnik',
    href: 'https://www.linkedin.com/in/bartosz-szkolnik-9566322a8/',
    icon: <LinkedInIcon className="size-4" />,
  },
  {
    name: 'Mail',
    text: 'bartosz.szkolnik@outlook.com',
    href: '',
    icon: <MailIcon className="size-4" />,
  },
] satisfies Social[];

export function ProfileSection() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-start gap-2">
          <div className="flex w-full flex-row items-center gap-4 md:flex-col md:items-start">
            <Image
              priority
              width={150}
              height={150}
              quality={100}
              src="https://avatars.githubusercontent.com/u/20556964?v=4"
              alt="Profile Picture"
              className="size-12 h-auto rounded-full border-2 object-cover md:w-full"
            />
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-xl font-bold md:mt-4 md:text-2xl">Bartosz Szkolnik</h1>
              <p className="text-sm text-muted-foreground md:text-base">
                Software Engineer <br className="hidden md:block" /> & TypeScript Developer
              </p>
            </div>
          </div>
          <p className="mt-2 text-start text-sm text-muted-foreground">
            I am a problem solver with a passion for building user-friendly interfaces using TypeScript, Next.js and
            other tools.
          </p>
          <div className="mt-4 flex w-full flex-col gap-4">
            <Button asChild>
              <Link
                className={cn('text-sm font-bold md:text-base', geistMono.className)}
                href="mailto:bartosz.szkolnik@outlook.com"
              >
                Write to me!
              </Link>
            </Button>
            <Button asChild>
              <Link
                className={cn('text-sm font-bold md:text-base', geistMono.className)}
                target="_blank"
                href="/bartosz-szkolnik-resume.pdf"
              >
                Download My Resumé
              </Link>
            </Button>
          </div>
          <div className="mt-4 flex w-full flex-col border-t border-border pt-4">
            {SOCIALS.map(({ href, icon, name, text }) => {
              if (!href) {
                return (
                  <div key={name} className="ml-4 mt-0 flex h-9 items-center justify-start gap-2 py-1">
                    {icon}
                    <p className="text-sm text-muted-foreground transition-colors duration-100 ease-linear group-hover:text-primary">
                      {text}
                    </p>
                  </div>
                );
              }

              return (
                <Button key={name} variant={'link'} className="group mt-0 flex h-9 justify-start py-1">
                  <Link href={href} target="_blank" className="flex cursor-pointer items-center gap-2">
                    {icon}
                    <p className="text-sm text-muted-foreground transition-colors duration-100 ease-linear group-hover:text-primary">
                      {text}
                    </p>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
