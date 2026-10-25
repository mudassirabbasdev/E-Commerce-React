import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ScrollToTop from '../components/common/ScrollToTop'

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-page text-ink">
      <ScrollToTop />
      <Header />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pt-32 pb-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default RootLayout
