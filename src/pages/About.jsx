
import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedText from '../components/common/AnimatedText'
import hero from '../assets/hero.png'

const stats = [
  { value: '10K+', label: 'Happy customers' },
  { value: '500+', label: 'Products' },
  { value: '50+', label: 'Brands' },
  { value: '24/7', label: 'Support' },
]

const values = [
  { title: 'Quality First', text: 'Every product is checked before it reaches you.' },
  { title: 'Fair Pricing', text: 'Honest prices with no hidden fees.' },
  { title: 'Customer Care', text: 'A friendly team ready to help whenever you need.' },
]

const story = [
  { year: '2019', title: 'The idea', text: 'MyStore began as a small online shop with a handful of products.' },
  { year: '2021', title: 'Growing fast', text: 'We passed 5,000 orders and opened a dedicated support team.' },
  { year: '2023', title: 'Nationwide delivery', text: 'Faster shipping partners now bring orders to every major city.' },
  { year: 'Today', title: '10K+ customers', text: 'Hundreds of products, trusted brands and a community that keeps growing.' },
]

const team = [
  { name: 'Ayesha Khan', role: 'Founder & CEO', initials: 'AK' },
  { name: 'Bilal Ahmed', role: 'Head of Operations', initials: 'BA' },
  { name: 'Sara Malik', role: 'Customer Experience', initials: 'SM' },
  { name: 'Hamza Ali', role: 'Product Curator', initials: 'HA' },
]

const About = () => {
  return (
    <div className="space-y-16">

      {/* Hero (same style as the Home hero) */}
      <section
        className="relative isolate overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat text-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="px-6 py-16 sm:px-12 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-black">
            About us
          </p>

          <AnimatedText
            as="h1"
            text="We make online shopping simple"
            className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            delay={0.2}
          />

          <p className="mx-auto mt-6 max-w-xl text-base text-black sm:text-lg">
            MyStore started with one idea: great products should be easy to find,
            fairly priced and delivered fast. Today we serve thousands of customers
            and keep improving every day.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="w-full rounded-lg border border-ice/60 bg-black px-8 py-3 text-sm font-semibold text-[#4a8f78] shadow transition hover:bg-white hover:text-black sm:w-auto"
            >
              Shop Now
            </Link>
            <Link
              to="/contact"
              className="w-full rounded-lg border border-ice/60 bg-black px-8 py-3 text-sm font-semibold text-[#4a8f78] transition hover:bg-white hover:text-black sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[#8fc4ad]/40 bg-[#f8f7f2] p-6 text-center shadow-sm transition hover:border-[#4a8f78] hover:shadow-md"
          >
            <p className="text-3xl font-bold text-[#4a8f78]">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-[#163d33]/70">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* Values */}
      <section>
        <AnimatedText
          as="h2"
          text="What we stand for"
          className="anim-underline text-center text-2xl font-bold tracking-tight text-[#163d33]"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-[#8fc4ad]/40 bg-[#f8f7f2] p-6 shadow-sm transition hover:border-[#4a8f78] hover:shadow-md"
            >
              <h3 className="font-semibold text-[#163d33]">
                {v.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#163d33]/70">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our story (timeline) */}
      <section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">
            Our journey
          </p>
          <AnimatedText
            as="h2"
            text="Our Story"
            className="anim-underline mt-3 text-3xl font-extrabold tracking-tight text-[#163d33]"
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {story.map((item) => (
            <div
              key={item.year}
              className="relative rounded-xl border border-[#4a8f78]/20 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#4a8f78] hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-[#4a8f78]/10 px-3 py-1 text-xs font-bold text-[#4a8f78]">
                {item.year}
              </span>
              <h3 className="mt-4 font-semibold text-[#163d33]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#163d33]/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">
            The people behind MyStore
          </p>
          <AnimatedText
            as="h2"
            text="Meet Our Team"
            className="anim-underline mt-3 text-3xl font-extrabold tracking-tight text-[#163d33]"
          />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-[#8fc4ad]/40 bg-[#f8f7f2] p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#4a8f78] hover:shadow-lg"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#163d33] text-xl font-bold text-[#8fc4ad]">
                {m.initials}
              </div>
              <h3 className="mt-4 font-semibold text-[#163d33]">{m.name}</h3>
              <p className="mt-1 text-xs text-[#4a8f78]">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="rounded-2xl bg-[#163d33] px-6 py-12 text-center text-[#f8f7f2]">
        <h2 className="text-2xl font-bold">
          Ready to start shopping?
        </h2>

        <Link
          to="/shop"
          className="mt-6 inline-block rounded-lg bg-[#8fc4ad] px-8 py-3 text-sm font-semibold text-[#102c25] transition hover:bg-[#f8f7f2] hover:text-[#163d33]"
        >
          Browse products
        </Link>
      </section>

    </div>
  )
}

export default About
