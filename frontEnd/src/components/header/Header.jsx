import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/image1.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hi I'm</h3>
        <h1>Ameera Ahmadzai</h1>
        <h2>Software Engineer</h2>
        <h5 className="text-light">
          Find out more about me.
        </h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header