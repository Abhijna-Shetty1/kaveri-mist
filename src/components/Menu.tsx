"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhotoFrame from "./PhotoFrame";

const categories = ["Coorg Specials", "North Indian", "South Indian", "Bengali & Sweets"] as const;
type Category = (typeof categories)[number];

type Dish = { name: string; note: string; price: string; file: string; tag: "Meal" | "Dessert" | "Drink" };

const dishes: Record<Category, Dish[]> = {
  "Coorg Specials": [
    { name: "Pandi Curry", note: "pork, dark & tangy, kachampuli vinegar", price: "₹320", file: "menu-pandi-curry.jpg", tag: "Meal" },
    { name: "Kadumbuttu", note: "steamed rice balls, served with curry", price: "₹120", file: "menu-kadumbuttu.jpg", tag: "Meal" },
    { name: "Koli Curry", note: "Kodava-style chicken curry", price: "₹280", file: "menu-koli-curry.jpg", tag: "Meal" },
    { name: "Akki Roti", note: "rice flour flatbread, coconut chutney", price: "₹90", file: "menu-akki-roti.jpg", tag: "Meal" },
    { name: "Noolputtu", note: "string hoppers, jaggery or curry", price: "₹100", file: "menu-noolputtu.jpg", tag: "Meal" },
    { name: "Baimbale Curry", note: "bamboo shoot, slow-cooked", price: "₹220", file: "menu-baimbale-curry.jpg", tag: "Meal" },
    { name: "Kaapi Payasam", note: "coffee-flavoured sweet", price: "₹90", file: "menu-kaapi-payasam.jpg", tag: "Dessert" },
    { name: "Thaliya Payasa", note: "sago pudding, jaggery & cardamom", price: "₹100", file: "menu-thaliya-payasa.jpg", tag: "Dessert" },
    { name: "Estate Filter Coffee", note: "beans grown 50 metres from here", price: "₹60", file: "menu-filter-coffee.jpg", tag: "Drink" },
    { name: "Kachampuli Sherbet", note: "tamarind-vinegar cooler, house recipe", price: "₹70", file: "menu-kachampuli-sherbet.jpg", tag: "Drink" },
  ],
  "North Indian": [
    { name: "Dal Makhani", note: "black lentils, slow-simmered, cream", price: "₹220", file: "menu-dal-makhani.jpg", tag: "Meal" },
    { name: "Paneer Butter Masala", note: "cottage cheese, tomato-cashew gravy", price: "₹260", file: "menu-paneer-butter-masala.jpg", tag: "Meal" },
    { name: "Tandoori Roti", note: "whole wheat, clay-oven baked", price: "₹40", file: "menu-tandoori-roti.jpg", tag: "Meal" },
    { name: "Gulab Jamun", note: "milk dumplings in cardamom syrup", price: "₹90", file: "menu-gulab-jamun.jpg", tag: "Dessert" },
    { name: "Masala Chai", note: "spiced black tea", price: "₹50", file: "menu-masala-chai.jpg", tag: "Drink" },
  ],
  "South Indian": [
    { name: "Masala Dosa", note: "crisp rice crepe, potato filling", price: "₹110", file: "menu-masala-dosa.jpg", tag: "Meal" },
    { name: "Bisi Bele Bath", note: "Karnataka-style spiced rice & lentils", price: "₹150", file: "menu-bisi-bele-bath.jpg", tag: "Meal" },
    { name: "Idli Sambar", note: "steamed rice cakes, lentil stew", price: "₹90", file: "menu-idli-sambar.jpg", tag: "Meal" },
    { name: "Mysore Pak", note: "gram flour & ghee sweet", price: "₹80", file: "menu-mysore-pak.jpg", tag: "Dessert" },
    { name: "Filter Coffee (Mysuru style)", note: "strong decoction, frothed", price: "₹60", file: "menu-mysuru-coffee.jpg", tag: "Drink" },
  ],
  "Bengali & Sweets": [
    { name: "Macher Jhol", note: "Bengali light fish curry", price: "₹280", file: "menu-macher-jhol.jpg", tag: "Meal" },
    { name: "Luchi & Aloo Dum", note: "fried bread, spiced potatoes", price: "₹140", file: "menu-luchi-aloo-dum.jpg", tag: "Meal" },
    { name: "Rasgulla", note: "spongy cheese balls in syrup", price: "₹90", file: "menu-rasgulla.jpg", tag: "Dessert" },
    { name: "Mishti Doi", note: "sweetened set yoghurt", price: "₹80", file: "menu-mishti-doi.jpg", tag: "Dessert" },
    { name: "Aam Panna", note: "raw mango cooler", price: "₹70", file: "menu-aam-panna.jpg", tag: "Drink" },
  ],
};

const tagStyles: Record<Dish["tag"], string> = {
  Meal: "bg-canopy-950/5 text-canopy-800",
  Dessert: "bg-clay-600/10 text-clay-700",
  Drink: "bg-moss/15 text-canopy-800",
};

export default function Menu() {
  const [active, setActive] = useState<Category>("Coorg Specials");
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section id="menu" className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <h2 className="font-display text-3xl text-canopy-950 sm:text-4xl">From our kitchen</h2>
        <p className="max-w-xs font-body text-sm text-canopy-800">
          Coorg dishes are cooked to order from the estate; other regional dishes are made on request.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-1.5 font-body text-sm transition-colors ${
              active === cat
                ? "border-canopy-900 bg-canopy-900 text-mist-100"
                : "border-canopy-950/15 bg-transparent text-canopy-800 hover:border-clay-600 hover:text-clay-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative mt-6">
        {/* Desktop-only arrow buttons */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-canopy-950/10 bg-mist-100 p-2 shadow-sm hover:border-clay-600 md:flex"
        >
          <ChevronLeft size={18} className="text-canopy-900" />
        </button>
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-canopy-950/10 bg-mist-100 p-2 shadow-sm hover:border-clay-600 md:flex"
        >
          <ChevronRight size={18} className="text-canopy-900" />
        </button>

        {/* Swipeable / scrollable row */}
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {dishes[active].map((dish) => (
            <article
              key={dish.name}
              className="w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl border border-canopy-950/10 bg-white/40"
            >
              <PhotoFrame filename={dish.file} alt={dish.name} className="aspect-[4/3] w-full" />
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-display text-base text-canopy-950">{dish.name}</p>
                  <span className="whitespace-nowrap font-body text-sm text-clay-600">{dish.price}</span>
                </div>
                <p className="mt-1 font-body text-xs text-canopy-800">{dish.note}</p>
                <span className={`mt-2 inline-block rounded-full px-2 py-0.5 font-body text-[10px] ${tagStyles[dish.tag]}`}>
                  {dish.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}