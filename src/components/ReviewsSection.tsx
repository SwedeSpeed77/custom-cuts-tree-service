"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const reviews = [
  {
    name: "Tiffany W.",
    source: "BBB · July 2025",
    rating: 5,
    quote:
      "Wow! We 100% recommend Custom Cuts Tree Service! We had Jake remove 11 trees, grind the stumps and remove all of the debris. Jake worked tirelessly to get the work done and he completed everything in ONE DAY!! He was meticulous during clean up and you would never know we had a row of trees removed (besides the obvious bare spots). Thanks Jake for doing an amazing job!",
  },
];

export function ReviewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" ref={ref} className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            What Watertown says
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            A+ rated, 100% recommended
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06, ease: E }}
              className="rounded-xl border border-line/70 bg-surface p-6"
            >
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-muted">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-medium text-ink">
                {r.name}
                <span className="ml-2 font-normal text-muted">
                  {r.source}
                </span>
              </figcaption>
            </motion.figure>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16, ease: E }}
            className="flex flex-col justify-center rounded-xl border border-line/70 bg-raised p-6"
          >
            <p className="font-heading text-3xl font-semibold tracking-tight text-accent">
              5.0 / 5.0
            </p>
            <p className="mt-1 text-sm text-muted">
              Average rating across BBB and Facebook — 100% recommend on
              Facebook, A+ rating with the BBB.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
