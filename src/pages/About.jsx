
import React from 'react'
import { Link } from 'react-router-dom'

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

const About = () => {
  return (
    <div className="space-y-16">

      {/* Intro */}
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">
          About us
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#163d33] sm:text-5xl">
          We make online shopping simple
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#163d33]/75">
          MyStore started with one idea: great products should be easy to find,
          fairly priced and delivered fast. Today we serve thousands of customers
          and keep improving every day.
        </p>
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
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#163d33]">
          What we stand for
        </h2>

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
