const express = require("express")
const app = express()
const bodyParser = require("body-parser")

const additionRouter = require("./api/addition-router")
const subtractionRouter = require("./api/subtraction-router")
const multiplicationRouter = require("./api/multiplication-router")
const divitionRouter = require("./api/divition-router")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.use("/calculator/add", additionRouter)
app.use("/calculator/subtract", subtractionRouter)
app.use("/calculator/multiply", multiplicationRouter)
app.use("/calculator/divide", divitionRouter)

app.get("/", (req, res) => res.send("My calculator"))

module.exports = app
