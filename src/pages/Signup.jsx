import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const inputClass =
  'mt-1 w-full rounded-lg border border-gray-300 bg-surface px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200'

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
    console.log('Signup data:', form)   // front-end only: no real account yet
    setDone(true)
    setForm(emptyForm)
  }

  return (
    <section className="mx-auto max-w-md py-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create your account</h1>
        <p className="mt-2 text-sm text-gray-500">Join MyStore in less than a minute.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5 rounded-xl border border-gray-200 bg-surface p-6 shadow-sm"
      >
        {error && (
          <div className="rounded-lg border border-brand-200 bg-brand-50 p-3 text-sm font-medium text-brand-700">
            {error}
          </div>
        )}
        {done && (
          <div className="rounded-lg border border-brand-200 bg-brand-50 p-3 text-sm font-medium text-brand-700">
            Form submitted. (Sign up is not connected to a server yet.)
          </div>
        )}

        <div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full name</label>
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

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
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
            <label htmlFor="confirm" className="text-sm font-medium text-gray-700">Confirm password</label>
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
          className="w-full rounded-lg bg-brand-600 py-3 text-sm font-semibold text-ice transition hover:bg-brand-700 active:scale-95"
        >
          Sign up
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-brand-600 hover:text-brand-700">
            Log in
          </Link>
        </p>
      </form>
    </section>
  )
}

export default Signup
