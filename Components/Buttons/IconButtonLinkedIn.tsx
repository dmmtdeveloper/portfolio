import clsx from 'clsx';
import React from 'react'
import { BsLinkedin } from 'react-icons/bs';


export const IconButtonLinkedIn = () => {
  return (
    <React.Fragment>
      <a
        className={clsx(
          "bg-white",
          "p-5",
          "text-gray-700",
          "hover:text-gray-950",
          "flex",
          "items-center",
          "gap-2",
          "rounded-full",
          "focus:scale-[1.15]",
          "active:scale-105",
          "cursor-pointer",
          "border",
          "border-black/10",
          /*hover*/
          "hover:scale-[1.15]",
          "hover:text-blue-700",
          /*transition*/
          "transition",
          "duration-300",
          /*dark-mode*/
          "dark:bg-white/10",
          "dark:text-white/60",
          "dark:hover:text-blue-600",
          "dark:hover:bg-slate-300"
        )}
        href="https://www.linkedin.com/in/dmmtapia/"
        target="_blank"
      >
       <BsLinkedin />
      </a>
    </React.Fragment>
  );
}
