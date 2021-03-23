import React, { useState, useEffect } from "react"

// Counter
function Timer() {
  const [TimerState, setTimerState] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTimerState(prev => prev + 1)
    }, 1000)
  })
  return <p>You have used {TimerState} seconds in this website</p>
}
export default Timer
