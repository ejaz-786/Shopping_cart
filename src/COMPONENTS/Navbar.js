import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'




const Navbar = () => {
  return (
    <>
   <div className='nav-bar'>
      <div className='logo'>
        <h3>E-KART</h3>
      </div>

      <div className='nav-links'>
      
        <div className='link-div'><Link to='/' className='link' >Home</Link></div>
        <div className='link-div'><Link to='/About' className='link' >About Us</Link></div>
        <div className='link-div'><Link to='/Contact' className='link' >Contact Us</Link></div>
        <div className='link-div'><Link to='/Cart' className='link' >Cart</Link></div>
    
      </div>
   </div>
   </>
  )
}

export default Navbar
