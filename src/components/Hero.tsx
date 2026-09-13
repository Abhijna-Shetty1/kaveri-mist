import PhotoFrame from "./PhotoFrame";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-canopy-950 text-mist-100"
    >
      <div className="contour-field-light pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-16">
        
        {/* TEXT */}
        <div className="order-2 lg:order-1">
          <p className="font-body text-xs uppercase tracking-[0.28em] text-mist-300">
            Madikeri · Kodagu
          </p>

          <h1 className="mt-5 font-display text-[3.2rem] leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.8rem]">
            Where the Kaveri
            <br />
            <span className="italic text-mist-300">
              begins its journey
            </span>
          </h1>

          <div className="mt-7 h-px w-16 bg-mist-300/50" />

          <p className="mt-7 max-w-lg font-body text-sm leading-7 text-mist-200/80 sm:text-[15px]">
            Four rooms tucked into a working coffee estate, where mornings
            arrive through mist, coffee blossoms and the sound of rain through
            the trees.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#book"
              className="rounded-full bg-mist-100 px-7 py-3.5 font-body text-sm font-medium text-canopy-950 transition-all duration-300 hover:bg-mist-200"
            >
              Check availability
            </a>

            <a
              href="#rooms"
              className="font-body text-sm text-mist-200 underline decoration-mist-300/60 underline-offset-8 transition-colors hover:text-mist-100"
            >
              Explore the rooms
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-mist-300/70">
            <span className="font-body text-[10px] uppercase tracking-[0.2em]">
              Working coffee estate
            </span>

            <span className="h-1 w-1 rounded-full bg-mist-300/50" />

            <span className="font-body text-[10px] uppercase tracking-[0.2em]">
              Est. 2014
            </span>
          </div>
        </div>

        {/* IMAGE */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xl overflow-hidden rounded-[3rem]">
            <PhotoFrame
              filename="home.jpg"
              alt="Kaveri Mist Homestay surrounded by the green hills of Coorg"
              className="h-full w-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-canopy-950/30 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-2xl border border-mist-100/20 bg-canopy-950/70 px-5 py-3 backdrop-blur-sm">
              <p className="font-display text-xl text-mist-100">Kaveri Mist</p>
              <p className="mt-0.5 font-body text-[10px] uppercase tracking-[0.16em] text-mist-300">
                Coorg · Karnataka
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}