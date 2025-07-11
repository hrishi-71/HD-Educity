import React from 'react'
import './Campus.css'
import Title from './titles/Title'

const Campus = () => {
  return (
    <div className='campus' id='campus'>
      <Title mTitle={"GALLERY"} sTitle={"Campus Photos"}/>
     
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="camp_1.jpg" className="camp d-block" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="camp_2.jpg" className="camp d-block" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="camp_3.jpg" className="camp d-block" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="camp_4.jpg" className="camp d-block" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Campus
