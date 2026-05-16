import Navbar from "@/components/Navbar";

export default function MarketingCenter() {
  const campaigns = [
    {
      name: "Facebook Promotion",
      status: "Running",
    },
    {
      name: "WhatsApp Marketing",
      status: "Planned",
    },
    {
      name: "Local Business Outreach",
      status: "Active",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">
        <h1 className="text-5xl font-black mb-6">
          Marketing <span className="text-orange-400">Center</span>
        </h1>

        <p className="text-slate-400 text-xl mb-10">
          Manage promotions, outreach, and lead generation campaigns.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.name}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">
                {campaign.name}
              </h2>

              <div className="inline-block bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm mb-6">
                {campaign.status}
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-semibold">
                Open Campaign
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}