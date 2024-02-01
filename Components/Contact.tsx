"use client";
import React from "react";
import { Heading } from "./Heading";
import clsx from "clsx";
import { ButtonSubmit } from "./Buttons/ButtonSubmit";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/SendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className={clsx(
        "mb-20",
        "sm:mb-28",
        "w-[min(100%,38rem)]",
        "text-center"
      )}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <Heading>Contactame</Heading>
      <p className="text-gray-700 -mt-6">
        Contactame directamente via email{" "}
        <a className="underline" href="mailto:dmmtapia.ux@gmail.com">
          dmmtapia.ux@gmail.com
        </a>{" "}
        o por este formulario
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          name="email"
          required
          maxLength={500}
          placeholder="Tu Email"
          className={clsx(
            "h-14",
            "rounded-lg",
            "border",
            "border-black/10",
            "px-4"
          )}
          type="email"
        />
        <textarea
          name="message"
          required
          maxLength={5000}
          placeholder="Mensaje"
          className="h-52 my-3 border border-black/10 rounded-lg p-4"
        />
        <ButtonSubmit />
      </form>
    </motion.section>
  );
}
