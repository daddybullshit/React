import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className='navbar'>
      <li><NavLink to="/articles">Articles</NavLink></li>
      <li><NavLink to="/admin">+</NavLink></li>
    </ul>
  )
}

export default Navbar