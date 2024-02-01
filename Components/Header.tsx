"use client";

import clsx from "clsx";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/Context/Active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className={clsx("z-[999] relative pt-28")}>
      <motion.div
        className={clsx(
          "fixed",
          "top-0 left-1/2",
          "h-[4.5rem] w-full",
          "rounded-none",
          "border",
          "border-white",
          "border-opacity-40",
          /* blur effect*/
          "bg-white",
          "bg-opacity-80",
          "shadow-lg",
          "shadow-black/[0.03]",
          "backdrop-blur-[0.5rem]",
          /*breack points*/
          "sm:top-6 sm:h-[3.25rem]",
          "sm:w-[36rem] sm:rounded-full",
          /*dark-mode*/
          "dark:bg-gray-950",
          "dark:border-black/40",
          "dark:bg-opacity-75"
        )}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav
        className={clsx(
          "flex",
          "fixed",
          "top-[0.15rem] left-1/2",
          "-translate-x-1/2",
          "py-2",
          "h-12",
          /*breack points*/
          "sm:top-[1.7rem] sm:h-[initial] sm:py-0"
        )}
      >
        <ul
          className={clsx(
            "flex",
            "flex-wrap",
            "items-center",
            "justify-center",
            "gap-y-1",
            "w-[22rem]",
            "text-[0.9rem]",
            "font-medium",
            "text-gray-500",
            /*breack points*/
            "sm:w-[initial]",
            "sm:flex-nowrap",
            "sm:gap-5"
          )}
        >
          {links.map((link) => (
            <motion.li
              className={clsx(
                "h-3/4",
                "flex",
                "items-center",
                "justify-center",
                "relative"
              )}
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex",
                  "w-full",
                  "items-center",
                  "justify-center",
                  "px-3 py-3",
                  /*Hover*/
                  "hover:text-gray-950",
                  "transition",
                  /* dark-mode*/
                  "dark:text-gray-500",
                  "dark:hover:text-gray-200",
                  {
                    "text-gray-950 dark:text-gray-100":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className={clsx(
                      "bg-gray-200",
                      "rounded-full",
                      "absolute",
                      "inset-0",
                      "-z-10",
                      /* dark-mode*/
                      "dark:bg-gray-800"
                    )}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
