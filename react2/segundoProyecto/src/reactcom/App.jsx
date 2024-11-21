import { useState } from 'react'
import './App.css'
import MensajeBienvenida from './MensajeBienvenida'
import EstadoCuenta from './EstadoCuenta'
import AvisoError from './AvisoError'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MensajeBienvenida isLogado={true}></MensajeBienvenida >
        <EstadoCuenta isPositive={true}></EstadoCuenta >
        <AvisoError hasError={true}></AvisoError >
      </div>
    </>
  )
}

export default App
