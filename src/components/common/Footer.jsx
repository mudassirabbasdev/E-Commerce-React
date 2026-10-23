import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-auto bg-ink text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-ice">MyStore</h3>
          <p className="mt-3 max-w-xs text-sm leading-6 text-gray-400">
            Quality products at fair prices, delivered to your door.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ice">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-ice">Home</Link></li>
            <li><Link to="/shop" className="hover:text-ice">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-ice">Cart</Link></li>
            <li><Link to="/about" className="hover:text-ice">About</Link></li>
            <li><Link to="/contact" className="hover:text-ice">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ice">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>support@mystore.com</li>
            <li>+92 300 0000000</li>
            <li>Karachi, Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
