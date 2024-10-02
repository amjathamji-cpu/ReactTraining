import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './Message'
import List from './List'
function App() {

  let drivers = [
    "Hamilton",
    "Max",
    "Charles",
    "Michael",
    "Daniel"
]

let teams = [
  "Mercedes",
  "MRedBull Racing",
  "Ferrari",
  "Ferrari",
  "RedBull Racing"
]
  return (
    <div className="App">
        {/* <Message/> */}
        <List drivers={drivers} heading='Drivers' />
        <List drivers={teams} heading='Teams'/>
        {/* <Message></Message> */}
    </div>
  )
}

export default App
