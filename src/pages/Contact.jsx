import React, { useState } from 'react'

const info = [
  { label: 'Email', value: 'support@mystore.com' },
  { label: 'Phone', value: '+92 300 0000000' },
  { label: 'Address', value: 'Karachi, Pakistan' },
]

const inputClass =
  'mt-1 w-full rounded-lg border border-gray-300 bg-surface px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200'

const Contact = () => {
  // One object holds the whole form
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  // One handler for every input: uses the input's "name" attribute as the key
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()              // stop the page from reloading
    console.log('Form data:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Contact us
        </h1>
        <p className="mt-4 text-gray-600">
          Have a question? Send us a message and we'll reply within one business day.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">

        {/* Info cards */}
        <div className="space-y-4">
          {info.map((i) => (
            <div
              key={i.label}
              className="rounded-xl border border-gray-200 bg-surface p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                {i.label}
              </p>
              <p className="mt-1 text-gray-900">{i.value}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-xl border border-gray-200 bg-surface p-6 shadow-sm lg:col-span-2"
        >
          {sent && (
            <div className="rounded-lg border border-brand-200 bg-brand-50 p-4 text-sm font-medium text-brand-700">
              Thank you! Your message has been sent.
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
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
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
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
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
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
            className="w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-ice transition hover:bg-brand-700 active:scale-95 sm:w-auto sm:px-10"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
