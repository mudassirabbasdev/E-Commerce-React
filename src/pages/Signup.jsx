
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const inputClass =
  'mt-1 w-full rounded-lg border border-[#8fc4ad]/50 bg-[#f8f7f2] px-4 py-2.5 text-sm text-[#163d33] placeholder-[#163d33]/40 outline-none transition focus:border-[#4a8f78] focus:ring-2 focus:ring-[#8fc4ad]/50'

const emptyForm = { name: '', email: '', password: '', confirm: '' }

const Signup = () => {
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple validation before "sending" anything
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      setDone(false)
      return
    }

    if (form.password !== form.confirm) {
      setError('Passwords do not match.')
      setDone(false)
      return
    }

    setError('')
    console.log('Signup data:', form)
    setDone(true)
    setForm(emptyForm)
  }

  return (
    <section className="mx-auto max-w-md py-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">
          Join Verdora
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#163d33]">
          Create your account
        </h1>

        <p className="mt-2 text-sm text-[#163d33]/70">
          Join Verdora in less than a minute.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-xl border border-[#8fc4ad]/40 bg-white p-6 shadow-sm"
      >
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {done && (
          <div className="rounded-lg border border-[#8fc4ad] bg-[#8fc4ad]/20 p-3 text-sm font-medium text-[#163d33]">
            Form submitted. (Sign up is not connected to a server yet.)
          </div>
        )}

        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-[#163d33]"
          >
            Full name
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

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#163d33]"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="At least 6 characters"
              value={form.password}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label
              htmlFor="confirm"
              className="text-sm font-medium text-[#163d33]"
            >
              Confirm password
            </label>

            <input
              id="confirm"
              name="confirm"
              type="password"
              required
              placeholder="Repeat password"
              value={form.confirm}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#4a8f78] py-3 text-sm font-semibold text-white transition hover:bg-[#163d33] active:scale-95"
        >
          Sign up
        </button>

        <p className="text-center text-sm text-[#163d33]/70">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-[#4a8f78] transition hover:text-[#163d33]"
          >
            Log in
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Signup
