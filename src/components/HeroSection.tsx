"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { WoodChipperAccent } from "@/components/WoodChipperAccent";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60rem 40rem at 85% 0%, oklch(30% 0.1 55 / 0.35), transparent 60%), radial-gradient(50rem 34rem at 0% 100%, oklch(28% 0.09 155 / 0.55), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: E }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold sm:mb-6"
        >
          Owner-operated · Watertown, South Dakota
        </motion.p>

        <h1 className="max-w-[22ch] font-heading text-[3.4rem] font-bold leading-[0.88] tracking-tight sm:text-[5.5rem] lg:text-[7.5rem] xl:text-[8.5rem]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease: E }}
            className="block"
          >
            Down to
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: E }}
            className="block"
          >
            the stump.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: E }}
            className="block text-accent"
          >
            Done in a day.
          </motion.span>
        </h1>

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease: E }}
            className="max-w-md text-lg leading-relaxed text-muted"
          >
            Jake Brower runs every job himself — tree removal, pruning, and
            stump grinding across Watertown, SD. Big jobs finish fast, and
            the cleanup is meticulous every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: E }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href="tel:+16058846393"
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12, ease: E }}
              className="flex min-h-[56px] items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-ink transition-colors hover:bg-accent [touch-action:manipulation]"
            >
              Call for a free quote — (605) 884-6393
            </motion.a>
            <motion.a
              href="#services"
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12, ease: E }}
              className="flex min-h-[56px] items-center justify-center rounded-full border border-line px-8 text-base font-semibold text-ink transition-colors hover:border-muted [touch-action:manipulation]"
            >
              See what we do
            </motion.a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55, ease: E }}
          className="mt-8 flex items-center gap-2 text-sm text-muted"
        >
          <Star aria-hidden="true" className="h-4 w-4 fill-gold text-gold" />
          A+ BBB rating · 100% recommend rating on Facebook
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: E }}
        className="relative mt-6 h-[26vh] min-h-[220px] w-full sm:h-[32vh] sm:min-h-[280px] lg:h-[40vh] lg:min-h-[360px]"
      >
        <WoodChipperAccent className="h-full w-full" />
      </motion.div>
    </section>
  );
}
