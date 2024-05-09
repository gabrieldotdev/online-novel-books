import { NextResponse } from "next/server";
import { env } from "@/configs/env.mjs";

export async function GET() {
  // biome-ignore lint/style/useTemplate: <explanation>
  const res = await fetch(env.NEXT_PUBLIC_API_URL + "/books");
  const data = await res.json();
  return NextResponse.json(data);
}

export async function POST(request) {
  const data = request.json();
  return NextResponse.json(data);
}
