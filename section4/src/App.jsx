
import { useState } from 'react'
import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'

function App() {

  const [count, setCount] = useState(0);
  
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer 
          count={count}
        />
      </section>
      <section>
        <Controller
          count={count}
          setCount={setCount}
        />
      </section>
    </div>
  )

}

export default App
