import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PublicLayout from '../Layouts/Public/PublicLayout'
import Home from '../features/Home/Pages/Home'
import Products from '../features/Products/Pages/Products'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<Products />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes