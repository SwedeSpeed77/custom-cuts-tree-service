"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WoodChipperAccent } from "@/components/WoodChipperAccent";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const jobs = [
  {
    name: "Tree Removal",
    note: "Full removal of hazard trees, storm damage, or anything too far gone to save — dropped safely and hauled away.",
    tag: "Most requested",
  },
  {
    name: "Stump Grinding",
    note: "Ground flush below grade so there's nothing left to mow around or trip over.",
    tag: "Clean finish",
  },
  {
    name: "Pruning & Trimming",
    note: "Shape, thin, and clear branches away from your roofline, power lines, and driveway.",
    tag: "Tree health",
  },
  {
    name: "Storm Cleanup",
    note: "Fast response after wind and ice storms — downed limbs and split trunks cleared quick.",
    tag: "Fast response",
  },
  {
    name: "Lot & Land Clearing",
    note: "Overgrown lots and tree lines cleared for new construction, pasture, or a fresh start.",
    tag: "Land clearing",
  },
  {
    name: "Debris Haul-Away",
    note: "Every branch, chip, and log hauled off site — your yard looks like we were never there.",
    tag: "Full cleanup",
  },
];

const highlights = [
  {
    title: "Same-day turnaround",
    body: "Eleven trees, stumps ground, debris gone — whole rows have been cleared in a single day.",
  },
  {
    title: "Owner on every job",
    body: "Jake Brower runs the saw and the cleanup himself — no subcontractors, no crew you've never met.",
  },
  {
    title: "Meticulous cleanup",
    body: "You'd be hard pressed to tell a tree ever stood there — besides the extra sunlight.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden border-t border-line/60"
    >
      <WoodChipperAccent className="pointer-events-none absolute right-4 top-6 hidden h-16 w-36 sm:block sm:right-6 sm:top-8 lg:h-20 lg:w-44" />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            What we do
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Every job, from one tree to a whole lot
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Jake handles it start to finish — the cutting, the grinding, and
            hauling every last branch off your property.
          </p>
        </motion.div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((d, i) => (
            <motion.li
              key={d.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: E }}
              className="group rounded-xl border border-line/70 bg-surface p-6 transition-colors hover:border-primary/60"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                {d.tag}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">
                {d.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {d.note}
              </p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line/70 bg-line/70 sm:grid-cols-3">
          {highlights.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: E }}
              className="bg-raised p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
