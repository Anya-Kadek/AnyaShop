import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard'; // Import komponen baru

export default function Dashboard() {
  const pastryProducts = [
    // ... (data array 10 kue milikmu tetap sama di sini) ...
  ];

  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold mb-2">Dashboard Anya Pastry & Dessert</h1>
        <p className="text-gray-600">Pilihan menu kue, roti, dan minuman segar buatan tangan setiap hari.</p>
      </div>

      {/* Grid Layout Responsif */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pastryProducts.map((product) => (
          // Mengirim data product sebagai props ke komponen ProductCard
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}