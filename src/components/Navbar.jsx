import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='menu-bar'>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>CATEGORIAS</NavLink></li>
            <li><NavLink to="/animes" className={({ isActive }) => (isActive ? "active" : "")}>ANIMES</NavLink></li>
            <li><NavLink to="/winner" className={({ isActive }) => (isActive ? "active" : "")}>VENCEDOR</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar