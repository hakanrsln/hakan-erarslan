import React from 'react';
import Typewriter from 'typewriter-effect';

import './header.css';
import CTA from './CTA';
import me from '../../assets/me2.png';
import HeaderSocials from './HeaderSocials';




const Header = () => {
 
  

  return (
    
      <header id="#">
        <div className="container header__container">
          <h4 className='greeting'>Hello, I'm</h4>
         <h1 className='greeting-titles'> <Typewriter 
            options={{
              strings: ['Hakan Erarslan', 'a Web Developer', 'Team-Player'],
              autoStart: true,
              loop: true,
            }}
           />      </h1> 
             {/** <h4 className='text-light'>Web Developer</h4> */}
          <CTA />
          <HeaderSocials />
           <div className='me'>
            <img src={me} alt='me' />
          </div>
          <a href='#contact' className='scroll__down'><h3>Scroll Down</h3></a>  {/**h3 eklendi */}
          
        </div>
      </header>
  
  )
}

export default Header;