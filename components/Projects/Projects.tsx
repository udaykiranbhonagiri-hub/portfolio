/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../../data/projects";
import { fadeUp } from "../../lib/animations";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-gray-50
        py-24
        text-gray-900
        transition-colors
        duration-500
        dark:bg-gray-900
        dark:text-white
      "
    >
      {/* ================= Background Effects ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/5
          blur-[140px]
          dark:bg-blue-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-80
          w-80
          rounded-full
          bg-purple-500/5
          blur-[120px]
          dark:bg-purple-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
          h-80
          w-80
          rounded-full
          bg-cyan-500/5
          blur-[120px]
          dark:bg-cyan-500/10
        "
      />

      {/* ================= Container ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          lg:px-10
        "
      >
        {/* ================= Heading ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p
            className="
              mb-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-600
              dark:text-blue-400
            "
          >
            My Work
          </p>

          <h2
            className="
              text-4xl
              font-black
              text-gray-900
              md:text-5xl
              dark:text-white
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              mt-5
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
            "
          >
            A selection of projects focused on AI,
            full-stack development, automation, and
            real-world problem solving.
          </p>
        </motion.div>

        {/* ================= Projects Grid ================= */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                shadow-lg
                shadow-gray-200/40
                transition-all
                duration-300
                hover:border-blue-300
                hover:shadow-blue-500/10
                dark:border-white/10
                dark:bg-white/5
                dark:shadow-black/20
                dark:hover:border-blue-500/30
              "
            >
              {/* ================= Image ================= */}

              <div
                className="
                  relative
                  aspect-video
                  overflow-hidden
                  bg-gray-100
                  dark:bg-gray-800
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                    opacity-60
                  "
                />

                {/* Featured Badge */}

                {project.featured && (
                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      rounded-full
                      border
                      border-blue-200
                      bg-blue-50
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-blue-700
                      shadow-sm
                      dark:border-blue-500/30
                      dark:bg-blue-500/20
                      dark:text-blue-300
                    "
                  >
                    Featured
                  </span>
                )}

                {/* Status Badge */}

                <span
                  className={`
                    absolute
                    right-4
                    top-4
                    rounded-full
                    border
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    backdrop-blur-md
                    ${
                      project.status === "Completed"
                        ? "border-green-200 bg-green-50 text-green-700 dark:border-green-500/30 dark:bg-green-500/20 dark:text-green-300"
                        : "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-500/30 dark:bg-yellow-500/20 dark:text-yellow-300"
                    }
                  `}
                >
                  {project.status}
                </span>
              </div>

              {/* ================= Content ================= */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  p-6
                "
              >
                {/* Year */}

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-blue-600
                    dark:text-blue-400
                  "
                >
                  {project.year}
                </p>

                {/* Title */}

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-4
                    flex-1
                    text-sm
                    leading-7
                    text-gray-600
                    dark:text-gray-400
                  "
                >
                  {project.description}
                </p>

                {/* ================= Technologies ================= */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-gray-200
                          bg-gray-50
                          px-3
                          py-1.5
                          text-xs
                          font-medium
                          text-gray-700
                          dark:border-white/10
                          dark:bg-white/5
                          dark:text-gray-300
                        "
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>

                {/* ================= Buttons ================= */}

                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-gray-800
                      transition-all
                      duration-300
                      hover:border-blue-300
                      hover:bg-blue-50
                      hover:text-blue-600
                      dark:border-white/10
                      dark:bg-white/5
                      dark:text-gray-200
                      dark:hover:border-blue-500/30
                      dark:hover:bg-blue-500/10
                      dark:hover:text-blue-400
                    "
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>

                  {/* Live Demo */}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-blue-600/20
                        transition-all
                        duration-300
                        hover:bg-blue-500
                      "
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}