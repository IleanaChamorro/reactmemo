import { memo, useMemo } from 'react'

/*El hijo esta dentro del contador padre, cada vez que actualizamos la variable de estado del padre, el hijo completo se renderiza 

En este caso conviene memorizar el componente hijo, de tal manera que si el componente hijo no sufre ningun cambio aunque la variable de estado padre se renderice, se mantiene memorizado hasta que el componente hijo internamente cambie recien ahi se renderizara
*/


/*Cuando el componente recibe propiedades que son funciones, también hay que memorizar a las funciones lo cual se hace mediante el hook useCallback*/
const ContadorHijo = ({contador, sumar, restar}) => {
  
  /*UseMemo -> sirve para  memorizar valores que tendramos que calcular para luego ser utlizados, o procesos pesados como pedir datos de una api*/
  //let superNumero = 0;
  //for(let i=0; i<1000000000; i++){
    //superNumero++;
  //};
  const superNumero = useMemo(() => {
    let numero = 0;
    
    for(let i=0; i<1000000000; i++){
      numero++;
    }

    return numero;
  }, []);

  /*valor calculado o computedproperty*/
  console.log("Hijo Contador se renderiza");
  return (
    <div style={{border: "thin solid #000", margin: "1rem", padding: "1rem"}}>
    <h2>Contador Hijo</h2>
    <h3>{contador}</h3>
    <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
    </nav>
    <h3>{superNumero}</h3>
    </div>
  )
}

export default memo(ContadorHijo)