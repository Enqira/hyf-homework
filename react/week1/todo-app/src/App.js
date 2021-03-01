import React from "react"
import TodoList from "./List"

const Todo = ({ title, deadLine }) => {
  return (
    <li>
      <h2>{title}</h2>
      <h3>{deadLine}</h3>
    </li>
  )
}

const TodoUl = () => {
  return (
    <ul>
      {TodoList.map(item => (
        <Todo title={item.title} deadLine={item.deadLine} key={item.id} />
      ))}
    </ul>
  )
}

function App() {
  return <TodoUl />
}

export default App
