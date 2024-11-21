import React, { useState } from 'react';

function Cambiar() {
    // Estado para el contador
    const [cambiar, setCambiar] = useState("Texto original");

    function modificar() {
        setCambiar("Texto Modificado");  // Actualizamos el estado
    }
    function original() {
        setCambiar("Texto original");  // Actualizamos el estado
    }
    return (
        <div>
            <p> {cambiar}</p>
            <button onClick={modificar}>Modificar</button>
            <button onClick={original}>Original</button>
        </div>
    );
}

export default Cambiar;