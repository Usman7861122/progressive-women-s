import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { site } from '../../data/site';
import { navEntries, type NavEntry } from './nav-menu-data';

export default function Header({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const clear = overHero && !scrolled && !open;

  return (
    <MotionConfig reducedMotion="user">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          open ? 'bg-plum-950 text-pearl-50' : clear ? 'bg-transparent text-pearl-50' : 'bg-pearl-50/92 text-ink shadow-[0_1px_0_var(--color-pearl-200)] backdrop-blur-md'
        }`}
      >
        <div className="wrap flex items-center justify-between py-3">
          <a href="/" aria-label={`${site.name} home`} className="shrink-0">
            <img
              src="/images/logo.png"
              alt={site.name}
              width={455}
              height={197}
              className={`h-14 w-auto transition-[filter] duration-500 md:h-16 ${clear || open ? 'brightness-0 invert' : ''}`}
            />
          </a>

          <nav className="hidden items-center lg:flex" aria-label="Main" onMouseLeave={() => setOpenMenu(null)}>
            <ul className="flex items-center">
              {navEntries.map((n) => (
                <DesktopItem
                  key={n.id}
                  entry={n}
                  isOpen={openMenu === n.id}
                  highlighted={hoverId === n.id || openMenu === n.id}
                  onOpen={() => setOpenMenu(n.menus ? n.id : null)}
                  onHover={(v) => setHoverId(v ? n.id : null)}
                  onClose={() => setOpenMenu(null)}
                />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${site.phoneInfo}`} className="hidden whitespace-nowrap text-sm font-medium 2xl:inline">
              Call {site.phoneInfo}
            </a>
            <a
              href={site.bookingUrl}
              className={`btn hidden whitespace-nowrap !px-5 !py-2.5 !text-[0.8rem] sm:inline-flex ${clear ? 'btn-light' : 'btn-solid'}`}
            >
              Request an appointment
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-7">
                <span className={`absolute left-0 h-px w-7 bg-current transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-3.5 h-px w-7 bg-current transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-plum-950 px-8 pb-8 pt-28 text-pearl-50"
          >
            <nav className="flex max-h-[62vh] flex-col gap-1 overflow-y-auto" aria-label="Mobile">
              {navEntries.map((n, i) => (
                <motion.div
                  key={n.id}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  {n.menus ? (
                    <>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-2 text-left font-display text-4xl font-light"
                        aria-expanded={mobileOpen === n.id}
                        onClick={() => setMobileOpen(mobileOpen === n.id ? null : n.id)}
                      >
                        {n.label}
                        <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${mobileOpen === n.id ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileOpen === n.id && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-1"
                          >
                            {n.menus.flatMap((g) => g.items).map((item) => (
                              <li key={item.href + item.label}>
                                <a href={item.href} onClick={() => setOpen(false)} className="block py-1.5 text-base text-orchid-200">
                                  {item.label}
                                </a>
                              </li>
                            ))}
                            {n.all && (
                              <li>
                                <a href={n.all.href} onClick={() => setOpen(false)} className="block py-1.5 text-base font-medium text-champagne">
                                  {n.all.label} →
                                </a>
                              </li>
                            )}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a href={n.href} onClick={() => setOpen(false)} className="block py-2 font-display text-4xl font-light">
                      {n.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>
            <a href={site.bookingUrl} onClick={() => setOpen(false)} className="btn btn-light mt-10 self-start">
              Request an appointment
            </a>
            <a href="/pay-bill" onClick={() => setOpen(false)} className="mt-6 text-orchid-200 underline underline-offset-4">
              Pay my bill
            </a>
            <a href={`tel:${site.phoneInfo}`} className="mt-3 text-orchid-200">
              {site.phoneInfo}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

function DesktopItem({
  entry,
  isOpen,
  highlighted,
  onOpen,
  onHover,
  onClose,
}: {
  entry: NavEntry;
  isOpen: boolean;
  highlighted: boolean;
  onOpen: () => void;
  onHover: (v: boolean) => void;
  onClose: () => void;
}) {
  const hasMenu = !!entry.menus;
  const pill = highlighted && (
    <motion.span
      layoutId="nav-pill"
      className="absolute inset-0 -z-10 rounded-full bg-orchid-600/10"
      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
    />
  );
  return (
    <li
      className="relative"
      onMouseEnter={() => {
        onHover(true);
        onOpen();
      }}
      onMouseLeave={() => onHover(false)}
    >
      {hasMenu ? (
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={() => (isOpen ? onClose() : onOpen())}
          className="group relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium"
        >
          {pill}
          {entry.label}
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      ) : (
        <a href={entry.href} className="relative flex items-center rounded-full px-4 py-2 text-sm font-medium">
          {pill}
          {entry.label}
        </a>
      )}

      <AnimatePresence>
        {isOpen && entry.menus && (
          <div className="absolute left-0 top-full pt-3">
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              className="w-max max-w-[min(92vw,56rem)] rounded-2xl border border-pearl-200 bg-pearl-50 p-6 text-ink shadow-[0_24px_60px_-20px_rgba(38,13,45,0.35)]"
            >
              <div className="flex gap-10">
                {entry.menus.map((group) => (
                  <div key={group.title} className="min-w-[13rem]">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{group.title}</h3>
                    <ul className="space-y-4">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.href + item.label}>
                            <a href={item.href} onClick={onClose} className="group flex items-start gap-3">
                              <span className="grid size-9 shrink-0 place-items-center rounded-md border border-pearl-200 text-orchid-700 transition-colors duration-300 group-hover:border-orchid-600 group-hover:bg-orchid-600 group-hover:text-pearl-50">
                                <Icon className="h-[18px] w-[18px]" />
                              </span>
                              <span className="block max-w-[15rem] leading-5">
                                <span className="block text-sm font-medium text-plum-900">{item.label}</span>
                                {item.description && (
                                  <span className="line-clamp-1 block text-xs text-muted transition-colors duration-300 group-hover:text-ink">
                                    {item.description}
                                  </span>
                                )}
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
              {entry.all && (
                <div className="mt-6 border-t border-pearl-200 pt-4">
                  <a href={entry.all.href} onClick={onClose} className="link-u text-sm font-medium text-orchid-700">
                    {entry.all.label} →
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </li>
  );
}
