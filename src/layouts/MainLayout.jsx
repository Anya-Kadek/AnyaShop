import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-pink-200">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
        <Outlet />
      </main>
      <footer className="bg-slate-800 text-white text-center py-3 text-xs sm:text-sm">
        © 2025 E-Commerce Simple App | Version 1.0
      </footer>
    </div>
  );
}