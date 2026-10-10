import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "Transfer Bank",
  });
  const [successPopup, setSuccessPopup] = useState(false);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Mohon lengkapi semua data pengiriman!");
      return;
    }
    const productSummary = cart.length > 0 
      ? cart[0].name + " (x" + (cart[0].quantity || 1) + ")" + (cart.length > 1 ? " dan " + (cart.length - 1) + " item lainnya" : "")
      : "Paket Pastry Spesial";

    const newOrder = {
      id: "ORD" + Math.floor(1000 + Math.random() * 9000),
      customer: formData.name,
      product: productSummary,
      total: "Rp " + totalPrice.toLocaleString("id-ID"),
      date: new Date().toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' }),
      status: "Pending"
    };
    const existingOrders = JSON.parse(localStorage.getItem("adminOrders")) || [];
    localStorage.setItem("adminOrders", JSON.stringify([newOrder, ...existingOrders]));
    localStorage.removeItem("cart");
    setSuccessPopup(true);
  };

  return (
    <>
      {successPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl p-6 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-pink-100 flex items-center justify-center mb-4">
              <span className="text-3xl">🎉</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Pesanan Berhasil!</h2>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Terima kasih <span className="font-semibold text-pink-600">{formData.name}</span>, pesanan pastry lezatmu sedang disiapkan dan masuk ke sistem admin!
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 w-full bg-pink-500 text-white py-3 rounded-xl font-bold hover:bg-pink-600 transition shadow-md shadow-pink-200"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      )}
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Checkout Pesanan Anya Pastry and Dessert 📋</h1>
          <p className="text-gray-600">Lengkapi data diri dan alamat pengiriman pastry favoritmu.</p>
        </div>

        <div className="bg-white border border-pink-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="bg-pink-50 rounded-xl p-4 mb-6 flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Total yang harus dibayar:</span>
            <span className="text-lg font-bold text-pink-600">
              Rp{totalPrice.toLocaleString("id-ID")}
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama penerima..."
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nomor Telepon / WhatsApp</label>
              <input
                type="text"
                placeholder="Contoh: 081234567890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Alamat Pengiriman</label>
              <textarea
                rows="3"
                placeholder="Masukkan alamat lengkap pengantaran..."
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Metode Pembayaran</label>
              <select
                value={formData.payment}
                onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm bg-white"
              >
                <option value="Transfer Bank">Transfer Bank (BCA / Mandiri)</option>
                <option value="E-Wallet">E-Wallet (GoPay / OVO / DANA)</option>
                <option value="COD">Bayar di Tempat (COD)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl shadow-md shadow-pink-200 transition mt-6"
            >
              Buat Pesanan Sekarang
            </button>
          </form>
        </div>
      </div>
    </>
  );
}