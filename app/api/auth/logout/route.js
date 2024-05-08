export async function POST(request) {
  return Response.json(
    {
      statusCode: 200,
      message: "Đăng xuất thành công!",
    },
    {
      status: 200,
      headers: {
        "Set-Cookie": [
          // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
          `access_token=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure`,
          // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
          `refresh_token=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure`,
        ],
      },
    },
  );
}
