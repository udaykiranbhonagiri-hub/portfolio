"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { fadeUp } from "../../lib/animations";
import ProjectButtons from "./ProjectButtons";
import ProjectTag from "./ProjectTag";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
  status: "Completed" | "In Progress";
  year: string;
  delay?: number;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  live,
  featured,
  status,
  year,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-lg
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:shadow-2xl
        hover:shadow-blue-500/20
      "
    >
      {/* Project Image */}

      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Featured Badge */}

        {featured && (
          <div
            className="
              absolute
              left-4
              top-4
              flex
              items-center
              gap-2
              rounded-full
              bg-yellow-500
              px-3
              py-1
              text-xs
              font-semibold
              text-black
            "
          >
            <Star size={14} fill="currentColor" />
            Featured
          </div>
        )}

        {/* Status */}

        <div
          className={`
            absolute
            right-4
            top-4
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold

            ${
              status === "Completed"
                ? "bg-green-500 text-white"
                : "bg-orange-500 text-white"
            }
          `}
        >
          {status}
        </div>
      </div>

      {/* Content */}

      <div className="p-6">

        {/* Title + Year */}

        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <span className="text-sm text-gray-400">
            {year}
          </span>
        </div>

        {/* Description */}

        <p className="leading-7 text-gray-300">
          {description}
        </p>

        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <ProjectTag
              key={tech}
              technology={tech}
            />
          ))}
        </div>

        {/* Buttons */}

        <ProjectButtons
          github={github}
          live={live}
        />

      </div>
    </motion.div>
  );
}