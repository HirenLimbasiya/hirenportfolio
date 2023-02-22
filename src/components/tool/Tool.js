import React from 'react'
import "./Tool.css";
const Tool = () => {
  return (
    <section>
        <div className='tool-section'>
            <div className='tool-container'>
                <h2>Skills & Tools</h2>
                <p className='tool-things'>My Toolbox & Things I Can Do</p>
                <div className='icon-container'>
                    <div className='box-icon'>
                        <i className="fa-brands fa-html5"></i>
                        <p>HTML</p>
                    </div>
                    <div className='box-icon'>
                        <i className="fa-brands fa-css3-alt"></i>
                        <p>CSS</p>
                    </div>
                    <div className='box-icon'>
                        <i className="fa-brands fa-square-js"></i>
                        <p>JavaScript</p>
                    </div>
                    <div className='box-icon'>
                        <i className="fa-brands fa-react"></i>
                        <p>React</p>
                    </div>
                    <div className='box-icon'>
                        <i className="fa-brands fa-git-alt"></i>
                        <p>Git</p>
                    </div>
                    <div className='box-icon'>
                        <i className="fa-brands fa-github"></i>
                        <p>Git hub</p>
                    </div>
                    <div className='box-icon'>
                        <i className="fa-solid fa-v"></i>
                        <p>VS Code</p>
                    </div>
                    <div className='box-icon'>
                        <i className="fa-brands fa-bootstrap"></i>
                        <p>Bootstrap</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='tool-angle'></div>
    </section>
    
  )
}

export default Tool