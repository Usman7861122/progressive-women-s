import { MapPin, Phone, Video } from 'lucide-react';
import { locationPages } from '../../data/locations';

// Mega menu for "Locations": one card per office, with address, phone and status.
export default function LocationsMega({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-pearl-200 bg-pearl-50 p-5 text-ink shadow-[0_24px_60px_-20px_rgba(38,13,45,0.35)]">
      <ul className="grid gap-5 md:grid-cols-2">
        {locationPages.map((l) => (
          <li key={l.slug} className="rounded-xl bg-pearl-100 p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-3xl leading-tight text-plum-900">{l.name}</h3>
              <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${l.telemedicineOnly ? 'bg-orchid-600 text-white' : 'bg-plum-900 text-pearl-50'}`}>
                {l.telemedicineOnly && <Video className="h-3.5 w-3.5" />}
                {l.badge}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{l.tagline}</p>
            <p className="mt-4 flex gap-2.5 text-sm leading-snug text-plum-900">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orchid-700" />
              <span>{l.lines[0]}<br />{l.lines[1]}</span>
            </p>
            <p className="mt-2 flex gap-2.5 text-sm text-plum-900">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orchid-700" />
              <a href={`tel:${l.phone}`} onClick={onClose} className="link-u">{l.phone}</a>
            </p>
            <p className="mt-3 text-sm text-muted">{l.services.map((s) => s.label).join(' · ')}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-pearl-200 pt-4 text-sm font-medium">
              <a href={`/locations/${l.slug}`} onClick={onClose} className="link-u text-orchid-700">Location details →</a>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(l.mapQuery)}`} target="_blank" rel="noopener" onClick={onClose} className="link-u text-plum-900">Get directions</a>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between px-1 text-sm">
        <p className="text-muted">Telemedicine is available for patients located in Louisiana.</p>
        <a href="/locations" onClick={onClose} className="link-u font-medium text-orchid-700">All locations →</a>
      </div>
    </div>
  );
}
