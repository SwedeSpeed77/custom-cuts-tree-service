"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LOG_START = -55;
const LOG_END = 128;

const chips = [
  { x: 188, y: 10, r: 5, threshold: 0.45 },
  { x: 199, y: 6, r: 4, threshold: 0.55 },
  { x: 205, y: 14, r: 4.5, threshold: 0.65 },
  { x: 194, y: 2, r: 3.5, threshold: 0.72 },
  { x: 210, y: 9, r: 4, threshold: 0.82 },
];

export function WoodChipperAccent({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const logRef = useRef<SVGGElement>(null);
  const chipRefs = useRef<(SVGPolygonElement | null)[]>([]);

  useEffect(() => {
    if (!wrapRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const trigger = wrapRef.current.closest("section") ?? wrapRef.current;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          const feed = Math.min(p / 0.6, 1);
          const x = LOG_START + (LOG_END - LOG_START) * feed;
          const shrink = 1 - (Math.max(p - 0.55, 0) / 0.45) * 0.85;
          gsap.set(logRef.current, {
            x,
            scaleX: Math.max(shrink, 0.15),
            opacity: p > 0.92 ? Math.max(1 - (p - 0.92) / 0.08, 0) : 1,
          });
          chipRefs.current.forEach((el, i) => {
            const c = chips[i];
            const local = Math.max(0, Math.min((p - c.threshold) / 0.15, 1));
            gsap.set(el, {
              opacity: local * 0.7,
              y: -local * 10,
            });
          });
        },
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} aria-hidden="true" className={className}>
      <svg viewBox="0 0 220 100" className="h-full w-full overflow-visible">
        <g ref={logRef} style={{ transformOrigin: "0px 55px" }}>
          <rect
            x="0"
            y="48"
            width="50"
            height="14"
            rx="7"
            fill="var(--color-accent)"
            opacity="0.55"
          />
          <circle
            cx="46"
            cy="55"
            r="6"
            fill="none"
            stroke="var(--color-bg)"
            strokeWidth="1"
            opacity="0.6"
          />
          <circle
            cx="46"
            cy="55"
            r="2.5"
            fill="none"
            stroke="var(--color-bg)"
            strokeWidth="0.8"
            opacity="0.6"
          />
        </g>

        <polygon
          points="128,28 128,82 155,72 155,38"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.4"
          opacity="0.5"
        />
        <rect
          x="155"
          y="35"
          width="45"
          height="45"
          rx="4"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.4"
          opacity="0.5"
        />
        <rect
          x="184"
          y="14"
          width="13"
          height="24"
          rx="2"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.4"
          opacity="0.5"
        />
        <circle
          cx="164"
          cy="84"
          r="5"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.2"
          opacity="0.4"
        />
        <circle
          cx="192"
          cy="84"
          r="5"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.2"
          opacity="0.4"
        />

        {chips.map((c, i) => (
          <polygon
            key={i}
            ref={(el) => {
              chipRefs.current[i] = el;
            }}
            points={`${c.x},${c.y - c.r} ${c.x + c.r},${c.y + c.r} ${c.x - c.r},${c.y + c.r}`}
            fill="var(--color-accent)"
            opacity="0"
          />
        ))}
      </svg>
    </div>
  );
}
