/*import { useState } from 'react'
import './App.css'
/*import MensajeBienvenida from './MensajeBienvenida'
import EstadoCuenta from './EstadoCuenta'
import AvisoError from './AvisoError'
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
 <div>
        <MensajeBienvenida isLogado={true}></MensajeBienvenida >
        <EstadoCuenta isPositive={true}></EstadoCuenta >
        <AvisoError hasError={true}></AvisoError >
      </div>
      <Cambiar/>
     <Contador/>
     <Ocultar/>*/


     import { BrowserRouter, Routes, Route } from "react-router-dom";
     import Home from "./Home";
     import About from "./About";
     import Contact from "./Contact";
     import Layout from "./Layout";
     
     const Router = () => {
       return (
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Layout />}>
               <Route index element={<Home />} /> {/* Página inicial */}
               <Route path="about" element={<About />} />
               <Route path="contact" element={<Contact />} />
             </Route>
           </Routes>
         </BrowserRouter>
       );
     };
     
     export default Router;
     