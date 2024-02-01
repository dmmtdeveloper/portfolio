import clsx from "clsx";
import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export const ButtonSubmit = () => {
  const { pending } = useFormStatus();
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
        "hover:scale-110",

        /* disabled */
        "disabled:scale-100",
        "disable:bg-opa"


      )}
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          submit{" "}
          <FaPaperPlane
            className={clsx(
              "opacity-70",
              "text-xs",
              "transition-all",
              "group-hover:translate-x-1",
              "group-hover:-translate-y-1"
            )}
          />
        </>
      )}
    </button>
  );
};
