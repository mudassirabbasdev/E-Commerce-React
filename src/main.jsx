import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './animations.css'
import { initAnimations } from './utility/animations'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
)

initAnimations()
