
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const inputClass =
  'mt-1 w-full rounded-lg border border-[#8fc4ad]/50 bg-[#f8f7f2] px-4 py-2.5 text-sm text-[#163d33] placeholder-[#163d33]/40 outline-none transition focus:border-[#4a8f78] focus:ring-2 focus:ring-[#8fc4ad]/50'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [done, setDone] = useState(false)

  // One handler for every input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login data:', form)
    setDone(true)
    setForm({ email: '', password: '' })
  }

  return (
    <section className="mx-auto max-w-md py-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">
          Welcome back
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#163d33]">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-[#163d33]/70">
          Log in to your account to continue.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-xl border border-[#8fc4ad]/40 bg-white p-6 shadow-sm"
      >
        {done && (
          <div className="rounded-lg border border-[#8fc4ad] bg-[#8fc4ad]/20 p-3 text-sm font-medium text-[#163d33]">
            Form submitted. (Login is not connected to a server yet.)
          </div>
        )}

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
            placeholder="Your password"
            value={form.password}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#4a8f78] py-3 text-sm font-semibold text-white transition hover:bg-[#163d33] active:scale-95"
        >
          Log in
        </button>

        <p className="text-center text-sm text-[#163d33]/70">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="font-semibold text-[#4a8f78] transition hover:text-[#163d33]"
          >
            Sign up
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Login
