export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  room: string;
  message?: string;
}

export interface BookingRecord extends BookingRequest {
  _id?: string;
  createdAt: string;
  status: "new" | "confirmed" | "declined";
}