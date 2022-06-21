import React from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {SiZalo} from 'react-icons/si'

const Contact = () => {
  return (
    <section id = 'contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className = 'container contact__container'>
            <div className = 'contact__options'>
                <article className = 'contact__option'>
                    <MdOutlineMailOutline className = 'contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>tai.nguy22112000@gmail.com</h5>
                    <a href = 'mailto:tai.nguy22112000@gmail.com' target = '_blank'>Send a message</a>
                </article>

                <article className = 'contact__option'>
                    <BsMessenger className = 'contact__option-icon'/>
                    <h4>Messages</h4>
                    <h5>Tai Nguy</h5>
                    <a href = 'https://facebook.com/tai.nguy14' target = '_blank'>Send a message</a>
                </article>

                <article className = 'contact__option'>
                    <SiZalo className = 'contact__option-icon'/>
                    <h4>Zalo</h4>
                    <h5>0909234204</h5>
                    <a href = ''>Send a message</a>
                </article>

                <article className = 'contact__option'>
                    <BsLinkedin className = 'contact__option-icon'/>
                    <h4>Linkedin</h4>
                    <h5>Tai Nguy</h5>
                    <a href = 'https://www.linkedin.com/in/tai-nguy-m2211/' target = '_blank'>More Information</a>
                </article>

            </div>

            {/* END OF CONTACT OPTIONS */}
            <form action = ''>
                <input type = 'text' name = 'name' placeholder = 'Your Full Name' required></input>
                <input type = 'text' name = 'email' placeholder = 'Your email' required></input>
                <input type = 'text' name = 'email' placeholder = 'Your Phone Number' required></input>
                <textarea type = 'text' name = 'phone'row = '7' placeholder = 'Message' required></textarea>
                <button type = 'submit' className = 'btn btn-primary'> Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact