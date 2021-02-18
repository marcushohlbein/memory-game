import React, { useState } from 'react'
import './Card.css'

function Card({ image }) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <img
      src={isVisible ? image : '../assets/placeholder-image.jpg'}
      alt=""
      width="150"
      height="150"
      className="Card"
      onClick={() => setIsVisible(!isVisible)}
    />
  )
}

export default Card
