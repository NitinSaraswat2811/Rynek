import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <Logo/>

        <div className="navbar-links">
        <span>Location</span>
        <span>Categories</span>
        <span>Sell on Rynek</span>
        <span>Login</span>
      </div>
    </nav>
  )
}

export default Navbar
