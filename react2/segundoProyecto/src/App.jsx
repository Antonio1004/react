import { useState } from 'react'
import './App.css'
/*import MensajeBienvenida from './MensajeBienvenida'
import EstadoCuenta from './EstadoCuenta'
import AvisoError from './AvisoError'*/
import Cambiar  from './Cambiar'
import Contador  from './Contador'
import Ocultar from './Ocultar'
import Listar from './Listar'


function App() {


  return (
    <>
     <Listar/>
    </>
  )
}

export default App
/* <div>
        <MensajeBienvenida isLogado={true}></MensajeBienvenida >
        <EstadoCuenta isPositive={true}></EstadoCuenta >
        <AvisoError hasError={true}></AvisoError >
      </div>
      <Cambiar/>
     <Contador/>
     <Ocultar/>*/