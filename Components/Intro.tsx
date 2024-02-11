"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useSectionInView } from "@/lib/hooks";
import { ButtonLinkedIn } from "@/Components/Buttons/ButtonLinkedIn";
import { ButtonGitHub } from "@/Components/Buttons/ButtonGitHub";
import { ButtonCv } from "./Buttons/ButtonCv";
import { ButtonContact } from "./Buttons/ButtonContact";
import { ButtonAvailable } from "./Buttons/ButtonAvailable";

export default function Intro() {
  /*----scroll kook functionality----*/
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className={clsx(
        "mb-28",
        "max-w-[50rem]",
        "text-center",
        "sm:mb-0",
        /*----scroll to home----*/
        "scroll-mt-[100rem]"
      )}
    >
      <div className="flex">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/david.png"
              width={"158"}
              height={"158"}
              alt="David portrait"
              quality="95"
              priority={true}
              className="h-20 w-20 border-[0.35rem] border-white rounded-full object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 1,
            }}
          >
            <p className="text-2xl">👋</p>
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 text-left text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-5xl">Hola, soy</p>
              <p className="font-bold text-5xl">David Martínez</p>
            </div>
            <ButtonAvailable />
          </div>
          <div>
            <p className="font-light text-3xl">
              {/* +1 año de experiencia en{" "} */}
              <span className=" dark: dark:text-white">
                Desarrollador Web, Full-Stack{" "}
                <span className="font-bold text-purple-500">MERN</span>
              </span>{" "}
              <span className="text-3xl"> Disfruto creando sitios web y</span>{" "}
              <span className="text3xl">resolviendo problemas en</span>{" "}
              <span className="font-bold text-[#FFCA53]">JavaScript</span>
            </p>{" "}
          </div>
        </div>
      </motion.h1>

      <motion.div
        className={clsx(
          "flex",
          "flex-col",
          "gap-6",
          /*responsive*/
          "sm:flex-row"
        )}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <ButtonContact />
        <ButtonCv />
        <ButtonLinkedIn />
        <ButtonGitHub />
      </motion.div>
    </section>
  );
}
