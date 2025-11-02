import { useState } from 'react'
import Main from "./components/main"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <body className=''>
    <Main/>
   </body>
  )
}

export default App
