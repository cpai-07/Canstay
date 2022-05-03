import React, { useEffect } from 'react'
import "../styles/RoomCard.css";

function RoomCard({ room }) {
  return (
    <div className='roomCard'>
      <h1>{room.roomNo}</h1>
      <img src='https://th.bing.com/th/id/OIP.K1tg32wnqUeQFW_hlphTvgHaE7?pid=ImgDet&rs=1' alt="Room" />
      <h4>Room Number :101</h4>
      <p>Single sharing</p>
    </div>
  )
}

export default RoomCard