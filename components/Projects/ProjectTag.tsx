"use client";

import { motion } from "framer-motion";

type ProjectTagProps = {
  technology: string;
};

export default function ProjectTag({
  technology,
}: ProjectTagProps) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-3
        py-1.5
        text-sm
        font-medium
        text-blue-300
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-blue-400
        hover:bg-blue-500/20
        hover:text-white
      "
    >
      {technology}
    </motion.span>
  );
}