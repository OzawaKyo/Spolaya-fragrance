import './App.css'
import Navbar from './Homepage/Navbar'
import Home  from './Homepage/Home'

export default function Homepage() {

    return (
      <div className="App">
        <Navbar />
        <hr />
        <Home />
      </div>
    )
  }