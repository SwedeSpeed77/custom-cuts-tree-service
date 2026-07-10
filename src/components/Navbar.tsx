"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#area", label: "Service Area" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#main-content"
          className="font-heading text-lg font-semibold tracking-tight"
        >
          Custom Cuts
          <span className="ml-2 hidden text-xs font-normal uppercase tracking-[0.18em] text-muted sm:inline">
            Watertown, SD
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <motion.a
            href="tel:+16058846393"
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12, ease: E }}
            className="min-h-[44px] rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-accent [touch-action:manipulation]"
          >
            (605) 884-6393
          </motion.a>
        </div>

        <motion.button
          type="button"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.12, ease: E }}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-ink md:hidden [touch-action:manipulation]"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: E }}
            className="border-t border-line/60 bg-bg/95 px-4 pb-6 pt-2 backdrop-blur-md md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block min-h-[44px] py-3 text-base font-medium text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <motion.a
              href="tel:+16058846393"
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12, ease: E }}
              className="mt-3 flex min-h-[48px] items-center justify-center rounded-full bg-primary px-5 text-base font-medium text-ink [touch-action:manipulation]"
            >
              Call (605) 884-6393
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
