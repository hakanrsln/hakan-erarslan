import React from 'react';
import './about.css';
import Me from '../../assets/me__about.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import {VscFolderLibrary}  from 'react-icons/vsc';
 
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='me-about'></img>
          </div>
          
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h4>Experience</h4>
              <small>3+ Years Coding</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h4>Clients</h4>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h4>Projects</h4>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere rerum ut ipsum deserunt suscipit temporibus optio maiores repellendus ab eius, quibusdam dolorum iusto at fugiat neque culpa nam ea et?</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;