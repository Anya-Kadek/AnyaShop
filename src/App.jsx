import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/frontpages/Dashboard";
import ProductDetail from "./pages/frontpages/ProductDetail";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";

// Import Layout dan Halaman Admin
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import PesananPage from "./pages/adminpages/PesananPage";
import ProdukPage from "./pages/adminpages/ProdukPage";
import AboutPage from "./pages/adminpages/AboutPage";

export default function App() {
  return (
    <Routes>
      {/* Frontpage Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>

      {/* Admin Layout Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="pesanan" element={<PesananPage />} />
        <Route path="produk" element={<ProdukPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}