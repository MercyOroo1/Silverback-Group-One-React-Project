import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {
  return (
    <div className="player">Player
    <img src = {back_arrow_icon} alt = ''/>
{/* <iframe width= '90%' height= '90%' src = "https://www.youtube.com/embed/hkHHwA-vEyQ" title = 'trailer'
frameBorder= '0' allowFullScreen></iframe> */}
<div className='player-info'></div>
<p>Published date</p>
<p>Name</p>
<p>Type</p>
    </div>
  )
}

export default Player