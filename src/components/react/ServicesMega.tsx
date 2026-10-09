import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { slugify, type Item, type SpecialtyPage } from '../../data/specialty-pages';

const text = (i: Item) => (typeof i === 'string' ? i : i.text);

// Tabbed mega menu. The left rail lists every service; the right side shows that
// service's own categories and items, worded exactly as on its page.
export default function ServicesMega({ pages, onClose }: { pages: SpecialtyPage[]; onClose: () => void }) {
  const [active, setActive] = useState(pages[0].slug);
  const p = pages.find((x) => x.slug === active) ?? pages[0];
  const link = (hash?: string) => `/${p.slug}${hash ? `#${hash}` : ''}`;

  const sections: { title: string; items: { label: string; sub?: string[] }[]; chips?: boolean }[] = [];
  if (p.cards) sections.push({ title: p.cards.title, items: p.cards.items.map((c) => ({ label: c.title })) });
  (p.groups ?? []).forEach((g) =>
    sections.push({
      title: g.title,
      items: g.items.map((i) => (typeof i === 'string' ? { label: i } : { label: i.text, sub: i.sub })),
    }),
  );
  if (p.chips) sections.push({ title: p.chips.title, items: p.chips.items.map((c) => ({ label: c })) });

  return (
    <div className="grid w-full grid-cols-[15rem_1fr] overflow-hidden rounded-2xl border border-pearl-200 bg-pearl-50 text-ink shadow-[0_24px_60px_-20px_rgba(38,13,45,0.35)]">
      <ul className="bg-pearl-100 p-3" role="tablist" aria-label="Services">
        {pages.map((s) => (
          <li key={s.slug}>
            <a
              href={`/${s.slug}`}
              role="tab"
              aria-selected={s.slug === active}
              onMouseEnter={() => setActive(s.slug)}
              onFocus={() => setActive(s.slug)}
              onClick={onClose}
              className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                s.slug === active ? 'bg-plum-900 text-pearl-50' : 'text-plum-900 hover:bg-pearl-200'
              }`}
            >
              {s.nav}
              <ArrowRight className={`h-4 w-4 transition-opacity ${s.slug === active ? 'opacity-100' : 'opacity-0'}`} />
            </a>
          </li>
        ))}
      </ul>

      <div className="max-h-[72vh] overflow-y-auto p-7">
        <div className="mb-5 flex items-end justify-between gap-6 border-b border-pearl-200 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orchid-700">{p.name}</p>
            <p className="mt-1 max-w-xl font-display text-xl leading-snug text-plum-900">{p.headline}</p>
          </div>
          <a href={link()} onClick={onClose} className="link-u shrink-0 whitespace-nowrap text-sm font-medium text-orchid-700">
            {p.cta} →
          </a>
        </div>

        <div className="gap-x-8 [column-fill:balance] lg:columns-3">
          {sections.map((s) => (
            <section key={s.title} className="mb-6 break-inside-avoid">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                <a href={link(slugify(s.title))} onClick={onClose} className="hover:text-orchid-700">{s.title}</a>
              </h3>
              <ul className="space-y-1">
                {s.items.map((i) => (
                  <li key={i.label} className="text-[0.82rem] leading-snug text-plum-900">
                    <a href={link(slugify(s.title))} onClick={onClose} className="block rounded-md px-2 py-1 -mx-2 transition-colors duration-200 hover:bg-orchid-600/10 hover:text-orchid-700">
                      {i.label}
                    </a>
                    {i.sub && (
                      <ul className="ml-3 border-l border-pearl-200 pl-3 text-muted">
                        {i.sub.map((x) => <li key={x} className="py-0.5">{x}</li>)}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
