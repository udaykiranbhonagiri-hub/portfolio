"use client";

import { motion } from "framer-motion";
import { portfolio } from "../../data/portfolio";
import { fadeUp } from "../../lib/animations";

export default function TechStack() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={1}
      className="mt-8 flex flex-wrap gap-3"
    >
      {portfolio.heroTech.map((tech) => (
        <motion.span
          key={tech}
          whileHover={{
            scale: 1.08,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            cursor-default
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10 dark:bg-blue-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-blue-600 dark:text-blue-300
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-blue-400
            hover:bg-blue-500/20
            hover:text-white
          "
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
}