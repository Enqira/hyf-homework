import React, { createContext, useEffect, useState } from "react"

const API = `https://api.github.com/search/users?q=`

export const UserContext = createContext()

export const UserProvider = ({ children, input, loading, setLoading }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (input) {
      setLoading(true)
      fetch(`${API}${input}`)
        .then(res => res.json())
        .then(data => {
          data.message
            ? alert("API rate limit exeeded, please wait some seconds")
            : setUsers(data.items)
        })
        .catch(e => alert(e.message))
        .finally(() => setLoading(false))
    } else setUsers([])
  }, [input, setLoading])

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>
}
