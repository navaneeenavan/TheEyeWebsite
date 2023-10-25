import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "Home",
    title: "Home",
  },
  {
    id: "About",
    title: "About",
  },
  {
    id: "Report Problem",
    title: "Report Problem",
  },
];
export const navLink2 = [
  {
    id: "Blog",
    title: "Blog",
  },
  {
    id: "Knowledge Base",
    title: "Knowledge Base",
  },
  {
    id:"events",
    title: "events"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "OSINT",
    company_name: "Head:Aswath Harish",
    icon: web,
    iconBg: "#383E56",
    date: "March 2020 - Present",
    points: [
      "The OSINT (Open Source INTelligence) Team, headed by Aswath Harish is responsible for contributing to already-existing open source intelligence projects to improve the world of Cybersecurity. Click the title to see tools published by our set of skilled OSINT developers on GitHub.",
    ],
  },
  {
    title: "Intel",
    company_name: "Head:Ashwant Krishna",
    icon: git,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "The Intel Team, headed by Ashwant Krishna, develops cybersecurity solutions for proprietary use within The Eye based on Python and the NMap Scripting Language for already-available tools like Maltego, NMap and other custom tools created by The Eye. Click the title to see any tools published by our set of skilled intelligence developers.",
    ],
  },
  {
    title: "Oculus UI",
    company_name: "Head: Navaneetha Krishnan K S ",
    icon: redux,
    iconBg: "#383E56",
    date: "Jan 2022 - present",
    points: [
      "Oculus UI, headed by Navaneetha Krishnan S is a secure coding project under the web development stream, simplifying the everyday club tasks within The Eye - for internal usage.",
    ],
  },
  {
    title: "Training",
    company_name: "Head:Swetha M ",
    icon: carrent,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "The Training Team, coordinated by Swetha M, consists of a few core members - who organize self assessment-based cybersecurity training programmes exclusive to all the members of The Eye.",
    ],
  },
  {
    title: "Events and Social Media",
    company_name: "Head:Dhanush Gowthaman ",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      'The Eye organizes cybersecurity-based events in order to spread awareness - like workshops, hackathons and treasure-hunts. The Events and Social Media team, headed by Dhanush Gowdhaman, are responsible for ideating and conducting events, as well as handling the Social Media handles of The Eye.'
    ],
  },
  {
    title: "Documentation",
    company_name: "Head: Adithya Rengarajan ",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      'The Documentation Team is responsible for writing and creating articles, research-work, and more relevant document-related tasks. There are 3 projects under the documentation team, headed by Aaditya Rengarajan - namely - the Case Study project where the team aims to work on case studies of security incidents worldwide, the Research Project where the team aims to perform R&D and write a research paper on something new, and the Articles Project where the team aims to write Security Guidelines, Quarterly Reports and Whitepapers for the club.'
    ],
  },
  {
    title: "Youtube",
    company_name: "Head:Rohith Sundaramurthy  ",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      'The YouTube Team, headed by Rohith Sundharamurthy, works on YouTube videos to be released on the YouTube platform under The Eye.'
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
