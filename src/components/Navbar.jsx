import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        Anya Pastry and Dessert
      </Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-200">
          Dashboard
        </Link>
        <Link to="/cart" className="hover:text-gray-200">
          Keranjang
        </Link>
        <Link to="/checkout" className="hover:text-gray-200">
          Checkout
        </Link>
      </div>
    </nav>
  );
}