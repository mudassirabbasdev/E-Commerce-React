
import React, { useState } from 'react'

const info = [
  { label: 'Email', value: 'support@mystore.com' },
  { label: 'Phone', value: '+92 300 0000000' },
  { label: 'Address', value: 'Karachi, Pakistan' },
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
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">
          Get in touch
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#163d33]">
          Contact us
        </h1>

        <p className="mt-4 leading-7 text-[#163d33]/70">
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
    </section>
  )
}

export default Contact
