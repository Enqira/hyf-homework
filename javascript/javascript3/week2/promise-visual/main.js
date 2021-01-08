const redBox = document.querySelector("ul.marks li:nth-child(1)")
const blueBox = document.querySelector("ul.marks li:nth-child(2)")
const greenBox = document.querySelector("ul.marks li:nth-child(3)")
const boxes = [
  {
    "li": redBox,
    "x": 20,
    "y": 300
  },
  {
    "li": blueBox,
    "x": 400,
    "y": 300
  },
  {
    "li": greenBox,
    "x": 400,
    "y": 20
  }
]

// Move all at onece
function translateAllAtOnce() {
  for (let box of boxes) {
    try {
      moveElement(box.li, { x: box.x, y: box.y }).then(() =>
        console.log("element has moved")
      )
    } catch (error) {
      console.log(error)
    }
  }
}
// translateAllAtOnce()

// Move one by one
async function translateOneByOne() {
  for (let box of boxes) {
    try {
      await moveElement(box.li, { x: box.x, y: box.y }).then(() =>
        console.log("element has moved")
      )
    } catch (error) {
      console.log(error)
    }
  }
}
translateOneByOne()
