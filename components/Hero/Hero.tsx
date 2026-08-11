"use client";

import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroScroll from "./HeroScroll";

import {
  fadeLeft,
  fadeRight,
} from "../../lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        text-gray-900
        transition-colors
        duration-500
        dark:bg-gray-950
        dark:text-white
      "
    >
      {/* ================= Background Effects ================= */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Center Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/10
            blur-[160px]
            dark:bg-blue-600/10
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            -left-40
            top-40
            h-96
            w-96
            rounded-full
            bg-purple-500/10
            blur-[140px]
            dark:bg-purple-500/10
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            -right-40
            bottom-20
            h-96
            w-96
            rounded-full
            bg-cyan-500/10
            blur-[140px]
            dark:bg-cyan-500/10
          "
        />
      </div>

      {/* ================= Hero Content ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          items-center
          gap-16
          px-6
          py-28
          md:grid-cols-2
          lg:px-10
        "
      >
        {/* Left */}

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
        >
          <HeroContent />
        </motion.div>

        {/* Right */}

        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <HeroImage />
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      <HeroScroll />
    </section>
  );
}