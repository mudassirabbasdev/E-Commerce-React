import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block bg-surface">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col border-t border-gray-100 p-4">
        <div className="flex items-center justify-between text-xs">
          <span className="rounded-full bg-brand-50 px-2.5 py-1 font-medium capitalize text-brand-600">
            {product.category}
          </span>
          <span className="font-medium text-accent">★ {product.rating.rate}</span>
        </div>

        <h3 className="mt-3 line-clamp-1 text-base font-semibold text-gray-900">
          {product.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-gray-500">
          {product.description}
        </p>

        <p className="mt-3 text-xl font-bold text-gray-900">${product.price}</p>

        {/* Buttons stay at the bottom of every card */}
        <div className="mt-auto flex gap-2 pt-4">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Details
          </Link>
          <button
            className="flex-1 rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-ice transition hover:bg-brand-700 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
