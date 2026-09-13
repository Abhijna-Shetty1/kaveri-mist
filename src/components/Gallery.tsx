import PhotoFrame from "./PhotoFrame";

const shots = [
  { file: "misty-hill.jpg", alt: "Mist over the hills at dawn", tall: true },
  { file: "cherries.jpg", alt: "Ripe coffee cherries on the branch" },
  { file: "verandah.jpg", alt: "Breakfast laid out on the verandah" },
  { file: "drying-yard.jpg", alt: "Coffee drying in the yard" },
  { file: "forest-path.jpg", alt: "A path through the estate forest", tall: true },
  { file: "dinner-table.jpg", alt: "A Kodava dinner set on the table" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="font-display text-3xl text-canopy-950 sm:text-4xl">Around the estate</h2>

      <div className="mt-10 grid grid-cols-2 gap-4 auto-rows-[160px] sm:auto-rows-[180px] md:grid-cols-3 md:grid-flow-dense md:auto-rows-[200px]">
        {shots.map((shot) => (
          <PhotoFrame
            key={shot.file}
            filename={shot.file}
            alt={shot.alt}
            className={`h-full w-full rounded-2xl ${shot.tall ? "row-span-2" : "row-span-1"}`}
          />
        ))}
      </div>
    </section>
  );
}