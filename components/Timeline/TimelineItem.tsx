"use client";

import { motion } from "framer-motion";

import { fadeUp } from "../../lib/animations";
import YearBadge from "./YearBadge";

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
  delay?: number;
};

export default function TimelineItem({
  year,
  title,
  description,
  icon,
  isLast = false,
  delay = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      className="relative flex gap-8"
    >
      {/* Left Timeline */}

      <div className="flex flex-col items-center">

        <YearBadge year={year} />

        {!isLast && (
          <div className="mt-3 h-full w-[2px] bg-blue-500/30" />
        )}
      </div>

      {/* Right Card */}

      <motion.div
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          mb-12
          flex-1
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
            text-2xl
          "
        >
          {icon}
        </div>

        {/* Title */}

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-4 leading-7 text-gray-300">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}