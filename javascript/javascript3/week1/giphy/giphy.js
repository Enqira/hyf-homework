const ul = document.querySelector("ul")

const getGifs = () => {
  removeItems()

  const input = document.getElementById("search-input")
  const limit = document.getElementById("limit")

  const apiKey = ""

  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${input.value}&limit=${limit.value}`
  )
    .then(response => response.json())
    .then(json => {
      json.data
        .map(gif => gif.images.fixed_height.url)
        .forEach(url => {
          const img = document.createElement("img")
          img.src = url
          ul.appendChild(img)
        })
    })
    .catch(error => (document.body.appendChild = error))
}

const removeItems = () => {
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.childNodes[0])
  }
}
document.getElementById("button").addEventListener("click", getGifs)
