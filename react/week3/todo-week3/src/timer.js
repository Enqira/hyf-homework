import React, { useState, useEffect } from "react"

// Counter
function Timer() {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTimer(prev => prev + 1)
    }, 1000)
  })
  return <p>You have used {timer} seconds in this website</p>
}
export default Timer
