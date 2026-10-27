import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

// 5 stars: grey row underneath, green row on top, clipped to the rating (e.g. 4.2 / 5 = 84%)
const Stars = ({ rate }) => (
  <span className="relative inline-block whitespace-nowrap text-sm leading-none" aria-hidden="true">
    <span className="text-[#163d33]/20">★★★★★</span>
    <span className="absolute left-0 top-0 overflow-hidden text-[#4a8f78]" style={{ width: `${(rate / 5) * 100}%` }}>
      ★★★★★
    </span>
  </span>
)

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)
  const [liked, setLiked] = useState(false)

  const { rate, count } = product.rating
  // At most one badge, and only for products that really earn it (badging everything makes badges useless)
  const badge = rate >= 4.5 && count >= 100 ? 'Top rated' : count >= 300 && rate >= 3.5 ? 'Popular' : null

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#163d33]/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(22,61,51,0.45)]">

      {/* Image area */}
      <div className="relative h-52 overflow-hidden bg-[#f3f2ec]">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.title}`} className="block h-full">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
          />
        </Link>

        {/* Badge (top-left) */}
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#163d33] px-3 py-1 text-[11px] font-semibold tracking-wide text-[#8fc4ad]">
            {badge}
          </span>
        )}

        {/* Wishlist heart (top-right) */}
        <button
          type="button"
          onClick={() => setLiked(!liked)}
          aria-pressed={liked}
          aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#163d33] shadow-sm backdrop-blur transition hover:scale-110 hover:text-red-500 active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.8}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              className={liked ? 'text-red-500' : ''}
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>

        {/* Quick view: slides up on hover or keyboard focus (extra shortcut, not the only way in) */}
        <Link
          to={`/product/${product.id}`}
          className="absolute inset-x-3 bottom-3 translate-y-[140%] rounded-full bg-white/95 py-2 text-center text-xs font-semibold text-[#163d33] shadow-md backdrop-blur transition duration-300 group-hover:translate-y-0 focus-visible:translate-y-0"
        >
          Quick view
        </Link>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3.5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4a8f78]">
          {product.category}
        </p>

        <h3 className="mt-1 line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug text-[#163d33]">
          <Link to={`/product/${product.id}`} className="hover:text-[#4a8f78]">
            {product.title}
          </Link>
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2 text-xs text-[#163d33]/60">
          <Stars rate={rate} />
          <span>
            <span className="sr-only">Rated {rate} out of 5, </span>
            {rate} ({count})
          </span>
        </div>

        {/* Price + button stay at the bottom of every card */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <p className="text-lg font-bold text-[#163d33]">${Number(product.price).toFixed(2)}</p>

          <button
            type="button"
            onClick={handleAdd}
            aria-live="polite"
            className={`flex items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition active:scale-95 ${
              added
                ? 'bg-[#60cfaa] text-black'
                : 'bg-black text-[#60cfaa] hover:bg-[#60cfaa] hover:text-black'
            }`}
          >
            {added ? (
              <>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Added
              </>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
 
export default ProductCard
