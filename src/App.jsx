import { useState } from 'react'
import Main from "./components/main"
import Sobre from "./components/sobre"
import Tecnicas from "./components/tecnicas"
import Beneficios from "./components/beneficios"
import Indicacoes from "./components/indicacoes"
import Investimento from "./components/investimento"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <body className=''>
    <Main/>
    <Sobre/>
    <Tecnicas/>
    <Beneficios/>
    <Indicacoes/>
    <Investimento/>
   </body>
  )
}

export default App
