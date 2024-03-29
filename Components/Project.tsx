"use client";
import Image from "next/image";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";

type ProjectsProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className={clsx(
        "group",
        "mb-3",
        "sm:mb-8",
        "last:mb-0",
      )}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      id="projects"
    >
      <section
        className={clsx(
          "bg-gray-100",
          "max-w-[42rem]",
          "border",
          "rounded-lg",
          "border-black/5",
          "overflow-hidden",
          "sm:pr-8",
          "relative",
          "sm:h-[20rem]",
          "mb-3",
          "sm:mb-8",
          "last:mb-0",
          "group-even:pl-12",
          /*----Hover effect----*/
          "hover:bg-gray-200",
          "transition"
        )}
      >
        <div
          className={clsx(
            "flex flex-col",
            "pt-4 px-5 pb-8",
            "sm:pl-10",
            "sm:pr-2",
            "sm:pt-10",
            "sm:max-w-[50%]",
            "h-full",
            "group-even:ml-[18rem]"
          )}
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className={clsx(
                  "bg-black/[0.7]",
                  "px-3 py-1",
                  "text-[0.7rem]",
                  "uppercase",
                  "tracking-wider",
                  "text-white",
                  "rounded-full"
                )}
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          quality={95}
          alt="Project I worked"
          className={clsx(
            "absolute",
            "top-12",
            "-right-40",
            "w-[28.25rem]",
            "rounded-t-lg",
            "shadow-2xl",
            "group-even:right-[initial]",
            "group-even:-left-40",
            /*----Hover effect----*/
            "group-hover:-translate-x-3",
            "group-hover:-translate-y-3",
            "group-hover:-rotate-2",
            /*----Hover left effect----*/
            "group-even:group-hover:translate-x-3",
            "group-even:group-hover:translate-y-3",
            "group-even:group-hover:rotate-2",

            "group-hover:scale-[1.04]",
            "transition"
          )}
        />
      </section>
    </motion.div>
  );
}
