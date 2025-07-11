import React from 'react'
import './Testimonial.css'
import Title from './titles/Title'

const Testimonial = () => {
    return (
        <div id='testimonials'>
            <Title mTitle="TESTIMONIALS" sTitle="What Students Say" />
            <div className="reviews row d-flex justify-content-around">
                <div className="card col-lg-5 my-3 mx-1">
                    <div className="card-body">
                        <div className="users d-flex justify-content-evenly my-2">
                            <img src="man2.jpg" alt="" className='user rounded-circle' />
                            <div>
                                <h5 className="card-title">AMIT MISHRA</h5>
                                <h6 className="card-subtitle mb-2 text-muted">HD-EDUCITY, IND</h6>
                            </div>
                        </div>
                        <p className="card-text">Choosing to pursue my degree at HD-EDUCITY was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitmment to  academic excellence have truely exceeded my expectations.</p>
                    </div>
                </div>
                <div className="card col-lg-5 my-3 mx-1">
                    <div className="card-body">
                        <div className="users d-flex justify-content-evenly my-2">
                            <img src="man3.jpg" alt="" className='user rounded-circle' />
                            <div>
                                <h5 className="card-title">YOGESH SAWANT</h5>
                                <h6 className="card-subtitle mb-2 text-muted">HD-EDUCITY, IND</h6>
                            </div>
                        </div>
                        <p className="card-text">Choosing to pursue my degree at HD-EDUCITY was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitmment to  academic excellence have truely exceeded my expectations.</p>
                    </div>
                </div>
                <div className="card col-lg-5 my-3 mx-1">
                    <div className="card-body">
                        <div className="users d-flex justify-content-evenly my-2">
                            <img src="man4.jpg" alt="" className='user rounded-circle' />
                            <div>
                                <h5 className="card-title">KARAN DOGRA</h5>
                                <h6 className="card-subtitle mb-2 text-muted">HD-EDUCITY, IND</h6>
                            </div>
                        </div>
                        <p className="card-text">Choosing to pursue my degree at HD-EDUCITY was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitmment to  academic excellence have truely exceeded my expectations.</p>
                    </div>
                </div>
                <div className="card col-lg-5 my-3 mx-1">
                    <div className="card-body">
                        <div className="users d-flex justify-content-evenly my-2">
                            <img src="man5.jpg" alt="" className='user rounded-circle' />
                            <div>
                                <h5 className="card-title">PARTH REDDY</h5>
                                <h6 className="card-subtitle mb-2 text-muted">HD-EDUCITY, IND</h6>
                            </div>
                        </div>
                        <p className="card-text">Choosing to pursue my degree at HD-EDUCITY was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitmment to  academic excellence have truely exceeded my expectations.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonial
