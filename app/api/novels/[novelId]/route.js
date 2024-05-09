import { NextResponse } from "next/server";
import { env } from "@/configs/env.mjs";

export async function GET(request, context) {
  const { params } = context;
  // biome-ignore lint/style/useTemplate: <explanation>
  const res = await fetch(env.NEXT_PUBLIC_API_URL + "/books/" + params.novelId);
  const data = await res.json();
  return NextResponse.json({
    ...data,
    id: params.novelId,
  });
}
