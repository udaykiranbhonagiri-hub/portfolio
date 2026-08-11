"use client";

import { motion } from "framer-motion";

import { contact } from "../../data/contact";
import { fadeUp } from "../../lib/animations";

import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
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
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/5
          blur-[160px]
          dark:bg-blue-600/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-purple-500/5
          blur-[140px]
          dark:bg-purple-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
          h-96
          w-96
          rounded-full
          bg-cyan-500/5
          blur-[140px]
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
            Get In Touch
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
            {contact.title}
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
            {contact.subtitle}
          </p>
        </motion.div>

        {/* ================= Main Grid ================= */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* =====================================================
              LEFT SIDE
              ===================================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* ================= Availability ================= */}

            <div
              className="
                rounded-3xl
                border
                border-green-200
                bg-green-50
                p-6
                transition-colors
                duration-500
                dark:border-green-500/20
                dark:bg-green-500/10
              "
            >
              <div className="flex items-start gap-4">
                {/* Status Dot */}

                <div
                  className="
                    mt-1
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-green-500/10
                  "
                >
                  <span
                    className="
                      h-3
                      w-3
                      animate-pulse
                      rounded-full
                      bg-green-500
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      text-lg
                      font-bold
                      text-green-700
                      dark:text-green-400
                    "
                  >
                    {contact.availability.status}
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-green-700/70
                      dark:text-green-400/70
                    "
                  >
                    Usually responds in{" "}
                    {contact.availability.responseTime}
                  </p>
                </div>
              </div>
            </div>

            {/* ================= Contact Cards ================= */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contact.info.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-5
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
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-500/10
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Content */}

                  <div className="min-w-0">
                    <p
                      className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-gray-500
                        dark:text-gray-500
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-1
                        truncate
                        text-sm
                        font-medium
                        text-gray-800
                        transition-colors
                        duration-300
                        group-hover:text-blue-600
                        dark:text-gray-200
                        dark:group-hover:text-blue-400
                      "
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE
              ===================================================== */}

          <ContactForm />
        </div>
      </div>
    </section>
  );
}