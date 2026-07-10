"use client";

import { motion } from "framer-motion";
import { Star, TreePine } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(52rem 34rem at 82% 12%, oklch(28% 0.07 155 / 0.5), transparent 68%), radial-gradient(40rem 28rem at 8% 92%, oklch(30% 0.09 55 / 0.35), transparent 70%)",
        }}
      />
      <TreePine
        aria-hidden="true"
        strokeWidth={0.6}
        className="pointer-events-none absolute -right-20 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 select-none text-ink/[0.04] lg:block"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-32 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: E }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-gold"
        >
          Owner-operated · Watertown, South Dakota
        </motion.p>

        <h1 className="max-w-3xl font-heading text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: E }}
            className="block"
          >
            Down to the stump.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: E }}
            className="block text-accent"
          >
            Done in a day.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: E }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          Jake Brower runs every job himself — tree removal, pruning, and
          stump grinding across Watertown, SD. Big jobs finish fast, and the
          cleanup is meticulous every time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: E }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <motion.a
            href="tel:+16058846393"
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12, ease: E }}
            className="flex min-h-[52px] items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-ink transition-colors hover:bg-accent [touch-action:manipulation]"
          >
            Call for a free quote — (605) 884-6393
          </motion.a>
          <motion.a
            href="#services"
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12, ease: E }}
            className="flex min-h-[52px] items-center justify-center rounded-full border border-line px-8 text-base font-medium text-ink transition-colors hover:border-muted [touch-action:manipulation]"
          >
            See what we do
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55, ease: E }}
          className="mt-10 flex items-center gap-2 text-sm text-muted"
        >
          <Star aria-hidden="true" className="h-4 w-4 fill-gold text-gold" />
          A+ BBB rating · 100% recommend rating on Facebook
        </motion.p>
      </div>
    </section>
  );
}
