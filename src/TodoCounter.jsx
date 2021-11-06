import React from 'react';

const estilos = {
    
}

function TodoCounter() {
    return (
        <h2 style={{
            color: 'red',
            backgroundColor: 'yellow'
        }}>Haz completado 2 de 3 tareas</h2>
    );
}

export default TodoCounter;

/* 
Otra forma de exportar/importar (sin usar el export default)

export { TodoCounter }; 
import { TodoCounter } from "../TodoCounter";

*/