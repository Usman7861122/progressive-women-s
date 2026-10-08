import { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

type Review = { quote: string; who: string };

const Star = () => (
  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-champagne" aria-hidden="true">
    <path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6L10 15.1 4.7 18l1.1-6L1.4 7.800l6-.8z" />
  </svg>
);

export default function Testimonials({ items, rating, count }: { items: Review[]; rating: string; count: number }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const go = (n: number) => {
    setDir(n > i ? 1 : -1);
    setI((n + items.length) % items.length);
  };
  const r = items[i];

  return (
    <MotionConfig reducedMotion="user">
      <div className="mx-auto max-w-4xl text-center" role="region" aria-roledescription="carousel" aria-label="Patient reviews">
        <div className="flex items-center justify-center gap-3 text-sm text-pearl-50/70">
          <span className="flex gap-0.5" aria-hidden="true">{[0, 1, 2, 3, 4].map((n) => <Star key={n} />)}</span>
          <span>{rating} out of 5 from {count} reviews</span>
        </div>

        <div className="relative mt-10 min-h-[17rem] overflow-hidden md:min-h-[15rem]" aria-live="polite">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-display text-[clamp(2rem,4.6vw,3.9rem)] font-light italic leading-[1.1] text-balance">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm text-orchid-200">{r.who}</figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <button type="button" onClick={() => go(i - 1)} aria-label="Previous review" className="grid h-12 w-12 place-items-center rounded-full border border-pearl-50/30 transition-colors hover:bg-pearl-50/10">
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.5"><path d="M12 4l-6 6 6 6" /></svg>
          </button>
          <div className="flex gap-2" role="group" aria-label="Choose a review">
            {items.map((_, n) => (
              <button
                key={n}
                type="button"
                onClick={() => go(n)}
                aria-label={`Review ${n + 1} of ${items.length}`}
                aria-current={n === i}
                className={`h-2 rounded-full transition-all duration-300 ${n === i ? 'w-8 bg-champagne' : 'w-2 bg-pearl-50/30 hover:bg-pearl-50/60'}`}
              />
            ))}
          </div>
          <button type="button" onClick={() => go(i + 1)} aria-label="Next review" className="grid h-12 w-12 place-items-center rounded-full border border-pearl-50/30 transition-colors hover:bg-pearl-50/10">
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.5"><path d="M8 4l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </MotionConfig>
  );
}
