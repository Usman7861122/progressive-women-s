import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

type Step = { title: string; text: string; img: string };

const ease = [0.4, 0, 0.2, 1] as const;

/**
 * List on the left, photo panel on the right. Hover (or focus, or tap) a step
 * and the photo changes. On phones the photo opens inside the step instead.
 */
export default function FirstVisitSteps({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);

  // Load every photo once, so the panel never flashes empty on hover.
  useEffect(() => {
    steps.forEach((s) => {
      const img = new Image();
      img.src = s.img;
    });
  }, [steps]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
        <ol className="flex flex-col gap-2 lg:self-center">
          {steps.map((s, i) => {
            const on = i === active;
            return (
              <li
                key={s.title}
                onMouseEnter={() => setActive(i)}
                className={`rounded-xl ring-1 transition-all duration-300 ${
                  on ? 'bg-pearl-50/[0.04] ring-pearl-50/70' : 'ring-transparent hover:ring-pearl-50/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-current={on ? 'step' : undefined}
                  className="flex w-full items-center gap-5 px-5 py-4 text-left"
                >
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full text-sm font-semibold transition-colors duration-300 ${
                      on ? 'bg-pearl-50 text-plum-900' : 'bg-plum-800 text-pearl-50/60'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`font-display text-[clamp(1.6rem,2.5vw,2.15rem)] font-light leading-tight transition-colors duration-300 ${
                      on ? 'text-pearl-50' : 'text-pearl-50/55'
                    }`}
                  >
                    {s.title}
                  </span>
                </button>

                {/* Phones: the step opens with its text and photo */}
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="overflow-hidden lg:hidden"
                    >
                      <p className="px-5 text-pearl-50/80">{s.text}</p>
                      <div className="mx-5 mb-5 mt-4 aspect-square overflow-hidden rounded-lg bg-plum-800">
                        <img src={s.img} alt="" className="h-full w-full object-cover" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ol>

        {/* Large screens: sticky photo panel */}
        <div className="sticky top-28 hidden lg:block" aria-live="polite">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-plum-800">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.35, ease }}
                className="absolute inset-0"
              >
                <img src={steps[active].img} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/85 via-plum-950/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="font-display text-3xl font-light text-pearl-50">{steps[active].title}</p>
                  <p className="mt-2 max-w-md text-pearl-50/80">{steps[active].text}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
