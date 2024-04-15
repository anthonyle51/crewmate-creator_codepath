import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar'
import { Link } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Sidebar />
      <div className='main'>
        <h1 id='home-header'>Welcome to the Pokemon Creator</h1>
        <h3>Create new Pokemon name and their types!</h3>
        <button>
          <Link to={'/create-crewmate'}>Create a Pokemon</Link>
        </button>
      </div>
    </div>
  )
}

export default App
