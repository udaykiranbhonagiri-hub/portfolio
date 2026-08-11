"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Trophy,
  Cpu,
  Award,
} from "lucide-react";

import { about } from "../../data/about";
import { fadeUp } from "../../lib/animations";

export default function About() {
  return (
    <section
      id="about"
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
      {/* ================= Background Glow ================= */}

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
          top-1/2
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
        {/* ================= Section Heading ================= */}

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
            About Me
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
            {about.title}
          </h2>

          <h3
            className="
              mt-4
              text-xl
              font-semibold
              text-blue-600
              dark:text-blue-400
            "
          >
            {about.subtitle}
          </h3>

          <p
            className="
              mt-6
              whitespace-pre-line
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
            "
          >
            {about.description}
          </p>
        </motion.div>

        {/* ================= Education + Experience ================= */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* ================= Education ================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              group
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-8
              shadow-lg
              shadow-gray-200/40
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-300
              hover:shadow-blue-500/10
              dark:border-white/10
              dark:bg-white/5
              dark:shadow-black/20
              dark:hover:border-blue-500/30
            "
          >
            {/* Icon */}

            <div
              className="
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-blue-500/10
                text-blue-600
                dark:text-blue-400
              "
            >
              <GraduationCap size={28} />
            </div>

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-blue-600
                dark:text-blue-400
              "
            >
              Education
            </p>

            <h3
              className="
                mt-3
                text-2xl
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              {about.education.degree}
            </h3>

            <p
              className="
                mt-4
                text-lg
                font-medium
                text-gray-700
                dark:text-gray-300
              "
            >
              {about.education.college}
            </p>

            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-3
              "
            >
              <span
                className="
                  rounded-full
                  border
                  border-gray-200
                  bg-gray-100
                  px-4
                  py-2
                  text-sm
                  text-gray-600
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-gray-400
                "
              >
                {about.education.duration}
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-blue-200
                  bg-blue-50
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-blue-600
                  dark:border-blue-500/20
                  dark:bg-blue-500/10
                  dark:text-blue-400
                "
              >
                CGPA: {about.education.cgpa}
              </span>
            </div>
          </motion.div>

          {/* ================= Experience ================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              group
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-8
              shadow-lg
              shadow-gray-200/40
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-purple-300
              hover:shadow-purple-500/10
              dark:border-white/10
              dark:bg-white/5
              dark:shadow-black/20
              dark:hover:border-purple-500/30
            "
          >
            {/* Icon */}

            <div
              className="
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-purple-500/10
                text-purple-600
                dark:text-purple-400
              "
            >
              <Briefcase size={28} />
            </div>

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-purple-600
                dark:text-purple-400
              "
            >
              Experience
            </p>

            <h3
              className="
                mt-3
                text-2xl
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              {about.experience.title}
            </h3>

            <p
              className="
                mt-4
                text-lg
                font-medium
                text-gray-700
                dark:text-gray-300
              "
            >
              {about.experience.company}
            </p>

            <p
              className="
                mt-2
                text-sm
                font-medium
                text-purple-600
                dark:text-purple-400
              "
            >
              {about.experience.duration}
            </p>

            <p
              className="
                mt-5
                leading-7
                text-gray-600
                dark:text-gray-400
              "
            >
              {about.experience.description}
            </p>
          </motion.div>
        </div>

        {/* ================= Statistics ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mt-8
            grid
            grid-cols-2
            gap-4
            md:grid-cols-4
          "
        >
          {about.stats.map((stat, index) => {
            const icons = [
              Code2,
              Trophy,
              Cpu,
              Award,
            ];

            const Icon = icons[index];

            return (
              <motion.div
                key={stat.label}
                whileHover={{
                  y: -5,
                }}
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  text-center
                  shadow-md
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
                <div
                  className="
                    mx-auto
                    mb-4
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-blue-600
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    dark:text-blue-400
                  "
                >
                  <Icon size={21} />
                </div>

                <p
                  className="
                    text-3xl
                    font-black
                    text-gray-900
                    dark:text-white
                  "
                >
                  {stat.number}
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}