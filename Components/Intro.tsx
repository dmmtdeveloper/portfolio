"use client";
import Image from "next/image";
import React from "react";
import { animate, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import clsx from "clsx";
import { FaGithubSquare } from "react-icons/fa";

export const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
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
              className="h-28 w-28 border-[0.35rem] border-white rounded-full object-cover shadow-xl"
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
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm David.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        className={clsx(
          "flex",
          "flex-col",
          "items-center",
          "justify-center",
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
            "transition duration-300"
          )}
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
            "p-4",
            "flex",
            "items-center",
            "gap-2",
            "rounded-full"
          )}
        >
          <BsLinkedin />
        </a>

        {/* ----Button GitHub---- */}
        <a
          className={clsx(
            "bg-white",
            "text-gray-700",
            "p-4",
            "flex",
            "items-center",
            "gap-2",
            "rounded-full",
            "text-[1.2rem]"
          )}
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};
