import React from 'react'

const Title = ({mTitle,sTitle}) => {
  return (
    <div>
       <div className="title my-5">
                <p className='text-primary fw-bold'>{mTitle}</p>
                <h2>{sTitle}</h2>
            </div>
    </div>
  )
}

export default Title
