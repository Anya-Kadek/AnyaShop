import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-pink-200">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col">
        <div className="md:hidden bg-white shadow p-4 flex justify-between items-center">
          <h1 className="font-bold">Admin</h1>
          <button
            className="p-2 border rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

        <footer className="bg-white border-t p-4 text-center text-sm">
          © 2026 Anya Pastry and Dessert | Version 1.0
        </footer>
      </div>
    </div>
  );
}