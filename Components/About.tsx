"use client";
import React from "react";
import clsx from "clsx";
import { Heading } from "./Heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export const About = () => {
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
      <p className="mb-3 text-center">
        Mi trayectoria incluye la formación en Dibujo Técnico y una larga
        experiencia como Dibujante Proyectista en proyectos de arquitectura e
        ingeniería. Durante el transcurso del año 2022, mi interés se ha volcado
        hacia el Diseño UX/UI y el 2023 hacia el Desarrollo Frontend.
      </p>
      <p className="text-center">
        Me tomo con entusiasmo el aprender tecnologías nuevas y enfrentar nuevos
        desafíos, quiero contribuir con mi creatividad y habilidades técnicas en
        un equipo dinámico, mientras sigo desarrollando proyectos personales que
        me ayudan a mejorar mis habilidades en programación.
      </p>
    </motion.section>
  );
};
