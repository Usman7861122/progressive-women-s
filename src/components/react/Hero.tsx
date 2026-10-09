import { MotionConfig, motion } from 'framer-motion';
import PathDrawHeading from './PathDrawHeading';

interface Props {
  image: string;
  phone: string;
  rating: string;
  reviews: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ image, phone, rating, reviews }: Props) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate flex min-h-[100svh] items-end justify-center overflow-hidden bg-plum-950 text-pearl-50">
        <motion.img
          src={image}
          alt="A woman in a yoga pose, silhouetted against a pink and lilac sunset"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.8, ease }}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_40%]"
        />
        {/* Tints keep text readable on any photo */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-plum-950 via-plum-950/55 to-plum-950/10" />
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-plum-950/60 to-transparent" />

        <div className="wrap pb-16 pt-40 text-center md:pb-24">
          <PathDrawHeading start={0.6} />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="mx-auto mt-8 max-w-xl text-pretty text-lg text-pearl-50/85"
          >
            Gynecology and obstetrics with Dr. Asia Mohsin in Friendswood, Texas. In person or from home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="/#contact" className="shiny"><span>Book a telemedicine visit</span></a>
            <a href={`tel:${phone}`} className="btn btn-line">Call {phone}</a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="mt-8 text-sm text-pearl-50/70"
          >
            Rated {rating} out of 5 by {reviews} patients
          </motion.p>
        </div>
      </section>
    </MotionConfig>
  );
}
