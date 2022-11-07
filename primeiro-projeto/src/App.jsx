import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [nome] = useState('André')
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Quem acha o {nome} chato?</h1>
    </div>
  )
}

export default App
