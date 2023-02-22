import React from 'react'
import "./Projects.css"
import CustomData from '../customData/CustomData'

const Projects = () => {
    return (
        <section id='projects'>
            <div className='projects-section'>
                <div className='projects-container'>
                    <h2>Projects</h2>
                    <h1>A Selection Of Stuff I've Built</h1>
                    {
                        CustomData.map((element, index) => {
                            return (
                                <div className='single-project' style={{ flexDirection: index % 2 !== 0 ? 'row-reverse' : null }} key={element.name}>
                                    <div className='single-project-text'>
                                        <h3>{element.name}</h3>
                                        <p>{element.describe}</p>
                                        <h4><i class="fa-solid fa-microchip"></i> {element.tech}</h4>
                                        <div className='project-btn'>
                                            <a href={element.webpageURL}><button className='webpage-btn'>View webpage</button></a>
                                        </div>
                                    </div>
                                    <div className='single-project-img'>
                                        <img src={element.img} alt={element.img} />
                                    </div>
                                </div>
                            )
                        })

                    }

                </div>
            </div>
            <div className='project-angle'></div>
        </section>
    )
}

export default Projects