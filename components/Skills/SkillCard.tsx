"use client";

import { motion } from "framer-motion";

import { fadeUp } from "../../lib/animations";
import SkillBadge from "./SkillBadge";

type SkillCardProps = {
  title: string;
  icon: string;
  skills: string[];
  delay?: number;
};

export default function SkillCard({
  title,
  icon,
  skills,
  delay = 0,
}: SkillCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
      {/* Header */}

      <div className="mb-6 flex items-center gap-4">
        <div
          className="
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

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>
      </div>

      {/* Skills */}

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge
            key={skill}
            skill={skill}
          />
        ))}
      </div>
    </motion.div>
  );
}