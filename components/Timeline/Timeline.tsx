"use client";

import { motion } from "framer-motion";

import { timeline } from "../../data/timeline";
import { fadeUp } from "../../lib/animations";

export default function Timeline() {
  return (
    <section
      id="timeline"
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
          top-1/3
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
          bottom-20
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
          max-w-5xl
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
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
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
            My Journey
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
            Experience & Journey
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
            A timeline of my learning, projects,
            technical growth, and future goals.
          </p>
        </motion.div>

        {/* ================= Timeline ================= */}

        <div className="relative">
          {/* Center Line */}

          <div
            className="
              absolute
              bottom-0
              left-5
              top-0
              w-px
              bg-gradient-to-b
              from-blue-500
              via-purple-500
              to-transparent
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* Timeline Items */}

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="
                    relative
                    grid
                    md:grid-cols-2
                    md:gap-12
                  "
                >
                  {/* ================= Left Side ================= */}

                  <div
                    className={`
                      ${
                        isLeft
                          ? "md:pr-12"
                          : "md:order-2 md:pl-12"
                      }
                    `}
                  >
                    <TimelineCard item={item} />
                  </div>

                  {/* ================= Right Empty Side ================= */}

                  <div
                    className={`
                      hidden
                      md:block
                      ${
                        isLeft
                          ? ""
                          : "md:order-1"
                      }
                    `}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Timeline Card
   ========================================================= */

function TimelineCard({
  item,
}: {
  item: {
    year: string;
    title: string;
    description: string;
    icon: string;
  };
}) {
  return (
    <div className="relative pl-12 md:pl-0">
      {/* ================= Timeline Dot ================= */}

      <div
        className="
          absolute
          left-[10px]
          top-6
          z-20
          flex
          h-10
          w-10
          -translate-x-1/2
          items-center
          justify-center
          rounded-full
          border-4
          border-white
          bg-blue-600
          text-lg
          shadow-lg
          shadow-blue-500/30
          dark:border-gray-950
        "
      >
        {item.icon}
      </div>

      {/* ================= Card ================= */}

      <motion.div
        whileHover={{
          y: -5,
        }}
        className="
          group
          rounded-2xl
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
        {/* Year */}

        <div
          className="
            inline-flex
            rounded-full
            border
            border-blue-200
            bg-blue-50
            px-3
            py-1
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-blue-600
            dark:border-blue-500/20
            dark:bg-blue-500/10
            dark:text-blue-400
          "
        >
          {item.year}
        </div>

        {/* Title */}

        <h3
          className="
            mt-4
            text-xl
            font-bold
            text-gray-900
            dark:text-white
          "
        >
          {item.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            text-sm
            leading-7
            text-gray-600
            dark:text-gray-400
          "
        >
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}