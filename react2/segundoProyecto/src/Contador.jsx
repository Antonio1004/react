import React, { useState } from 'react';

function Contador() {
    // Estado para el contador
    const [contador, setContador] = useState(0);

    function incrementar() {
        setContador(contador + 1);  // Actualizamos el estado
    }
    function reset() {
        setContador(0);  // Actualizamos el estado
    }

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={reset}>resetear</button>
        </div>
    );
}

export default Contador;