"use strict";
// 1 Create an array of movies containing the movies with a short title (you define what short means)
let shortTitleMovies = movies.filter((movie) => movie.title.length <= 5);

// 2 Create an array of movie titles with long movie titles
let longTitleMovies = movies.filter((movie) => movie.title.length >= 30);

// 3 Count the number of movies made between 1980-1989 (including both the years)
let moviesByYear = movies.filter(
  (movie) => movie.year >= 1980 && movie.year <= 1989
).length;

// 4 extra key called tag.
let tagedMoviesArr = movies.map(function (movie) {
  movie.rating >= 7
    ? (movie.tag = " Good")
    : movie.rating >= 4
    ? (movie.tag = "Average")
    : (movie.tag = "Bad");
  return movie;
});

// 5 filter and map
let onlyRating = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);

// 6 Count the total number of movies containing x keyword
let countedArray = movies.filter(
  (movie) =>
    movie.title.includes("Surfer") |
    movie.title.includes("Alien") |
    movie.title.includes("Benjamin")
);

// 7 Array of duplicated words in title
const duplicatedMovies = movies.filter((movie) => {
  const movieTitle = movie.title.toLowerCase().split(" ");
  const repeatingWords = movieTitle.filter((word, wordIndex) => {
    return movieTitle.indexOf(word) !== wordIndex;
  });
  return repeatingWords.length >= 1;
});
