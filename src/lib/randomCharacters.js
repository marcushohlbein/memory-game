import shuffleArray from './shuffleArray'

function randomCharacters(obj) {
  const randomChar = shuffleArray(obj).slice(0, 18)
  randomChar.push(...randomChar)
  shuffleArray(randomChar)
  return randomChar
}

export default randomCharacters
