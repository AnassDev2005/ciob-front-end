import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PublicLayout from '../Layouts/Public/PublicLayout'
import Home from '../features/Home/Pages/Home'
import Products from '../features/Products/Pages/Products'
import ProductDetails from '../features/ProductDetails/ProductDetails'
import About from '../features/About/Pages/About'
import Certifications from '../features/Certifications/Pages/Certifications'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<Products />} />
            <Route path="/produits/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/emplacements" element={<Home />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes