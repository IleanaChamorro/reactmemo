import React, { useState, useCallback } from 'react'
import ContadorHijo from './ContadorHijo';

const Contador = () => {
    const [contador, setContador] = useState(0);
    const [input, setInput] = useState("");

    /*Al memorizar las funciones con el hook useCallback, evitamos renderizaciones al hacer cambios en variables*/
    //const sumar = () => setContador(contador + 1);
    //la variable de dependencia en este caso es "contador"
    const sumar = useCallback(() => setContador(contador + 1), [contador]);
    
    //const restar = () => setContador(contador - 1);
    const restar = useCallback(() => setContador(contador -1 ), [contador]);

    /*Recibe el evento y actualiza la variable del estado con el valor que traiga el formulario*/
    const handleInput = (e) => setInput(e.target.value);
  return (
    <div style={{textAlign: 'center'}}>
        <h2>Contador</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{contador}</h3>
        <input type="text" onChange={handleInput} value={input}></input>
        <ContadorHijo contador={contador} sumar={sumar} restar={restar}/>
    </div>
  )
}

export default Contador

