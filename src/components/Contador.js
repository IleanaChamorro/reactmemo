import React, { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0);
    const [input, setInput] = useState("");

    const sumar = () => setContador(contador + 1);
    const restar = () => setContador(contador - 1);
   
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
    </div>
  )
}

export default Contador