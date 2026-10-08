import { useState, type FormEvent } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const field =
  'w-full border-0 border-b border-plum-900/25 bg-transparent px-0 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-orchid-600 focus:outline-none focus:ring-0';
const label = 'mb-1 block text-sm font-medium text-plum-800';

export default function ContactForm({ phone }: { phone: string }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const next: Record<string, string> = {};
    if (!data.name?.trim()) next.name = 'Enter your name.';
    if (!data.phone?.trim() && !data.email?.trim()) next.phone = 'Enter a phone number or an email so we can reach you.';
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) next.email = 'Enter an email like name@example.com.';
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus('sending');
    const endpoint = import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Request failed');
      } else if (import.meta.env.DEV) {
        await new Promise((r) => setTimeout(r, 700)); // preview only
      } else {
        throw new Error('No form endpoint set');
      }
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        {status === 'sent' ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[28rem] flex-col justify-center"
            role="status"
          >
            <h3 className="font-display text-4xl font-light text-plum-900">Request sent</h3>
            <p className="mt-4 max-w-sm text-muted">Thank you. Our team will contact you soon to confirm your visit. For urgent needs, call {phone}.</p>
            <button type="button" onClick={() => setStatus('idle')} className="link-u mt-8 self-start text-sm font-semibold text-orchid-600">Send another request</button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-6">
            <div>
              <label htmlFor="f-name" className={label}>Full name</label>
              <input id="f-name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'e-name' : undefined} />
              {errors.name && <p id="e-name" className="mt-1 text-sm text-orchid-700">{errors.name}</p>}
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="f-phone" className={label}>Phone</label>
                <input id="f-phone" name="phone" type="tel" autoComplete="tel" className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'e-phone' : undefined} />
                {errors.phone && <p id="e-phone" className="mt-1 text-sm text-orchid-700">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="f-email" className={label}>Email</label>
                <input id="f-email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'e-email' : undefined} />
                {errors.email && <p id="e-email" className="mt-1 text-sm text-orchid-700">{errors.email}</p>}
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="f-type" className={label}>Visit type</label>
                <select id="f-type" name="visit" className={field} defaultValue="in-person">
                  <option value="in-person">In-person visit</option>
                  <option value="virtual">Virtual visit</option>
                  <option value="second-opinion">Second opinion</option>
                </select>
              </div>
              <div>
                <label htmlFor="f-time" className={label}>Best time to reach you</label>
                <select id="f-time" name="time" className={field} defaultValue="any">
                  <option value="any">Any time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="f-msg" className={label}>How can we help?</label>
              <textarea id="f-msg" name="message" rows={3} className={`${field} resize-none`} />
              <p className="mt-1 text-xs text-muted">Please do not include private medical details. We will talk about them at your visit.</p>
            </div>

            <div>
              <button type="submit" disabled={status === 'sending'} className="btn btn-solid disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : 'Request appointment'}
              </button>
              {status === 'error' && (
                <p role="alert" className="mt-4 text-sm text-orchid-700">
                  We could not send your request. Please call us at <a className="underline" href={`tel:${phone}`}>{phone}</a>.
                </p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
