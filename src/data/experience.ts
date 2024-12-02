import { StaticImageData } from 'next/image';
import Politechnika from '../img/politechnika.png';
import JavaScript from '../img/JavaScript.webp';
import TypeScript from '../img/TypeScript.png';
import TTSW from '../img/ttsw.jpeg';

type ExperienceItem = {
  years: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  logo?: string | StaticImageData;
  link?: string;
};

export const experienceData = [
  {
    years: '2020 - Today',
    title: 'TypeScript & Web Developer',
    company: 'Myself',
    duration: '4 years',
    description: `I'm a developer building software for myself and clients. All coding projects are built from the ground up (using the technologies provided), from planning and designing all the way to solving real-life problems with code. I try to build my apps in frontend technologies like React and Next.js with TypeScript and TailwindCSS under the hood.`,
    logo: TypeScript,
  },
  {
    years: '2018 - Today',
    title: 'Angular Frontend Developer',
    duration: '6 years',
    description: `I began working for Transition Technologies in 2018. There I experienced what it's like to work on a project with many people, with different backgrounds and different roles. I've also built many projects, which unfortunately I cannot show here (company policy). I've been mostly building stuff in Angular and TypeScript and after a while I started to throw in more and more useful RxJS features, once I became comfortable enough with the library.`,
    company: ' Transition Technologies Software',
    logo: TTSW,
    link: 'https://ttsw.com.pl/en/main-page/',
  },
  {
    years: '2019 - 2020',
    title: `Master's Degree in Computer Science`,
    duration: '1.5 years',
    description: `After finishing my Bachelor's Degree I decided to see that the Master's has to offer. During this course I could see what it's like to build software, but from a more management standpoint.`,
    company: 'Politechnika Koszalińska',
    logo: Politechnika,
    link: 'https://www.tu.koszalin.pl/',
  },
  {
    years: '2015 - 2019',
    title: `Bachelor's Degree in Computer Science`,
    duration: '3.5 years',
    description:
      'I pursued the knowledge that a computer science degree had to offer. I learned about computer architecture, computer science theory, an array of programming, and aspects of artificial intelligence.',
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
