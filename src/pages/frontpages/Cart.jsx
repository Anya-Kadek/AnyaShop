import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const fixedCart = savedCart.map((item) => {
      let imgPath = item.image || "";
      if (imgPath && !imgPath.startsWith("/")) {
        imgPath = "/" + imgPath;
      }
      return { ...item, image: imgPath };
    });

    setCart(fixedCart);
  }, []);
  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      } return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 pb-12">
      <h1 className="text-2xl md:text-3xl font-black text-gray-800 mb-6">
        🛒 Keranjang Belanja Anya Pastry and Dessert
      </h1>
      {cart.length === 0 ? (
        <div className="bg-white border border-pink-100 rounded-3xl p-8 text-center shadow-sm">
          <p className="text-gray-500 mb-4">Keranjang belanjaan kamu masih kosong nih.</p>
          <Link
            to="/"
            className="inline-block bg-pink-500 text-white font-semibold text-xs py-2.5 px-6 rounded-xl shadow-md shadow-pink-200 hover:bg-pink-600 transition"
          >
            Mulai Belanja Sekarang
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white border border-pink-100 rounded-3xl p-6 shadow-sm divide-y divide-pink-50">
            {cart.map((item) => (
              <div key={item.id} className="py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-2xl bg-pink-50 shrink-0"
                    onError={(e) => {
                      e.target.src = "/images/Classic Strawberry Cheesecake.png";
                    }}
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-base">{item.name}</h3>
                    <p className="text-pink-600 font-extrabold text-sm mt-1">
                      Rp{item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                  <div className="flex items-center border border-pink-200 rounded-xl overflow-hidden bg-pink-50/50">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 text-sm font-bold text-pink-600 hover:bg-pink-100 transition"
                    >
                      −
                    </button>
                    <span className="w-10 text-center font-bold text-gray-800 text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 text-sm font-bold text-pink-600 hover:bg-pink-100 transition"
                    >
                      +
                    </button>
                  </div>

                  <span className="font-extrabold text-gray-800 text-sm w-28 text-right">
                    Rp{(item.price * item.quantity).toLocaleString("id-ID")}
                  </span>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition text-lg"
                    title="Hapus item"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-pink-100 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-gray-500 text-xs">Total Pembayaran:</p>
              <p className="text-2xl font-black text-pink-600">
                Rp{totalPrice.toLocaleString("id-ID")}
              </p>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-2xl shadow-md shadow-pink-200 transition active:scale-[0.98]"
            >
              Lanjut ke Checkout ➔
            </button>
          </div>
        </div>
      )}
    </div>
  );
}