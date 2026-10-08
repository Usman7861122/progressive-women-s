import { useEffect, useRef, useState } from 'react';
import { MotionConfig, motion, useInView, useScroll, useTransform } from 'framer-motion';

type Props = { main: string; second: string; rating: string; reviews: number; reviewsUrl: string };

function CountUp({ to, decimals = 0, suffix = '' }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setV(to);
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / 1600);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>;
}

export default function WelcomeCollage({ main, second, rating, reviews, reviewsUrl }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: box, offset: ['start end', 'end start'] });
  const yMain = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const ySecond = useTransform(scrollYProgress, [0, 1], [-30, 40]);
  const yCard = useTransform(scrollYProgress, [0, 1], [10, -36]);

  const text = 'CLINICAL EXCELLENCE • COMPASSIONATE CARE •';
  return (
    <MotionConfig reducedMotion="user">
      <div ref={box} className="relative mx-auto w-full max-w-[34rem] pb-16 pr-10 pt-6 lg:mx-0">
        {/* offset outline frame */}
        <div className="absolute left-6 top-0 h-[78%] w-[78%] rounded-lg border border-champagne/60" aria-hidden="true" />

        <motion.div style={{ y: yMain }} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[4/5] overflow-hidden rounded-lg bg-pearl-200 shadow-[0_30px_70px_-30px_rgba(38,13,45,0.5)]"
          >
            <img src={main} alt="Dr. Asia Mohsin smiling outdoors in a white coat" width={299} height={450} loading="lazy" className="h-full w-full object-cover object-top" />
          </motion.div>
        </motion.div>

        {/* second photo */}
        <motion.div
          style={{ y: ySecond }}
          className="absolute -bottom-2 right-0 w-[44%]"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[231/200] overflow-hidden rounded-lg border-[6px] border-pearl-50 bg-pearl-200 shadow-[0_24px_50px_-24px_rgba(38,13,45,0.55)]"
          >
            <img src={second} alt="A gentle conversation during a consultation" width={231} height={200} loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
        </motion.div>

        {/* floating rating card */}
        <motion.div
          style={{ y: yCard }}
          className="absolute -left-3 top-[58%] sm:-left-8"
        >
          <motion.a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Rated ${rating} out of 5 from ${reviews} patient reviews. Read our Google reviews (opens in a new tab)`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -3 }}
            className="group block rounded-lg border border-white/70 bg-pearl-50/80 px-5 py-4 shadow-[0_20px_40px_-20px_rgba(38,13,45,0.45)] backdrop-blur-md transition-shadow hover:shadow-[0_26px_46px_-18px_rgba(38,13,45,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orchid-600"
          >
            <div className="flex items-center gap-1 text-champagne" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6L10 15l-5.3 3 1.1-6L1.4 7.8l6-.8z" /></svg>
              ))}
            </div>
            <p className="mt-1 font-display text-4xl leading-none text-plum-900">
              <CountUp to={Number(rating)} decimals={1} />
            </p>
            <p className="mt-1 text-xs text-muted">from {reviews} patient reviews</p>
            <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-orchid-700">
              <span className="border-b border-orchid-700/40 group-hover:border-orchid-700">Read Google reviews</span>
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </p>
          </motion.a>
        </motion.div>

        {/* rotating badge */}
        <div className="absolute -top-2 right-2 hidden size-28 sm:block" aria-hidden="true">
          <div className="absolute inset-0 rounded-full bg-pearl-50/90 shadow-[0_12px_30px_-14px_rgba(38,13,45,0.5)] backdrop-blur" />
          <svg viewBox="0 0 120 120" className="absolute inset-0 animate-[spin_28s_linear_infinite] motion-reduce:animate-none">
            <defs><path id="wc-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" /></defs>
            <text className="fill-orchid-700" style={{ fontSize: 8.6, fontWeight: 600 }}>
              <textPath href="#wc-circle" textLength="268" lengthAdjust="spacing">{text}</textPath>
            </text>
          </svg>
          <svg viewBox="0 0 24 24" className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 fill-none stroke-orchid-600" strokeWidth="1.4">
            <path d="M12 21s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.600-9 9-9 9z" />
          </svg>
        </div>
      </div>
    </MotionConfig>
  );
}
