"use client";

import { motion } from "framer-motion";

type YearBadgeProps = {
  year: string;
};

export default function YearBadge({
  year,
}: YearBadgeProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-blue-500/30
        bg-blue-500/10
        px-5
        py-2
        font-semibold
        text-blue-400
        backdrop-blur-md
        shadow-lg
        shadow-blue-500/20
      "
    >
      {year}
    </motion.div>
  );
}