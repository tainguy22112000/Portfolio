import React from 'react'
import './About.css'
import ME from '../../assets/avatar-01.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id = 'about'>
        <h5>Get to know</h5>
        <h2>About me</h2>

        <div className = 'container about__container'>
            <div className = 'about__me'>
              <div className = 'about__me-image'>
                <img src = {ME} alt = 'About Image'></img>
              </div>
            </div>
         

          <div className = 'about__content'>
              <div className = 'about__cards'>
                <article className = 'about__card'>
                  <FaAward className = 'about__icon'/>
                  <h5>Experience</h5>
                  <small>2 Years Working</small>
                </article>
            
                <article className = 'about__card'>
                  <FiUser className = 'about__icon'/>
                  <h5>Client</h5>
                  <small>Boston Scientific</small>
                </article>
             
                <article className = 'about__card'>
                  <VscFolderLibrary className = 'about__icon'/>
                  <h5>Projects</h5>
                  <small>5+ Completed</small>
                </article>
              </div>
          <p>
          I am a fresh mechatronics engineer at Ho Chi Minh City University of Technology. I have almost 2
          years of expriences in Bach Khoa Research Center for Manufactoring Engineering. I am looking for
          an opportunity to grow my career in the software development field, to build great products that
          scale and drive positive impacts on many users. Therefore, I am willing to face several challenges to
          take benefits and bring various values as well as my claim company.
          </p>

          <a href = '#contact' className = 'btn btn-primary'>Contact now</a>
          </div>
        </div>
    </section>
  )
}

export default About