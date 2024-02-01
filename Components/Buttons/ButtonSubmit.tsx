import clsx from "clsx";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export const ButtonSubmit = () => {
  return (
    <button
      className={clsx(
        "group",
        "flex items-center",
        "justify-center",
        "gap-2",
        "h-[3rem]",
        "w-[8rem]",
        "bg-gray-900",
        "text-white",
        "rounded-full",

        /*----focus statate----*/
        "outline-none",
        "ring-blue-900/70 ring-offset-2",
        "focus-visible:ring-2",
        "focus:scale-110",
        "active:scale-105",

        /*----hover----*/
        "transition",
        "hover:bg-gray-950",
        "hover:shadow-md",
        "hover:scale-110"
      )}
      type="submit"
    >
      submit
      <FaPaperPlane
        className={clsx(
          "opacity-70",
          "text-xs",
          "transition-all",
          "group-hover:translate-x-1",
          "group-hover:-translate-y-1"
        )}
      />{" "}
    </button>
  );
};
