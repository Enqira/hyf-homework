"use strict"

// Get data from API
const getWeather = () => {
  input.value == "" ? alert("Please insert a city name") : getData()
}

const getData = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=`
  )
    .then(res => (!res.ok ? alert("city not found") : res.json()))
    .then(data => {
      removeElements()
      addElements(data)
    })
    .catch(error => console.log(error))
}

// select input and run getWeather function when button clicked
const input = document.querySelector("input")
document.querySelector("button").addEventListener("click", getWeather)

// add elements to the DOM
const addElements = data => {
  console.log(data)

  const ul = document.querySelector("ul")

  const cityLi = document.createElement("li")
  const tempLi = document.createElement("li")
  tempLi.style.fontSize = "60px"
  const weatherTypeImg = document.createElement("img")
  const windLi = document.createElement("li")
  const clowdyLi = document.createElement("li")
  const riseSetLi = document.createElement("li")

  cityLi.textContent = data.name
  tempLi.textContent = `${Math.round(data.main.temp)}°`
  weatherTypeImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  windLi.textContent = `Wind speed: ${data.wind.speed} km/h`
  clowdyLi.textContent = `${data.clouds.all}% cloudy`
  riseSetLi.textContent = `Sunrise: ${convertTime(
    data.sys.sunrise
  )} Sunset: ${convertTime(data.sys.sunset)}`

  ul.appendChild(weatherTypeImg)
  ul.appendChild(cityLi)
  ul.appendChild(tempLi)
  ul.appendChild(windLi)
  ul.appendChild(clowdyLi)
  ul.appendChild(riseSetLi)
}

// remove child element of ul before inserting new ones
const removeElements = () => {
  const ul = document.querySelector("ul")
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
}

// this function converts Unix time in human readable time
const convertTime = time => {
  console.log(time)
  const date = new Date(time * 1000)
  const h = date.getHours()
  const min = date.getMinutes()
  return `${h}:${min}`
}

// EXTRA: display a quote
fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    getQuotes(data)
  })

const getQuotes = data => {
  const ranNum = Math.floor(Math.random() * 1643 + 0)

  const ul = document.querySelector("ul")

  const text = document.createElement("li")
  const author = document.createElement("li")

  text.textContent = `"${data[ranNum].text}"`
  author.textContent = data[ranNum].author
  ul.appendChild(text)
  ul.appendChild(author)
}
