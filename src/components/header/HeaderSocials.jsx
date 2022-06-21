import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './Header.css'
const HeaderSocials = () => {
  return (
    <div className = 'header__socials'>
        <a href = "https://www.linkedin.com/in/tai-nguy-m2211/" target = "_blank"><BsLinkedin/></a>
        <a href = "https://www.facebook.com/tai.nguy.14/" target = "_blank"><BsFacebook/></a>
        <a href = "https://github.com/tainguy22112000" target = "_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials