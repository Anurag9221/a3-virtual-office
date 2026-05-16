export default function IndustrialDesk() {
  const works = [
    {
      task: "Mining Vendor Support",
      status: "Active",
    },
    {
      task: "Equipment Coordination",
      status: "Pending",
    },
    {
      task: "Industrial Documentation",
      status: "In Progress",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-black mb-6">
        Industrial <span className="text-orange-400">Desk</span>
      </h1>

      <p className="text-slate-400 text-xl mb-10">
        Industrial and mining operations management.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {works.map((work) => (
          <div
            key={work.task}
            className="bg-slate-900 border border-slate-700 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4">
              {work.task}
            </h2>

            <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm mb-6">
              {work.status}
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-semibold">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}