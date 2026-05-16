import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white">

        <section className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-300 px-4 py-2 rounded-full mb-6">
                AI-Powered Business Infrastructure
              </div>

              <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-8">
                A3 <span className="text-orange-400">Virtual Office</span>
              </h1>

              <p className="text-slate-400 text-xl leading-relaxed mb-10">
                Build websites, manage clients, generate proposals,
                track opportunities, and grow your business with
                an AI-powered digital workspace.
              </p>

              <div className="flex gap-5 flex-wrap">
                <a
                  href="/dashboard"
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-bold transition"
                >
                  Open Dashboard
                </a>

                <a
                  href="/opportunity-scanner"
                  className="border border-slate-700 hover:border-orange-400 px-8 py-4 rounded-2xl font-bold transition"
                >
                  Find Opportunities
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
                <div className="text-5xl font-black text-orange-400 mb-3">
                  ₹1L+
                </div>

                <div className="text-slate-400 text-lg">
                  Monthly Income Goal
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
                <div className="text-5xl font-black text-orange-400 mb-3">
                  AI
                </div>

                <div className="text-slate-400 text-lg">
                  Smart Automation
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
                <div className="text-5xl font-black text-orange-400 mb-3">
                  CRM
                </div>

                <div className="text-slate-400 text-lg">
                  Client Management
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
                <div className="text-5xl font-black text-orange-400 mb-3">
                  24/7
                </div>

                <div className="text-slate-400 text-lg">
                  Digital Workspace
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}