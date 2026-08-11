"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

type AboutCardProps = {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
};

export default function AboutCard({
  title,
  subtitle,
  duration,
  description,
  icon,
  delay = 0,
}: AboutCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={delay}
      whileHover={{
        y: -8,
        scale: 1.02,
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
        hover:border-blue-500/40
        hover:shadow-xl
        hover:shadow-blue-500/20
      "
    >
      {/* Icon */}

      <div
        className="
          mb-5
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-blue-500/10
          text-blue-400
        "
      >
        {icon}
      </div>

      {/* Title */}

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Subtitle */}

      <p className="mt-2 text-blue-400 font-medium">
        {subtitle}
      </p>

      {/* Duration */}

      <p className="mt-1 text-sm text-gray-500">
        {duration}
      </p>

      {/* Description */}

      <p className="mt-5 leading-7 text-gray-300">
        {description}
      </p>
    </motion.div>
  );
}