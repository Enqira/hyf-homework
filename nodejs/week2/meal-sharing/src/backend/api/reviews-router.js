const express = require("express")
const router = express.Router()

const reviews = require("./../data/reviews.json")

router.get("/", async (req, res) => {
  try {
    res.send(reviews)
  } catch (error) {
    throw error
  }
})

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (Number.isNaN(id)) res.send("id NOT a number")

    const result = reviews.filter(review => review.id === id)
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
