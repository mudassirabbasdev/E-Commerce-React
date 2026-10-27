import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductCard from '../components/common/ProductCard'
import { ProductContext } from '../context/ProductContext'
import hero from '../assets/hero.png'
import AnimatedText from '../components/common/AnimatedText'
import SpecularButton from '../components/animations/SpecularButton'
import MaskedHeading from '../components/animations/MaskedHeading'
import CircularCarousel from '../components/animations/CircularCarousel'
import deliveryCard from '../assets/img/delivery-card.jpg'
import secureCard from '../assets/img/secure-card.jpg'
import cartHero from '../assets/img/cart-hero.jpg'
import supportCard from '../assets/img/support-card.jpg'
import mallBg from '../assets/img/mall-bg.jpg'
import { toastSuccess } from '../utility/alerts'


// Plain data array: we map over it below to avoid repeating the same JSX 3 times
const features = [
  { title: 'Free Shipping', text: 'On all orders over $50' },
  { title: 'Secure Payment', text: '100% protected checkout' },
  { title: 'Easy Returns', text: '30 days money-back guarantee' },
]

const Home = () => {
  const { products, loading } = useContext(ProductContext)
  const navigate = useNavigate()

  // First 4 products only
  const featured = products.slice(0, 4)

  // Carousel items: { src, alt, title, subtitle }
  const slides = (Array.isArray(products) ? products : []).slice(0, 10).map((p) => ({
    id: p.id,
    src: p.image,
    alt: p.title,
    title: p.title.length > 38 ? p.title.slice(0, 38) + '…' : p.title,
    subtitle: p.category,
  }))

  // Shop-by-category tiles built from the loaded products
  const categories = [...new Set((Array.isArray(products) ? products : []).map((p) => p.category))]
  const [email, setEmail] = useState('')

  return (
    <div className="space-y-10">

      {/* 1. Hero (Lightfall animation sits behind the text) */}
      <section className="relative isolate -mt-32 ml-[calc(50%-50vw)] flex min-h-screen w-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat text-center"
        style={{ backgroundImage: `url(${hero})` }}>

        {/* Content layer */}
        <div className="w-full px-6 pt-28 pb-16 sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-white">
            New Season Collection
          </p>
          {/* MaskedHeading: the image shows through the letters */}
          <div className="mx-auto mt-4 max-w-4xl">
            <MaskedHeading
              tag="h1"
              text="Find everything you love in one place"
              src="/hero-mask.svg"
              reveal="rise"
              trigger="mount"
              weight={800}
              textScale={0.085}
              drift={14}
              hoverZoom={0.08}
            />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-base text-white sm:text-lg">
            Discover quality products at fair prices, delivered fast to your door.
          </p>
          <div className="mt-10 flex items-center justify-center gap-5">
            <SpecularButton
              size="md"
              radius={14}
              tint="#000000"
              tintOpacity={0.85}
              textColor="#60cfaa"
              lineColor="#60cfaa"
              baseColor="#4a8f78"
              onClick={() => navigate('/shop')}
            >
              Shop Now
            </SpecularButton>
            <SpecularButton
              size="md"
              radius={14}
              tint="#000000"
              tintOpacity={0.85}
              textColor="#60cfaa"
              lineColor="#60cfaa"
              baseColor="#4a8f78"
              onClick={() => navigate('/about')}
            >
              Learn More
            </SpecularButton>
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


      {/* Trending carousel (drag to spin, click a card to open the product) */}
      {slides.length >= 3 && (
        <section>
          <div className="mb-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">Spin it</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#163d33]">Trending Now</h2>
          </div>
          <div className="relative h-[480px] w-full">
            <CircularCarousel
              items={slides}
              preset="cylinder"
              intro="rise"
              cardWidth={190}
              aspectRatio={0.8}
              speed={10}
              captions
              fadeColor="#dadce7"
              cornerRadius={14}
              onItemClick={(item) => navigate(`/product/${item.id}`)}
            />
          </div>
        </section>
      )}


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
      <section className="rounded-2xl cursor-pointer bg-[#163d33] px-6 py-10 sm:px-10 sm:py-12">

        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
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
          <div className="rounded-xl border border-[#4a8f78]/15 bg-white overflow-hidden text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img src={deliveryCard} alt="Fast Delivery" className="h-40 w-full object-cover" />
            <div className="p-6">

            <h3 className="font-semibold text-[#163d33]">
              Fast Delivery
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Get your favorite products delivered to your doorstep.
            </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="rounded-xl border border-[#4a8f78]/15 bg-white overflow-hidden text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img src={secureCard} alt="Secure Shopping" className="h-40 w-full object-cover" />
            <div className="p-6">

            <h3 className="font-semibold text-[#163d33]">
              Secure Shopping
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Shop confidently with a checkout experience designed for security.
            </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="rounded-xl border border-[#4a8f78]/15 bg-white overflow-hidden text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img src={cartHero} alt="Easy Returns" className="h-40 w-full object-cover" />
            <div className="p-6">

            <h3 className="font-semibold text-[#163d33]">
              Easy Returns
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Enjoy a straightforward return process according to our policy.
            </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="rounded-xl border border-[#4a8f78]/15 bg-white overflow-hidden text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <img src={supportCard} alt="Customer Support" className="h-40 w-full object-cover" />
            <div className="p-6">

            <h3 className="font-semibold text-[#163d33]">
              Customer Support
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              We're here to help with your questions and orders.
            </p>
            </div>
          </div>

        </div>  
      </section>



      {/* Customer Reviews Section */}
        <section>
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
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Ahmed Khan',
                role: 'Verified Customer',
                review:
                  'Amazing quality and fast delivery. The whole shopping experience was smooth and easy.',
                initials: 'AK',
                photo: 'https://randomuser.me/api/portraits/men/32.jpg',
              },
              {
                name: 'Fatima Ali',
                role: 'Verified Customer',
                review:
                  'The products were exactly as described, and the prices were reasonable. Highly recommended!',
                initials: 'FA',
                photo: 'https://randomuser.me/api/portraits/women/44.jpg',
              },
              {
                name: 'Usman Malik',
                role: 'Verified Customer',
                review:
                  'Excellent customer service and a great selection of products. I will definitely shop here again.',
                initials: 'UM',
                photo: 'https://randomuser.me/api/portraits/men/45.jpg',
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
                  <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#163d33] text-sm font-bold text-[#8fc4ad]">
                    {review.initials}
                    <img src={review.photo} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} className="absolute inset-0 h-full w-full object-cover" />
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
          <div className="mt-6 text-center">
            <p className="text-sm text-[#163d33]/70">
              Your satisfaction is what motivates us to do better every day.
            </p>
          </div>
        </section>

      {/* Newsletter */}
      <section
        className="relative isolate overflow-hidden rounded-2xl bg-black bg-cover bg-center px-6 py-12 text-center sm:px-10"
        style={{ backgroundImage: `url(${mallBg})` }}
      >
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <AnimatedText
          as="h2"
          text="Get 10% off your first order"
          className="text-2xl font-bold text-white sm:text-3xl"
        />
        <p className="mx-auto mt-3 max-w-md text-sm text-gray-300">
          Join our newsletter for new arrivals, offers and shopping tips.
        </p>
        <form
            onSubmit={(e) => {
              e.preventDefault()
              toastSuccess('Thanks for subscribing!', 'Your 10% off code is on its way.')
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
      </section>

    </div>
  )
}

export default Home
