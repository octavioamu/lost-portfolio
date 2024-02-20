// const getData = async () => {
//   console.log(process.env.NEXT_PUBLIC_API_URL);
//   const tokens = ["ethereum", "gitcoin", "mantle", "bitdao"];
//   const data = await fetch(`/api?ids=${tokens}`);

import { getPrices } from "../lib/data";

// };

const convertToUSD = (val: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(val);
};
export default async function Table() {
  const tokens = ["ethereum", "gitcoin", "mantle", "bitdao", "dai"];

  const portfolioBase = [
    { id: "ethereum", symbol: "ETH", amount: 54.99 },
    { id: "ethereum", symbol: "ETH (OP)", amount: 1.767 },
    { id: "mantle", symbol: "MNT", amount: 41628 },
    { id: "bitdao", symbol: "BIT", amount: 22424.758 },
    { id: "gitcoin", symbol: "GTC", amount: 49436.8 },
    { id: "dai", symbol: "DAI", amount: 1920 },
  ];
  const data = await getPrices(tokens);

  const portfolio = portfolioBase.map((asset) => {
    let dataUSD = data[asset.id];
    return { ...asset, value: dataUSD.usd * asset.amount, price: dataUSD.usd };
  });

  const totalUSD = portfolio.reduce((acc, currentAsset) => {
    return acc + currentAsset.value;
  }, 0);

  return (
    <div>
      <div className="grid grid-cols-4  ">
        <div className="font-bold border-b p-3">Asset</div>
        <div className="font-bold border-b p-3">Amount</div>
        <div className="font-bold border-b p-3 text-right">Price USD</div>
        <div className="font-bold border-b p-3 text-right">Total USD</div>

        {portfolio.map((asset, index) => (
          <div
            key={index}
            className="grid grid-cols-subgrid col-span-4	bg-white/10"
          >
            <div className="border-b p-3">{asset.symbol}</div>
            <div className="border-b p-3">
              {asset.amount} <span className="text-sm">{asset.symbol}</span>
            </div>
            <div className="border-b p-3 text-right">
              {convertToUSD(asset.price)}
            </div>
            <div className="border-b p-3 text-right">
              {convertToUSD(asset.value)}
            </div>
          </div>
        ))}
        <div className="col-span-4 flex justify-between p-3 font-bold">
          <span>TOTAL</span> <span>{convertToUSD(totalUSD)}</span>
        </div>
      </div>
    </div>
  );
}
