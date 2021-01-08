// first part
const setTimeoutPromise = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds")
})

// Second part
const getCurrentLocation = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej)
  })
}

getCurrentLocation()
  .then(position => {
    // called when the users position is found
    console.log(position)
  })
  .catch(error => {
    // called if there was an error getting the users location
    console.log(error)
  })
