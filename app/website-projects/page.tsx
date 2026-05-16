import Navbar from "@/components/Navbar";

export default function WebsiteProjects() {
  const projects = [
    {
      client: "Local Shop",
      stage: "Homepage Design",
    },
    {
      client: "Transport Company",
      stage: "Development",
    },
    {
      client: "Coaching Center",
      stage: "Ready for Delivery",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">
        <h1 className="text-5xl font-black mb-6">
          Website <span className="text-orange-400">Projects</span>
        </h1>

        <p className="text-slate-400 text-xl mb-10">
          Manage website client projects and delivery workflow.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.client}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">
                {project.client}
              </h2>

              <div className="inline-block bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm mb-6">
                {project.stage}
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-semibold">
                Manage Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}