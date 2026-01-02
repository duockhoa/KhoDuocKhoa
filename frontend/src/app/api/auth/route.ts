export async function POST(request: Request) {
  const payload = await request.json();
  const accessToken = payload?.accessToken || null;
  const refreshToken = payload?.refreshToken || null;
  if (!accessToken) {
    return Response.json(
      { error: "Access token is required" },
      { status: 400 }
    );
  }
  if (!refreshToken) {
    return Response.json(
      { error: "Refresh token is required" },
      { status: 400 }
    );
  }
  const refreshMaxAge = 30 * 24 * 60 * 60; // 30 days in seconds
  return Response.json(
    { payload },
    {
      status: 200,
      headers: {
        "Set-Cookie": [
          `accessToken=${accessToken}; Path=/; HttpOnly; SameSite=Lax`,
          refreshToken
            ? `refreshToken=${refreshToken}; Path=/; HttpOnly; SameSite=Lax ; Max-Age=${refreshMaxAge}`
            : "",
        ]
          .filter(Boolean)
          .join(", "),
      },
    }
  );
}
