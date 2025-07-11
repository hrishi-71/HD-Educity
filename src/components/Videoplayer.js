import React, { useRef } from 'react'
import './Videoplayer.css'

const Videoplayer = ({ply, setPlay}) => {
  const player = useRef(null);
  const closeply = (e)=>{
    if(e.target === player.current){
      setPlay(false);
    }
  }
  return (
    <div className={`vidply ${ply?'':'hide'}`} ref={player} onClick={closeply}> 
      <video src="freeuse.mp4" autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer
