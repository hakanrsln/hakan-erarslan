import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/hakan-eraslan-06" target="_blank" rel="noreferrer"><BsLinkedin className='header__social-icon' /></a>
        <a href="https://github.com/hakanrsln" target="_blank" rel="noreferrer"><FaGithub className='header__social-icon' /></a>
        <a href="/" target="_blank" rel="noreferrer"><FiDribbble className='header__social-icon'/></a>
    </div>
  )
}

export default HeaderSocials;