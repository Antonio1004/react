import React, { useState } from 'react';

function listar() {
    
    function add(event){
        event.preventDefault();
        const lista=document.getElementById("lista");
        const li=document.createElement("li");
        const eliminar=document.createElement("button");
        eliminar.textContent="eliminar";
        li.textContent=document.getElementById("tarea").value;
        li.appendChild(eliminar);
        lista.appendChild(li);
    }
    return (
        <div>
            <form onSubmit={add} >
            <input type="text" id='tarea'  placeholder='Escribe una tarea' />
            <button type='submit'>Añadir</button>
            </form>
            <ul id='lista'>

            </ul>

        </div>
    );
}

export default listar;