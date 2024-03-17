import React from 'react'
import './experience.css'
import { FaCheckSquare } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import Work1 from '../../assets/CRA.jpg'
import Work2 from '../../assets/TD.jpg'
import Work3 from '../../assets/Nord.jpg'
import Work4 from '../../assets/Tech.jpg'





const Experience = () => {
  return (
    <section id='experience'>

      <h5>What Skills Do I Have</h5>
      <h2>My Experience </h2>

      <div className='experience__work'>
        <h3>Work Experience</h3>
        <div className='experience__content-wrapper'>
          <div className='experience__content'>




          <div className="work__image">
                <div className="work-image">
                  <img src={Work4} alt="Work1 Image" />
                </div>
              </div>
            <article className='experience__details'>
              <div>
                <h4 style={{ color: 'pink' }}>Job Title</h4>
                <small className='text-light'>Company</small> <br />
                <small className='text-light'>Duration </small>
                
                <ul className="numbered-list">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                </ul>
              </div>
            </article>


            {/*========================= This is the second position ============================================== */}

            <div className="work__image">
                <div className="work-image">
                  <img src={Work4} alt="Work1 Image" />
                </div>
              </div>
            <article className='experience__details'>
              <div>
                <h4 style={{ color: 'pink' }}>Job Title</h4>
                <small className='text-light'>Company</small> <br />
                <small className='text-light'>Duration </small>
                
                <ul className="numbered-list">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                </ul>
              </div>
            </article>


                {/* ======================= This is for third and fourth Jobs =========================================*/}

                <div className="work__image">
                <div className="work-image">
                  <img src={Work4} alt="Work1 Image" />
                </div>
              </div>
            <article className='experience__details'>
              <div>
                <h4 style={{ color: 'pink' }}>Job Title</h4>
                <small className='text-light'>Company</small> <br />
                <small className='text-light'>Duration </small>
                
                <ul className="numbered-list">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                </ul>
              </div>
            </article>



            <div className="work__image">
                <div className="work-image">
                  <img src={Work4} alt="Work1 Image" />
                </div>
              </div>
            <article className='experience__details'>
              <div>
                <h4 style={{ color: 'pink' }}>Job Title</h4>
                <small className='text-light'>Company</small> <br />
                <small className='text-light'>Duration </small>
                
                <ul className="numbered-list">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                </ul>
              </div>
            </article>



            {/* ======================= This is for fifth Jobs =========================================*/}

            <div className="work__image">
                <div className="work-image">
                  <img src={Work4} alt="Work1 Image" />
                </div>
              </div>
            <article className='experience__details'>
              <div>
                <h4 style={{ color: 'pink' }}>Job Title</h4>
                <small className='text-light'>Company</small> <br />
                <small className='text-light'>Duration </small>
                
                <ul className="numbered-list">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates culpa quos minima optio tenetur illo eaque nostrum? Voluptatem iure.</li>
                </ul>
              </div>
            </article>

          </div>
        </div>
      </div>

      <h2>Technologies</h2>


      <div className='.container experience__container'>
        {/* ==========================FRONT DEVELOPMENT CODE ====================================  */}


        <div className="experience__frontend">
              <h3>Frontend Development</h3>
              <div className="experience__content">

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>Angular</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

              </div>
        </div>

        {/* ==========================BACKEND DEVELOPMENT CODE ====================================  */}

        <div className="experience__backend">

        <h3>Backend Development</h3>
              <div className="experience__content">

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>Node.JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>Express</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

                <article className='experience__details'>
                <FaCheckSquare className='experience__details-icon' />
                <div>
                  <h4>AWS DynamoDB</h4>
                  <small className='text-light'>Experienced</small>
                </div>
                </article>

              </div>

        </div>

      </div>
    </section>
  )
}

export default Experience