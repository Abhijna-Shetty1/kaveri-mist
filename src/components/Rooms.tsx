import PhotoFrame from "./PhotoFrame";

const rooms = [
  {
    name: "The Machaan",
    tagline: "A treehouse room over the canopy",
    detail:
      "Built on stilts among silver oaks that shade the coffee. Falls asleep to cicadas, wakes to mist below the floor level.",
    price: "₹6,500",
    occupancy: "2 guests",
    file: "machaan.jpg",
    span: "md:col-span-3",
  },
  {
    name: "Plantation Bungalow Suite",
    tagline: "The original 1962 wing",
    detail:
      "High ceilings, a wood-fired bath, and the estate manager's old writing desk, kept as it was.",
    price: "₹5,800",
    occupancy: "2–3 guests",
    file: "suite.jpg",
    span: "md:col-span-2",
  },
  {
    name: "Riverside Cottage",
    tagline: "Beside the estate stream",
    detail:
      "Falls asleep to running water. Best room for early risers headed to Abbey Falls before the crowds.",
    price: "₹5,200",
    occupancy: "2 guests",
    file: "riverside.jpg",
    span: "md:col-span-2",
  },
  {
    name: "Misty Loft",
    tagline: "Top floor, facing Brahmagiri",
    detail:
      "The estate's best view — on a clear morning you can see all the way to the Brahmagiri ridge.",
    price: "₹7,200",
    occupancy: "up to 4 guests",
    file: "misty-loft.jpg",
    span: "md:col-span-3",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <h2 className="font-display text-3xl text-canopy-950 sm:text-4xl">
          Four rooms, each its own reason to come
        </h2>

        <p className="max-w-xs font-body text-sm text-canopy-800">
          Rates include breakfast, an estate walk, and dinner cooked to order.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-5">
        {rooms.map((room) => (
          <article
            key={room.name}
            className={`group overflow-hidden rounded-3xl border border-canopy-950/10 bg-white/40 ${room.span}`}
          >
            <PhotoFrame
              filename={room.file}
              alt={`${room.name} — ${room.tagline}`}
              className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div className="p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl text-canopy-950">
                  {room.name}
                </h3>

                <span className="whitespace-nowrap font-body text-sm text-canopy-700">
                  {room.price}
                  <span className="text-canopy-800">/night</span>
                </span>
              </div>

              <p className="mt-1 font-body text-sm italic text-canopy-800">
                {room.tagline}
              </p>

              <p className="mt-3 font-body text-sm leading-relaxed text-canopy-900/90">
                {room.detail}
              </p>

              <p className="mt-4 font-body text-xs text-canopy-800">
                {room.occupancy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}