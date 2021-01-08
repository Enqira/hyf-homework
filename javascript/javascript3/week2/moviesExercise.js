// Create an array of bad movies
const moviesUrl =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
const fetchBadMovies = () => {
  fetch(moviesUrl)
    .then(res => res.json())
    .then(res => {
      res
        .filter(movie => movie.rating < 3)
        .map(badMovies => console.log(badMovies.title))
    })
    .catch(err => console.log(err))
}
fetchBadMovies()

// Creat an array of bad movies since year 2000
const fetchBadMovies2000 = () => {
  fetch(moviesUrl)
    .then(res => res.json())
    .then(res => {
      res
        .filter(movie => movie.rating < 3)
        .filter(movie => movie.year >= 2000)
        .map(badMovies => console.log(badMovies.title))
    })
    .catch(err => console.log(err))
}
fetchBadMovies2000()
