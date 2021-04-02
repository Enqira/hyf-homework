const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")

router.get("/", async (req, res) => {
  const num1 = req.query.firstParam
  const num2 = req.query.secondParam
  if (num1 === undefined || num1 === "" || num2 === undefined || num2 === "") {
    res.status(400).end()
  } else {
    let result = parseInt(num1)
    Array.isArray(num2)
      ? num2.map(number => (result /= parseInt(number)))
      : (result /= parseInt(num2))
    res.json(result)
  }
})

router.post("/", async (req, res) => {
  try {
    const num1 = req.body.firstParam
    const num2 = req.body.secondParam
    if (
      num1 === undefined ||
      num1 === "" ||
      num2 === undefined ||
      num2 === ""
    ) {
      res.status(400).end()
    } else {
      let result = parseInt(num1)
      Array.isArray(num2)
        ? num2.map(number => (result /= parseInt(number)))
        : (result /= parseInt(num2))
      res.send(String(result))
    }
  } catch (error) {
    throw error
  }
})

module.exports = router
