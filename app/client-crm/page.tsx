import Navbar from "@/components/Navbar";

export default function ClientCRM() {
  const clients = [
    {
      name: "Sharma Traders",
      service: "Business Website",
      status: "Active",
    },
    {
      name: "Maa Transport",
      service: "Company Profile",
      status: "Pending",
    },
    {
      name: "Industrial Supplier",
      service: "Digital Marketing",
      status: "Completed",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">
        <h1 className="text-5xl font-black mb-6">
          Client <span className="text-orange-400">CRM</span>
        </h1>

        <p className="text-slate-400 text-xl mb-10">
          Manage client projects and service workflow.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">
                {client.name}
              </h2>

              <p className="text-slate-400 mb-4">
                {client.service}
              </p>

              <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
                {client.status}
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-semibold">
                Open Client
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}