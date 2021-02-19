import React, { useState } from 'react'
import './Card.css'
import placeholder from '../assets/card-back.jpeg'

function Card({ id, image, handleClick, isMatch }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <div
        className={isVisible ? 'Card Card--active' : 'Card'}
        //className={isMatch.includes(id) ? 'Card Card--active' : 'Card'}
        onClick={() => {
          setIsVisible(!isVisible)
          handleClick()
        }}
      >
        <img
          className="front"
          src={placeholder}
          alt=""
          loading="lazy"
          width="100"
          height="125"
        />
        <img className="back" src={image} alt="" width="100" height="125" />
      </div>
    </>
  )
}

export default Card
