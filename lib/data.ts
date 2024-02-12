import React from "react";
import { CgStudio, CgWorkAlt } from "react-icons/cg";
import { FaCss3, FaHtml5, FaReact, FaStudiovinari, FaUser } from "react-icons/fa";
import { LuBook, LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/to do.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduación bootcamp",
    location: "Coding Dojo Latam",
    description:
      "He finalizado con éxito un Bootcamp de 16 semanas en Coding Dojo, donde obtuve una sólida base de conocimientos y habilidades en programación web. Me enfoqué en dominar el lenguaje de programación JavaScript y el stack completo MERN.",
    icon: React.createElement(LuGraduationCap),
    date: "Ago. 2023 - Nov. 2023",
  },
  {
    title: "Curso CSS3",
    location: "Udemy",
    description:
      "Desarrollé habilidades para dominar CSS desde niveles básicos hasta avanzados, aplicando metodología BEM para nombrar las clases en mis estilos.",
    icon: React.createElement(FaCss3),
    date: "Agosto 2023",
  },
  {
    title: "HTML5",
    location: "Academia Hola Mundo",
    description:
      "Adquirí las habilidades avanzadas para utilizar HTML5, aprovechando casi todas sus etiquetas disponibles.",
    icon: React.createElement(FaHtml5),
    date: "Marzo - 2023",
  },
  {
    title: "Diseño UX/UI Avanzado",
    location: "CoderHouse",
    description:
      "Obtuve conocimientos en diseño de experiencia de usuario, resolución de problemas y diseño de interfaz de usuario.",
    icon: React.createElement(FaUser),
    date: "Septiembre - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "TypeScript",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Figma",
] as const;
