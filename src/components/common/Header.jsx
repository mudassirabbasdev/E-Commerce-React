import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const Header = () => {
  const { count } = useCart()
  // NavLink gives us { isActive }: true when the link matches the current URL
  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-[#4a8f78] ${
      isActive
        ? 'text-white underline decoration-2 underline-offset-8'
        : 'text-white'
    }`

  return (
    <header className="fixed inset-x-0 top-3 z-50 mx-6 rounded-full bg-black backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-2 px-4 py-4 sm:px-6 lg:px-8">

        {/* Left: logo */}
        <Link to="/" className="flex items-center gap-2 whitespace-nowrap text-xl font-bold tracking-tight text-[#4a8f78]">
          <img src="/verdora-mark.svg" alt="" className="h-8 w-8" />
          <span>
            <span className="text-white">Verd</span>ora
          </span>
        </Link>

        {/* Right: links + cart (wraps onto a second line on small screens) */}
        <nav className="flex flex-wrap  items-center gap-x-4 gap-y-2 sm:gap-x-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}

          

          {/* Auth buttons */}
          <NavLink to="/login" className={linkClass}>
            Log in
          </NavLink>
          <Link
            to="/signup"
            className="rounded-lg  bg-[#60cfaa] px-4 py-2 text-sm font-semibold  transition hover:bg-white active:scale-95"
          >
            Sign up
          </Link>

          <NavLink to="/cart" aria-label="Cart" className="relative rounded-lg bg-[#60cfaa] px-4 py-2 text-sm font-semibold  transition hover:bg-white active:scale-95">
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[11px] font-bold text-black ring-2 ring-black">
                {count}
              </span>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-6 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </NavLink>


        </nav>
      </div>
    </header>
  )
}

export default Header
