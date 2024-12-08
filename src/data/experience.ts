import { StaticImageData } from 'next/image';
import Politechnika from '../img/politechnika.png';
import JavaScript from '../img/JavaScript.webp';
import TypeScript from '../img/TypeScript.png';
import TTSW from '../img/ttsw.jpeg';
import CEZ from '../img/cez.jpeg';
import COI from '../img/coi.jpeg';
import MF from '../img/mf.jpeg';
import Miquido from '../img/miquido.jpeg';

export type ExperienceItem = {
  years: string;
  title: string;
  company: string;
  duration: string;
  description: string;
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
    description: `I'm a developer building software for myself and clients. All my solo coding projects are built from the ground up (using the technologies provided), from planning and designing all the way to solving real-life problems with code. I try to build my apps in frontend technologies like React and Next.js with TypeScript and TailwindCSS under the hood.`,
    logo: TypeScript,
  },
  {
    years: '2018 - Today',
    title: 'Angular Frontend Developer',
    duration: '6 years',
    description: `I began working for Transition Technologies in 2018. There I experienced what it's like to work on a project with many people, with different backgrounds and different roles. I've also built many projects when I was body-leased to other companies. I've been mostly building stuff in Angular and TypeScript and after a while I started to throw in more and more useful RxJS features, once I became comfortable enough with the library.`,
    company: ' Transition Technologies Software',
    logo: TTSW,
    link: 'https://ttsw.com.pl/en/main-page/',
    bodyLeasing: [
      {
        years: '2023 - 2024',
        title: 'Angular Frontend Developer',
        duration: '0.5 years',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        company: 'Miquido',
        logo: Miquido,
        link: 'https://www.miquido.com/',
      },
      {
        years: '2023',
        title: 'Angular Frontend Developer',
        duration: '3 months',
        company: 'Ministerstwo Finansów',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        logo: MF,
        link: 'https://www.gov.pl/web/finanse',
      },
      {
        years: '2021 - 2022',
        title: 'Angular Frontend Developer',
        duration: '1.5 years',
        company: 'Centralny Ośrodek Informatyki',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        logo: COI,
        link: 'https://www.coi.gov.pl/',
      },
      {
        years: '2019 - 2021',
        title: 'Angular Frontend Developer',
        duration: '2 years',
        company: 'Centrum e-Zdrowia',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        logo: CEZ,
        link: 'https://www.cez.gov.pl/pl',
      },
      {
        years: '2018 - 2019',
        title: 'Junior Frontend Developer',
        duration: '1.5 years',
        company: 'Secret Company',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        logo: TypeScript,
      },
    ],
  },
  {
    years: '2019 - 2020',
    title: `Master's Degree in Computer Science`,
    duration: '1.5 years',
    description: `After finishing my Bachelor's Degree I decided to see what the Master's has to offer. During this course I could see what it's like to build software, but from a management's (planning and organizing) and architect's (architecture designing) standpoint.`,
    company: 'Politechnika Koszalińska',
    logo: Politechnika,
    link: 'https://www.tu.koszalin.pl/',
  },
  {
    years: '2015 - 2019',
    title: `Bachelor's Degree in Computer Science`,
    duration: '3.5 years',
    description:
      'I pursued the knowledge that a computer science degree had to offer. I learned about computer architecture, computer science theory, an array of programming languages, and different aspects of artificial intelligence.',
    company: 'Politechnika Koszalińska',
    logo: Politechnika,
    link: 'https://www.tu.koszalin.pl/',
  },
  {
    years: '2014',
    title: 'First Line of JavaScript Code',
    duration: 'the beginning',
    description:
      'I wrote my first line of JavaScript code in 2014 and from that point onwards this weird journey into digital craftsmanship started. Before that I dabbled in some C++ and C# and enjoyed them, but never could properly get my head around them. I always thought that I wanted to be a programmer, but never imagined myself as a web developer. And yet I started to learn JavaScript and after a while it became my job.',
    company: 'Myself',
    logo: JavaScript,
  },
] satisfies ExperienceItem[];
