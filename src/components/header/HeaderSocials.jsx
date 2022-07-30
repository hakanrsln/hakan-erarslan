import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/hakan-eraslan-06" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/hakanrsln" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="/" target="_blank" rel="noreferrer"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials;