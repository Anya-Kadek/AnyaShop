import { useState, useEffect } from "react";
export default function PesananPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("adminOrders")) || [];
    const cleanOrders = savedOrders.filter(
      o => o.product && !o.product.includes("\${")
    );

    localStorage.setItem("adminOrders", JSON.stringify(cleanOrders));
    setOrders(cleanOrders);
  }, []);

  const pendingCount = orders.filter(o => o.status === "Pending").length;
  const processCount = orders.filter(o => o.status === "Diproses").length;
  const successCount = orders.filter(o => o.status === "Selesai").length;

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-1">Manajemen Pesanan</h1>
        <p className="text-gray-500 text-sm">Kelola dan pantau pesanan pelanggan Anya Pastry and Dessert.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pesanan Pending</p>
          <p className="text-3xl font-black text-amber-500 mt-2">{pendingCount}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sedang Diproses</p>
          <p className="text-3xl font-black text-blue-500 mt-2">{processCount}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pesanan Selesai</p>
          <p className="text-3xl font-black text-emerald-600 mt-2">{successCount}</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80 overflow-hidden">
        <div className="p-6 border-b border-pink-100 flex justify-between items-center">
          <h2 className="font-bold text-gray-800 text-lg">Daftar Pesanan Masuk</h2>
          {orders.length > 0 && (
            <button 
              onClick={() => {
                localStorage.removeItem("adminOrders");
                setOrders([]);
              }}
              className="text-xs text-red-500 hover:text-red-700 font-semibold"
            >
              Hapus Semua Riwayat Pesanan
            </button>
          )}
        </div>
        <div className="overflow-x-auto">
          {orders.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="text-4xl">🛒</div>
              <p className="text-gray-600 font-bold text-base">Belum ada pesanan masuk.</p>
              <p className="text-gray-400 text-xs">Pesanan baru akan muncul di sini secara otomatis setelah pelanggan melakukan checkout di toko.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#fff0f3] text-gray-700 text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">ID Pesanan</th>
                  <th className="py-4 px-6">Pelanggan</th>
                  <th className="py-4 px-6">Produk</th>
                  <th className="py-4 px-6">Total</th>
                  <th className="py-4 px-6">Tanggal</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-50 text-sm text-gray-600">
                {orders.map((o, index) => (
                  <tr key={index} className="hover:bg-pink-50/30 transition">
                    <td className="py-4 px-6 font-bold text-gray-800">{o.id || `ORD00${index + 1}`}</td>
                    <td className="py-4 px-6">{o.customer || "Pelanggan"}</td>
                    <td className="py-4 px-6">{o.product}</td>
                    <td className="py-4 px-6 font-bold text-[#e91e63]">{o.total}</td>
                    <td className="py-4 px-6 text-gray-400 text-xs">{o.date || "Hari ini"}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-xl text-xs font-bold inline-flex items-center gap-1 ${
                        o.status === "Selesai" ? "bg-emerald-100 text-emerald-700" :
                        o.status === "Diproses" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                      }`}>
                        {o.status || "Pending"} ▾
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button className="bg-pink-100 hover:bg-[#e91e63] hover:text-white text-[#e91e63] px-4 py-1.5 rounded-xl font-bold text-xs transition">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}