import React from 'react'
import "./About.css";
import about from "../../images/about.svg"
const About = () => {
  return (
    <section id='about'>
      <div className='about-section'>
        <div className='about-container'>
          <h2>About</h2>
          <h1>Who Is Hiren?</h1>
          <div className='about-content'>
            <img src={about} alt="about" />
            <div className='about-text'>
              <h4>A curiosity-driven Front-End Developer with design chops.</h4>
              <p>An enthusiastic fresher who is capable to use technical skills   for the betterment of the organization.
                User experience, beautiful pixels and writing clean accessible, human code matters to me.</p>
              <p>I'm happiest when I'm creating, learning, exploring and thinking about how to make things better.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='about-angle'></div>
    </section>
  )
}

export default About