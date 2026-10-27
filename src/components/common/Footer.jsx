import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandGmail } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#163d33] text-gray-300">

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">

        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/verdora-mark.svg" alt="" className="h-10 w-10" />
            <h3 className="text-2xl font-bold tracking-tight text-white transition hover:text-[#8fc4ad]">
              Verd<span className="text-[#4a8f78]">ora</span>
            </h3>
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-7 text-gray-300">
            Quality products at fair prices, delivered to your door.
            Discover a better way to shop with us.
          </p>

          {/* Brand Accent */}
          <div className="mt-5 h-1 w-14 rounded-full bg-[#4a8f78]" />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
            Quick Links
          </h4>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/" className="transition duration-200 hover:translate-x-1 hover:text-[#8fc4ad] relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#8fc4ad] after:transition-transform after:duration-300 hover:after:scale-x-100">
                Home
              </Link>
            </li>

            <li>
              <Link to="/shop" className="transition duration-200 hover:translate-x-1 hover:text-[#8fc4ad] relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#8fc4ad] after:transition-transform after:duration-300 hover:after:scale-x-100">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/cart" className="transition duration-200 hover:translate-x-1 hover:text-[#8fc4ad] relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#8fc4ad] after:transition-transform after:duration-300 hover:after:scale-x-100">
                Cart
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition duration-200 hover:translate-x-1 hover:text-[#8fc4ad] relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#8fc4ad] after:transition-transform after:duration-300 hover:after:scale-x-100">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition duration-200 hover:translate-x-1 hover:text-[#8fc4ad] relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#8fc4ad] after:transition-transform after:duration-300 hover:after:scale-x-100">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
            Get in Touch
          </h4>

          <ul className="mt-5 space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-[#8fc4ad]"><TbBrandGmail /></span>
              <a
                href="mailto:support@verdora.com"
                className="transition hover:text-[#8fc4ad] relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#8fc4ad] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                support@verdora.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#8fc4ad]"><FaPhoneVolume /></span>
              <a
                href="tel:+923000000000"
                className="transition hover:text-[#8fc4ad] relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#8fc4ad] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                +92 300 0000000
              </a>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#8fc4ad]"><FaLocationDot /></span>
              <span>Karachi, Pakistan</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-[#102c25]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-5 text-xs text-gray-400 sm:flex-row sm:px-6 lg:px-8">

          <p>
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-[#8fc4ad]">Verdora</span>.
            All rights reserved.
          </p>

        </div>
      </div>

    </footer>
  )
}

export default Footer