
import React, { useState } from 'react'
import AnimatedText from '../components/common/AnimatedText'

const info = [
  { label: 'Email', value: 'support@verdora.com' },
  { label: 'Phone', value: '+92 300 0000000' },
  { label: 'Address', value: 'Karachi, Pakistan' },
]

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 6:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

const faqs = [
  { q: 'How long does delivery take?', a: 'Most orders arrive within 2–5 business days depending on your city.' },
  { q: 'Can I return a product?', a: 'Yes. You can return items within 30 days of delivery in their original condition.' },
  { q: 'How can I track my order?', a: "Once your order ships, we'll email you a tracking link." },
  { q: 'Which payment methods do you accept?', a: 'We accept major cards and cash on delivery in selected cities.' },
]

const inputClass =
  'mt-1 w-full rounded-lg border border-[#8fc4ad]/50 bg-[#f8f7f2] px-4 py-2.5 text-sm text-[#163d33] placeholder-[#163d33]/40 outline-none transition focus:border-[#4a8f78] focus:ring-2 focus:ring-[#8fc4ad]/50'

const Contact = () => {
  // One object holds the whole form
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  // One handler for every input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section>
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-eyebrow text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">
          Get in touch
        </p>

        <AnimatedText
          as="h1"
          text="Contact us"
          className="mt-3 text-4xl font-extrabold tracking-tight text-[#163d33]"
          delay={0.2}
        />

        <p style={{ '--t': '0.5s' }} className="text-animate mt-4 leading-7 text-[#163d33]/70">
          Have a question? Send us a message and we'll reply within one business day.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">

        {/* Info cards */}
        <div className="space-y-4">
          {info.map((i) => (
            <div
              key={i.label}
              className="rounded-xl border border-[#8fc4ad]/40 bg-[#f8f7f2] p-5 shadow-sm transition hover:border-[#4a8f78] hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4a8f78]">
                {i.label}
              </p>

              <p className="mt-1 font-medium text-[#163d33]">
                {i.value}
              </p>
            </div>
          ))}

          {/* Opening hours */}
          <div className="rounded-xl border border-[#4a8f78]/20 bg-[#163d33] p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8fc4ad]">
              Opening hours
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span className="text-gray-300">{h.day}</span>
                  <span className="font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl border border-[#8fc4ad]/40 bg-white p-6 shadow-sm lg:col-span-2"
        >
          {sent && (
            <div className="rounded-lg border border-[#8fc4ad] bg-[#8fc4ad]/20 p-4 text-sm font-medium text-[#163d33]">
              Thank you! Your message has been sent.
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-[#163d33]"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#163d33]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-[#163d33]"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="How can we help?"
              value={form.message}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#4a8f78] py-3 text-sm font-semibold text-white transition hover:bg-[#163d33] active:scale-95 sm:w-auto sm:px-10"
          >
            Send message
          </button>
        </form>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">
            Quick answers
          </p>
          <AnimatedText
            as="h2"
            text="Frequently Asked Questions"
            className="anim-underline mt-3 text-3xl font-extrabold tracking-tight text-[#163d33]"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-[#8fc4ad]/40 bg-white p-5 shadow-sm transition hover:border-[#4a8f78]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[#163d33]">
                {f.q}
                <span className="ml-4 text-xl text-[#4a8f78] transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-[#163d33]/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
