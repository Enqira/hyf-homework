const url = "https://jsonplaceholder.typicode.com/posts/1"

// Using promises
const promiseFunction = () => {
  fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
}

setTimeout(() => {
  promiseFunction()
}, 3000)

// Using async/await
async function asyncFunction() {
  const res = await fetch(url)
  const json = await res.json()
  console.log(json)
}

setTimeout(() => {
  asyncFunction()
}, 3000)
