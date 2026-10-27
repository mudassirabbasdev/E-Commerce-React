import React, { createContext, useState, useEffect } from 'react'
import { API_URL } from '../config'
import backupProducts from '../data/products.json'   // same data as the API, used if the API fails

// Every image in src/assets/products, keyed by its path. Vite gives us the final URL of each file.
const localImages = import.meta.glob('../assets/products/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

// "https://fakestoreapi.com/img/abc.png" -> the local copy of abc.png (or the same URL if there is none)
const getLocalImage = (url = '') => {
  const fileName = decodeURIComponent(url.split('/').pop())
  return localImages[`../assets/products/${fileName}`] || url
}

const backupWithLocalImages = () =>
  backupProducts.map((p) => ({ ...p, image: getLocalImage(p.image) }))

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Give up after 8 seconds so a slow/blocked API does not keep the site loading
        const res = await fetch(`${API_URL}/products`, { signal: AbortSignal.timeout(8000) })
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        const data = await res.json()
        if (!Array.isArray(data) || data.length === 0) throw new Error('API returned no products')
        setProducts(data)                 // FakeStore returns a plain array
      } catch (error) {
        console.log('API failed, showing backup data instead:', error)
        setProducts(backupWithLocalImages())
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
