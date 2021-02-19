function getAllCharacters() {
  const url = 'https://rickandmortyapi.com/api/character'
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      // data is this object: {info: ..., results: ...}
      const numPages = data.info.pages

      const promises = Array(numPages - 1)
        .fill()
        .map((_, index) => {
          const page = index + 2
          return fetch(url + `?page=${page}`).then(res => res.json())
        })

      return Promise.all([data, ...promises])
    })
}

export default getAllCharacters
