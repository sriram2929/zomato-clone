import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Registration from './components/RegistrationForm/Registration'

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<Registration   setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
    
      <Routes>
     <Route path='/' element={<Home/>} ></Route>
     <Route path='/Cart' element={<Cart/>}></Route>
     <Route path='/PlaceOrder' element={<PlaceOrder/>} ></Route>
      </Routes>
     

    </div>
    <Footer/>
    </>
  )
}

export default App