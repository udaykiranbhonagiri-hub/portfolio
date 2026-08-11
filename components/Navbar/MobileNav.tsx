"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation } from "../../data/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* ================= Menu Button ================= */}

      <motion.button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        whileTap={{ scale: 0.9 }}
        aria-label={
          isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={isOpen}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          border
          border-white/10
          bg-white/5
          text-gray-300
          transition-colors
          duration-300
          hover:border-blue-500/40
          hover:bg-blue-500/10
          hover:text-blue-400
        "
      >
        {isOpen ? (
          <X size={22} />
        ) : (
          <Menu size={22} />
        )}
      </motion.button>

      {/* ================= Mobile Menu ================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              absolute
              left-0
              right-0
              top-full
              border-t
              border-white/10
              bg-gray-950/95
              px-6
              py-5
              shadow-2xl
              shadow-black/30
              backdrop-blur-xl
            "
          >
            <nav className="flex flex-col gap-2">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavigation}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-base
                    font-medium
                    text-gray-600 dark:text-gray-300
                    transition-colors
                    duration-300
                    bg-blue-600 dark:bg-blue-400
                    hover:bg-blue-500/10
                    hover:text-blue-400
                  "
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}