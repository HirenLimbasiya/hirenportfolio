import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <header>
        <div>
          <nav>
            <h3><a href='#home'>HI</a></h3>
            <ul>
              <li><a href='#home'>home</a></li>
              <li><a href='#about'>about</a></li>
              <li><a href='#projects'>projects</a></li>
              <li><a href='#contact'>contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header