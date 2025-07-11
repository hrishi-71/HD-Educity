import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className="hero-text">
        <h1>We Ensure Better Education For A Better World</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knoweledge, skills, and experiences needed to excel in the dynamic field of education </p>
        <Link to='program' smooth={true} offset={-100} duration={50}><button className='btn btn-light rounded-pill'>Explore More ▼</button></Link>
      </div>
    </div>
  )
}

export default Hero
