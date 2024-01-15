"use client"
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export const Divider = () => {
  return (
    <motion.div
      className={clsx(
        "bg-gray-200",
        "my-24 h-16 w-1",
        "rounded-full",
        "hidden sm:block"
      )}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay:0.125}}
    ></motion.div>
  );
};
