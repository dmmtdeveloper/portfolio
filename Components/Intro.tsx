"use client";
import Image from "next/image";
import React from "react";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import clsx from "clsx";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export const Intro = () => {
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
              width={"208"}
              height={"208"}
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
        <div className="flex flex-col gap-6">
          <p className="font-bold text-5xl">Hey, soy David.</p>
          <div>
            <span className="font-semibold">+1 año de experiencia.</span>{" "}
            <span>Desarrollador Web</span>{" "}
            <span className="font-bold">Full-Stack</span> Disfruto creando{" "}
            <span>sitios web y aplicaciones</span>
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
        {/* ----Button Contact---- */}
        <Link
          href="#contact"
          className={clsx(
            "group",
            "bg-gray-900",
            "text-white",
            "px-7 py-3",
            "flex",
            "items-center",
            "gap-2",
            "rounded-full",
            "outline-none",
            "focus:scale-110",
            "hover:scale-110",
            "hover:bg-gray-950",
            "active:scale-105",
            "transition duration-300"
          )}
        >
          Contact me here{" "}
          <BsArrowRight
            className={clsx(
              "opacity-70",
              "group-hover:translate-x-1",
              "transition duration-300"
            )}
          />
        </Link>

        {/* ----Button CV---- */}
        <a
          className={clsx(
            "group",
            "cursor-pointer",
            "bg-white",
            "text-gray-900",
            "px-7 py-3",
            "flex",
            "items-center",
            "gap-2",
            "rounded-full",
            "outline-none",
            "focus:scale-110",
            "hover:scale-110",
            "active:scale-105",
            "transition duration-300",
            "border",
            "border-black/10"
          )}
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload
            className={clsx(
              "opacity-60",
              "group-hover:translate-y-1",
              "transition duration-300"
            )}
          />{" "}
        </a>

        {/* ----Button Linkedin---- */}
        <a
          className={clsx(
            "bg-white",
            "text-gray-700",
            "cursor-pointer",
            "p-4",
            "flex",
            "items-center",
            "gap-2",
            "rounded-full",
            "focus:scale-[1.15]",
            "hover:scale-[1.15]",
            "hover:text-blue-600",
            "active:scale-105",
            "transition duration-300",
            "border",
            "border-black/10"
          )}
          href="https://www.linkedin.com/in/dmmtapia/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        {/* ----Button GitHub---- */}
        <a
          className={clsx(
            "bg-white",
            "text-gray-700",
            "cursor-pointer",
            "p-4",
            "flex",
            "items-center",
            "gap-2",
            "rounded-full",
            "text-[1.2rem]",
            "focus:scale-[1.15]",
            "hover:scale-[1.15]",
            "hover:text-gray-950",
            "active:scale-105",
            "transition duration-300",
            "border",
            "border-black/10"
          )}
          href="https://github.com/dmmtdeveloper"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
