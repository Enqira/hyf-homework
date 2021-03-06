import React from "react"
import "./App.css"
import Timer from "./timer"
import AddTodo from "./todo-app"

function App() {
  return (
    <div>
      <h1>Todo list</h1>
      <Timer />
      <AddTodo />
    </div>
  )

  //   <AddTodo />
  //   ;<Timer />
}

export default App
