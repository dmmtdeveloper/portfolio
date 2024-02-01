"use server";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const email = formData.get("email");

  if (!validateString(sendEmail, 500)) {
    return {
      error: "invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contacto Portfolio <onboarding@resend.dev>",
      to: "dmmtapia.ux@gmail.com",
      subject: "Message from contact form",
      reply_to: email as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
