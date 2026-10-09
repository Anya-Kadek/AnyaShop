export default function AboutPage() {
  return (
    <div className="space-y-6">
      {/* Header Halaman */}
      <div className="bg-white p-8 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Tentang Aplikasi</h1>
        <p className="text-gray-500 text-sm">Informasi seputar panel administrasi dan profil sistem Anya Pastry and Dessert.</p>
      </div>

      {/* Grid Informasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kartu Profil Toko */}
        <div className="bg-white p-8 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80 space-y-4">
          <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-2xl shadow-inner">🍰</div>
          <h2 className="text-xl font-bold text-gray-800">Anya Pastry & Dessert</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Aplikasi e-commerce dan manajemen inventori modern yang dirancang khusus untuk menyajikan aneka kue, pastry, dan dessert lezat berbalut nuansa warna pink yang elegan dan ramah pengguna.
          </p>
          <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <span>Versi Sistem: v1.0.0</span>
            <span>•</span>
            <span>Tahun 2026</span>
          </div>
        </div>

        {/* Kartu Informasi Pengembang / Tim */}
        <div className="bg-white p-8 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80 space-y-4">
          <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-2xl shadow-inner">💻</div>
          <h2 className="text-xl font-bold text-gray-800">Informasi Pengembang</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Panel admin ini dikembangkan menggunakan teknologi web modern berstandar industri untuk memastikan performa yang cepat, responsif, serta kemudahan dalam pemantauan transaksi dan produk secara *real-time*.
          </p>
          <div className="pt-2 text-xs font-bold text-[#e91e63]">
            Dibuat khusus untuk Pengelolaan Toko Anya Pastry
          </div>
        </div>
      </div>
    </div>
  );
}