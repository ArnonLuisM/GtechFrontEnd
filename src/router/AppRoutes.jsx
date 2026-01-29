import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import App from '../App'
import ProductListingPage from '../pages/ProductListingPage'
import ProductViewPage from '../pages/ProductViewPage'

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/homepage' element={<HomePage/>} />
          <Route path='/produtos' element={<ProductListingPage/>} />
          <Route path='/product' element={<ProductViewPage/>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default AppRoutes
