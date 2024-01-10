import React from "react";
import clsx from "clsx";

export const Header = () => {
  return (
    <header className={clsx("z-[999] relative")}>
      <div
        className={clsx(
          "fixed top-0 left-1/2 h-[4.5rem] w-full",
          "border-white",
          "border-opacity-40",
          /* blur effect*/
          "bg-white",
          "bg-opacity-80",
          "shadow-lg",
          "shadow-black/[0.03]",
          "backdrop-blur-[0.5rem]",
          "sm:top-6 sm:h-[3.25rem]",
          "sm:w-[36rem] sm:rounded-full"
        )}
      ></div>
    </header>
  );
};
