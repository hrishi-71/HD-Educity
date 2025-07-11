import React from 'react'
import './About.css'
import Title from './titles/Title'

const About = ({setPlay}) => {
  return (
    <div className='about row mx-auto mt-5 pt-5 d-flex justify-content-around' id='about'>
      <div className="about-left col-lg-6 text-start">
        <Title mTitle={'ABOUT UNIVERSITY'} sTitle={"Nurturing Tommorow's Leaders Today"}/>
        {/* <h3 className='h4 text-primary'>ABOUT UNIVERSITY</h3>
        <h2 className='h1'>Nurturing Tommorow's Leaders Today</h2> */}
        <p>Embark on transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is desingned to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
        <p>With a focus on innovation, hands-on learning, and personalised mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you are aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
      </div>
      <div className="about-right col-lg-5 position-relative my-5">
        <img src="about-img.jpg" alt='not imp' className="about-img" />
        <img src="playbtn.png" alt='not imp' className="playbtn border-rounded-circle" onClick={()=>{setPlay(true)}}/>
      </div>
    </div>
  )
}

export default About
