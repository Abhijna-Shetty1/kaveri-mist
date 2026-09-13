export default function Footer() {
  return (
    <footer className="border-t border-canopy-950/10 bg-mist-100 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-canopy-800 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display italic text-canopy-950">Kaveri Mist</p>
        <p className="font-body text-xs">Bettageri Estate, off Madikeri–Talacauvery Road, Kodagu, Karnataka</p>
        <p className="font-body text-xs">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}