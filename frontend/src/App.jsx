import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import Cart from './pages/cart/Cart.jsx'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/footer/footer.jsx'
import Loginpopup from './components/LoginPopup/Loginpopup.jsx'

const App = () => {
  const[showlogin,setlogin]=useState(false)
  return (
    <>
    {showlogin?<Loginpopup setlogin={setlogin}/>:<></>}
    <div className='app'>
      <Navbar setlogin={setlogin}  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
