import React from 'react'
import './Footer.css'
import {GrFacebook} from 'react-icons/gr'
import {GrGithub} from 'react-icons/gr'
import {GrInstagram} from 'react-icons/gr'
import {GrLinkedin} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
          <a href = '#' className = 'footer__logo'> JAYDEN NGUY</a>

          <ul className = 'permalinks'>
              <li><a href = '#'>Home</a></li>
              <li><a href = '#about'>About</a></li>
              <li><a href = '#experience'>Experience</a></li>
              <li><a href = '#services'>Services</a></li>
              <li><a href = '#portfolio'>Portfolio</a></li>
              <li><a href = '#activity'>Activity</a></li>
              <li><a href = '#contact'>Contact</a></li>
          </ul>

          <div className = 'footer__socials'>
              <a href = 'https://www.facebook.com/tai.nguy.14' target = '_blank'><GrFacebook/></a>
              <a href = 'https://github.com/tainguy22112000' target = '_blank'><GrGithub/></a>
              <a href = 'https://www.instagram.com/nmintaii/' target = '_blank'><GrInstagram/></a>
              <a href = 'https://www.linkedin.com/in/tai-nguy-m2211/' target = '_blank'><GrLinkedin/></a>
          </div>

          <div className = 'footer__copyright'>
                <small>&copy; Jayden Nguy Developer. All rights reserved</small>

          </div>
    </footer>
  )
}

export default Footer