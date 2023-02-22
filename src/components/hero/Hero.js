import React from 'react'
import "./Hero.css"
import hiren from "../../images/hiren 3.jpg"
import flower from "../../images/flower.png"
const Hero = () => {
  return (
    <section id='home'>
        <div className='hero-section'>
            <div className='hero-container'>
                <div className='hero-main-container'>
                    <div className='hero-left-container'>
                        <h1>Good day,</h1>
                        <h2>I'm Hiren!</h2>
                        <h2>I'm Full stack web developer.</h2>
                    </div>
                    <div className='hero-right-container'>
                        <div className='hero-img'>
                            <img src={hiren} alt="hiren" />
                        </div>
                    </div>
                </div>
                <img className='flower' src={flower} alt="flower" />
            </div>
        </div>
        <div className='hero-angle'></div>
    </section>
  )
}

export default Hero