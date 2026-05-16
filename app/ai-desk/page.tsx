export default function AIDesk() {
  const tools = [
    {
      name: "Website Projects",
      status: "Running",
    },
    {
      name: "AI Chatbot Systems",
      status: "Ready",
    },
    {
      name: "Digital Automation",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-black mb-6">
        AI & <span className="text-orange-400">Digital Desk</span>
      </h1>

      <p className="text-slate-400 text-xl mb-10">
        AI systems, websites, and automation management.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-slate-900 border border-slate-700 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4">
              {tool.name}
            </h2>

            <div className="inline-block bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm mb-6">
              {tool.status}
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-semibold">
              Launch
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}