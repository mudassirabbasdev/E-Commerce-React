import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-[#4a8f78]/20 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#4a8f78] hover:shadow-lg">

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block bg-surface">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col border-t border-[#4a8f78]/15 p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="rounded-full bg-[#4a8f78]/10 px-2.5 py-1 font-medium capitalize text-[#4a8f78]">
            {product.category}
          </span>
          <span className="font-medium text-[#4a8f78]">★ {product.rating.rate}</span>
        </div>

        <h3 className="mt-3 line-clamp-1 text-base font-semibold text-[#163d33]">
          {product.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <p className="mt-3 text-xl font-bold text-[#163d33]">${product.price}</p>

        {/* Buttons stay at the bottom of every card */}
        <div className="mt-auto flex gap-2 pt-4">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 rounded-lg border border-[#4a8f78]/50 px-3 py-2 text-center text-sm font-medium text-[#163d33] transition hover:bg-[#4a8f78]/10"
          >
            Details
          </Link>
          <button
            className="flex-1 rounded-lg bg-black px-3 py-2 text-sm font-medium text-[#60cfaa] transition hover:bg-[#60cfaa] hover:text-black active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
