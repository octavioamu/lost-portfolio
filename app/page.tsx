import Table from "./components/Table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <div className="flex flex-col gap-3 mb-8 text-sm">
          <h2 className="font-bold text-lg mb-4">Compromissed addreses:</h2>
          <a
            href="https://etherscan.io/address/0xeDa95eD3e3436C689376889F9eD0a8f4bA23E866"
            target="_blank"
          >
            0xeDa95eD3e3436C689376889F9eD0a8f4bA23E866
          </a>
          <a
            href="https://optimistic.etherscan.io/address/0x206625cec8e0a048b286b2645ba575b3ecaca793"
            target="_blank"
          >
            0x206625cec8e0a048b286b2645ba575b3ecaca793 (Optimistic)
          </a>
        </div>
        <Table />
        <div className="relative flex place-items-center before:absolute before:h-[500px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
      </div>
    </main>
  );
}
