import React from 'react'
import './Services.css'
import {BiBook, BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id = 'services'>
      <h5> What I offer</h5>
      <h2>Services</h2>

      <div className = 'container services__container'>
          <article className = 'service'>
              <div className = 'service__header'>
                  <h3>UI/UX Design</h3>
              </div>

              <ul className = 'service__list'>
                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Design System</p>
                  </li>

                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Figma UI Design</p>
                  </li>

                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Photoshop</p>
                  </li>

                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Render Video</p>
                  </li>
              </ul>
          </article>

          {/* END OF UI/UX DESGIN */}

          <article className = 'service'>
              <div className = 'service__header'>
                  <h3>Development</h3>
              </div>

              <ul className = 'service__list'>
                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Design System</p>
                  </li>

                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Figma UI Design</p>
                  </li>

                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Photoshop</p>
                  </li>

                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Render Video</p>
                  </li>
              </ul>
          </article>

          {/* END OF WEB DEVELOPMENT */}

          <article className = 'service'>
              <div className = 'service__header'>
                  <h3>Creation</h3>
              </div>

              <ul className = 'service__list'>
                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Design System</p>
                  </li>

                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Figma UI Design</p>
                  </li>

                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Photoshop</p>
                  </li>

                  <li>
                    <BiCheck className = 'service__list-icon'/>
                    <p>Render Video</p>
                  </li>
              </ul>
          </article>
          
          {/* END OF CREATION */}
      </div>
    </section>
  )
}

export default Services