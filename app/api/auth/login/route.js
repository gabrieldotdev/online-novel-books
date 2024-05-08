import { env } from "@/configs/env.mjs";

export async function POST(request) {
  const body = await request.json();
  const secret = process.env.NEXT_PUBLIC_HMAC_SECRET;
  const hmacSignature = genHmacSignature(body, secret);
  // biome-ignore lint/style/useTemplate: <explanation>
  const result = await fetch(env.NEXT_PUBLIC_API_URL + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hmac-sign": hmacSignature,
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  if (!result.ok) {
    return Response.json({
      ok: false,
      message: result.message || "Đã có lỗi xảy ra khi đăng nhập",
      statusCode: 400,
    });
  }
  const access_token = result.access_token;
  const refresh_token = result.refresh_token;
  if (!access_token || !refresh_token) {
    return Response.json({
      ok: false,
      message: "Không tìm thấy token trong phản hồi từ máy chủ",
    });
  }

  const accessTokenValue = access_token.split(" ")[1];
  const refreshTokenValue = refresh_token.split(" ")[1];

  const expiresATDate = new Date(Date.now() + env.ACCESS_TOKEN_EXPIRES_IN * 1000).toUTCString();
  const expiresRTDate = new Date(Date.now() + env.REFRESH_TOKEN_EXPIRES_IN * 1000).toUTCString();
  return Response.json(
    {
      ok: true,
      message: "Đăng nhập thành công",
      statusCode: 200,
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": [
          `access_token=${accessTokenValue}; Path=/; HttpOnly; Expires=${expiresATDate}; SameSite=Lax; Secure`,
          `refresh_token=${refreshTokenValue}; Path=/; HttpOnly; Expires=${expiresRTDate}; SameSite=Lax; Secure`,
        ],
      },
    },
  );
}
