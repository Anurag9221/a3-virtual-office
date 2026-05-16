export default function TradingDesk() {
  const products = [
    {
      item: "Industrial Equipment",
      status: "Supplier Available",
    },
    {
      item: "Mining Materials",
      status: "Quotation Pending",
    },
    {
      item: "Digital Products",
      status: "Ready for Sale",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-black mb-6">
        Trading <span className="text-orange-400">Desk</span>
      </h1>

      <p className="text-slate-400 text-xl mb-10">
        Procurement, supplier, and trading management system.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.item}
            className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-orange-400 transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              {product.item}
            </h2>

            <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
              {product.status}
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-2xl font-semibold transition">
              Manage
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}