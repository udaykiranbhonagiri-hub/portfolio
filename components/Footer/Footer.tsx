"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { footer } from "../../data/footer";
import { fadeUp } from "../../lib/animations";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: Mail,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-gray-200
        bg-white
        text-gray-900
        transition-colors
        duration-500
        dark:border-white/10
        dark:bg-gray-950
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
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-blue-500/5
          blur-[140px]
          dark:bg-blue-500/10
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-16
          lg:px-10
        "
      >
        {/* ================= Main Footer ================= */}

        <div
          className="
            grid
            gap-12
            md:grid-cols-[1.2fr_1fr_1fr]
          "
        >
          {/* ================= Brand ================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <a
              href="#home"
              className="
                inline-block
                text-3xl
                font-black
                tracking-tight
                text-gray-900
                transition-colors
                duration-300
                hover:text-blue-600
                dark:text-white
                dark:hover:text-blue-400
              "
            >
              {footer.name}
              <span className="text-blue-600 dark:text-blue-400">
                .
              </span>
            </a>

            <p
              className="
                mt-3
                text-sm
                font-medium
                text-blue-600
                dark:text-blue-400
              "
            >
              {footer.role}
            </p>

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-7
                text-gray-600
                dark:text-gray-400
              "
            >
              {footer.description}
            </p>
          </motion.div>

          {/* ================= Navigation ================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-900
                dark:text-white
              "
            >
              Navigation
            </h3>

            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    text-sm
                    text-gray-600
                    transition-colors
                    duration-300
                    hover:text-blue-600
                    dark:text-gray-400
                    dark:hover:text-blue-400
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* ================= Socials ================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-900
                dark:text-white
              "
            >
              Connect
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {footer.socials.map((social) => {
                const Icon =
                  socialIcons[
                    social.icon as keyof typeof socialIcons
                  ];

                if (!Icon) {
                  return null;
                }

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    title={social.label}
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      text-gray-600
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-300
                      hover:bg-blue-50
                      hover:text-blue-600
                      dark:border-white/10
                      dark:bg-white/5
                      dark:text-gray-400
                      dark:hover:border-blue-500/30
                      dark:hover:bg-blue-500/10
                      dark:hover:text-blue-400
                    "
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ================= Divider ================= */}

        <div
          className="
            my-10
            h-px
            bg-gray-200
            dark:bg-white/10
          "
        />

        {/* ================= Bottom ================= */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-500
            "
          >
            {footer.copyright}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              px-4
              py-2
              text-sm
              font-medium
              text-gray-600
              transition-all
              duration-300
              hover:border-blue-300
              hover:bg-blue-50
              hover:text-blue-600
              dark:border-white/10
              dark:bg-white/5
              dark:text-gray-400
              dark:hover:border-blue-500/30
              dark:hover:bg-blue-500/10
              dark:hover:text-blue-400
            "
          >
            Back to top

            <ArrowUp
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />
          </button>
        </div>
      </div>
    </footer>
  );
}