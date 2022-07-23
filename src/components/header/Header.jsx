import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    
      <header id="#">
        <div className="container header__container">
          <h4 className='greeting'>Hello, I'm</h4>
          <h1>Hakan ERARSLAN</h1>
          <h4 className='text-light'>Front End Developer</h4>
          <CTA />
          <HeaderSocials />
          <div className='me'>
            <img src={me} alt='me' />
          </div>
          <a href='#contact' className='scroll__down'>Scroll Down</a>
          
        </div>
      </header>
  
  )
}

export default Header;