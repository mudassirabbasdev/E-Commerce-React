
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginBg from '../assets/img/login-bg.jpg'
import { showSuccess } from '../utility/alerts'

const inputClass =
  'mt-1 w-full rounded-lg border border-[#8fc4ad]/50 bg-[#f8f7f2] px-4 py-2.5 text-sm text-[#163d33] placeholder-[#163d33]/40 outline-none transition focus:border-[#4a8f78] focus:ring-2 focus:ring-[#8fc4ad]/50'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })

  // One handler for every input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login data:', form)
    showSuccess('Welcome back!', 'Demo only: login is not connected to a server yet.')
    setForm({ email: '', password: '' })
  }

  return (
    <section className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-[#8fc4ad]/40 bg-white shadow-lg lg:grid-cols-2">
      {/* Photo side */}
      <div className="relative hidden min-h-[560px] lg:block">
        <img src={loginBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8fc4ad]">Verdora</p>
          <p className="mt-2 text-2xl font-bold">Good to see you again</p>
          <p className="mt-1 text-sm text-white/80">Log in to track orders and check out faster.</p>
        </div>
      </div>

      {/* Form side */}
      <div className="flex flex-col justify-center p-8 sm:p-10">
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
        className="mt-8 space-y-5"
      >
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
      </div>
    </section>
  )
}

export default Login
