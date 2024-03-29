import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link}  from 'react-router-dom';
import { StoreContext } from '../StoreContext/StoreContext';


const Navbar = ({setShowLogin}) => {

   const [menu,setMenu]=useState("Home");
   const {getTotalAmount}=useContext(StoreContext)

  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.logo} className='app-logo'></img></Link>
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a> 
            <a href="#footer-cont" onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App </a>
            <a href="#footer" onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}> Contact us </a>
        </ul>
        <div className='navbar-right'>
        <img src={assets.search_icon} className='search-icon'></img>
        <div className='basket'>
          <Link to='/cart'><img src={assets.basket_icon} className='basket-icon'></img></Link>
           <div className={getTotalAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)} className='reg-btn'>Signin/signup</button>
        </div>
      
        
    </div>
  )
}

export default Navbar