import Navbar from "@/components/Navbar";

export default function Dashboard() {
  const modules = [
    {
      title: "Opportunity Scanner",
      link: "/opportunity-scanner",
    },
    {
      title: "Client CRM",
      link: "/client-crm",
    },
    {
      title: "Proposal Generator",
      link: "/proposal-generator",
    },
    {
      title: "Website Projects",
      link: "/website-projects",
    },
    {
      title: "Marketing Center",
      link: "/marketing-center",
    },
    {
      title: "Finance Department",
      link: "/finance-department",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">
        <h1 className="text-6xl font-black mb-6">
          A3 <span className="text-orange-400">Virtual Office</span>
        </h1>

        <p className="text-slate-400 text-xl mb-12">
          AI-powered business dashboard for managing leads, clients,
          proposals, projects, and income workflow.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div
              key={module.title}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-orange-400 transition"
            >
              <h2 className="text-2xl font-bold mb-6">
                {module.title}
              </h2>

              <a
                href={module.link}
                className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-semibold inline-block transition"
              >
                Open Module
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}