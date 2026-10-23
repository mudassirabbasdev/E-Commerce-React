
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'

const ProductDetails = () => {
  const { id } = useParams()
  const { products, loading } = useContext(ProductContext)

  // 1. Products are still being fetched by the provider
  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#8fc4ad]/30 border-t-[#4a8f78]" />
      </div>
    )
  }

  // 2. Find the product in the list we already have
  const product = products.find((p) => p.id === Number(id))

  // 3. No product with this id
  if (!product) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <h2 className="text-xl font-semibold text-[#163d33]">
          Product not found
        </h2>

        <Link
          to="/shop"
          className="mt-4 text-sm font-semibold text-[#4a8f78] transition hover:text-[#163d33]"
        >
          &larr; Back to shop
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link
        to="/shop"
        className="mb-6 inline-block text-sm font-medium text-[#163d33]/60 transition hover:text-[#4a8f78]"
      >
        &larr; Back to shop
      </Link>

      <div className="grid gap-10 rounded-2xl border border-[#8fc4ad]/40 bg-[#f8f7f2] p-6 shadow-sm md:grid-cols-2 lg:p-10">

        {/* Left: image */}
        <div className="flex aspect-square items-center justify-center rounded-xl bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain p-6"
          />
        </div>

        {/* Right: info */}
        <div className="flex flex-col">
          <span className="w-fit rounded-full bg-[#8fc4ad]/30 px-3 py-1 text-xs font-medium capitalize text-[#163d33]">
            {product.category}
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#163d33]">
            {product.title}
          </h1>

          <p className="mt-3 text-sm font-medium text-[#4a8f78]">
            ★ {product.rating.rate}
            <span className="ml-2 text-[#163d33]/50">
              ({product.rating.count} reviews)
            </span>
          </p>

          <p className="mt-6 text-4xl font-bold text-[#163d33]">
            ${product.price}
          </p>

          <p className="mt-6 leading-7 text-[#163d33]/75">
            {product.description}
          </p>

          <button
            className="mt-8 w-full rounded-lg bg-[#4a8f78] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#163d33] active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
