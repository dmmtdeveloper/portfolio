import clsx from "clsx";
import React from "react";
import { HiDownload } from "react-icons/hi";

export const ButtonCv = () => {
  return (
    <React.Fragment>
      <a
        className={clsx(
          /*----default state----*/
          "bg-white",
          "text-gray-600",
          "px-8 py-2 leading-6",
          "rounded-full",
          "font-semibold tracking-wide",
          "cursor-pointer",
          "inline-flex",
          "items-center",
          "justify-center",
          "relative shadow",
          "gap-2",
          "group",

          /*----hover----*/
          "transition",
          "hover:bg-gray-200",
          "hover:shadow-md",

          /*----focus statate----*/
          "outline-none",
          "ring-blue-500/70 ring-offset-2",
          "focus-visible:ring-2",
          "focus:scale-[0.98]",

          /*----disabled statate----*/
          "disabled:bg-blue-500/50",
          "disabled:cursor-not-allowed",
          "disabled:shadow",

          /*dark-mode*/
          "dark:bg-white/10",
          "dark:hover:bg-white/20",
          "dark:text-gray-200"
        )}
        href="/CV.pdf"
        download
      >
        Download CV{" "}
        <HiDownload
          className={clsx(
            "opacity-60",
            "group-hover:translate-y-1",
            "transition"
          )}
        />{" "}
      </a>
    </React.Fragment>
  );
};
