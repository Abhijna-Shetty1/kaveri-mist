const notes = [
  { quote: "We came for two nights and stayed four. Nobody mentioned the coffee walk would take three hours because we kept stopping to ask questions.", name: "Ananya R.", place: "Bengaluru" },
  { quote: "The Riverside Cottage at 5 AM, stream running, no phone signal — best sleep I've had in years.", name: "Tom & Priya", place: "Chennai" },
  { quote: "They drove us to Mandalpatti themselves at 5 AM and waited two hours so we wouldn't miss the light. Didn't ask for anything extra.", name: "Fahad K.", place: "Kochi" },
];

export default function Testimonials() {
  return (
    <section className="bg-canopy-950 py-20 text-mist-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl italic text-mist-100 sm:text-4xl">Guests, in their own words</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {notes.map((note) => (
            <figure key={note.name} className="border-l-2 border-clay-500 pl-5">
              <blockquote className="font-body text-[15px] leading-relaxed text-mist-100/90">&ldquo;{note.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 font-body text-sm text-mist-100/60">{note.name}, {note.place}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}