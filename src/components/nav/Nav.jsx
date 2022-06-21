import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {FaAward} from 'react-icons/fa'
import { useState } from 'react'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>

                    {/* HOME BUTTON */}
      <a href = "#" 
        onClick = {() => setActiveNav('#')}
        className = {activeNav === '#' ? 'active': ''} 
              ><AiOutlineHome/>
      </a>
      
                    {/* ABOUT BUTTON */}

      <a href = "#about" 
         onClick = {() => setActiveNav('#about')}
         className = {activeNav === '#about' ? 'active': ''}
              ><AiOutlineUser/>
      </a>

                    {/* EXPERIENCE BUTTON */}

      <a href = "#experience" 
          onClick = {() => setActiveNav('#experience')}
          className = {activeNav === '#experience' ? 'active': ''}
              ><BiBook/>
      </a>

                    {/* SERVICES BUTTON */}

      <a href = "#services" 
          onClick = {() => setActiveNav('#services')}
          className = {activeNav === '#services' ? 'active': ''}
              ><RiServiceLine/>
      </a>

            {/* ACTIVITY BUTTON */}

            <a href = "#activity" 
          onClick = {() => setActiveNav('#activity')}
          className = {activeNav === '#activity' ? 'active': ''}
              ><FaAward/>
      </a>

                    {/* CONTACT BUTTON */}
      <a href = "#contact"
          onClick = {() => setActiveNav('#contact')}
          className = {activeNav === '#contact' ? 'active': ''}
            ><AiOutlineMessage/>
      </a>
    </nav>
  )
}

export default Nav