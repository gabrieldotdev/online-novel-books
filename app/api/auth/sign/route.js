import { env } from "@/configs/env.mjs";
import { genHmacSignature } from "@/utils/genHmacSignature";

export async function POST(request) {
  const body = await request.json();
  const secret = env.HMAC_SECRET;
  if (!body || Object.keys(body).length === 0) {
    return Response.json({
      message: "Không có dữ liệu.",
      ok: false,
      statusCode: 400,
    });
  }
  const hmacSignature = genHmacSignature(body, secret);
  return Response.json({
    hmacSignature,
    ok: true,
    statusCode: 200,
  });
}
