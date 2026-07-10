"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const stats = [
  { value: "4+", label: "Years serving Watertown" },
  { value: "A+", label: "BBB rating" },
  { value: "100%", label: "Recommend rating, Facebook" },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Our story
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            One guy, one saw, and a reputation built job by job
          </h2>
          <div className="mt-6 space-y-5 leading-relaxed text-muted">
            <p>
              Jake Brower started Custom Cuts Tree Service in March 2022 with
              a truck, a chainsaw, and a stump grinder — no crew, no
              subcontractors, just him showing up and doing the work himself.
            </p>
            <p>
              Word got around Watertown fast. Homeowners with a whole row of
              trees to clear, storm damage that needed handling before the
              next system rolled in, lots that needed opening up — Jake took
              the calls and got it done, usually faster than people expected.
            </p>
            <p>
              The reputation is simple: show up, do the job right, leave the
              yard cleaner than you'd think a tree ever stood there. That's
              the whole business.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: E }}
            className="overflow-hidden rounded-xl border border-line/70"
          >
            <img
              src="/hero/forest-stump.jpg"
              alt="A freshly cut tree stump in a cleared yard"
              className="h-56 w-full object-cover sm:h-64"
            />
          </motion.div>

          <div className="grid grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: E }}
                className="rounded-xl border border-line/70 bg-bg p-4"
              >
                <p className="font-heading text-2xl font-semibold tracking-tight text-accent [font-variant-numeric:tabular-nums] sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
