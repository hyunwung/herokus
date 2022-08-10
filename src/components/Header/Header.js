import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import logo from "../../image/logo.png"

function Header() {
  return (
    <div className='header-container'>
      <div className='header-left'>
        <Link to={"/"}>
          <img className='logo' src={logo}></img>
        </Link>
      </div>
      <div className='header-right'></div>
    </div>
  )
}

export default Header