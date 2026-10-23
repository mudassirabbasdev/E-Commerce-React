import React, { useContext, useState } from 'react'
import ProductCard from '../components/common/ProductCard'
import { ProductContext } from '../context/ProductContext'

const Shop = () => {
  const { products, loading } = useContext(ProductContext)

  // All hooks must be at the TOP, before any early return
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sort, setSort] = useState('default')

  // 1. Loading
  if (loading) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-brand-600" />
        <p className="text-sm text-gray-500">Loading products...</p>
      </div>
    )
  }

  // 2. Nothing came from the API
  if (products.length === 0) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <h2 className="text-xl font-semibold text-gray-900">No products found</h2>
        <p className="mt-2 text-sm text-gray-500">
          Please check your connection and try again.
        </p>
      </div>
    )
  }

  // 3. Derived data: calculated from products + the 3 states, not stored
  const categories = ['all', ...new Set(products.map((p) => p.category))]

  let visible = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'all' || p.category === category
    return matchesSearch && matchesCategory
  })

  if (sort === 'low') visible = [...visible].sort((a, b) => a.price - b.price)
  if (sort === 'high') visible = [...visible].sort((a, b) => b.price - a.price)

  const clearFilters = () => {
    setSearch('')
    setCategory('all')
    setSort('default')
  }

  const fieldClass =
    'rounded-lg border border-gray-300 bg-surface px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200'

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shop</h1>
        <p className="mt-1 text-sm text-gray-500">Browse our latest products</p>
      </div>

      {/* Controls */}
      <div className="mb-8 grid gap-3 rounded-xl border border-gray-200 bg-surface p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
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

      <p className="mb-4 text-sm text-gray-500">
        Showing {visible.length} of {products.length} products
      </p>

      {/* Results */}
      {visible.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 py-16 text-center">
          <h2 className="text-lg font-semibold text-gray-900">No matching products</h2>
          <p className="mt-1 text-sm text-gray-500">Try a different search or category.</p>
          <button
            onClick={clearFilters}
            className="mt-5 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-ice transition hover:bg-brand-700"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Shop
