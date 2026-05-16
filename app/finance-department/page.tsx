import Navbar from "@/components/Navbar";

export default function FinanceDepartment() {
  const payments = [
    {
      client: "Sharma Traders",
      amount: "₹15,000",
      status: "Pending",
    },
    {
      client: "Maa Transport",
      amount: "₹6,000",
      status: "Received",
    },
    {
      client: "Industrial Supplier",
      amount: "₹8,000",
      status: "Due",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">
        <h1 className="text-5xl font-black mb-6">
          Finance <span className="text-orange-400">Department</span>
        </h1>

        <p className="text-slate-400 text-xl mb-10">
          Track invoices, pending payments, and income workflow.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {payments.map((payment) => (
            <div
              key={payment.client}
              className="bg-slate-900 border border-slate-700 rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">
                {payment.client}
              </h2>

              <p className="text-slate-400 mb-4">
                {payment.amount}
              </p>

              <div className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm mb-6">
                {payment.status}
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-semibold">
                View Payment
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}