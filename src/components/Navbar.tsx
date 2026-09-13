"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#rooms", label: "Rooms" },
  { href: "#experiences", label: "Experiences" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#book", label: "Book a stay" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-canopy-950/10 bg-mist-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl italic text-canopy-950">
          Kaveri Mist
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="font-body text-sm text-canopy-800 transition-colors hover:text-clay-600">
              {link.label}
            </a>
          ))}
          <span className="rounded-full bg-canopy-900 px-4 py-1.5 text-xs text-mist-100">Est. 2014</span>
        </nav>

        <button onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="text-canopy-900 md:hidden">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-canopy-950/10 bg-mist-100 px-6 pb-6 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-canopy-950/5 py-3 font-body text-canopy-900">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}