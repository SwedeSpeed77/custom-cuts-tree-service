"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const hours = [
  { day: "Monday", time: "7:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "7:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 6:00 PM" },
  { day: "Thursday", time: "7:00 AM – 6:00 PM" },
  { day: "Friday", time: "7:00 AM – 6:00 PM" },
  { day: "Saturday", time: "7:00 AM – 6:00 PM" },
  { day: "Sunday", time: "7:00 AM – 6:00 PM" },
];

export function LocationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="area" ref={ref} className="border-t border-line/60 bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Service area
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Watertown, SD and the surrounding area
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Custom Cuts Tree Service is mobile — Jake comes to you. No shop
            to visit, just a truck, a saw, and a phone call away.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              />
              <p className="text-sm leading-relaxed text-muted">
                Based in Watertown, SD 57201 — serving Watertown and
                surrounding Codington County.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Phone
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              />
              <a
                href="tel:+16058846393"
                className="text-sm leading-relaxed text-muted transition-colors hover:text-ink"
              >
                (605) 884-6393
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
              />
              <div className="text-sm leading-relaxed text-muted">
                <p className="mb-1 text-ink">Open 7 days a week</p>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5">
                  {hours.map((h) => (
                    <div key={h.day} className="contents">
                      <dt className="text-muted">{h.day}</dt>
                      <dd className="[font-variant-numeric:tabular-nums]">
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: E }}
          className="overflow-hidden rounded-xl border border-line/70"
        >
          <iframe
            title="Custom Cuts Tree Service coverage area — Watertown, SD"
            src="https://maps.google.com/maps?q=44.899409,-97.115073&z=11&output=embed"
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
