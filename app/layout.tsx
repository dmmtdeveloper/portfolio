import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import Header from "@/Components/Header";
import { ActiveSectionContextProvider } from "@/Context/Active-section-context";
import ThemeSwitch from "@/Components/ThemeSwitch";
import { ThemeContextProvider } from "@/Context/ThemeContext";
import { fontRaleway } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "David | Personal Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${fontRaleway.className} 
          font-sans antialiased 
          bg-gray-50 text-gray-950 
          relative  
          pt-28 sm:pt-36 
          dark:bg-gray-900 
          dark:text-gray-50 
          dark:text-opacity-90`}
      >
        <div
          className={clsx(
            "bg-[#fbe2e3]",
            "absolute",
            "top-[-6rem]",
            "right-[11rem]",
            "h-[31.25rem]",
            "w-[31.25rem]",
            "rounded-full",
            "blur-[10rem]",
            "-z-10",
            /* breack points */
            "sm:w-[68.75rem]",
            /* dark-mode */
            "dark:bg-[#946263]"
          )}
        ></div>
        <div
          className={clsx(
            "bg-[#dbd7fb]",
            "absolute",
            "top-[-1rem]",
            "left-[35rem]",
            "h-[31.25rem]",
            "w-[50rem]",
            "rounded-full",
            "blur-[10rem]",
            "-z-10",
            /* breack points */
            "sm:w-[68.75rem]",
            "md:left-[-33rem]",
            "lg:left-[-28rem]",
            "xl:left-[-15rem]",
            "2xl:left-[-5rem]",
            /* dark-mode */
            "dark:bg-[#676394]"
          )}
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
