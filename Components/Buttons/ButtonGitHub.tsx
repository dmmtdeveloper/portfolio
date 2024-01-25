import clsx from "clsx";
import React from "react";
import { FaGithub, FaGithubSquare } from "react-icons/fa";

export const ButtonGitHub = () => {
  return (
    <React.Fragment>
      <a
        className={clsx(
          /*----default state----*/
          "bg-white",
          "p-4",
          "text-gray-700",
          "flex",
          "items-center",
          "gap-2",
          "rounded-full",
          "focus:scale-[1.2]",
          "active:scale-105",
          "cursor-pointer",
          "border",
          "border-black/10",

          /*----hover----*/
          "hover:text-gray-950",
          "hover:scale-[1.2]",

          /*----transition----*/
          "transition",
          "duration-300",

          /*----dark-mode----*/
          "dark:bg-white/10",
          "dark:text-white/60",
          "dark:hover:text-gray-950",
          "dark:hover:bg-slate-300"
        )}
        href="https://github.com/dmmtdeveloper"
        target="_blank"
      >
        <FaGithub />
      </a>
    </React.Fragment>
  );
};
