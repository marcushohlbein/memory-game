import './index.css'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCharacters()
  }, [])

  function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // data is this object: {info: ..., results: ...}

        // https://reactjs.org/docs/hooks-reference.html#functional-updates
        setCharacters(oldState => [...oldState, ...data.results])

        const nextUrl = data.info.next // contains the next url, if it exists
        nextUrl && getAllCharacters(nextUrl) // if nextUrl exists, fetch it
      })
  }

  const randomCharacters = characters
    .sort(() => 0.5 - Math.random())
    .slice(0, 10)
  randomCharacters.push(...randomCharacters)
  randomCharacters.sort(() => 0.5 - Math.random())

  return (
    <>
      {randomCharacters.map(character => (
        <Card image={character.image} />
      ))}
    </>
  )
}

ReactDOM.render(<App />, document.body)
