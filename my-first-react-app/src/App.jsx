import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import  Profile from './profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>
        <h2>About Us</h2>
        </header>
    <User></User>

    
    </>
  )
}


export default App
/*
let person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>*/