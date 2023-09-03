import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function GET(request: Request) {
  let instance = new Razorpay({
    key_id: "rzp_test_oFW3klARVMsOoT",
    key_secret: "jvM31hdgvORiEM09vbi6YEvv",
  });

  const response = await instance.orders.create({
    amount: 3000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2",
    },
  });

  return NextResponse.json({ id: response.id });
}
