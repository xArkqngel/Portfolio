import type { ExperienceInterface, ProjectInterface } from "./types";

export const stack = [
  {
    name: "React",
    color: "#00D8FF",
  },
  {
    name: "NextJS",
    color: "#FAFAFA",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    name: "Zustand",
    color: "#764ABC",
  },
  {
    name: "Tailwind",
    color: "#17BAB8",
  },
  {
    name: "NestJS",
    color: "#E0234E",
  },
  {
    name: "GraphQL",
    color: "#E10098",
  },
  {
    name: "Postgres",
    color: "#336791",
  },
  {
    name: "MongoDB",
    color: "#47A248",
  },
  {
    name: "AWS",
    color: "#FF9900",
  },
  {
    name: "JavaScript",
    color: "#F0DB4F",
  },
  {
    name: "Astro",
    color: "#FAFAFA",
  },
  {
    name: "HTML",
    color: "#EF652A",
  },
  {
    name: "CSS",
    color: "#30A9DC",
  },
  {
    name: "Bootstrap",
    color: "#7952B3",
  },
  {
    name: "MUI",
    color: "#007FFF",
  },
  {
    name: "SASS",
    color: "#CC6699",
  },
  {
    name: "Vite",
    color: "#646CFF",
  },
  {
    name: "Vitest",
    color: "#646CFF",
  },
  {
    name: "Apollo GraphQL",
    color: "#311C87",
  },
  {
    name: "Java",
    color: "#007396",
  },
  {
    name: "NodeJS",
    color: "#539E43",
  },
  {
    name: "Express",
    color: "#FAFAFA",
  },
  {
    name: "Jest",
    color: "#99425B",
  },
  {
    name: "Cypress",
    color: "#00C389",
  },
  {
    name: "MySQL",
    color: "#4479A1",
  },
  {
    name: "Supabase",
    color: "#3ECF8E",
  },
  {
    name: "Docker",
    color: "#2496ED",
  },
  {
    name: "Git",
    color: "#DE4C36",
  },
  {
    name: "Figma",
    color: "#A95FFF",
  },
];

export const TAGS = {
  NEXT: {
    name: "NextJS",
    class: "bg-black text-white",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
  },
  ASTRO: {
    name: "Astro",
    class: "bg-[#0d1117] text-white",
  },
  ZUSTAND: {
    name: "Zustand",
    class: "bg-[#f76927] text-black",
  },
  REACT: {
    name: "React",
    class: "bg-white text-black",
  },
  NESTJS: {
    name: "NestJS",
    class: "bg-black text-white",
  },
  GRAPHQL: {
    name: "GraphQL",
    class: "bg-[#6a329f] text-white",
  },
  MUI: {
    name: "MUI",
    class: "bg-white text-black",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-black text-yellow-300",
  },
  APOLLO: {
    name: "Apollo",
    class: "bg-[#311C87] text-white",
  },
};

export const projects: ProjectInterface[] = [
  {
    title: "WhatToDo",
    description:
      "Kanban-type task tracking application. It allows the creation of boards, lists and tasks, as well as the implementation of pomodoro counters and individual counters for tasks.",
    tech: [TAGS.NEXT, TAGS.ZUSTAND, TAGS.TAILWIND],
    image: "/whattodo.webp",
    web: "https://what-to-do-three.vercel.app/",
    repo: "https://github.com/xArkqngel/WhatToDo",
  },
  {
    title: "WhatTheChat",
    description:
      "Real-time chat application, with the ability to create rooms and send messages.",
    tech: [TAGS.REACT, TAGS.MUI, TAGS.NESTJS, TAGS.GRAPHQL],
    image: "/whatthechat.webp",
    web: "https://main.d2e3el9esugaq5.amplifyapp.com/chats/66cd1125ff5181c7fbe08096",
    backRepo: "https://github.com/xArkqngel/what-the-chat-backend",
    frontRepo: "https://github.com/xArkqngel/what-the-chat-ui",
  },
  {
    title: "Steam Top 100 Games - Apollo GraphQL API",
    description:
      "Apollo GraphQL API that uses as data, the top 100 games on Steam and its DLCs, scraped from the Steam Store.",
    tech: [TAGS.JAVASCRIPT, TAGS.APOLLO, TAGS.GRAPHQL],
    image: "/steamapollo.webp",
    web: "https://steam-top100-apollo-api.vercel.app/graphql",
    repo: "https://github.com/xArkqngel/steam-top100-apollo-api",
  },
  {
    title: "Steam Clone",
    description:
      "Steam Landing page clone using Astro and Tailwind CSS. Made as a personal project to learn Astro.",
    tech: [TAGS.ASTRO, TAGS.TAILWIND],
    image: "/steamclone.webp",
    web: "https://xark-steam-clone.netlify.app/",
    repo: "https://github.com/xArkqngel/SteamClone",
  },
];

export const experiences: ExperienceInterface[] = [
  {
    title: "Frontend Developer",
    description:
      "Responsible for developing and maintaining the front-end of the enterprise application using React and NextJS, with a focus on creating an efficient and user-friendly interface.",
    bullets: [
      "Developed reusable components and functionality to support a scalable application architecture.",
      "Implemented internationalization features, including dictionaries for different languages, extending the scope of the application to global markets.",
      "Developed interfaces for 3 new types of users, increasing accessibility and satisfaction by 20%.",
      "Integrated the visualization of Gantt charts through Syncfussion, streamlining project management and tracking processes.",
    ],
    company: "Sostecnible",
    logo: "/sostecnible.svg",
    date: "July 2023 - Present",
  },
  {
    title: "TI Assistant",
    description:
      "Responsible for the development and maintenance of static websites for different companies, using HTML, CSS, Javascript and Bootstrap or website builders such as Wix or GoDaddy, according to the user's needs.",
    bullets: [
      "Developed and maintained static websites for several companies, ensuring a professional and accessible online presence.",
      "Collaborated in the maintenance and assembly of networks and computer equipment in the companies' facilities, improving operational efficiency.",
      "Managed the uploading and organization of documents requested by governmental entities, ensuring regulatory compliance.",
    ],
    company: "Datacomputo",
    date: "February 2022 - August 2022",
  },
];
