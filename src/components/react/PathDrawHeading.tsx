import { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { headingSingle, headingStacked, headingText } from '../../data/heading-paths';

type Layout = { width: number; height: number; glyphs: string[] };

const ease = [0.65, 0, 0.35, 1] as const;

/**
 * Draws a heading letter by letter like a pen, then fills it in.
 * Outlines come from Manrope SemiBold, with overlaps merged for clean edges (see scripts/generate-heading-paths.mjs),
 * so it looks the same on every device. Colours follow the brand: champagne line, pearl fill.
 */
function Drawn({ layout, className, start, stagger }: { layout: Layout; className: string; start: number; stagger: number }) {
  const id = useId().replace(/:/g, '');
  const reduce = useReducedMotion();
  const drawTime = 1.1;
  const fillAt = start + (layout.glyphs.length - 1) * stagger + drawTime * 0.65;

  return (
    <svg
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`g-${id}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={layout.width} y2="0">
          <stop offset="0%" stopColor="#c9a66b" />
          <stop offset="55%" stopColor="#f3dfc0" />
          <stop offset="100%" stopColor="#e8c3ea" />
        </linearGradient>
      </defs>
      {layout.glyphs.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={`url(#g-${id})`}
          strokeWidth={0.8}
          strokeLinejoin="round"
          fill="#fbf8fb"
          initial={reduce ? false : { pathLength: 0, opacity: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, opacity: 1, fillOpacity: 1 }}
          transition={{
            pathLength: { duration: drawTime, delay: start + i * stagger, ease },
            opacity: { duration: 0.01, delay: start + i * stagger },
            fillOpacity: { duration: 1.2, delay: fillAt, ease: 'easeOut' },
          }}
        />
      ))}
    </svg>
  );
}

export default function PathDrawHeading({ start = 0.5 }: { start?: number }) {
  return (
    <h1 className="mx-auto w-full max-w-6xl">
      <span className="sr-only">{headingText}</span>
      {/* Phones: two lines so the letters stay large */}
      <Drawn layout={headingStacked} className="mx-auto block w-full max-w-md sm:hidden" start={start} stagger={0.1} />
      {/* Larger screens: one line */}
      <Drawn layout={headingSingle} className="mx-auto hidden w-full sm:block" start={start} stagger={0.085} />
    </h1>
  );
}
