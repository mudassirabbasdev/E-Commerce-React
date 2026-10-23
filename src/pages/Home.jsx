import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/common/ProductCard'
import { ProductContext } from '../context/ProductContext'
import hero from '../assets/hero.png'
import AnimatedText from '../components/common/AnimatedText'


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

  // Shop-by-category tiles built from the loaded products
  const categories = [...new Set((Array.isArray(products) ? products : []).map((p) => p.category))]
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className="space-y-16">

      {/* 1. Hero (Lightfall animation sits behind the text) */}
      <section className="relative isolate overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat text-center"
        style={{ backgroundImage: `url(${hero})` }}>

        {/* Content layer */}
        <div className="px-6 py-16 sm:px-12 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-black">
            New Season Collection
          </p>
          <AnimatedText
            as="h1"
            text="Find everything you love in one place"
            className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            delay={0.2}
          />
          <p className="mx-auto mt-6 max-w-xl text-base text-black sm:text-lg">
            Discover quality products at fair prices, delivered fast to your door.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="w-full rounded-lg border border-ice/60 bg-black px-8 py-3 text-sm font-semibold text-[#4a8f78] shadow transition hover:bg-white hover:text-black sm:w-auto"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="w-full rounded-lg border border-ice/60 bg-black px-8 py-3 text-sm font-semibold text-[#4a8f78] transition hover:bg-white hover:text-black sm:w-auto"
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
            className="flex items-center gap-4 rounded-xl border border-[#4a8f78]/20 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#4a8f78] hover:shadow-md"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4a8f78]/10 text-[#4a8f78]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </div>

            {/* Text */}
            <div>
              <h3 className="font-semibold text-[#163d33]">
                {f.title}
              </h3>

              <p className="text-sm text-gray-600">
                {f.text}
              </p>
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


      {/* Shop by category */}
      {categories.length > 0 && (
        <section>
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">
              Browse
            </p>
            <AnimatedText
              as="h2"
              text="Shop by Category"
              className="anim-underline mt-2 text-3xl font-extrabold tracking-tight text-[#163d33]"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c}
                to="/shop"
                className="group rounded-xl border border-[#4a8f78]/20 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#4a8f78] hover:bg-black hover:shadow-lg"
              >
                <p className="text-lg font-semibold capitalize text-[#163d33] transition group-hover:text-[#60cfaa]">
                  {c}
                </p>
                <p className="mt-1 text-xs text-[#4a8f78]">
                  {products.filter((p) => p.category === c).length} products &rarr;
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}


      {/* Why Choose Us */}
      <section className="rounded-2xl cursor-pointer bg-[#163d33] px-6 py-12 sm:px-10 sm:py-16">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8fc4ad]">
            The Store Difference
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Shopping Made Better
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-300 sm:text-base">
            Great products, dependable service, and a shopping experience designed around you.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Benefit 1 */}
          <div className="rounded-xl border border-[#4a8f78]/15 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4a8f78]/10 text-[#4a8f78]">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7h11v10H3zM14 10h4l3 3v4h-7zM7 20a2 2 0 100-4 2 2 0 000 4zM17 20a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </div>

            <h3 className="mt-5 font-semibold text-[#163d33]">
              Fast Delivery
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Get your favorite products delivered to your doorstep.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="rounded-xl border border-[#4a8f78]/15 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4a8f78]/10 text-[#4a8f78]">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12 2 2 4-4"
                />
              </svg>
            </div>

            <h3 className="mt-5 font-semibold text-[#163d33]">
              Secure Shopping
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Shop confidently with a checkout experience designed for security.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="rounded-xl border border-[#4a8f78]/15 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4a8f78]/10 text-[#4a8f78]">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v6h6M4.5 10a8 8 0 111.8 7.8M4 10l4-4"
                />
              </svg>
            </div>

            <h3 className="mt-5 font-semibold text-[#163d33]">
              Easy Returns
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Enjoy a straightforward return process according to our policy.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="rounded-xl border border-[#4a8f78]/15 bg-white p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4a8f78]/10 text-[#4a8f78]">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3a7 7 0 00-7 7v4a3 3 0 003 3h1v-6H8a3 3 0 00-3 3m14-4a7 7 0 00-14 0m14 4a3 3 0 01-3 3h-1v-6h1a3 3 0 013 3zm-7 7h3"
                />
              </svg>
            </div>

            <h3 className="mt-5 font-semibold text-[#163d33]">
              Customer Support
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              We're here to help with your questions and orders.
            </p>
          </div>

        </div>  
      </section>



      {/* Customer Reviews Section */}
        <section className="py-12 sm:py-16">
          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">
              Testimonials
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#163d33] sm:text-4xl">
              What Our Customers Say
            </h2>

            <p className="mt-4 text-base leading-7 text-[#163d33]/70">
              Real experiences from customers who love shopping with us.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Ahmed Khan',
                role: 'Verified Customer',
                review:
                  'Amazing quality and fast delivery. The whole shopping experience was smooth and easy.',
                initials: 'AK',
              },
              {
                name: 'Fatima Ali',
                role: 'Verified Customer',
                review:
                  'The products were exactly as described, and the prices were reasonable. Highly recommended!',
                initials: 'FA',
              },
              {
                name: 'Usman Malik',
                role: 'Verified Customer',
                review:
                  'Excellent customer service and a great selection of products. I will definitely shop here again.',
                initials: 'UM',
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-[#8fc4ad]/40 bg-[#f8f7f2] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#4a8f78] hover:shadow-lg"
              >
                {/* Stars */}
                <div
                  className="flex gap-1 text-lg text-[#4a8f78]"
                  aria-label="5 out of 5 stars"
                >
                  {'★★★★★'}
                </div>

                {/* Review Text */}
                <p className="mt-4 text-sm leading-7 text-[#163d33]/80">
                  "{review.review}"
                </p>

                {/* Customer Info */}
                <div className="mt-6 flex items-center gap-3 border-t border-[#8fc4ad]/40 pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#163d33] text-sm font-bold text-[#8fc4ad]">
                    {review.initials}
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#163d33]">
                      {review.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#4a8f78]">
                      {review.role}
                    </p>
                  </div>

                  <div className="ml-auto text-[#4a8f78]">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M14 10V5a3 3 0 0 1 3-3h3v8h-6Zm-10 0V5a3 3 0 0 1 3-3h3v8H4Zm10 0h6v9a3 3 0 0 1-3 3h-3V10Zm-10 0h6v9a3 3 0 0 1-3 3H4V10Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-10 text-center">
            <p className="text-sm text-[#163d33]/70">
              Your satisfaction is what motivates us to do better every day.
            </p>
          </div>
        </section>

      {/* Newsletter */}
      <section className="rounded-2xl bg-black px-6 py-12 text-center sm:px-10">
        <AnimatedText
          as="h2"
          text="Get 10% off your first order"
          className="text-2xl font-bold text-white sm:text-3xl"
        />
        <p className="mx-auto mt-3 max-w-md text-sm text-gray-300">
          Join our newsletter for new arrivals, offers and shopping tips.
        </p>
        {subscribed ? (
          <p className="mt-6 font-semibold text-[#60cfaa]">
            Thanks for subscribing!
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubscribed(true)
              setEmail('')
            }}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[#4a8f78]/50 bg-white px-4 py-2.5 text-sm text-[#163d33] outline-none focus:border-[#60cfaa] focus:ring-2 focus:ring-[#8fc4ad]"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#60cfaa] px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-white active:scale-95"
            >
              Subscribe
            </button>
          </form>
        )}
      </section>

    </div>
  )
}

export default Home
