import React, { useState } from "react"
import "./App.css"
import { UserProvider } from "./components/UserContext"
import FormComponent from "./components/FormComponent"

function App() {
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <UserProvider input={input} loading={loading} setLoading={setLoading}>
      <div className="App">
        <FormComponent input={input} setInput={setInput} loading={loading} />:
      </div>
    </UserProvider>
  )
}

export default App
