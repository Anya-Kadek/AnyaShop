export default function ProdukPage() {
  const products = [
    {
      id: 1,
      name: "Classic Strawberry Cheesecake",
      category: "Cake & Pastry",
      price: "Rp 35.000",
      desc: "Sepotong keju lembut dengan dasar biskuit renyah dan saus stroberi.",
      badge: "Best Seller",
      image: "/images/Classic Strawberry Cheesecake.png",
      stock: 20,
      rating: "4.9 (128 ulasan)"
    },
    {
      id: 2,
      name: "Pink Berry Glaze Croissant",
      category: "Croissant",
      price: "Rp 28.000",
      desc: "Croissant mentega berlapis renyah dengan glasir pink dan raspberry.",
      badge: "New",
      image: "/images/Pink Berry Glaze Croissant.jpeg",
      stock: 15,
      rating: "4.8 (96 ulasan)"
    },
    {
      id: 3,
      name: "Raspberry Mousse Cake",
      category: "Cake & Pastry",
      price: "Rp 42.000",
      desc: "Kue mousse lembut rasa raspberry dengan topping buah segar.",
      badge: "Favorite",
      image: "/images/Raspberry Mousse Cake.jpg",
      stock: 18,
      rating: "4.9 (115 ulasan)"
    },
    {
      id: 4,
      name: "Creamy Strawberry Croissant",
      category: "Croissant",
      price: "Rp 30.000",
      desc: "Croissant empuk diisi krim vanila kocok dan potongan stroberi.",
      badge: "Recommended",
      image: "/images/Creamy Strawberry Croissant.png",
      stock: 12,
      rating: "4.7 (84 ulasan)"
    },
    {
      id: 5,
      name: "Japanese Strawberry Roll Cake",
      category: "Cake & Pastry",
      price: "Rp 48.000",
      desc: "Kue gulung gaya Jepang dengan krim segar dan stroberi utuh.",
      badge: "Signature",
      image: "/images/Japanese Strawberry Roll Cake.jpg",
      stock: 16,
      rating: "4.9 (142 ulasan)"
    },
    {
      id: 6,
      name: "Pink Fruit Sando",
      category: "Sandwich",
      price: "Rp 25.000",
      desc: "Sandwich buah ala Jepang dengan roti pink, stroberi, dan kiwi.",
      badge: "Fresh Fruit",
      image: "/images/Pink Fruit Sando.jpeg",
      stock: 25,
      rating: "4.8 (70 ulasan)"
    },
    {
      id: 7,
      name: "Double Layer Raspberry Cake",
      category: "Cake & Pastry",
      price: "Rp 40.000",
      desc: "Kue dua tingkat dengan spons lembut, krim putih, dan raspberry.",
      badge: "Special",
      image: "/images/Double Layer Raspberry Cake.jpg",
      stock: 10,
      rating: "4.8 (76 ulasan)"
    },
    {
      id: 8,
      name: "Mini Strawberry Dome",
      category: "Cake & Pastry",
      price: "Rp 32.000",
      desc: "Kue mini kubah mousse stroberi dengan hiasan krim putar.",
      badge: "Cute Choice",
      image: "/images/Mini Strawberry Dome.jpeg",
      stock: 14,
      rating: "4.7 (62 ulasan)"
    },
    {
      id: 9,
      name: "Fluffy Raspberry Pancakes",
      category: "Pancakes",
      price: "Rp 38.000",
      desc: "Tumpukan pancake lembut dengan saus pink glasir dan almond.",
      badge: "Morning Treat",
      image: "/images/Fluffy Raspberry Pancakes.jpeg",
      stock: 12,
      rating: "4.9 (150 ulasan)"
    },
    {
      id: 10,
      name: "Berry Pink Smoothie Cup",
      category: "Minuman",
      price: "Rp 26.000",
      desc: "Smoothie buah beri segar dengan topping whipped cream tinggi.",
      badge: "Refreshing",
      image: "/images/Berry Pink Smoothie Cup.jpg",
      stock: 22,
      rating: "4.6 (55 ulasan)"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Halaman & Tombol Tambah */}
      <div className="bg-white p-8 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-1">Manajemen Produk</h1>
          <p className="text-gray-500 text-sm">Kelola produk, deskripsi, harga, dan stok Anya Pastry.</p>
        </div>
        <button className="bg-[#e91e63] hover:bg-[#d81b60] text-white px-6 py-3 rounded-2xl font-bold shadow-md shadow-pink-500/30 transition text-sm">
          + Tambah Produk
        </button>
      </div>

      {/* Kartu Statistik Stok */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Produk</p>
          <p className="text-3xl font-black text-gray-800 mt-2">{products.length}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Stok</p>
          <p className="text-3xl font-black text-gray-800 mt-2">166</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Stok Habis</p>
          <p className="text-3xl font-black text-red-500 mt-2">0</p>
        </div>
      </div>

      {/* Input Pencarian */}
      <div className="bg-white p-4 rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80">
        <input 
          type="text" 
          placeholder="Cari nama produk..." 
          className="w-full px-5 py-3 border border-pink-200 rounded-2xl text-sm focus:outline-none focus:border-[#e91e63] transition"
        />
      </div>

      {/* Tabel Daftar Produk */}
      <div className="bg-white rounded-3xl shadow-md shadow-pink-100/50 border border-pink-100/80 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#fff0f3] text-gray-700 text-xs font-bold uppercase tracking-wider">
                <th className="py-4 px-6">Produk</th>
                <th className="py-4 px-6">Kategori</th>
                <th className="py-4 px-6">Harga</th>
                <th className="py-4 px-6">Stok</th>
                <th className="py-4 px-6">Rating</th>
                <th className="py-4 px-6 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-50 text-sm text-gray-600">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-pink-50/30 transition">
                  <td className="py-4 px-6 flex items-center gap-4">
                    {/* Menampilkan foto produk asli */}
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-14 h-14 rounded-2xl object-cover border border-pink-200 shrink-0 shadow-sm"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=300&q=80"; // fallback aman jika gambar tidak ditemukan
                      }}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-gray-800">{p.name}</p>
                        <span className="text-[10px] bg-pink-100 text-[#e91e63] px-2 py-0.5 rounded-full font-bold">{p.badge}</span>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{p.desc}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium">{p.category}</td>
                  <td className="py-4 px-6 font-bold text-[#e91e63]">{p.price}</td>
                  <td className="py-4 px-6 font-semibold">{p.stock}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                      ★ <span className="text-gray-700">{p.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center space-x-2">
                    <button className="bg-pink-100 hover:bg-[#e91e63] hover:text-white text-[#e91e63] px-3.5 py-1.5 rounded-xl font-bold text-xs transition">Edit</button>
                    <button className="bg-red-50 hover:bg-red-500 hover:text-white text-red-500 px-3.5 py-1.5 rounded-xl font-bold text-xs transition">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}