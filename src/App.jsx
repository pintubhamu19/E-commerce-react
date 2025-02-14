import Navbar from './Components/Navbar/Navbar.jsx'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginSignup from "../src/Pages/LoginSignup.jsx"
import Cart from "../src/Pages/Cart.jsx"
import Product from "../src/Pages/Product.jsx"
import ShopCategory from "../src/Pages/ShopCategory.jsx"
import Shop from "../src/Pages/Shop.jsx"
import { useState } from "react"
import Footer from "./Components/Footer/Footer.jsx"
import men_banner from "./Components/Assests/banner_mens.png"
import women_banner from "./Components/Assests/banner_women.png"
import kid_banner from "./Components/Assests/banner_kids.png"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/signup' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </div>
  )
}

export default App
