"use client";

import { motion } from "framer-motion";

import { portfolio } from "../../data/portfolio";
import { fadeUp } from "../../lib/animations";

import Typewriter from "./Typewriter";
import TechStack from "./TechStack";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center">

      {/* Availability Badge */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="
          mb-6
          inline-flex
          w-fit
          items-center
          gap-2
          rounded-full
          border
          border-green-500/30
          bg-green-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-green-400
        "
      >
        <span className="h-2 w-2 rounded-full bg-green-400" />

        {portfolio.availability}
      </motion.div>

      {/* Greeting */}

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.2}
        className="
          uppercase
          tracking-[0.3em]
          text-blue-600 dark:text-blue-400
          font-semibold
        "
      >
        Hello, Im
      </motion.p>

      {/* Name */}

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.4}
        className="
          mt-4
          text-5xl
          font-black
          text-gray-900 dark:text-white
          leading-tight
          md:text-7xl
        "
      >
        {portfolio.name}
      </motion.h1>

      {/* Typewriter */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.6}
      >
        <Typewriter />
      </motion.div>

      {/* Description */}

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.8}
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-gray-600 dark:text-gray-400
        "
      >
        {portfolio.description}
      </motion.p>

      {/* Tech Stack */}

      <TechStack />

      {/* Buttons */}

      <HeroButtons />

      {/* Social Icons */}

      <HeroSocials />

    </div>
  );
}