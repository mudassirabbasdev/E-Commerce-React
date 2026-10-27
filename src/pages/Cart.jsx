import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import cartHero from '../assets/img/cart-hero.jpg'
import { confirmAction, showSuccess, toastInfo } from '../utility/alerts'

const FREE_SHIPPING_FROM = 50
const SHIPPING_FEE = 5

const Cart = () => {
  const { items, subtotal, changeQty, removeItem, clearCart } = useCart()

  // Banner shown on top of both the empty and the filled cart
  const banner = (
    <div
      className="relative isolate mb-8 overflow-hidden rounded-2xl bg-cover bg-center px-6 py-14 text-center sm:px-12"
      style={{ backgroundImage: `url(${cartHero})` }}
    >
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <p className="text-sm font-semibold uppercase tracking-widest text-[#8fc4ad]">Review your order</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Your Cart</h1>
    </div>
  )

  if (items.length === 0) {
    return (
      <>
      {banner}
      <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#8fc4ad]/25 text-[#4a8f78]">
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

        <h2 className="mt-6 text-2xl font-bold text-[#163d33]">Your cart is empty</h2>

        <p className="mt-2 text-sm text-[#163d33]/60">
          Looks like you haven't added anything yet.
        </p>

        <Link
          to="/shop"
          className="mt-6 rounded-lg bg-[#4a8f78] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#163d33] active:scale-95"
        >
          Start Shopping
        </Link>
      </div>
      </>
    )
  }

  const shipping = subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_FEE
  const total = subtotal + shipping
  const remaining = FREE_SHIPPING_FROM - subtotal

  const handleClear = async () => {
    const ok = await confirmAction({
      title: 'Clear your cart?',
      text: `All ${items.length} item(s) will be removed.`,
      confirmText: 'Yes, clear it',
    })
    if (ok) {
      clearCart()
      toastInfo('Cart cleared')
    }
  }

  const handleRemove = (item) => {
    removeItem(item.id)
    toastInfo('Removed from cart', item.title)
  }

  const handleCheckout = async () => {
    const ok = await confirmAction({
      icon: 'question',
      title: 'Place your order?',
      html: `<p>${items.length} item(s)</p><p style="margin-top:4px"><b>Total: $${total.toFixed(2)}</b></p>`,
      confirmText: 'Place order',
    })
    if (!ok) return
    clearCart()
    showSuccess('Order placed!', 'Thank you for shopping with Verdora. (Demo only: no payment was taken.)')
  }

  return (
    <div>
      {banner}
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-[#163d33]">Items ({items.length})</h2>
        <button
          onClick={handleClear}
          className="text-sm font-medium text-[#163d33]/60 transition hover:text-red-600"
        >
          Clear cart
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Items */}
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-xl border border-[#4a8f78]/20 bg-white p-4 shadow-sm"
            >
              <Link
                to={`/product/${item.id}`}
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-white"
              >
                <img src={item.image} alt={item.title} className="h-full w-full object-contain p-1" />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col">
                <Link
                  to={`/product/${item.id}`}
                  className="line-clamp-2 font-semibold text-[#163d33] hover:text-[#4a8f78]"
                >
                  {item.title}
                </Link>
                <p className="mt-1 text-sm text-[#163d33]/60">${item.price.toFixed(2)} each</p>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <div className="flex items-center rounded-lg border border-[#4a8f78]/40">
                    <button
                      onClick={() => changeQty(item.id, -1)}
                      aria-label="Decrease quantity"
                      className="px-3 py-1 text-lg text-[#163d33] transition hover:bg-[#4a8f78]/10"
                    >
                      −
                    </button>
                    <span className="min-w-8 text-center text-sm font-semibold">{item.qty}</span>
                    <button
                      onClick={() => changeQty(item.id, 1)}
                      aria-label="Increase quantity"
                      className="px-3 py-1 text-lg text-[#163d33] transition hover:bg-[#4a8f78]/10"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-bold text-[#163d33]">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRemove(item)}
                aria-label={`Remove ${item.title}`}
                className="self-start text-xl leading-none text-[#163d33]/40 transition hover:text-red-600"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-2xl bg-[#163d33] p-6 text-white lg:sticky lg:top-28">
          <h2 className="text-lg font-bold">Order Summary</h2>

          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-gray-300">Subtotal</dt>
              <dd>${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-gray-300">Shipping</dt>
              <dd>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
            </div>
            <div className="flex justify-between border-t border-white/20 pt-3 text-base font-bold">
              <dt>Total</dt>
              <dd className="text-[#60cfaa]">${total.toFixed(2)}</dd>
            </div>
          </dl>

          {remaining > 0 && (
            <p className="mt-4 text-xs text-[#8fc4ad]">
              Add ${remaining.toFixed(2)} more for free shipping.
            </p>
          )}

          <button onClick={handleCheckout} className="mt-6 w-full rounded-lg bg-[#60cfaa] py-3 text-sm font-semibold text-black transition hover:bg-white active:scale-95">
            Checkout
          </button>
          <Link
            to="/shop"
            className="mt-3 block text-center text-sm text-gray-300 transition hover:text-white"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  )
}

export default Cart
