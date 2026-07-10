"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const E = [0.23, 1, 0.32, 1] as [number, number, number, number];

const chips = [
  { x: 760, y: 34, r: 15, rot: 12 },
  { x: 800, y: 14, r: 12, rot: -18 },
  { x: 826, y: 46, r: 14, rot: 30 },
  { x: 786, y: -8, r: 10, rot: 60 },
  { x: 848, y: 20, r: 11, rot: -40 },
  { x: 812, y: 68, r: 9, rot: 5 },
  { x: 862, y: 52, r: 12, rot: -22 },
  { x: 742, y: 4, r: 8, rot: 45 },
];

export function WoodChipperAccent({ className }: { className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} aria-hidden="true" className={className}>
      <svg viewBox="0 0 900 260" className="h-full w-full overflow-visible">
        <ellipse cx="700" cy="235" rx="220" ry="14" fill="black" opacity="0.35" />

        <motion.g
          initial={{ x: -650, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.1, ease: E, delay: 0.15 }}
        >
          <g>
            <rect
              x="80"
              y="150"
              width="330"
              height="58"
              rx="29"
              fill="var(--color-accent)"
            />
            <rect
              x="80"
              y="150"
              width="330"
              height="58"
              rx="29"
              fill="none"
              stroke="black"
              strokeOpacity="0.15"
              strokeWidth="2"
            />
            <line x1="150" y1="158" x2="140" y2="200" stroke="black" strokeOpacity="0.18" strokeWidth="4" />
            <line x1="230" y1="154" x2="218" y2="204" stroke="black" strokeOpacity="0.18" strokeWidth="4" />
            <line x1="310" y1="158" x2="298" y2="200" stroke="black" strokeOpacity="0.18" strokeWidth="4" />
            <circle cx="392" cy="179" r="26" fill="var(--color-accent)" stroke="var(--color-bg)" strokeWidth="3" />
            <circle cx="392" cy="179" r="26" fill="none" stroke="black" strokeOpacity="0.15" strokeWidth="2" />
            <circle cx="392" cy="179" r="13" fill="none" stroke="var(--color-bg)" strokeWidth="2.5" />
            <circle cx="392" cy="179" r="4" fill="var(--color-bg)" />
          </g>
        </motion.g>

        <g>
          <polygon
            points="560,60 560,220 660,190 660,90"
            fill="var(--color-raised)"
            stroke="var(--color-gold)"
            strokeWidth="3"
          />
          <rect
            x="655"
            y="70"
            width="180"
            height="150"
            rx="16"
            fill="var(--color-primary)"
            stroke="var(--color-gold)"
            strokeWidth="3"
          />
          <rect
            x="760"
            y="0"
            width="70"
            height="110"
            rx="10"
            fill="var(--color-primary)"
            stroke="var(--color-gold)"
            strokeWidth="3"
            transform="rotate(-8 795 55)"
          />

          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 6, ease: "linear", repeat: Infinity }}
            style={{ transformOrigin: "705px 232px" }}
          >
            <circle cx="705" cy="232" r="22" fill="var(--color-bg)" stroke="var(--color-gold)" strokeWidth="4" />
            <line x1="705" y1="212" x2="705" y2="252" stroke="var(--color-gold)" strokeWidth="3" />
            <line x1="685" y1="232" x2="725" y2="232" stroke="var(--color-gold)" strokeWidth="3" />
          </motion.g>
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 6, ease: "linear", repeat: Infinity }}
            style={{ transformOrigin: "800px 232px" }}
          >
            <circle cx="800" cy="232" r="22" fill="var(--color-bg)" stroke="var(--color-gold)" strokeWidth="4" />
            <line x1="800" y1="212" x2="800" y2="252" stroke="var(--color-gold)" strokeWidth="3" />
            <line x1="780" y1="232" x2="820" y2="232" stroke="var(--color-gold)" strokeWidth="3" />
          </motion.g>
        </g>

        {chips.map((c, i) => (
          <motion.rect
            key={i}
            x={-c.r / 2}
            y={-c.r / 2}
            width={c.r}
            height={c.r * 0.6}
            rx="2"
            fill={i % 2 === 0 ? "var(--color-gold)" : "var(--color-accent)"}
            initial={{
              x: c.x - c.r / 2,
              y: c.y - c.r / 2,
              opacity: 0,
              rotate: c.rot,
            }}
            animate={
              inView
                ? {
                    x: c.x - c.r / 2 + 60 + i * 6,
                    y: c.y - c.r / 2 - 40 - (i % 3) * 12,
                    opacity: [0, 1, 1, 0],
                    rotate: c.rot + 140,
                  }
                : {}
            }
            transition={{
              duration: 1.6,
              delay: 0.9 + i * 0.08,
              ease: E,
              repeat: Infinity,
              repeatDelay: 2.2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
