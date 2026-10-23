import React, { createContext, useState, useEffect } from 'react'
import { API_URL } from '../config'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/products`)
        const data = await res.json()
        setProducts(data)                 // FakeStore returns a plain array
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  )
}
