import React from 'react'
import './about.css'
import ME from '../../assets/image2.jpg'
import { FaAward } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";



const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know Me</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years Work Experience</small>
            </article>

            <article className='about__card'>
            <IoMdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Masters of Information Technology </small>

            </article>

            <article className='about__card'>
            <FaRegFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Project Completed</small>
            </article>
          </div> 
          <p className='education__details'>
            <h2><strong style={{ color: 'pink' }}>Education</strong></h2> <br />
            <ul>
              <li><h4> Masters of Information Technology</h4>
              <small>George Mason University &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong style={{ color: 'pink' }}> 2022 - 2024</strong></small></li> <br />

              <li><h4> Advanced Degree in Software Engineering Technology</h4>
              <small>George Brown College &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong style={{ color: 'pink' }}> 2021 - 2022</strong></small></li> <br />

              <li><h4> Bachelor of Commerce Business Administration</h4>
              <small>University of Ottawa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong style={{ color: 'pink' }}> 2020 - 2021</strong></small></li> <br />

              <li><h4>Advanced Degree in Business Administration and Marketing</h4>
              <small>Northern Virginia College &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong style={{ color: 'pink' }}> 2018 - 2020</strong></small></li> <br />
            </ul>
          </p> 


          <p className='about__myself'>
            <h2><strong style={{ color: 'pink' }}>A little About Myself</strong></h2> <br />
              <p className='little__aboutmyself'> Hi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut atque sunt et eius, nisi repellendus, unde voluptate cupiditate id, commodi quam quaerat maxime sit. 
              Ab voluptatum veniam amet est odio? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat error cumque beatae in nisi possimus facilis non, nostrum eos quas. Assumenda impedit deleniti quaerat commodi tempore tempora obcaecati dolorem consequuntur.
               
              </p>
           
          </p> 



          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About