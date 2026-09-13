import BookingForm from "./BookingForm";

export default function BookingSection() {
  return (
    <section id="book" className="bg-mist-200 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1.3fr]">
        <div>
          <h2 className="font-display text-3xl text-canopy-950 sm:text-4xl">Plan your stay</h2>
          <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-canopy-800">
            Send a request and we&apos;ll confirm by email, usually within a day. Prefer to talk first? Call or WhatsApp
            <span className="text-canopy-950"> +91 98765 43210</span>.
          </p>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}