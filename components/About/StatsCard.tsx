"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

type StatsCardProps = {
  number: string;
  label: string;
  delay?: number;
};

export default function StatsCard({
  number,
  label,
  delay = 0,
}: StatsCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={delay}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-lg
        transition-all
        duration-300
        hover:border-blue-500/50
        hover:shadow-xl
        hover:shadow-blue-500/20
      "
    >
      <h3
        className="
          text-4xl
          font-bold
          text-blue-400
        "
      >
        {number}
      </h3>

      <p
        className="
          mt-2
          text-gray-300
          text-lg
        "
      >
        {label}
      </p>
    </motion.div>
  );
}