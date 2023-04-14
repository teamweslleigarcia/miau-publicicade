import React from 'react'
import './header.css'
import BannerPaulaRegina from "../../images/banner-paula.jpg"
const Header = () => {
  return (
    <header>
        <div className='header-container'>
            <img src={BannerPaulaRegina} alt="" />
        </div>
    </header>
  )
}

export default Header