export default function Home() {
  const departments = [
    {
      title: "Opportunity Scout AI",
      icon: "🎯",
      work: "Finds business opportunities and clients",
    },
    {
      title: "Trading Desk",
      icon: "📦",
      work: "Handles procurement and trading workflow",
    },
    {
      title: "Industrial Desk",
      icon: "⛏️",
      work: "Supports mining and industrial operations",
    },
    {
      title: "AI & Digital Desk",
      icon: "🤖",
      work: "Handles websites and AI services",
    },
    {
      title: "Marketing Center",
      icon: "📈",
      work: "Creates branding and marketing campaigns",
    },
    {
      title: "Finance Desk",
      icon: "💰",
      work: "Tracks invoices and quotations",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black">
              A3 <span className="text-orange-400">VIRTUAL OFFICE</span>
            </h1>
            <p className="text-slate-400 mt-2">
              AI Powered Business Command Center
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-2xl font-bold transition">
            Activate AI Office
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-300 px-4 py-2 rounded-full mb-6">
              Multi-Sector Business Platform
            </div>

            <h2 className="text-6xl font-black leading-tight mb-6">
              Your AI Team Works For You
            </h2>

            <p className="text-slate-400 text-xl leading-relaxed mb-8">
              Discover opportunities, manage clients, automate workflows,
              generate proposals, and organize business operations.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-bold transition">
                Find Work
              </button>

              <button className="border border-slate-700 hover:border-blue-500 px-8 py-4 rounded-2xl font-bold transition">
                Launch Dashboard
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              ["24/7", "AI Operations"],
              ["6+", "Departments"],
              ["MSME", "Registered"],
              ["AI", "Automation Ready"],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="bg-slate-900 border border-slate-700 rounded-3xl p-8"
              >
                <div className="text-5xl font-black text-orange-400 mb-3">
                  {title}
                </div>

                <div className="text-slate-400 text-lg">{subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="text-orange-400 uppercase tracking-widest font-semibold mb-4">
            Virtual Departments
          </div>

          <h2 className="text-5xl font-black mb-6">
            AI Employees & Operations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.title}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-orange-400 transition"
            >
              <div className="text-6xl mb-6">{dept.icon}</div>

              <h3 className="text-2xl font-bold mb-5">{dept.title}</h3>

              <p className="text-slate-400 text-lg leading-relaxed">
                {dept.work}
              </p>

              <button className="mt-8 border border-slate-600 hover:border-orange-400 px-5 py-3 rounded-2xl font-semibold transition">
                Open Department
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-500">
        © 2026 A3 Enterprises Digital Services & Solutions
      </footer>
    </div>
  );
}