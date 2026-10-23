import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.6}
          stroke="currentColor"
          className="h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
      <h2 className="mt-6 text-2xl font-bold text-gray-900">Your cart is empty</h2>
      <p className="mt-2 text-sm text-gray-500">
        Looks like you haven't added anything yet.
      </p>
      <Link
        to="/shop"
        className="mt-6 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-ice transition hover:bg-brand-700"
      >
        Start Shopping
      </Link>
    </div>
  )
}

export default Cart
