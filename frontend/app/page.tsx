export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-6">
        SkillChain
      </h1>

      <p className="text-xl text-gray-300 max-w-2xl text-center mb-8">
        Decentralized cross-border skill identity platform built on Stellar.
      </p>

      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Connect Wallet
        </button>

        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl w-full">
        <div className="border border-gray-800 rounded-2xl p-6 bg-gray-900">
          <h2 className="text-2xl font-semibold mb-3">
            On-chain Credentials
          </h2>

          <p className="text-gray-400">
            Secure and verifiable blockchain-based certificates powered by Stellar.
          </p>
        </div>

        <div className="border border-gray-800 rounded-2xl p-6 bg-gray-900">
          <h2 className="text-2xl font-semibold mb-3">
            Skill Passport
          </h2>

          <p className="text-gray-400">
            A decentralized identity showcasing achievements, badges and learning history.
          </p>
        </div>

        <div className="border border-gray-800 rounded-2xl p-6 bg-gray-900">
          <h2 className="text-2xl font-semibold mb-3">
            Reward Automation
          </h2>

          <p className="text-gray-400">
            Automate scholarship and reward distribution through smart contracts.
          </p>
        </div>
      </section>
    </main>
  );
}