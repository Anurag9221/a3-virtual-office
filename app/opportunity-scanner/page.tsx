import Navbar from "@/components/Navbar";

export default function OpportunityScanner() {
  const leads = [
    {
      title: "Website Project",
      source: "Local Business",
      value: "₹15,000",
    },
    {
      title: "Company Profile Design",
      source: "Transport Company",
      value: "₹6,000",
    },
    {
      title: "Digital Marketing Contract",
      source: "Industrial Supplier",
      value: "₹8,000/month",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">
        <h1 className="text-5xl font-black mb-6">
          Opportunity <span className="text-orange-400">Scanner</span>
        </h1>

        <p className="text-slate-400 text-xl mb-10">
          Track potential clients and income opportunities.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {leads.map((lead) => (
            <div
              key={lead.title}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">
                {lead.title}
              </h2>

              <p className="text-slate-400 mb-4">
                {lead.source}
              </p>

              <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
                {lead.value}
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-semibold">
                Contact Lead
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}