import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Experiences from "@/components/Experiences";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Experiences />
      <Menu />
      <Gallery />
      <LocationMap />
      <Testimonials />
      <BookingSection />
      <Footer />
    </main>
  );
}