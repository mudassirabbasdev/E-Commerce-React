import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

import { toastSuccess } from '../utility/alerts'

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

  // Keep the cart between page reloads
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable: cart still works for this visit */
    }
  }, [items])

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
    toastSuccess('Added to cart', product.title)
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
    </CartContext.Provider>
  )
}
