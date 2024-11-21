import React, { useState } from 'react';

function OcultarMostrar() {
    // Estado para el contador
    const [cambiar, setCambiar] = useState(true);

    let b="Ocultar";
    function ocultar() {
       setCambiar(!cambiar)
       b="Mostrar";

        
    }
    return (
        <div>
            {cambiar && <p>hola</p>}
            <button onClick={ocultar}>{b}</button>
        </div>
    );
}

export default OcultarMostrar;