import React from 'react'
import Title from './titles/Title'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact row d-flex justify-content-around' id='contact'>
            <Title mTitle={"CONTACT US"} sTitle={"Get in Touch"} />
            <div className="lCol text-start col-lg-4">
                <h3>Send Us A Message ✉️...</h3>
                <p>Feel free to reach out through contact form or find our contact information below, Your feedback, questions, suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li>📩 info@hd-educity.ac.in</li>
                    <li>☎️ +91-80-1234-5678</li>
                    <li>📍 HD-EduCity University 123, Knowledge Avenue Sector 10, Tech Park Bengaluru, Karnataka – 560001 India</li>
                </ul>
            </div>
            <div className="rCol col-lg-4 mb-5">
                <form name="contact" method="post" data-netlify="true" onSubmit='submit'>
                    {/* Hidden input for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control border border-dark" id="name" name="name" placeholder="Enter Your Name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone No:</label>
                        <input type="tel" className="form-control border border-dark" id="phone" name="phone" placeholder="Enter Your Phone Number" pattern="\+?[0-9\s\-]{10,15}" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Write Your Message Here:</label>
                        <textarea className="form-control border border-dark" id="message" name="message" rows="6" placeholder="Enter Your Message" required></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary rounded-pill px-4">Submit ⇨</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
