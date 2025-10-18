"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const FloatingNav = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navItems = [
    { href: "/work", label: "Work", active: pathname.startsWith("/work") },
    { href: "/story", label: "Story", active: pathname === "/story" },
    { href: "/connect", label: "Connect", active: pathname === "/connect" },
  ];

  if (isHome) return null;

  return (
    <motion.nav
      className="fixed top-6 left-6 z-50 flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back/Home button */}
      <Link
        href="/"
        className="px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-200 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-900 transition-all hover:scale-110 text-sm font-medium"
        aria-label="Back to home"
      >
        {pathname.includes("/work/") ? "← Back" : "← Home"}
      </Link>

      {/* Nav dots */}
      {!pathname.includes("/work/") && (
        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-full border border-gray-200 dark:border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-3 py-1.5"
              aria-label={item.label}
            >
              <span
                className={`text-sm font-medium transition-colors ${
                  item.active
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400"
                }`}
              >
                {item.label}
              </span>
              {item.active && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-gray-100"
                  layoutId="activeNav"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default FloatingNav;

