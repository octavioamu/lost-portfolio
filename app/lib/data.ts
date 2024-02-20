import { unstable_noStore as noStore } from "next/cache";

export async function getPrices(ids: string[]) {
  noStore();

  // ethereum,gitcoin,mantle,bitdao
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&x_cg_demo_api_key=${process.env.COINGECKO_API}`,
    {
      headers: {
        "Content-Type": "application/json",
        x_cg_demo_api_key: process.env.COINGECKO_API!,
      },
    }
  );
  const data = await res.json();

  // return Response.json({ data });
  return data;
}
