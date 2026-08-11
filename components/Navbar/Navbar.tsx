"use client";

import { motion } from "framer-motion";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        fixed
  left-0
  right-0
  top-0
  z-50
  border-b
  border-gray-200/80
  bg-white/80
  text-gray-900
  backdrop-blur-xl
  transition-colors
  duration-300
  dark:border-white/10
  dark:bg-gray-950/80
  dark:text-white
      "
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-10
        "
      >
        {/* Logo */}

        <a
          href="#home"
          className="
            text-2xl
            font-black
            tracking-tight
            text-gray-900 dark:text-white
            transition-colors
            duration-300
            hover:text-blue-400
          "
        >
          Uday<span className="text-blue-500">.</span>
        </a>

        {/* Desktop */}

        <div className="hidden items-center gap-6 md:flex">
          <DesktopNav />
          <ThemeToggle />
        </div>

        {/* Mobile */}

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}