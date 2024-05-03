import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  LanguageIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import profilepic from '../../public/my-picture.png';
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Riwan William BOUOULI - Portfolio',
  description: "Portfolio Riwan William BOUOULI",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Riwan`,
  description: (
    <>
    <div>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Paris-based <strong className="text-stone-100">Full Stack Software Engineer
        </strong> specializing in <strong className="text-stone-100">Node.js</strong> and <strong className="text-stone-100">React</strong>.
        Experienced in building scalable web applications, passionate about problem-solving and helping clients turn ideas into reality.
      </p>

      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">Piano</strong>,
        learning new <strong className="text-stone-100">languages</strong>, or exploring{' '}
        <strong className="text-stone-100">javascript libraries</strong>.
      </p>
    </div>
    </>
  ),
  actions: [
    {
      href: '/assets/CV_2024-04-12_BOUOULI_Riwan_William.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm an IT Project Manager who felt in love with programming.
  I'm passionate about JavaScript's endless possibilities.
  From React to Node.js and other technologies like Next, Express, Vue, Three,...
  I stay ahead of the curve. Solving problems and bringing ideas to life is what drives me.
  I'm ready to make an impact with my skills and passion. `,
  aboutItems: [
    {label: 'Location', text: 'Paris, France', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'French', Icon: FlagIcon},
    {label: 'Interests', text: 'Piano, Chess, Foreign Languages', Icon: SparklesIcon},
    {label: 'Languages', text: 'French, English, Spanish, Portugese, Russian, Italian, Mandarin Chinese', Icon: LanguageIcon},
    {label: 'Employment', text: 'Free-lance', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'French',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Spanish',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'GraphQL',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Ruby / Python',
        level: 6,
      },
      {
        name: 'SQLite / MySQL / MongoDB / jQuery',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 6,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  // {
  //   title: 'Project title 6',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage6,
  // },
  // {
  //   title: 'Project title 7',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage7,
  // },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'From February to April 2024',
    location: 'Le Réacteur - Paris, France',
    title: 'React - React Native - Node.js',
    content: <p>Developing scalable web applications and mobile solutions. Expertise in
    frontend and backend technologies, ensuring high-quality code and seamless user experiences.</p>,
  },
  {
    date: 'From October to December 2022',
    location: 'Le Wagon - Paris, France',
    title: 'Ruby - Node.js - React',
    content: <p>Gained expertise in web development encompassing both backend and frontend technologies, along with database management.
      Completed projects designed to simulate real-world market demands.</p>,
  },
  {
    date: 'From 2006 to 2010',
    location: 'Conservatoire National Supérieur de Musique et de Danse de Paris - Paris, France',
    title: 'Movie Music Composition',
    content: <p>Studied classical composition, movie music, jazz, and contemporary music with a focus on piano.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Since January 2023',
    location: 'Paris - France ',
    title: 'Full-Stack Developer',
    content: (
      <p>
        Design and deployment of custom web solutions to satisfy client requirements. End-to-end
        project management, from gathering requirements to delivery, ensuring an optimal user
        experience and technical performance aligned with project demands. Provision of updates,
        technical support, modifications, and post-delivery maintenance to ensure project
        sustainability.
      </p>
    ),
  },
  {
    date: 'From March 2020 to September 2022',
    location: 'at Parisian Spirit - Paris, France',
    title: 'Art Director',
    content: (
      <p>
        Management and promotion of artists, production and prospecting of event projects, search of
        partnerships.
      </p>
    ),
  },
  {
    date: 'From November 2018 to January 2020',
    location: 'at Agoda - Bangkok, Thailand',
    title: 'IT Project Manager',
    content: (
      <p>
        Optimization of mobile application and website for hotel reservation (Design Thinking),
        Monitoring and improvement of processes, Agile team building, Development of new
        opportunities (User Tracking, SI, CRM), Improvement of costs and priorities, Respect of
        deadlines , SCRUM methodology (LESS, KPIs)
      </p>
    ),
  },
  {
    date: 'From December 2016 to August 2018',
    location: 'at Ponant Luxury Cruise - Arctic, South America, Antarctica',
    title: 'Cruise Director ',
    content: (
      <p>
        In charge of the direction and coordination of the departments.Cost and quality control,
        Entertainment, Life on board, Management (180 crew), Objectives, Reports, Customer
        satisfaction and complaints, VIP management
      </p>
    ),
  },
  {
    date: 'From August 2015 to October 2016',
    location: 'at Aegis solutions - Paris, France ',
    title: 'IT Project Manager',
    content: (
      <p>
        Resource management and project planning of software for internal use (LEAN UX),
        Coordination for project owner support needs and analysis, Planning to meet the main
        contractor for project deadlines, Cost reduction, KANBAN methodology
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Stephane Delacourt',
      text: 'Working with him was an experience. He not only guided me through the intricacies of my project but also had innovative solutions to every challenge we faced.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Mokhtar Batrassi',
      text: 'Riwan is creative and transformed my desire for a simple website into a captivating platform that beautifully showcases my artwork. His knack for understanding the essence of my art and translated it into the site .',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Alexei Stukoff',
      text: 'As a colleague, Riwan have a passion for excellence. He went above and beyond to assist his peers, generously sharing his expertise and insights. A true team player and an great developer!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I will be please to work with you or for you, let me know how can i help you.',
  items: [
    {
      type: ContactType.Email,
      text: 'riwan.b@live.fr',
      href: 'mailto:riwan.b@live.fr',
    },
    {
      type: ContactType.Location,
      text: 'Paris, France',
      href: 'https://maps.app.goo.gl/A3XaV9biQzQSVEJv9',
    },
    {
      type: ContactType.LinkedIn,
      text: '@riwan-william-b-008b9b1b7',
      href: 'https://www.linkedin.com/in/riwan-william-b-008b9b1b7/',
    },
    {
      type: ContactType.Github,
      text: 'riwibou',
      href: 'https://github.com/riwibou',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/riwibou'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/riwan-william-b-008b9b1b7/'},
];
