import { Link, useLocation } from "react-router-dom";
export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
const location = useLocation();
const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`${ sidebarOpen ? "block" : "hidden"
      } md:block w-72 bg-pink-200 border-r border-pink-100 flex flex-col shrink-0 shadow-lg shadow-pink-50/50`}
    >
    <div className="p-6 font-extrabold text-xl text-[#e91e63] border-b border-pink-100">
       Anya Admin
   </div>

      <nav className="flex flex-col p-4 space-y-2 flex-1">
        <Link 
          to="/admin/dashboard" 
          className={`flex items-center px-4 py-3.5 rounded-2xl font-semibold transition-all ${
            isActive("/admin/dashboard") 
              ? "bg-[#e91e63] text-white shadow-md shadow-pink-500/30" 
              : "text-gray-600 hover:bg-pink-50 hover:text-[#e91e63]"
          }`}
        >
          Dashboard
        </Link>

        <Link 
          to="/admin/pesanan" 
          className={`flex items-center px-4 py-3.5 rounded-2xl font-semibold transition-all ${
            isActive("/admin/pesanan") 
              ? "bg-[#e91e63] text-white shadow-md shadow-pink-500/30" 
              : "text-gray-600 hover:bg-pink-50 hover:text-[#e91e63]"
          }`}
        >
          Pesanan
        </Link>

        <Link 
          to="/admin/produk" 
          className={`flex items-center px-4 py-3.5 rounded-2xl font-semibold transition-all ${
            isActive("/admin/produk") 
              ? "bg-[#e91e63] text-white shadow-md shadow-pink-500/30" 
              : "text-gray-600 hover:bg-pink-50 hover:text-[#e91e63]"
          }`}
        >
          Produk
        </Link>

        <Link 
          to="/admin/about" 
          className={`flex items-center px-4 py-3.5 rounded-2xl font-semibold transition-all ${
            isActive("/admin/about") 
              ? "bg-[#e91e63] text-white shadow-md shadow-pink-500/30" 
              : "text-gray-600 hover:bg-pink-50 hover:text-[#e91e63]"
          }`}
        >
          About
        </Link>
        
        <div className="pt-6 mt-auto">
          <Link 
            to="/" 
            className="flex items-center px-4 py-3.5 rounded-2xl font-semibold text-gray-500 hover:bg-pink-50 hover:text-[#e91e63] transition-all border border-pink-100/60"
          >
            ← Kembali ke Toko
          </Link>
        </div>
      </nav>
    </div>
  );
}