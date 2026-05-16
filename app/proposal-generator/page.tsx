import Navbar from "@/components/Navbar";

export default function ProposalGenerator() {
  const proposals = [
    {
      client: "Sharma Traders",
      service: "Business Website",
      amount: "₹15,000",
    },
    {
      client: "Maa Transport",
      service: "Company Profile Design",
      amount: "₹6,000",
    },
    {
      client: "Industrial Vendor",
      service: "Digital Marketing",
      amount: "₹8,000/month",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">
        <h1 className="text-5xl font-black mb-6">
          Proposal <span className="text-orange-400">Generator</span>
        </h1>

        <p className="text-slate-400 text-xl mb-10">
          Generate quotations and client proposals instantly.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {proposals.map((proposal) => (
            <div
              key={proposal.client}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">
                {proposal.client}
              </h2>

              <p className="text-slate-400 mb-4">
                {proposal.service}
              </p>

              <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm mb-6">
                {proposal.amount}
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-semibold">
                Generate PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}