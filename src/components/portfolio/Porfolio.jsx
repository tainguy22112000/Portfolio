import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/port-01.PNG'
import IMG2 from '../../assets/port-02.png'
import IMG3 from '../../assets/port-03.jpg'
import IMG4 from '../../assets/port-04.png'
import IMG5 from '../../assets/port-05.PNG'



const Porfolio = () => {

  // OBJECT DATA
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'BK-RECME Website',
      github: 'https://github.com/tainguy22112000/Web_Lab_Demo_Tai',
      demo: 'https://bkrecme-web.herokuapp.com/'
    },

    {
      id: 2,
      image: IMG2,
      title: 'Medical Equipments\' Managament System',
      github: 'https://github.com/tainguy22112000/Medical-Equipment-Management-System',
      demo: 'http://smartbag-web.herokuapp.com/'
    },

    {
      id: 3,
      image: IMG3,
      title: 'Image Processing',
      github: 'https://github.com/tainguy22112000/Computer-Vision',
      demo: 'https://github.com/tainguy22112000/Computer-Vision'
    },

    {
      id: 4,
      image: IMG4,
      title: 'AGV Line Tracking',
      github: 'https://github.com/tainguy22112000/AGV-line-tracking',
      demo: 'https://github.com/tainguy22112000/AGV-line-tracking'
    },

    {
      id: 5,
      image: IMG5,
      title: 'My Portfolio',
      github: 'https://github.com/tainguy22112000/Portfolio',
      demo: 'https://github.com/tainguy22112000/Portfolio'
    },

  ];



  return (
    <section id = 'portfolio'>
          <h5>My recent projects</h5>
          <h2>Porfolio</h2>

          <div className = 'container portfolio__container'>
              {data.map (({id, image, title, github, demo}) => {
                return (
                  <article className = 'portfolio__item' key = {id}>
                  <div className = 'portfolio__item-image'>
                      <img src = {image} alt = ''></img>
                  </div>
                  <div className ='portfolio__item-title'>
                      <h3>{title}</h3>
                  </div>
                  
                  <div className = 'portfolio__item-cta'>
                    <a href = {github} className = 'btn' target = '_blank'>Github</a>
                    <a href = {demo} className = 'btn btn-primary' target = '_blank'>Live Demo</a>
                  </div>
              </article>
                )
              })}
              
          </div>
    </section>    
  )
}

export default Porfolio