import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {AsyncComponentCreator} from "../../src/index.jsx"

function App() {
  const [result, setResult] = useState("")
  const { AsyncComponent, asyncGetValue, cancel, confirm } = AsyncComponentCreator()
  const cancelFn = () => cancel(() => setResult("user cancelled"))
  const confirmFn = () => confirm(setResult("user confirmed"))
  
  return (
    <div className="App">
      <h1>Async Component </h1>
      <p>{result}</p>
        <AsyncComponent>
          <div className="modal">
            <div>  Do you accept the terms and conditions</div>
            <div className="buttons">
              <button onClick={cancelFn}>Cancel</button>
              <button onClick={confirmFn}>Confirm</button>
            </div>
          </div>
        </AsyncComponent>
      <button onClick={() => asyncGetValue(e => console.error({e}))}>Get Value</button>
    </div>
  )
}

export default App
