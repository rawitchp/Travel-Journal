import React from 'react'
import './NavBar.css'
import {FaGlobeAmericas} from 'react-icons/fa'

function NavBar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-content'>
            <FaGlobeAmericas size={30} color='white' className='global-logo'/>
            <div className='navbar-text'>my travel journal.</div>
        </div>
    </div>
  )
}

export default NavBar