"use client";
import React from "react";
import clsx from "clsx";
import { Heading } from "./Heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  /*----scroll functionality----*/
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className={clsx(
        "flex flex-col",
        "max-w-[45rem]",
        "mb-28",
        "leading-8",
        "text-center",
        "sm:mb-40",
        /*----scroll to about----*/
        "scroll-m-28"
      )}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Heading>About Me</Heading>
      <p className="text-center">
        De profesión Dibujante de proyectos de Arquitectura e Ingenieria.
        Durante el transcurso del año 2022, mi interés se ha volcado hacia el
        Diseño UX/UI y hacia el Desarrollo Frontend. Me tomo con entusiasmo el
        aprender tecnologías nuevas y enfrentar nuevos desafíos.
      </p>
    </motion.section>
  );
}
