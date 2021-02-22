import React from 'react'
import placeholder from '../assets/card-back.jpeg'
import './Card.css'

function Card({ id, image, handleClick, selectedCards, foundPairs }) {
  return (
    <>
      <div
        className={
          selectedCards.includes(id) || foundPairs.includes(id)
            ? 'Card Card--active'
            : 'Card'
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
          height="100"
        />
        <img className="back" src={image} alt="" width="100" height="100" />
      </div>
    </>
  )
}

export default Card
