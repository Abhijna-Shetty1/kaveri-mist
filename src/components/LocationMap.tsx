const pins = [
  { name: "Kaveri Mist Homestay", x: 46, y: 52, home: true },
  { name: "Madikeri town", x: 58, y: 60 },
  { name: "Abbey Falls", x: 40, y: 42 },
  { name: "Talakaveri", x: 22, y: 30 },
  { name: "Mandalpatti viewpoint", x: 30, y: 20 },
  { name: "Dubare elephant camp", x: 74, y: 48 },
];

export default function LocationMap() {
  return (
    <section id="location" className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-canopy-950/10 bg-mist-200">
          <svg viewBox="0 0 100 75" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <path d="M8,55 Q18,35 30,38 T50,30 T72,40 T92,35" fill="none" stroke="#8A9A6E" strokeWidth="0.6" opacity="0.5" />
            <path d="M5,62 Q20,50 34,50 T58,45 T90,48" fill="none" stroke="#8A9A6E" strokeWidth="0.6" opacity="0.35" />
            <path d="M15,10 Q40,25 46,52" fill="none" stroke="#B8794B" strokeWidth="0.5" strokeDasharray="1.5 1.5" opacity="0.6" />
          </svg>
          {pins.map((pin) => (
            <div key={pin.name} className="absolute -translate-x-1/2 -translate-y-full" style={{ left: `${pin.x}%`, top: `${pin.y}%` }}>
              <div className={`h-3 w-3 rounded-full border-2 border-mist-100 ${pin.home ? "bg-clay-600" : "bg-canopy-800"}`} />
              <span className={`absolute left-1/2 top-4 w-max -translate-x-1/2 rounded-full px-2 py-0.5 text-[10px] font-body ${pin.home ? "bg-clay-600 text-mist-100" : "bg-mist-100/90 text-canopy-900"}`}>
                {pin.name}
              </span>
            </div>
          ))}
        </div>

        <div className="self-center">
          <h2 className="font-display text-3xl text-canopy-950 sm:text-4xl">Madikeri, Kodagu</h2>
          <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-canopy-800">
            22 km from Madikeri bus stand, on the road toward Abbey Falls. The nearest railway station is Mysuru (120 km); the nearest airport is Mangaluru (135 km). Send us your arrival time and we&apos;ll send back the turn-by-turn — the last stretch has no signage.
          </p>
          <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="mt-5 inline-block font-body text-sm text-clay-600 underline underline-offset-4">
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}