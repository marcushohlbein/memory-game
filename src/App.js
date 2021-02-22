import React, { useState, useEffect, useMemo } from 'react'
import Card from './components/Card'
import getAllCharacters from './lib/getAllCharacters'
import shuffleArray from './lib/shuffleArray'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [selectedCards, setSelectedCards] = useState([])
  const [foundPairs, setFoundPairs] = useState([])

  useEffect(() => {
    getAllCharacters().then(listOfData => {
      const listOfResults = listOfData.map(data => data.results)
      setCharacters([...listOfResults.flat()])
    })
  }, [])

  const shuffledCharacters = useMemo(() => shuffleArray(characters), [
    characters,
  ])

  useEffect(() => {
    if (foundPairs.length === 34) {
      alert('You won!!')
    }
  }, [foundPairs])

  function cleanId(id) {
    if (typeof id === 'string') {
      return Number(id.replace(' copy', ''))
    } else {
      return Number(id)
    }
  }

  function checkCardMatch(index) {
    if (selectedCards.length > 1) {
      cleanId(selectedCards[0]) === cleanId(selectedCards[1]) &&
        setFoundPairs(previousState => [...previousState, ...selectedCards])
      setSelectedCards([])
      setSelectedCards(oldState => [...oldState, index])
    } else {
      setSelectedCards(oldState => [...oldState, index])
    }
  }
  return (
    <section className="App">
      {shuffledCharacters.map(character => (
        <Card
          key={character.id}
          id={character.id}
          image={character.image}
          name={character.name}
          handleClick={() => checkCardMatch(character.id)}
          selectedCards={selectedCards}
          foundPairs={foundPairs}
        />
      ))}
    </section>
  )
}

export default App
