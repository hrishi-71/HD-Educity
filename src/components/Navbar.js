import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div id='navi'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="hdedu.png" alt="HD EDUCITY"/>
          </a>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <img id='ham' className="navbar-toggler-icon" src="ham2.png" alt="" />
          </button>

          <div className="collapse navbar-collapse ms-auto" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-right fw-bold">
              <li className="nav-item mx-2 my-2">
                <Link to='hero' smooth={true} offset={0} duration={50}><span className='links'>Home</span></Link>
              </li>
              <li className="nav-item mx-2 my-2">
                <Link to='program' smooth={true} offset={-100} duration={50}><span className='links'>Program</span></Link>
              </li>
              <li className="nav-item mx-2 my-2">
                <Link to='about' smooth={true} offset={-50} duration={50}><span className='links'>About Us</span></Link>
              </li>
              <li className="nav-item mx-2 my-2">
                <Link to='campus' smooth={true} offset={-100} duration={50}><span className='links'>Campus</span></Link>
              </li>
              <li className="nav-item mx-2 my-2">
                <Link to='testimonials' smooth={true} offset={-100} duration={50}><span className='links'>Testimonials</span></Link>
              </li>
              <li className="nav-item mx-2 my-2">
                <Link to='contact' smooth={true} offset={-40} duration={50}><span className='links'>Contact Us</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
