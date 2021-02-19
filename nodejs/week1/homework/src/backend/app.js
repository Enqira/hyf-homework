const express = require("express")
const app = express()

// import data here
const meals = require("./data/meals")
const reviews = require("./data/reviews")
const reservations = require("./data/reservations")

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App")
})

// get meal reviews
const getMealReviews = meal => {
  mealReviews = reviews.filter(review => review.mealId === meal.id)
  return mealReviews
}

// get all meals
app.get("/meals", async (req, res) => {
  const mealsArr = []
  meals.map(meal => {
    meal.reviews = getMealReviews(meal)
    mealsArr.push(meal)
  })
  res.send(mealsArr)
})

// get cheap meals
app.get("/cheap-meals", async (req, res) => {
  const mealsArr = []
  const cheapMeals = meals.filter(meal => meal.price < 100)
  cheapMeals.map(meal => {
    meal.reviews = getMealReviews(meal)
    mealsArr.push(meal)
  })
  res.send(mealsArr)
})

// get just large meals
app.get("/large-meals", async (req, res) => {
  const mealsArr = []
  const largeMeals = meals.filter(meal => meal.maxNumberOfGuests > 4)
  largeMeals.map(meal => {
    meal.reviews = getMealReviews(meal)
    mealsArr.push(meal)
  })
  res.send(mealsArr)
})

//get random meal
app.get("/meal", async (req, res) => {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)]
  const randomMealReviews = reviews.filter(
    review => review.mealId === randomMeal.id
  )
  randomMeal.reviews = randomMealReviews
  res.send(randomMeal)
})

// Respond with all reservations
app.get("/reservations", async (req, res) => res.json(reservations))

// Respond with a random reservation
app.get("/reservation", async (req, res) => {
  const randomReservation =
    reservations[Math.floor(Math.random() * reservations.length)]
  res.send(randomReservation)
})

module.exports = app
