const facts = [
  { value: "1962", label: "the year the estate was planted" },
  { value: "22 acres", label: "of arabica, pepper vines, and cardamom" },
  { value: "4", label: "rooms, never more, by design" },
];

export default function About() {
  return (
    <section className="border-y border-canopy-950/10 bg-canopy-950 py-20 text-mist-100">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl italic text-mist-100 sm:text-4xl">A working estate, not a resort</h2>
          <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-mist-100/80">
            My grandfather planted the first arabica here in 1962. We still pick, pulp, and dry the coffee on these slopes every winter — guests are welcome to join, or to simply ignore it and read on the verandah. The homestay grew out of two spare rooms in 2014; it has stayed small on purpose, so we can still cook for you ourselves.
          </p>
        </div>

        <dl className="grid grid-cols-3 gap-6 self-center border-t border-mist-100/15 pt-8 md:border-t-0 md:pt-0">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-display text-2xl text-clay-500 sm:text-3xl">{fact.value}</dt>
              <dd className="mt-2 font-body text-xs leading-snug text-mist-100/70">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}