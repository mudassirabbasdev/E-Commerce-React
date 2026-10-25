import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

const STORAGE_KEY = 'mystore-cart'

const loadCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(loadCart)
  const [toast, setToast] = useState('')

  // Keep the cart between page reloads
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable: cart still works for this visit */
    }
  }, [items])

  // Hide the toast after a moment
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(''), 2200)
    return () => clearTimeout(t)
  }, [toast])

  const addToCart = useCallback((product) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === product.id)
      if (found) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [
        ...prev,
        { id: product.id, title: product.title, price: product.price, image: product.image, qty: 1 },
      ]
    })
    setToast(`"${product.title}" added to cart`)
  }, [])

  const changeQty = useCallback((id, delta) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    )
  }, [])

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const count = items.reduce((n, i) => n + i.qty, 0)
  const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0)

  return (
    <CartContext.Provider
      value={{ items, count, subtotal, addToCart, changeQty, removeItem, clearCart }}
    >
      {children}

      {/* Toast */}
      <div
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[9998] max-w-[90vw] -translate-x-1/2 truncate rounded-full bg-black px-5 py-3 text-sm font-medium text-[#60cfaa] shadow-lg transition-all duration-300 ${
          toast ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        {toast || ' '}
      </div>
    </CartContext.Provider>
  )
}
