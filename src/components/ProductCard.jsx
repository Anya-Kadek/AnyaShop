import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="bg-pink-100 border border-pink-100 rounded-2xl p-4 shadow-sm hover:shadow-lg transition flex flex-col justify-between relative">
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
      
      {/* Tautan Link ke Halaman Detail */}
      <div className="pt-4 mt-2 border-t border-pink-50">
        <Link
          to={`/product/${product.id}`}
          className="block w-full text-center bg-pink-500 hover:bg-pink-600 text-white font-semibold text-xs py-2.5 rounded-xl shadow-sm shadow-pink-200 transition"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}