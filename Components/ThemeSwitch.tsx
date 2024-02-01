"use client";
import { useTheme } from "@/Context/ThemeContext";
import clsx from "clsx";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={clsx(
        "fixed bottom-5 right-5",
        "bg-white",
        "w-[3rem] h-[3rem]",
        "bg-opacity-20",
        "backdrop-blur-[0.5rem]",
        "border border-white",
        "border-opacity-40",
        "shadow-2xl",
        "rounded-full",
        "flex",
        "items-center",
        "justify-center",
        /*hover efect*/
        "hover:scale-[1.15]",
        "active:scale-105",
        "transition",
        "duration-300",
        /* dark-mode*/
        "dark: bg-gray-950"
      )}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
