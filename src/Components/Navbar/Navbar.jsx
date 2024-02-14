import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='wraper'>
        <ul>
          <a href="#"><li>About us</li></a>
          <a href="#"><li>Skills</li></a>
          <a href="#"><li>Project</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
    </div>
  )
}

export default Navbar