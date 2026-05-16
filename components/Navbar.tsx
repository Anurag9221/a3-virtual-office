export default function Navbar() {
  return (
    <div className="bg-slate-900 border-b border-slate-800 px-8 py-5 flex flex-wrap items-center justify-between">

      <a
        href="/"
        className="text-3xl font-black text-white"
      >
        A3 <span className="text-orange-400">Virtual Office</span>
      </a>

      <div className="flex gap-6 flex-wrap text-sm lg:text-base">

        <a
          href="/dashboard"
          className="text-white hover:text-orange-400 transition"
        >
          Dashboard
        </a>

        <a
          href="/opportunity-scanner"
          className="text-white hover:text-orange-400 transition"
        >
          Opportunities
        </a>

        <a
          href="/client-crm"
          className="text-white hover:text-orange-400 transition"
        >
          Client CRM
        </a>

        <a
          href="/proposal-generator"
          className="text-white hover:text-orange-400 transition"
        >
          Proposals
        </a>

        <a
          href="/website-projects"
          className="text-white hover:text-orange-400 transition"
        >
          Projects
        </a>

        <a
          href="/marketing-center"
          className="text-white hover:text-orange-400 transition"
        >
          Marketing
        </a>

        <a
          href="/finance-department"
          className="text-white hover:text-orange-400 transition"
        >
          Finance
        </a>

      </div>
    </div>
  );
}