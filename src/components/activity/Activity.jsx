import React from 'react'
import './Activity.css'
import CE1 from '../../assets/certificate-01.PNG'
import CE2 from '../../assets/certificate-02.PNG'
import CE3 from '../../assets/certificate-03.PNG'
import CE4 from '../../assets/certificate-04.PNG'
import CE5 from '../../assets/certificate-05.jpg'
import CE6 from '../../assets/certificate-06.PNG'
import CE7 from '../../assets/certificate-07.png'


// import Swiper core and required modules
import {Pagination, Navigation, Scrollbar, A11y} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Activity = () => {

  const data = [
    {
      activity: CE1,
      title: 'Toyota Scholarship'
    },
    {
      activity: CE2,
      title: 'Solidworks Dassault Systems'
    },
    {
      activity: CE3,
      title: 'English EFSET'
    },
    {
      activity: CE4,
      title: 'Bach Khoa Robotics and Automation'
    },
    {
      activity: CE5,
      title: 'TOEIC-IIG'
    },
    {
      activity: CE6,
      title: 'Bach Khoa-Bot Humanoid Robot 2019'
    },
    {
      activity: CE7,
      title: 'TOEIC-Mock Test'
    },

  ]


  return (
    <section id = 'activity'>
        <h5>Honor and Award</h5>
        <h2>Certificate</h2>

        <Swiper className = 'container activity__container'
            spaceBetween={40}
            slidesPerView={1}
            pagination = {{clickable: true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {data.map(({activity, title}) => {
              return (
                <SwiperSlide className = 'activity'>
                <div className = 'activity__content'>
                    <img src = {activity} alt = '' ></img>
                    
                </div>
                <h5>{title}</h5>
            </SwiperSlide>
              )
            })}
        </Swiper>
    </section>
  )
}

export default Activity