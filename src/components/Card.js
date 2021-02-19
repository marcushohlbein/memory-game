import React, { useState } from 'react'
import './Card.css'
import placeholder from '../assets/card-back.png'

function Card({ id, image, handleClick, isMatch }) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <div
        className={isVisible ? 'Card Card--active' : 'Card'}
        //className={isMatch.includes(id) ? 'Card Card--active' : 'Card'}
        onClick={() => {
          setIsVisible(!isVisible)
          console.log(isMatch)
          //handleClick()
        }}
      >
        <img
          className="front"
          src={placeholder}
          alt=""
          width="100"
          height="125"
        />
        <img className="back" src={image} alt="" width="100" height="125" />
      </div>
    </>
  )
}

export default Card
