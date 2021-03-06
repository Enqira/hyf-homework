import React, { useState } from "react"
import "./App.css"
import todos from "./todos"

function Todo({ item, reMove, styling }) {
  return (
    <li>
      <h3 className={item.done === false ? "" : "checkedText"}>
        {item.description}
        <input type="checkbox" onChange={styling}></input>
      </h3>
      <button onClick={reMove}>Delete</button>
    </li>
  )
}

// Add Todo
function AddTodo() {
  const [todoList, setTodoList] = useState(todos)

  function AddNewTodo() {
    setTodoList(initial => [
      ...initial,
      {
        id: Math.floor(Math.random() * 10000),
        description: "Random Text",
        done: false
      }
    ])
  }

  function removeItem(key) {
    const newList = todoList.filter(item => item.id !== key)
    setTodoList(newList)
  }

  function setStyling(key) {
    console.log("clickjed")
    let newList = []
    todoList.forEach(element => {
      if (element.id === key) {
        if (element.done === true) {
          element.done = false
        } else {
          element.done = true
        }
        newList.push(element)
      } else {
        newList.push(element)
      }
    })

    // console.log(newList.length)
    setTodoList(newList)
  }

  return (
    <>
      <button onClick={AddNewTodo}>Add Todo</button>
      <ul>
        {todoList.map(item => (
          <Todo
            item={item}
            key={item.id}
            reMove={() => removeItem(item.id)}
            styling={() => setStyling(item.id)}
          />
        ))}
      </ul>
    </>
  )
}

export default AddTodo
