import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer d-flex align-items-center justify-content-between py-3 fw-bolder'>
        <p>© 2025 HD-Educity. All Rights reserver.</p>
        <ul>
            <li className='d-inline-block mx-2'>Terms of Services</li>
            <li className='d-inline-block mx-2'>Privacy Policy</li>
        </ul>
      
    </div>
  )
}

export default Footer
