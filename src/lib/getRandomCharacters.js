import shuffleArray from './shuffleArray'

function getRandomCharacters(obj) {
  const randomChar = shuffleArray(obj).slice(0, 18)
  randomChar.push(...randomChar)
  shuffleArray(randomChar)
  return randomChar
}

export default getRandomCharacters
