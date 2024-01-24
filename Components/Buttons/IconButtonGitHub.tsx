import clsx from "clsx";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";

export const IconButtonGitHub = () => {
  return (
    <React.Fragment>
      <a
        className={clsx(
          "bg-white",
          "p-[17.21px]",
          "text-gray-700",
          "flex",
          "items-center",
          "gap-2",
          "text-[1.35rem]",
          "rounded-full",
          "focus:scale-[1.15]",
          "active:scale-105",
          "cursor-pointer",
          "border",
          "border-black/10",
          /*hover*/
          "hover:text-gray-950",
          "hover:scale-[1.15]",
          /*transition*/
          "transition",
          "duration-300",
          /*dark-mode*/
          "dark:bg-white/10",
          "dark:text-white/60",
          "dark:hover:text-gray-950",
          "dark:hover:bg-slate-300"
        )}
        href="https://github.com/dmmtdeveloper"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
    </React.Fragment>
  );
};
