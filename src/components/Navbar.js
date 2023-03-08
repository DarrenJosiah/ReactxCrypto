import React from 'react'
import {GiOverkill} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <Link to='/'> 
      <div className='navbar'>
          <GiOverkill className='icon'/>
          <h1>Cypto <span className='pink'>Jaeger</span></h1>
      </div>
    </Link>
  )
}

export default Navbar