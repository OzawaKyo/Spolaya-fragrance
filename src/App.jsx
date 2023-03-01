import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import Home  from './Home'

function App() {

  return (
    <div className="App">
      <Navbar />
      <hr />
      <Home />
    </div>
  )
}

export default App
