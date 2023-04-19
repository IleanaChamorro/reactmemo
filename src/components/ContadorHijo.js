import { memo } from 'react'

/*El hijo esta dentro del contador padre, cada vez que actualizamos la variable de estado del padre, el hijo completo se renderiza 

En este caso conviene memorizar el componente hijo, de tal manera que si el componente hijo no sufre ningun cambio aunque la variable de estado padre se renderice, se mantiene memorizado hasta que el componente hijo internamente cambie recien ahi se renderizara
*/

const ContadorHijo = () => {
  console.log("Hijo Contador se renderiza");
  return (
    <div style={{border: "thin solid #000", margin: "1rem", padding: "1rem"}}>
    <h2>Contador Hijo</h2>
    </div>
  )
}

export default memo(ContadorHijo)