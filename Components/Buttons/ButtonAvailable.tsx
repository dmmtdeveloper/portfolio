import clsx from "clsx";
import React from "react";

export const ButtonAvailable = () => {
  return (
    <div className="flex items-center justify-center">
      {" "}
      <a
        href="https://www.linkedin.com/in/dmmtapia/"
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center hover:scale-105 transition"
      >
        <div>
          {" "}
          <span className="relative flex overflow-hidden rounded-full p-[1px]">
            {" "}
            <span
              className={clsx(
                "absolute",
                "inset-[-1000%]",
                "animate-[spin_2s_linear_infinite]",
                "dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
                "bg-[conic-gradient(from_90deg_at_50%_50%,#A855F7_0%,#A855F7_50%,#E2CBFF_100%)]"
              )}
            ></span>{" "}
            <div
              className={clsx(
                "inline-flex",
                "h-full w-full",
                "cursor-pointer",
                "items-center",
                "justify-center",
                "rounded-full",
                "px-4 py-1",
                "text-sm",
                "font-medium",
                "backdrop-blur-3xl",
                "whitespace-nowrap",
                "bg-purple-500",
                "dark:bg-slate-950/75",
                "text-white"
              )}
            >
              {" "}
              Disponible para trabajar{" "}
            </div>{" "}
          </span>{" "}
        </div>
      </a>{" "}
    </div>
  );
};
