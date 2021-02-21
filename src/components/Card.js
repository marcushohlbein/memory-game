import React from 'react'
import './Card.css'
import placeholder from '../assets/card-back.jpeg'

function Card({ id, name, image, handleClick, selectedCards, foundPairs }) {
  return (
    <>
      <div
        className={
          selectedCards.includes(name) || foundPairs.includes(name)
            ? 'Card'
            : 'Card Card--active'
        }
        onClick={() => {
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
