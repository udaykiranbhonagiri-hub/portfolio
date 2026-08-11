"use client";

import { motion } from "framer-motion";

type SkillBadgeProps = {
  skill: string;
};

export default function SkillBadge({
  skill,
}: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        inline-flex
        cursor-default
        items-center
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-4
        py-2
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
      {skill}
    </motion.span>
  );
}