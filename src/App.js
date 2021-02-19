import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import getAllCharacters from './lib/getAllCharacters'
import randomCharacters from './lib/randomCharacters'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [randomChar, setRandomChar] = useState([])
  const [isMatch, setIsMatch] = useState([])
  const [foundPairs, setFoundPairs] = useState([])

  useEffect(() => {
    getAllCharacters().then(listOfData => {
      const listOfResults = listOfData.map(data => data.results)
      setCharacters([...listOfResults.flat()])
    })
  }, [])

  function checkCardMatch(index) {
    isMatch.length < 2
      ? setIsMatch(oldState => [...oldState, index])
      : setIsMatch([index])
  }

  return (
    <section className="App">
      {randomCharacters(characters).map((character, index) => (
        <Card
          key={index}
          id={character.id}
          image={character.image}
          handleClick={() => checkCardMatch(character.id)}
          isMatch={isMatch}
        />
      ))}
    </section>
  )
}

export default App
