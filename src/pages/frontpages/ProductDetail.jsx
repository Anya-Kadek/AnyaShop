import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Data produk pastry yang disesuaikan dengan 10 menu sebelumnya
  const products = {
    1: {
      name: "Classic Strawberry Cheesecake",
      category: "Cake & Pastry",
      description: "Sepotong keju lembut dengan dasar biskuit renyah, disiram saus stroberi segar dan hiasan buah stroberi asli.",
      price: 35000,
      rating: 4.9,
      reviews: 128,
      image: "/images/Classic Strawberry Cheesecake.png",
      label: "Best Seller",
    },
    2: {
      name: "Pink Berry Glaze Croissant",
      category: "Croissant",
      description: "Croissant mentega berlapis renyah dengan balutan cokelat glasir pink serta taburan buah raspberry segar di atasnya.",
      price: 28000,
      rating: 4.8,
      reviews: 96,
      image: "/images/Pink Berry Glaze Croissant.jpeg",
      label: "New",
    },
    3: {
      name: "Raspberry Mousse Cake",
      category: "Cake & Pastry",
      description: "Kue mousse lembut berwarna pink rasa raspberry dengan lapisan dasar spons dan topping buah raspberry segar.",
      price: 42000,
      rating: 4.9,
      reviews: 115,
      image: "/images/Raspberry Mousse Cake.jpg",
      label: "Favorite",
    },
    4: {
      name: "Creamy Strawberry Croissant",
      category: "Croissant",
      description: "Croissant empuk dibelah tengah, diisi krim vanila kocok yang melimpah serta potongan buah stroberi manis.",
      price: 30000,
      rating: 4.7,
      reviews: 74,
      image: "/images/Creamy Strawberry Croissant.png",
      label: "Recommended",
    },
    5: {
      name: "Japanese Strawberry Roll Cake",
      category: "Cake & Pastry",
      description: "Kue gulung gaya Jepang dengan isian krim segar dan potongan buah stroberi utuh di dalamnya.",
      price: 48000,
      rating: 4.8,
      reviews: 89,
      image: "/images/Japanese Strawberry Roll Cake.jpg",
      label: "Signature",
    },
    6: {
      name: "Pink Fruit Sando",
      category: "Sandwich",
      description: "Sandwich buah ala Jepang dengan roti lembut berwarna pink, krim segar, buah stroberi, dan kiwi hijau.",
      price: 25000,
      rating: 4.6,
      reviews: 63,
      image: "/images/Pink Fruit Sando.jpeg",
      label: "Fresh Fruit",
    },
    7: {
      name: "Double Layer Raspberry Cake",
      category: "Cake & Pastry",
      description: "Kue dua tingkat dengan lapisan spons lembut, krim putih manis, dan isian buah raspberry segar di tengahnya.",
      price: 40000,
      rating: 4.9,
      reviews: 142,
      image: "/images/Double Layer Raspberry Cake.jpg",
      label: "Special",
    },
    8: {
      name: "Mini Strawberry Dome",
      category: "Cake & Pastry",
      description: "Kue mini berbentuk kubah dengan lapisan luar mousse stroberi, hiasan krim putar, dan buah stroberi segar.",
      price: 32000,
      rating: 4.7,
      reviews: 81,
      image: "/images/Mini Strawberry Dome.jpeg",
      label: "Cute Choice",
    },
    9: {
      name: "Fluffy Raspberry Pancakes",
      category: "Pancakes",
      description: "Tumpukan pancake lembut setinggi menara dengan siraman saus glasir pink, taburan kacang almond, dan raspberry.",
      price: 38000,
      rating: 4.8,
      reviews: 104,
      image: "/images/Fluffy Raspberry Pancakes.jpeg",
      label: "Morning Treat",
    },
    10: {
      name: "Berry Pink Smoothie Cup",
      category: "Minuman",
      description: "Minuman smoothie buah beri segar bertekstur lembut dengan topping whipped cream tinggi dan buah raspberry.",
      price: 26000,
      rating: 4.9,
      reviews: 130,
      image: "/images/Berry Pink Smoothie Cup.jpg",
      label: "Refreshing",
    },
  };

  const product = products[id];

  if (!product) {
    return <p className="text-center mt-10 text-gray-500">Produk pastry tidak ditemukan.</p>;
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item.id === Number(id)
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({
        id: Number(id),
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setShowPopup(true);
  };

  return (
    <>
      {/* POPUP BERHASIL DITAMBAHKAN */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-sm rounded-2xl shadow-2xl p-6 text-center">
            {/* ICON CHECK */}
            <div className="w-16 h-16 mx-auto rounded-full bg-pink-100 flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-pink-500">✓</span>
            </div>

            {/* JUDUL */}
            <h2 className="text-xl font-bold text-gray-800">
              Berhasil Ditambahkan!
            </h2>

            {/* DESKRIPSI */}
            <p className="text-gray-600 text-sm mt-2">
              <span className="font-semibold text-pink-600">
                {product.name}
              </span>{" "}
              sudah masuk ke keranjang kamu.
            </p>

            {/* BUTTON */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowPopup(false)}
                className="flex-1 border border-pink-400 text-pink-600 py-2.5 rounded-xl font-medium hover:bg-pink-50 transition"
              >
                Lanjut Belanja
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="flex-1 bg-pink-500 text-white py-2.5 rounded-xl font-medium hover:bg-pink-600 transition shadow-md shadow-pink-200"
              >
                Ke Keranjang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DETAIL PRODUK */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-pink-100 border border-pink-100 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden bg-pink-50 flex items-center justify-center mb-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {product.label && (
            <span className="inline-block bg-pink-100 text-pink-600 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {product.label}
            </span>
          )}

          <p className="text-pink-500 font-semibold text-sm mt-3">
            {product.category}
          </p>

          <h1 className="text-2xl md:text-3xl font-black text-gray-800 mt-1">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mt-3">
            <span className="text-yellow-500 font-semibold">
              ⭐ {product.rating}
            </span>
            <span className="text-gray-400 text-sm">
              ({product.reviews} ulasan)
            </span>
          </div>

          <p className="text-gray-600 mt-4 leading-relaxed text-sm md:text-base">
            {product.description}
          </p>

          <p className="text-2xl font-extrabold text-pink-600 mt-6">
            Rp{product.price.toLocaleString("id-ID")}
          </p>

          {/* KONTROL JUMLAH & TOMBOL */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6 pt-6 border-t border-pink-50">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700 text-sm">Jumlah</span>
              <div className="flex items-center border border-pink-200 rounded-xl overflow-hidden bg-pink-50/50">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-10 h-10 text-lg font-bold text-pink-600 hover:bg-pink-100 transition"
                >
                  −
                </button>
                <span className="w-12 text-center font-bold text-gray-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-10 h-10 text-lg font-bold text-pink-600 hover:bg-pink-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-xl font-bold hover:bg-pink-600 transition shadow-md shadow-pink-200 flex items-center justify-center gap-2"
            >
              <span>🛒</span> Tambahkan ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </>
  );
}