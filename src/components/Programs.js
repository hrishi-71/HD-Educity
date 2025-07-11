import React from 'react'
import './Programs.css'
import Title from './titles/Title'

const Programs = () => {
    return (
        <div className='container' id='program'>
            <Title mTitle={"OUR PROGRAM"} sTitle={"What We Offer"}/>
            <div className='row d-flex justify-content-around text-center'>
                <div className="card col-3 my-2" style={{width: '18rem'}}>
                    <img src="deg1.jpg" className="common card-img-top" alt="..."/>
                    <img src="dip.png" className="commonH card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">DIPLOMA</p>
                        </div>
                </div>
                <div className="card col-3 my-2" style={{width: '18rem'}}>
                    <img src="deg2.jpg" className="common card-img-top" alt="..."/>
                    <img src="bach.png" className="commonH card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">BACHELORS</p>
                        </div>
                </div>
                <div className="card col-3 my-2" style={{width: '18rem'}}>
                    <img src="deg3.jpg" className="common card-img-top" alt="..."/>
                    <img src="mast.png" className="commonH card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">MASTERS</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Programs
