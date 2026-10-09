export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Banner Sambutan */}
      <div className="bg-white p-8 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Dashboard Admin Anya Pastry and Dessert</h1>
        <p className="text-gray-500 text-sm">Selamat datang kembali! Kelola inventori, pesanan, dan pantau aktivitas toko dengan mudah.</p>
      </div>

      {/* Grid Statistik Kartu */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Menu Aktif</p>
          <p className="text-3xl font-black text-gray-800 mt-2">10 Menu</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pesanan Masuk</p>
          <p className="text-3xl font-black text-[#e91e63] mt-2">5 Pesanan</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status Toko</p>
          <p className="text-3xl font-black text-emerald-600 mt-2">Buka 🟢</p>
        </div>
      </div>

      {/* Informasi Tambahan */}
      <div className="bg-white p-8 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
        <h2 className="font-bold text-gray-800 text-lg mb-2">Aktivitas Sistem Terkini</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Semua modul pengelolaan pesanan dan produk telah tersinkronisasi. Gunakan menu navigasi di sebelah kiri untuk berpindah antar halaman administrasi secara mulus.
        </p>
      </div>
    </div>
  );
}