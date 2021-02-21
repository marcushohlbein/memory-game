import React, { useState, useEffect, useMemo } from 'react'
import Card from './components/Card'
import getAllCharacters from './lib/getAllCharacters'
import shuffleArray from './lib/shuffleArray'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [selectedCards, setSelectedCards] = useState([]) //selectedCards
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

  function checkCardsAreSimilar(selectedCards) {
    if (selectedCards.length === 2) {
      return selectedCards[0].name === selectedCards[1].name
    }
  }

  function checkCardMatch(character) {
    if (selectedCards.length === 2) {
      checkCardsAreSimilar() &&
        setFoundPairs(previousState => [...previousState, ...selectedCards])
      setSelectedCards([])
      setSelectedCards(oldState => [...oldState, character])
    } else {
      setSelectedCards(oldState => [...oldState, character])
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
          handleClick={() => checkCardMatch(character)}
          selectedCards={selectedCards}
          foundPairs={foundPairs}
        />
      ))}
    </section>
  )
}

export default App
