import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const inputClass =
  'mt-1 w-full rounded-lg border border-gray-300 bg-surface px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [done, setDone] = useState(false)

  // One handler for every input: the input's "name" decides which field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()              // stop the page from reloading
    console.log('Login data:', form)   // front-end only: no real login yet
    setDone(true)
    setForm({ email: '', password: '' })
  }

  return (
    <section className="mx-auto max-w-md py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome back</h1>
        <p className="mt-2 text-sm text-gray-500">Log in to your account to continue.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-xl border border-gray-200 bg-surface p-6 shadow-sm"
      >
        {done && (
          <div className="rounded-lg border border-brand-200 bg-brand-50 p-3 text-sm font-medium text-brand-700">
            Form submitted. (Login is not connected to a server yet.)
          </div>
        )}

        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
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
          <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
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
          className="w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-ice transition hover:bg-brand-700 active:scale-95"
        >
          Log in
        </button>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-brand-600 hover:text-brand-700">
            Sign up
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Login
