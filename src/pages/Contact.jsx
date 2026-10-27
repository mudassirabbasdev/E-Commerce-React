
import React, { useState } from 'react'
import AnimatedText from '../components/common/AnimatedText'
import contactHero from '../assets/img/contact-hero.jpg'
import { showSuccess } from '../utility/alerts'

const info = [
  { label: 'Email', value: 'support@verdora.com', icon: 'mail' },
  { label: 'Phone', value: '+92 300 0000000', icon: 'phone' },
  { label: 'Address', value: 'Karachi, Pakistan', icon: 'pin' },
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

const categories = [
  'Order Status & Tracking',
  'Returns & Exchanges',
  'Product Question',
  'Corporate & Gifting',
  'General Inquiry',
]

const MIN_MESSAGE = 10

// Field with a small icon on the left (icons are inline SVG, so no extra package is needed)
const iconClass = 'pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4a8f78]'
const fieldClass =
  'w-full rounded-xl border border-[#8fc4ad]/50 bg-[#f8f7f2] py-3 pl-10 pr-4 text-sm text-[#163d33] placeholder-[#163d33]/40 outline-none transition focus:border-[#4a8f78] focus:bg-white focus:ring-2 focus:ring-[#8fc4ad]/50'
const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.12em] text-[#163d33]'

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={iconClass} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
)
const ICONS = {
  user: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.118a7.5 7.5 0 0 1 15 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.5-1.632Z',
  mail: 'M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75',
  phone: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z',
  pin: 'M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z',
  tag: 'M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3ZM6 6h.008v.008H6V6Z',
}

const Contact = () => {
  // One object holds the whole form
  const emptyForm = { name: '', email: '', phone: '', message: '' }
  const [form, setForm] = useState(emptyForm)
  const [category, setCategory] = useState('General Inquiry')

  // One handler for every input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', { ...form, category })
    showSuccess('Message sent!', `Thank you. Our team will reply about "${category}" within one business day.`)
    setForm(emptyForm)
    setCategory('General Inquiry')
  }

  return (
    <section>
      {/* Heading */}
      <div
        className="relative isolate overflow-hidden rounded-2xl bg-cover bg-center px-6 py-16 text-center sm:px-12 sm:py-20"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
        <div className="absolute inset-0 -z-10 bg-black/65" />
        <div className="mx-auto max-w-2xl">
        <p className="text-eyebrow text-sm font-semibold uppercase tracking-widest text-[#8fc4ad]">
          Get in touch
        </p>

        <AnimatedText
          as="h1"
          text="Contact us"
          className="mt-3 text-4xl font-extrabold tracking-tight text-white"
          delay={0.2}
        />

        <p style={{ '--t': '0.5s' }} className="text-animate mt-4 leading-7 text-white/85">
          Have a question? Send us a message and we'll reply within one business day.
        </p>
        </div>
      </div>

      <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-3">

        {/* Info cards */}
        <div className="flex flex-col gap-4">
          {info.map((i) => (
            <div
              key={i.label}
              className="flex flex-1 flex-col justify-center rounded-xl border border-[#8fc4ad]/40 bg-[#f8f7f2] px-5 py-4 shadow-sm transition hover:border-[#4a8f78] hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#163d33] text-[#60cfaa]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[i.icon]} />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#4a8f78]">{i.label}</p>
                  <p className="mt-0.5 font-medium text-[#163d33]">{i.value}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Opening hours */}
          <div className="flex flex-1 flex-col justify-center rounded-xl border border-[#4a8f78]/20 bg-[#163d33] px-5 py-4 shadow-sm">
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
          className="flex flex-col rounded-2xl border border-[#8fc4ad]/40 bg-white p-6 shadow-sm sm:p-7 lg:col-span-2"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#4a8f78]">
            Priority correspondence
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#163d33]">Send us a message</h2>
          <p className="mt-1 text-sm text-[#163d33]/60">
            Pick a topic below so your message reaches the right person first.
          </p>

          {/* Inquiry category */}
          <fieldset className="mt-5">
            <legend className={labelClass}>Inquiry category</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={`rounded-lg border px-3.5 py-2 text-xs font-semibold transition active:scale-95 ${
                    category === c
                      ? 'border-black bg-black text-[#60cfaa]'
                      : 'border-[#8fc4ad]/50 bg-[#f8f7f2] text-[#163d33] hover:border-[#4a8f78]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Name + email */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>Your full name *</label>
              <div className="relative mt-2">
                <Icon d={ICONS.user} />
                <input id="name" name="name" type="text" required placeholder="e.g. Ayesha Tariq"
                  value={form.name} onChange={handleChange} className={fieldClass} />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>Email address *</label>
              <div className="relative mt-2">
                <Icon d={ICONS.mail} />
                <input id="email" name="email" type="email" required placeholder="you@example.com"
                  value={form.email} onChange={handleChange} className={fieldClass} />
              </div>
            </div>
          </div>

          {/* Phone + selected subject */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone / WhatsApp <span className="font-normal normal-case tracking-normal text-[#163d33]/50">(optional)</span>
              </label>
              <div className="relative mt-2">
                <Icon d={ICONS.phone} />
                <input id="phone" name="phone" type="tel" placeholder="0300 1234567"
                  value={form.phone} onChange={handleChange} className={fieldClass} />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className={labelClass}>Selected subject</label>
              <div className="relative mt-2">
                <Icon d={ICONS.tag} />
                <input id="subject" type="text" readOnly value={category} tabIndex={-1}
                  className={`${fieldClass} cursor-default font-medium`} />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mt-4 flex flex-1 flex-col">
            <div className="flex items-center justify-between">
              <label htmlFor="message" className={labelClass}>Detailed message *</label>
              <span className={`text-[11px] ${form.message.length >= MIN_MESSAGE ? 'text-[#4a8f78]' : 'text-[#163d33]/50'}`}>
                {form.message.length >= MIN_MESSAGE ? 'Looks good' : `Min. ${MIN_MESSAGE} characters`}
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              minLength={MIN_MESSAGE}
              placeholder="Tell us how we can help: product, order number, size, or anything else."
              value={form.message}
              onChange={handleChange}
              className="mt-2 min-h-24 w-full flex-1 resize-none rounded-xl border border-[#8fc4ad]/50 bg-[#f8f7f2] px-4 py-3 text-sm text-[#163d33] placeholder-[#163d33]/40 outline-none transition focus:border-[#4a8f78] focus:bg-white focus:ring-2 focus:ring-[#8fc4ad]/50"
            />
          </div>

          <button
            type="submit"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#60cfaa] transition hover:bg-[#60cfaa] hover:text-black active:scale-[0.99]"
          >
            Send message
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>

          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-[#163d33]/55">
            <span>🔒 Your details stay private</span>
            <span>Reply within 1 business day</span>
          </p>
        </form>
      </div>

      {/* FAQ */}
      <div className="mt-10">
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

        <div className="mx-auto mt-8 max-w-3xl space-y-3">
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
