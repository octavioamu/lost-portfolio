export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ids = searchParams.get("ids");
  // ethereum,gitcoin,mantle,bitdao
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`,
    {
      headers: {
        "Content-Type": "application/json",
        x_cg_demo_api_key: process.env.COINGECKO_API!,
      },
    }
  );
  const data = await res.json();

  return Response.json({ data });
}
