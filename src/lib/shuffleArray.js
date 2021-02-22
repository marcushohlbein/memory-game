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

/* function shuffle(array) {
  let counter = array.length

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter)

    // Decrease counter by 1
    counter--

    // And swap the last element with it
    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }

  return array
}

export default shuffle
 */
