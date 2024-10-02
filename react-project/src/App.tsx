import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './Message'
import List from './List'
function App() {


  return (
    <div className="App">
        <Message/>
        <List/>
        {/* <Message></Message> */}
    </div>
  )
}

export default App
