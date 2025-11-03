import { useState } from 'react'
import Main from "./components/main"
import Sobre from "./components/sobre"
import Tecnicas from "./components/tecnicas"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <body className=''>
    <Main/>
    <Sobre/>
    <Tecnicas/>
   </body>
  )
}

export default App
