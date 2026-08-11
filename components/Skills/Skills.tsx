"use client";

import { motion } from "framer-motion";

import { skills } from "../../data/skills";
import { fadeUp } from "../../lib/animations";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-gray-900
        transition-colors
        duration-500
        dark:bg-gray-950
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
          bottom-0
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
            Technical Skills
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
            My Tech Stack
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
            Technologies and tools I use to build
            modern, scalable, and production-ready
            applications.
          </p>
        </motion.div>

        {/* ================= Skill Categories ================= */}

        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                rounded-3xl
                border
                border-gray-200
                bg-gray-50
                p-6
                shadow-lg
                shadow-gray-200/30
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
              {/* ================= Category Header ================= */}

              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-500/10
                    text-2xl
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {category.icon}
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {category.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-500
                      dark:text-gray-500
                    "
                  >
                    {category.skills.length} skills
                  </p>
                </div>
              </div>

              {/* ================= Skills ================= */}

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      cursor-default
                      rounded-full
                      border
                      border-gray-200
                      bg-white
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-gray-700
                      transition-all
                      duration-300
                      hover:border-blue-300
                      hover:bg-blue-50
                      hover:text-blue-600
                      dark:border-white/10
                      dark:bg-white/5
                      dark:text-gray-300
                      dark:hover:border-blue-500/30
                      dark:hover:bg-blue-500/10
                      dark:hover:text-blue-400
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= Bottom Statement ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mx-auto
            mt-12
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              text-sm
              leading-7
              text-gray-500
              dark:text-gray-500
            "
          >
            Constantly learning, experimenting, and
            improving my technical skills through
            real-world projects and problem solving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}