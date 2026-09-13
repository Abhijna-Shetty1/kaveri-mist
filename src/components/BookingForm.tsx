"use client";

import { useState, FormEvent } from "react";

const rooms = ["The Machaan", "Plantation Bungalow Suite", "Riverside Cottage", "Misty Loft"];

type Status = "idle" | "sending" | "sent" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      checkIn: (form.elements.namedItem("checkIn") as HTMLInputElement).value,
      checkOut: (form.elements.namedItem("checkOut") as HTMLInputElement).value,
      guests: Number((form.elements.namedItem("guests") as HTMLInputElement).value),
      room: (form.elements.namedItem("room") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(body.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Could not reach the server. Check your connection.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-canopy-950/10 bg-mist-200 p-8 text-center">
        <p className="font-display text-2xl text-canopy-950">Request received</p>
        <p className="mt-2 font-body text-sm text-canopy-800">We&apos;ll confirm availability by email within a day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-canopy-950/10 bg-white/50 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name"><input name="name" required className={inputClass} /></Field>
        <Field label="Email"><input type="email" name="email" required className={inputClass} /></Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone / WhatsApp"><input type="tel" name="phone" required className={inputClass} /></Field>
        <Field label="Guests"><input type="number" name="guests" min={1} max={4} defaultValue={2} required className={inputClass} /></Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Check-in"><input type="date" name="checkIn" required className={inputClass} /></Field>
        <Field label="Check-out"><input type="date" name="checkOut" required className={inputClass} /></Field>
      </div>
      <Field label="Room">
        <select name="room" required className={inputClass}>
          {rooms.map((room) => (<option key={room} value={room}>{room}</option>))}
        </select>
      </Field>
      <Field label="Anything we should know?"><textarea name="message" rows={3} className={inputClass} /></Field>

      {status === "error" && <p className="font-body text-sm text-clay-700">{errorMsg}</p>}

      <button type="submit" disabled={status === "sending"} className="mt-2 rounded-full bg-canopy-900 px-7 py-3 font-body text-sm text-mist-100 transition-colors hover:bg-clay-600 disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Request to book"}
      </button>
    </form>
  );
}

const inputClass = "w-full rounded-lg border border-canopy-950/15 bg-mist-100 px-3 py-2 font-body text-sm text-canopy-950 outline-none focus:border-clay-500";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block font-body text-xs text-canopy-800">{label}</span>
      {children}
    </label>
  );
}