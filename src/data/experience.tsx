import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';
import Politechnika from '../img/politechnika.png';
import TypeScript from '../img/TypeScript.png';
import TTSW from '../img/ttsw.jpeg';
import CEZ from '../img/cez.jpeg';
import COI from '../img/coi.jpeg';
import MF from '../img/mf.jpeg';
import Miquido from '../img/miquido.jpeg';
import { Tool } from '@components/misc/tools';

export type ExperienceItem = {
  years: string;
  title: string;
  company: string;
  duration: string;
  description: ReactElement;
  stack?: Tool[];
  additionalStack?: Tool[];
  logo?: string | StaticImageData;
  link?: string;
  bodyLeasing?: ExperienceItem[];
};

export const experienceData = [
  {
    years: '2020 - Today',
    title: 'TypeScript & Web Developer',
    company: 'Myself',
    duration: '4 years',
    description: (
      <p className="text-sm">
        {`I'm a developer building software for myself and clients. All my solo coding projects are built from the ground
        up (using the technologies provided), from planning and designing all the way to solving real-life problems with
        code. I try to build my apps in frontend technologies like React and Next.js with TypeScript and TailwindCSS
        under the hood.`}
      </p>
    ),
    logo: TypeScript,
    stack: ['TypeScript', 'Next.js', 'TailwindCSS', 'Shadcn/ui', 'Drizzle', 'Fastify'],
    additionalStack: ['Node.js', 'Vite', 'PostgreSQL', 'Docker', 'Vitest', 'Testing-library'],
  },
  {
    years: '2018 - Today',
    title: 'Angular Frontend Developer',
    duration: '6 years',
    description: (
      <p className="text-sm">
        {`I began working for Transition Technologies in 2018. There I experienced what it's like to work on a project
        with many people, with different backgrounds and different roles. I've also built many projects when I was
        body-leased to other companies. I've been mostly building stuff in Angular and TypeScript and after a while I
        started to throw in more and more useful RxJS features, once I became comfortable enough with the library.`}
      </p>
    ),
    company: ' Transition Technologies Software',
    logo: TTSW,
    link: 'https://ttsw.com.pl/en/main-page/',
    stack: ['TypeScript', 'Angular', 'RxJS', 'Jira', 'Git', 'Jest', 'Testing-library'],
    additionalStack: ['Angular Material', 'Storybook', 'Bootstrap', 'Sass'],
    bodyLeasing: [
      {
        years: '2023 - 2024',
        title: 'Angular Frontend Developer',
        duration: '0.5 years',
        company: 'Miquido',
        logo: Miquido,
        link: 'https://www.miquido.com/',
        stack: ['TypeScript', 'Angular', 'Angular Material', 'RxJS', 'GraphQL'],
        additionalStack: ['Sass', 'Jira', 'Git'],
        description: (
          <>
            <p className="mt-2 text-sm">With this company I worked on:</p>
            <ul className="ml-4 mt-2 list-disc text-sm">
              <li className="mt-2 text-sm">
                <a target="_blank" href="https://youmap.com/app/" className="text-sm text-muted-foreground underline">
                  YouMap
                </a>{' '}
                - Whilst working on this project, I got to help built some nice and accessible user interfaces and also
                help my teammates integrate many useful tools into the project.
              </li>
              <li className="mt-2 text-sm">
                <a target="_blank" href="https://jazzed.com/" className="text-sm text-muted-foreground underline">
                  Jazzed
                </a>{' '}
                - When I joined into the team, this project just needed some adjustments and a couple more features to
                be finished, which I gladly did. I also helped to slightly improve the developer experience in the small
                amount of time I had.
              </li>
            </ul>
          </>
        ),
      },
      {
        years: '2023',
        title: 'Angular Frontend Developer',
        duration: '3 months',
        company: 'Ministerstwo Finansów',
        logo: MF,
        link: 'https://www.gov.pl/web/finanse',
        stack: ['TypeScript', 'Angular', 'TailwindCSS', 'RxJS'],
        additionalStack: ['Git', 'Jest', 'Testing-library'],
        description: (
          <p className="mt-2 text-sm">
            With this company I worked on{' '}
            <a
              target="_blank"
              href="https://niskiepodatki-kalkulatorhpn.mf.gov.pl/"
              className="text-sm text-muted-foreground underline"
            >
              HPN Calculator
            </a>{' '}
            - this was a quick project built to help tax payers in Poland with their taxes. The project was built from
            ground up to be accessible, fast and precise. What we mostly focused on were the complexities of how the
            taxes should be calculated and how the different types of tax reliefs apply into the equation. We also wrote
            tests to prevent any regression errors. In the end the client was very happy to receive the project so
            quickly put together.
          </p>
        ),
      },
      {
        years: '2021 - 2022',
        title: 'Angular Frontend Developer',
        duration: '1.5 years',
        company: 'Centralny Ośrodek Informatyki',
        stack: ['TypeScript', 'Angular', 'RxJS', 'Angular Material', 'Jest', 'Testing-library'],
        additionalStack: ['XState', 'Storybook', 'OpenAPI', 'Bootstrap'],
        description: (
          <p className="text-sm">
            Whilst working for this company, I was asked to help with a couple of projects. The most notable one was{' '}
            <a target="_blank" href="https://kap.gov.pl/" className="text-sm text-muted-foreground underline">
              Katalog Podmiotów Publicznych
            </a>
            . The app was designed to assist in management of public entities, which required a lot of data filtering,
            sorting and other complex operations. We&apos;ve managed to achieve this by designing an adequate
            architecture for completing such a task.
          </p>
        ),
        logo: COI,
        link: 'https://www.coi.gov.pl/',
      },
      {
        years: '2019 - 2021',
        title: 'Angular Frontend Developer',
        duration: '2 years',
        company: 'Centrum e-Zdrowia',
        logo: CEZ,
        link: 'https://www.cez.gov.pl/pl',
        stack: ['TypeScript', 'Angular', 'RxJS', 'Sass', 'Jest', 'Testing-library'],
        additionalStack: ['Bootstrap'],
        description: (
          <>
            <p className="mt-2 text-sm">With this company I worked on:</p>
            <ul className="ml-4 mt-2 list-disc text-sm">
              <li className="mt-2 text-sm">
                <a
                  target="_blank"
                  href="https://gabinet.gov.pl/zaloguj/uzytkownik"
                  className="text-sm text-muted-foreground underline"
                >
                  Gabinet.gov.pl
                </a>{' '}
                - When I joined the team, what we mostly focused on was improving developer experience, which left a lot
                to be desired. We worked on a better way to handle many complex forms in a more unified and structured
                way. Proper streamlining of most complex parts of the code improved the overall performance of the
                application. We also worked on integrating it with the Backend API and wrote tests to prevent any
                regression errors.
              </li>
              <li className="mt-2 text-sm">
                Portal.zdrowie.gov.pl (Internal project) - A CMS-like project designed to allow quick adding, removing
                and editing of articles into the site. The project was built from ground up to be accessible, fast and
                easy to understand. In the end the client was very happy to receive the project so quickly put together.
              </li>
            </ul>
          </>
        ),
      },
      {
        years: '2018 - 2019',
        title: 'Junior Frontend Developer',
        duration: '1.5 years',
        company: 'Confidential',
        logo: TypeScript,
        stack: ['TypeScript', 'Angular', 'Angular Material', 'RxJS', 'Sass'],
        additionalStack: ['Bootstrap', 'Git', 'Electron'],
        description: (
          <p className="text-sm">
            The first project I got to work on professionally. Whilst learning the ropes of collaborative work, I also
            got to experience the struggles of inheriting a somewhat badly managed project and bringing it back to life.
            What we managed to achieve is to greatly increase the performance of the application and the improved the
            developer experience, which subsiquently increased the speed in which new features got built.
          </p>
        ),
      },
    ],
  },
  {
    years: '2019 - 2020',
    title: `Master's Degree in Computer Science`,
    duration: '1.5 years',
    description: (
      <p className="text-sm">
        {`After finishing my Bachelor's Degree I decided to see what the Master's has to offer. During this course I could
        see what it's like to build software, but from a management's (planning and organizing) and architect's
        (architecture designing) standpoint.`}
      </p>
    ),
    company: 'Politechnika Koszalińska',
    logo: Politechnika,
    link: 'https://www.tu.koszalin.pl/',
  },
  {
    years: '2015 - 2019',
    title: `Bachelor's Degree in Computer Science`,
    duration: '3.5 years',
    description: (
      <p className="text-sm">
        I pursued the knowledge that a computer science degree had to offer. I learned about computer architecture,
        computer science theory, an array of programming languages, and different aspects of artificial intelligence.
      </p>
    ),
    company: 'Politechnika Koszalińska',
    logo: Politechnika,
    link: 'https://www.tu.koszalin.pl/',
  },
  // {
  //   years: '2014',
  //   title: 'First Line of JavaScript Code',
  //   duration: 'the beginning',
  //   description: (
  //     <p className="text-sm">
  //       I wrote my first line of JavaScript code in 2014 and from that point onwards this weird journey into digital
  //       craftsmanship started. Before that I dabbled in some C++ and C# and enjoyed them, but never could properly get
  //       my head around them. I always thought that I wanted to be a programmer, but never imagined myself as a web
  //       developer. And yet I started to learn JavaScript and after a while it became my job.
  //     </p>
  //   ),
  //   company: 'Myself',
  //   logo: JavaScript,
  //   stack: ['JavaScript', 'HTML5', 'CSS3', 'Git'],
  // },
] satisfies ExperienceItem[];
