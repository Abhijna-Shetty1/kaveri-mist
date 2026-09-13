import PhotoFrame from "./PhotoFrame";

const experiences = [
  {
    name: "Coffee harvest walk",
    when: "Dec – Feb, on the estate",
    detail:
      "Join the picking crew for an hour, then watch the cherries get pulped and laid out to dry on our patio.",
    file: "harvest-walk.jpg",
  },
  {
    name: "Sunrise at Mandalpatti",
    when: "45 min drive, best by 6 AM",
    detail:
      "A jeep track up to a bare viewpoint above the clouds. We arrange the jeep the night before.",
    file: "sunrise.jpg",
  },
  {
    name: "Dubare elephant camp",
    when: "40 min drive, on the Kaveri",
    detail:
      "Watch the forest department's elephants bathe in the river, then cross by coracle.",
    file: "dubare.jpg",
  },
  {
    name: "Abbey Falls after rain",
    when: "20 min drive",
    detail:
      "Loudest in July and August, when the whole valley behind Madikeri is running with water.",
    file: "falls.jpg",
  },
  {
    name: "A Kodava dinner at our table",
    when: "Any evening, with notice",
    detail:
      "Pandi curry, kadumbuttu, and akki roti, cooked the way my mother learned from hers.",
    file: "dinner.jpg",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="bg-mist-200 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl text-canopy-950 sm:text-4xl">
          What fills the days here
        </h2>

        <div className="mt-10 divide-y divide-canopy-950/10 border-t border-canopy-950/10">
          {experiences.map((exp) => (
            <div
              key={exp.name}
              className="grid gap-6 py-8 md:grid-cols-[220px_1fr_auto] md:items-center md:gap-8"
            >
              <PhotoFrame
                filename={exp.file}
                alt={exp.name}
                className="aspect-[4/3] w-full rounded-2xl"
              />

              <div>
                <h3 className="font-display text-xl text-canopy-950">
                  {exp.name}
                </h3>

                <p className="mt-2 font-body text-xs text-canopy-700">
                  {exp.when}
                </p>

                <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-canopy-800">
                  {exp.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}