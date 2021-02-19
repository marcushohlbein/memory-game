import React, { useState, useEffect, useCallback } from 'react'
import Card from './components/Card'
import getAllCharacters from './lib/getAllCharacters'
import getRandomCharacters from './lib/getRandomCharacters'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [randomChar, setRandomChar] = useState([])
  const [isMatch, setIsMatch] = useState([]) //selectedCards
  const [foundPairs, setFoundPairs] = useState([])

  const randomCharacters = getRandomCharacters(characters)

  useEffect(() => {
    getAllCharacters().then(listOfData => {
      const listOfResults = listOfData.map(data => data.results)
      setCharacters([...listOfResults.flat()])
    })
  }, [])

  /* const characters = data.results

  const shuffledCharacters = useMemo(() => shuffle(characters), [characters])

  function shuffle(characters) {
    return characters
      .sort(() => Math.random() - 0.5)
      .splice(0, 5)
      .flatMap(shuffledCharacter => [
        shuffledCharacter,
        { ...shuffledCharacter, id: shuffledCharacter.id + 'copy' },
      ])
      .sort(() => Math.random() - 0.5)
  } */

  function checkCardMatch(index) {
    if (isMatch.length === 2 || isMatch[0] === isMatch[1]) {
      setIsMatch([])
      setFoundPairs(previousState => [...previousState, ...isMatch])
      setIsMatch(oldState => [...oldState, index])
    } else {
      setIsMatch(oldState => [...oldState, index])
    }
  }

  return (
    <section className="App">
      {randomCharacters.map((character, index) => (
        <Card
          key={index}
          id={character.id} //ggf eigene ID
          image={character.image}
          handleClick={() => checkCardMatch(character.id)}
          isMatch={isMatch}
        />
      ))}
    </section>
  )
}

export default App
