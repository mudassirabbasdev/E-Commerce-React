
import React, { useContext, useState } from 'react'
import ProductCard from '../components/common/ProductCard'
import { ProductContext } from '../context/ProductContext'
import AnimatedText from '../components/common/AnimatedText'
import { Link } from 'react-router-dom'
import shopHero from '../assets/img/shop-hero.jpg'

const Shop = () => {
  const { products, loading } = useContext(ProductContext)

  // States
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('default')

  // Handle empty or undefined products safely
  const productList = Array.isArray(products) ? products : []

  // Get categories from available products
  const categories = [
    'all',
    ...new Set(productList.map((p) => p.category)),
  ]

  // Filter products by search and category
  let visible = productList.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      category === 'all' || p.category === category

    return matchesSearch && matchesCategory
  })

  // Sort products by price
  if (sort === 'low') {
    visible = [...visible].sort((a, b) => a.price - b.price)
  }

  if (sort === 'high') {
    visible = [...visible].sort((a, b) => b.price - a.price)
  }

  // Reset filters
  const clearFilters = () => {
    setSearch('')
    setCategory('all')
    setSort('default')
  }

  // Input styling
  const fieldClass =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#4a8f78] focus:ring-2 focus:ring-[#8fc4ad]'

  return (
    <section className="pb-12">

      {/* Hero Section - Always Visible */}
      <div
        className="relative isolate mb-10 overflow-hidden rounded-2xl bg-cover bg-center px-6 py-16 text-center sm:px-12 sm:py-24"
        style={{ backgroundImage: `url(${shopHero})` }}
      >
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-[#8fc4ad]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 -z-10 h-64 w-64 rounded-full bg-[#8fc4ad]/20 blur-3xl" />

        <p className="text-eyebrow text-sm font-semibold uppercase tracking-[0.2em] text-[#8fc4ad]">
          Discover Our Collection
        </p>

        <AnimatedText
          as="h1"
          text="Shop Your Favorites"
          className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          delay={0.2}
        />

        <p style={{ '--t': '0.6s' }} className="text-animate mx-auto mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
          Discover quality products, explore our collection, and find
          something you love at great prices.
        </p>

        <a
          href="#shop-products"
          style={{ '--t': '0.8s' }}
          className="text-animate mt-8 inline-flex rounded-lg bg-[#8fc4ad] px-7 py-3 text-sm font-bold text-[#102c25] transition hover:bg-white"
        >
          Explore Products
        </a>
      </div>

      {/* Shop Heading - Always Visible */}
      <div className="mb-6">
        <AnimatedText
          as="h2"
          text="Shop"
          className="text-3xl font-bold tracking-tight text-[#163d33]"
        />
        <p className="mt-1 text-sm text-gray-500">
          Browse our latest products
        </p>
      </div>

      {/* Quick category chips */}
      {categories.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold capitalize transition active:scale-95 ${
                category === c
                  ? 'border-black bg-black text-[#60cfaa]'
                  : 'border-[#4a8f78]/40 bg-white text-[#163d33] hover:border-[#4a8f78] hover:bg-[#4a8f78]/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {/* Search, Category and Sort Controls */}
      <div className="mb-6 grid gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`${fieldClass} lg:col-span-2`}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`${fieldClass} capitalize`}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === 'all' ? 'All categories' : c}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className={fieldClass}
        >
          <option value="default">Sort: Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {/* Products Section */}
      <div id="shop-products" className="scroll-mt-6">

        {/* Product Count */}
        {!loading && productList.length > 0 && (
          <p className="mb-4 text-sm text-gray-500">
            Showing {visible.length} of {productList.length} products
          </p>
        )}

        {/* Loading State - Only in Products Section */}
        {loading ? (
          <div className="flex min-h-[30vh] flex-col items-center justify-center gap-4 rounded-xl bg-[#f8f7f2]">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#4a8f78]" />
            <p className="text-sm text-gray-500">
              Loading products...
            </p>
          </div>

        ) : productList.length === 0 ? (

          /* API Error or Empty Products */
          <div className="rounded-xl border border-dashed border-gray-300 bg-[#f8f7f2] px-5 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8fc4ad]/30 text-2xl text-[#163d33]">
              !
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#163d33]">
              Products Unavailable
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              We couldn't load the products right now. Please check
              your internet connection or come back later.
            </p>
          </div>

        ) : visible.length === 0 ? (

          /* No Search Results */
          <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">
            <h3 className="text-lg font-semibold text-[#163d33]">
              No matching products
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Try a different search or category.
            </p>

            <button
              onClick={clearFilters}
              className="mt-5 rounded-lg bg-[#4a8f78] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#163d33]"
            >
              Clear Filters
            </button>
          </div>

        ) : (

          /* Product Cards */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>

      {/* Shopping perks */}
      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {[
          { title: 'Free Shipping', text: 'On all orders over $50' },
          { title: 'Secure Checkout', text: 'Your payment details stay protected' },
          { title: '30-Day Returns', text: 'Changed your mind? No problem' },
        ].map((perk) => (
          <div
            key={perk.title}
            className="rounded-xl border border-[#4a8f78]/20 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#4a8f78] hover:shadow-md"
          >
            <h3 className="font-semibold text-[#163d33]">{perk.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{perk.text}</p>
          </div>
        ))}
      </div>

      {/* Need help banner */}
      <div className="mt-10 rounded-2xl bg-[#163d33] px-6 py-12 text-center">
        <AnimatedText
          as="h2"
          text="Can't find what you're looking for?"
          className="text-2xl font-bold text-white"
        />
        <p className="mx-auto mt-3 max-w-md text-sm text-gray-300">
          Our team is happy to help you pick the right product.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-lg border border-ice/60 bg-black px-8 py-3 text-sm font-semibold text-[#60cfaa] transition hover:bg-white hover:text-black"
        >
          Talk to us
        </Link>
      </div>

    </section>
  )
}

export default Shop
