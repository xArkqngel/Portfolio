

export const stack = [
  {
    name: "JavaScript",
    color: "#F0DB4F",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    name: "React",
    color: "#00D8FF",
  },
  {
    name: "NextJS",
    color: "#FAFAFA",
  },
  {
    name: "Zustand",
    color: "#764ABC",
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
    name: "Tailwind",
    color: "#17BAB8",
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
    name: "NestJS",
    color: "#E0234E",
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
    name: "GraphQL",
    color: "#E10098",
  },
  {
    name: "MongoDB",
    color: "#47A248",
  },
  {
    name: "Postgres",
    color: "#336791",
  },
  {
    name: "MySQL",
    color: "#4479A1",
  },
  {
    name: "AWS",
    color: "#FF9900",
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
};

export const projects = [
  {
    title: "WhatToDo",
    description:
      "Aplicación para el seguimiento de tareas tipo Kanban. Permite la creación de tableros, listas y tareas, además de la implementación de contador tipo pomodoro y contadores individuales para las tareas.",
    tech: [TAGS.NEXT, TAGS.ZUSTAND, TAGS.TAILWIND],
    image: "/whattodo.webp",
    web: "https://what-to-do-three.vercel.app/",
    repo: "https://github.com/xArkqngel/WhatToDo",
  },
  {
    title: "Steam Clone",
    description:
      "Landing page básico de Steam, realizado para practicar y conocer el framework de Astro.",
    tech: [TAGS.ASTRO, TAGS.TAILWIND],
    image: "/steamclone.webp",
    web: "https://xark-steam-clone.netlify.app/",
    repo: "https://github.com/xArkqngel/SteamClone",
  },
];
