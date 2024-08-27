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
  MUI : {
    name: "MUI",
    class: "bg-white text-black",
  },
};

export const projects : ProjectInterface[] = [
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
    image: "/whattodo.webp",
    web: "https://main.d2e3el9esugaq5.amplifyapp.com/chats/66cd1125ff5181c7fbe08096",
    backRepo: "https://github.com/xArkqngel/what-the-chat-backend",
    frontRepo: "https://github.com/xArkqngel/what-the-chat-ui",
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

export const experiences : ExperienceInterface[] = [
  {
    title: "Desarrollador Frontend",
    description: "Responsable de desarrollar y mantener el front-end de la aplicación empresarial utilizando React y NextJS, con un enfoque en la creación de una interfaz eficiente y fácil de usar.",
    bullets: [
      "Desarrollé componentes reutilizables y funcionalidades para soportar una arquitectura de aplicación escalable.",
      "Implementé funciones de internacionalización, incluidos diccionarios para distintos idiomas, ampliando el alcance de la aplicación a los mercados globales.",
      "Desarrollé interfaces para 3 nuevos tipos de usuarios, aumentando la accesibilidad y satisfacción en un 20%.",
      "Integré la visualización de diagramas de Gantt mediante Syncfussion, agilizando los procesos de gestión y seguimiento deproyectos.",
    ],
    company: "Sostecnible",
    logo: "/sostecnible.svg",
    date: "Julio 2023 - Enero 2024",
  },
  {
    title: "Asistente de tecnología",
    description:
      "Responsable del desarrollo y mantenimiento de sitios web estáticos para distintas empresas, utilizando HTML, CSS, Javascript y Bootstrap o constructores de sitios web como Wix o GoDaddy, según las necesidades del usuario.",
    bullets: [
      "Desarrollé y mantuve sitios web estáticos para varias empresas, asegurando una presencia en línea profesional y accesible",
      "Colaboré en el mantenimiento y montaje de redes y equipos de computo en las instalaciones de las empresas, mejorando la eficiencia operativa.",
      "Gestioné la carga y organización de documentos solicitados por entidades gubernamentales, garantizando el cumplimiento normativo.",
    ],
    company: "Datacomputo",
    date: "Febrero 2022 - Agosto 2022",
  },
];
