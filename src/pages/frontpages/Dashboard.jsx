import { Link } from "react-router-dom";

export default function Dashboard() {
  const pastryProducts = [
    {
      id: 1,
      name: "Classic Strawberry Cheesecake",
      category: "Cake & Pastry",
      price: "Rp 35.000",
      desc: "Sepotong keju lembut dengan dasar biskuit renyah dan saus stroberi.",
      badge: "Best Seller",
      image: "/images/Classic Strawberry Cheesecake.png"
    },
    {
      id: 2,
      name: "Pink Berry Glaze Croissant",
      category: "Croissant",
      price: "Rp 28.000",
      desc: "Croissant mentega berlapis renyah dengan glasir pink dan raspberry.",
      badge: "New",
      image: "/images/Pink Berry Glaze Croissant.jpeg"
    },
    {
      id: 3,
      name: "Raspberry Mousse Cake",
      category: "Cake & Pastry",
      price: "Rp 42.000",
      desc: "Kue mousse lembut rasa raspberry dengan topping buah segar.",
      badge: "Favorite",
      image: "/images/Raspberry Mousse Cake.jpg"
    },
    {
      id: 4,
      name: "Creamy Strawberry Croissant",
      category: "Croissant",
      price: "Rp 30.000",
      desc: "Croissant empuk diisi krim vanila kocok dan potongan stroberi.",
      badge: "Recommended",
      image: "/images/Creamy Strawberry Croissant.png"
    },
    {
      id: 5,
      name: "Japanese Strawberry Roll Cake",
      category: "Cake & Pastry",
      price: "Rp 48.000",
      desc: "Kue gulung gaya Jepang dengan krim segar dan stroberi utuh.",
      badge: "Signature",
      image: "/images/Japanese Strawberry Roll Cake.jpg"
    },
    {
      id: 6,
      name: "Pink Fruit Sando",
      category: "Sandwich",
      price: "Rp 25.000",
      desc: "Sandwich buah ala Jepang dengan roti pink, stroberi, dan kiwi.",
      badge: "Fresh Fruit",
      image: "/images/Pink Fruit Sando.jpeg"
    },
    {
      id: 7,
      name: "Double Layer Raspberry Cake",
      category: "Cake & Pastry",
      price: "Rp 40.000",
      desc: "Kue dua tingkat dengan spons lembut, krim putih, dan raspberry.",
      badge: "Special",
      image: "/images/Double Layer Raspberry Cake.jpg"
    },
    {
      id: 8,
      name: "Mini Strawberry Dome",
      category: "Cake & Pastry",
      price: "Rp 32.000",
      desc: "Kue mini kubah mousse stroberi dengan hiasan krim putar.",
      badge: "Cute Choice",
      image: "/images/Mini Strawberry Dome.jpeg"
    },
    {
      id: 9,
      name: "Fluffy Raspberry Pancakes",
      category: "Pancakes",
      price: "Rp 38.000",
      desc: "Tumpukan pancake lembut dengan saus pink glasir dan almond.",
      badge: "Morning Treat",
      image: "/images/Fluffy Raspberry Pancakes.jpeg"
    },
    {
      id: 10,
      name: "Berry Pink Smoothie Cup",
      category: "Minuman",
      price: "Rp 26.000",
      desc: "Smoothie buah beri segar dengan topping whipped cream tinggi.",
      badge: "Refreshing",
      image: "/images/Berry Pink Smoothie Cup.jpg"
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold mb-2">          Dashboard Anya Pastry & Dessert</h1>
        <p className="text-gray-600">Pilihan menu kue, roti, dan minuman segar buatan tangan setiap hari.</p>
      </div>

      {/* Grid Layout Responsif Sesuai Modul */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pastryProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-pink-100 border border-pink-100 rounded-2xl p-4 shadow-sm hover:shadow-lg transition flex flex-col justify-between relative"
          >
            <div>
              {/* Gambar Produk & Badge */}
              <div className="h-48 bg-pink-50 rounded-xl overflow-hidden relative mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3 left-3 bg-pink-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {product.badge}
                </span>
              </div>

              <span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full">
                {product.category}
              </span>
              
              <h2 className="font-bold text-gray-800 text-lg mt-2">{product.name}</h2>
              <p className="text-pink-600 font-extrabold text-base mt-1">{product.price}</p>
              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">{product.desc}</p>
            </div>
            
            {/* Tautan Link ke Halaman Detail Sesuai Modul */}
            <div className="pt-4 mt-2 border-t border-pink-50">
              <Link
                to={`/product/${product.id}`}
                className="block w-full text-center bg-pink-500 hover:bg-pink-600 text-white font-semibold text-xs py-2.5 rounded-xl shadow-sm shadow-pink-200 transition"
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}