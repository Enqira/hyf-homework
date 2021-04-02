import { useState, useEffect } from "react"

function Todo({ todo, Check, Delete, Edit, editTime }) {
  const [editing, setEditing] = useState(false)

  const { description, checked, deadline, id } = todo

  function onEditDescription(event) {
    const value = event.target.value
    Edit(id, value)
  }

  function onEditTime(event) {
    const value = event.target.value
    editTime(id, value)
  }

  return (
    <div>
      <div style={{ textDecoration: checked ? "line-through" : "none" }}>
        {editing ? (
          <input type="text" value={description} onChange={onEditDescription} />
        ) : (
          <h3>{description}</h3>
        )}
        {editing ? (
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={deadline}
            onChange={onEditTime}
          />
        ) : (
          <h4>{deadline}</h4>
        )}
      </div>
      <input type="checkbox" checked={checked} onChange={Check} />
      <button onClick={Delete}>Delete</button>
      <button onClick={() => setEditing(!onEditDescription)}>
        {editing ? "Update" : "Edit"}
      </button>
    </div>
  )
}

function AddTodoForm({ addTodo }) {
  const [description, setDescription] = useState("")
  const [deadline, setDeadline] = useState("")

  function onSubmit(event) {
    event.preventDefault()

    addTodo(description, deadline)

    setDescription("")
    setDeadline("")
  }

  const onEditDescription = event => {
    const value = event.target.value
    console.log(value)
    setDescription(value)
  }

  const onEditTime = event => {
    const value = event.target.value
    setDeadline(value)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={onEditDescription}
        />
      </div>
      <div>
        <label htmlFor="deadline"></label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          value={deadline}
          onChange={onEditTime}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  )
}

function Todos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then(res => res.json())
      .then(data => {
        setTodos(data)
      })
  }, [])

  function checkTodo(id) {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked }
        } else {
          return todo
        }
      })
    })
  }

  function addTodo(description, deadline) {
    //   if any input is empty
    if (!description || !deadline) {
      alert("Description and deadline should not be empty")
      return
    }

    // if dealine is before current date
    const inputDate = Date.parse(deadline)
    const currentDate = Date.now()
    if (inputDate < currentDate) {
      alert("date should not be before current date")
      return
    }

    setTodos(prevTodos => {
      const newList = {
        id: prevTodos.length + 1,
        description,
        deadline,
        checked: false
      }

      return [...prevTodos, newList]
    })
  }

  function deleteTodo(id) {
    const nextTodos = todos.filter(todo => todo.id !== id)

    setTodos(nextTodos)
  }

  function Edit(id, description) {
    // if (!description) {
    //   alert("Description and deadline should not be empty")
    //   return
    // }
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            description
          }
        } else {
          return todo
        }
      })
    )
  }

  function editTime(id, deadline) {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            deadline
          }
        } else {
          return todo
        }
      })
    )
  }

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      {todos.length
        ? todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              Check={() => checkTodo(todo.id)}
              Delete={() => deleteTodo(todo.id)}
              Edit={Edit}
              editTime={editTime}
            />
          ))
        : "Nothing todo"}
    </div>
  )
}

export default Todos
