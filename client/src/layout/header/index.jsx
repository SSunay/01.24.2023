import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.scss'
const Header = () => {
  return (
    <div className='navbar'>
        <div className='mainNavbar'>
        <div className='logo'><NavLink to={'/'}><img src="src/images/logo.png.webp" alt="" /></NavLink></div>
        <div className='link'>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/'}>Shop</NavLink></li>
                <li><NavLink to={'/'}>Blog</NavLink></li>
                <li><NavLink to={'/'}>Pages</NavLink></li>
                <li><NavLink to={'/home-page'}>Add new Product</NavLink></li>
            </ul>
        </div>
       <div className='icons'>
       <div className='icon'><i class="fa-solid fa-cart-shopping"></i></div>
        <div className='icon'><i class="fa-solid fa-magnifying-glass"></i></div>
       </div>
        <div className='navBtn'><button>Buy Now</button></div>
        </div>
    </div>
  )
}

export default Header