import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './Components/Message'
import List from './Components/List'
import IfscAssist from './Components/IfscAssist'
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
        {/* <List drivers={drivers} heading='Drivers' />
        <List drivers={teams} heading='Teams'/> */}
        {/* <Message></Message> */}
        <IfscAssist ifscCode='YESB0DNB002'/>
    </div>
  )
}

export default App
