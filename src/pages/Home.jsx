import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/common/ProductCard'
import Lightfall from '../components/common/Lightfall'
import { ProductContext } from '../context/ProductContext'

// Plain data array: we map over it below to avoid repeating the same JSX 3 times
const features = [
  { title: 'Free Shipping', text: 'On all orders over $50' },
  { title: 'Secure Payment', text: '100% protected checkout' },
  { title: 'Easy Returns', text: '30 days money-back guarantee' },
]

const Home = () => {
  const { products, loading } = useContext(ProductContext)

  // First 4 products only
  const featured = products.slice(0, 4)

  return (
    <div className="space-y-16">

      {/* 1. Hero (Lightfall animation sits behind the text) */}
      <section className="relative isolate overflow-hidden rounded-2xl bg-linear-to-r from-brand-600 to-brand-800 text-center text-ice">

        {/* Animated background layer */}
        <div className="absolute inset-0 -z-10">
          <Lightfall
            colors={['#dadce7', '#adbdd6', '#7e99bf']}
            backgroundColor="#5878ae"
            speed={0.3}
            streakCount={3}
            streakWidth={0.8}
            twinkle={0.3}
            backgroundGlow={0.15}
            headGlow={0.6}
            bloom={0.35}
            mouseInteraction
            holdToWarp
            intro
          />
        </div>

        {/* Content layer */}
        <div className="px-6 py-16 sm:px-12 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-200">
            New Season Collection
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Find everything you love in one place
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-brand-100 sm:text-lg">
            Discover quality products at fair prices, delivered fast to your door.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="w-full rounded-lg bg-surface px-8 py-3 text-sm font-semibold text-brand-600 shadow transition hover:bg-brand-50 sm:w-auto"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="w-full rounded-lg border border-ice/60 px-8 py-3 text-sm font-semibold text-ice transition hover:bg-ice/10 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Features */}
      <section className="grid gap-6 sm:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex items-center gap-4 rounded-xl border border-gray-200 bg-surface p-5 shadow-sm"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Featured products */}
      <section>
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Featured Products
            </h2>
            <p className="mt-1 text-sm text-gray-500">Hand-picked just for you</p>
          </div>
          <Link
            to="/shop"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            View all &rarr;
          </Link>
        </div>

        {loading ? (
          <p className="py-10 text-center text-sm text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
