function shuffleArray(characters) {
  return characters
    .sort(() => 0.5 - Math.random())
    .splice(0, 18)
    .flatMap(shuffledCharacter => [
      shuffledCharacter,
      { ...shuffledCharacter, id: shuffledCharacter.id + ' copy' },
    ])
    .sort(() => 0.5 - Math.random())
}

export default shuffleArray
