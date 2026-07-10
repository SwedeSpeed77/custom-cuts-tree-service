"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
          className="flex flex-col items-start gap-8 rounded-2xl border border-line/70 bg-surface p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Got a tree that needs to come down?
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Call Jake for a free quote — removal, pruning, stump grinding,
              or a whole lot cleared. Same-day turnaround on most jobs.
            </p>
          </div>

          <motion.a
            href="tel:+16058846393"
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.12, ease: E }}
            className="flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-primary px-10 text-base font-medium text-ink transition-colors hover:bg-accent [touch-action:manipulation]"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            (605) 884-6393
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
