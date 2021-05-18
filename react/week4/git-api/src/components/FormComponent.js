import React, { useContext } from "react"
import { UserContext } from "./UserContext"

const FormComponent = ({ input, setInput, loading }) => {
  const users = useContext(UserContext)
  console.log(users)
  const handleChange = e => {
    console.log(e.target.value)
    setInput(e.target.value)
  }
  return (
    <div>
      <form>
        <p>Search for git users:</p>
        <input type="text" onChange={handleChange} placeholder="search" />
      </form>
      {users.length >= 1 ? (
        <ul>
          {!loading ? (
            users.map(user => <li>{user.login}</li>)
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      ) : (
        <p>No results...</p>
      )}
    </div>
  )
}

export default FormComponent
