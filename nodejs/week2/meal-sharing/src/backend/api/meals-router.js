const express = require("express")
const router = express.Router()

const meals = require("./../data/meals.json")

router.get("/", async (req, res) => {
  try {
    //   if a query was detected
    if (Object.keys(req.query).length !== 0) {
      const maxPrice = req.query.maxPrice
      const title = req.query.title
      const createdAfter = req.query.createdAfter
      const limit = req.query.limit

      if (maxPrice) {
        const result = meals.filter(meal => meal.price <= maxPrice)
        res.send(result)
      } else if (title) {
        const result = meals.filter(meal =>
          meal.title.toLowerCase().includes(title.toLowerCase())
        )
        if (result.length === 0) {
          res.send("Title not found")
        } else {
          res.send(result)
        }
      } else if (createdAfter) {
        const parsedDate = Date.parse(createdAfter)
        console.log(parsedDate)
        const result = meals.filter(
          meal => Date.parse(meal.createdAt) >= parsedDate
        )
        res.send(result)
      } else if (limit) {
        let result = []
        for (let i = 0; i < limit && i < meals.length; i++) {
          console.log(i)
          result.push(meals[i])
        }
        res.send(result)
      } else res.send("wrong query parameter")
    } else {
      res.send(meals)
    }
  } catch (error) {
    throw error
  }
})

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (Number.isNaN(id)) res.send("id NOT a number")

    const result = meals.filter(meal => meal.id === id)
    if (result.length === 0) {
      res.send("id out of range")
    } else {
      res.json(result)
    }
  } catch (error) {
    throw error
  }
})

module.exports = router
