import clsx from "clsx";
import React from "react";
import { BsSun } from "react-icons/bs";

export const ThemeSwitch = () => {
  return (
    <button
      className={clsx(
        "fixed bottom-5 right-5",
        "bg-slate-500",
        "w-[3rem] h-[3rem]",
        "bg-opacity-80",
        "backdrop-blur-[0.5rem]",
        "border border-white",
        "border-opacity-40",
        "shadow-2xl",
        "rounded-full",
        "flex",
        "items-center",
        "justify-center"
      )}
    >
      <BsSun />
    </button>
  );
};
