"use client";

import { motion } from "framer-motion";

import { navigation } from "../../data/navigation";

export default function DesktopNav() {
  return (
    <nav className="flex items-center gap-8">
      {navigation.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={item.href}
            className="
              relative
              text-sm
              font-medium
              text-gray-600 dark:text-gray-300
              transition-colors
              duration-300
              bg-blue-600 dark:bg-blue-400
              hover:text-blue-400
            "
          >
            {item.label}
          </a>
        </motion.div>
      ))}
    </nav>
  );
}