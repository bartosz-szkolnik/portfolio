import Link from 'next/link';
import { GithubIcon, LinkedInIcon } from './icons';
import { MailIcon } from 'lucide-react';
import { ReactNode } from 'react';

export function Footer() {
  return (
    <footer className="container mx-auto mt-10 max-w-screen-lg">
      <div className="mb-2 flex justify-center gap-4">
        <Icon to="mailto:bartosz.szkolnik@outlook.com" toNewTab={false}>
          <MailIcon className="size-6" />
        </Icon>
        <Icon to="https://github.com/bartosz-szkolnik">
          <GithubIcon className="size-6" />
        </Icon>
        <Icon to="https://www.linkedin.com/in/bartosz-szkolnik-9566322a8/">
          <LinkedInIcon className="size-6" />
        </Icon>
      </div>
      <p className="py-2 text-center text-sm opacity-50">
        &copy; {new Date().getFullYear()} Bartosz Szkolnik Software. All rights reserved.
        <br />
        Initial design by{' '}
        <Link
          className="underline"
          rel="noopener noreferrer"
          href="https://github.com/achris-alonzo30/github-portfolio"
          target="_blank"
        >
          Christopher Alonzo
        </Link>
        . Build by Bartosz Szkolnik.
      </p>
    </footer>
  );
}

function Icon({ children, to, toNewTab = true }: { to: string; children: ReactNode; toNewTab?: boolean }) {
  return (
    <a href={to} target={toNewTab ? '_blank' : ''} className="rounded-full p-3 duration-200 hover:bg-gray-200">
      {children}
    </a>
  );
}
