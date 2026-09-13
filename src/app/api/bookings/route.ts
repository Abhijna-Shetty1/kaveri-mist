import { NextRequest, NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";
import type { BookingRequest } from "@/lib/types";

const DB_NAME = "kaverimist";
const COLLECTION = "bookings";

export async function POST(req: NextRequest) {
  let body: BookingRequest;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "That request wasn't valid JSON." },
      { status: 400 }
    );
  }

  const { name, email, phone, checkIn, checkOut, guests, room } = body;

  if (!name || !email || !phone || !checkIn || !checkOut || !room || !guests) {
    return NextResponse.json(
      { error: "Please fill in every field before sending your request." },
      { status: 400 }
    );
  }

  if (new Date(checkOut) <= new Date(checkIn)) {
    return NextResponse.json(
      { error: "Check-out must be after check-in." },
      { status: 400 }
    );
  }

  try {
    const client = await getMongoClientPromise();
    const db = client.db(DB_NAME);

    await db.collection(COLLECTION).insertOne({
      ...body,
      createdAt: new Date().toISOString(),
      status: "new",
    });

  } catch (err) {
    console.error("Booking save failed:", err);

    return NextResponse.json(
      {
        error:
          "We couldn't reach the booking database. Please try again shortly.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Request received — we'll confirm by email within a day." },
    { status: 201 }
  );
}

export async function GET() {
  try {
    const client = await getMongoClientPromise();
    const db = client.db(DB_NAME);

    const bookings = await db
      .collection(COLLECTION)
      .find({})
      .sort({ createdAt: -1 })
      .limit(50)
      .toArray();

    return NextResponse.json({ bookings });

  } catch (err) {
    console.error("Booking fetch failed:", err);

    return NextResponse.json(
      { error: "Could not load bookings." },
      { status: 500 }
    );
  }
}