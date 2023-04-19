import './App.css';
import Contador from './components/Contador';
import ContadorHijo from './components/ContadorHijo';

function App() {
  return (
    <div>
      <h1>Memorización en React</h1>
      <hr/>
      <h2>Teoria</h2>
      <h3>
        <a href="https://es.reactjs.org/docs/react-api.html#reactmemo"
        target="_blank"
        rel="noreferrer">
        </a>
        Memo
      </h3>
      <ul>
        <li>Se encarga de memorizar un componente, </li>
        <li>
          Lo vuelve a memorizar al momento de que sus <b>props</b> cambian.
        </li>
        <li>Evita re-renderizados</li>
        <li>Hay que evitarlos en la medida de lo posible, pues podría ser más costosa la tarea de memorización de que el re-renderizado del componente</li>
        <li>Úsalo, cuando: </li>
        <ul>
          <li>Tenemos muchos elementos renderizados en una lista.</li>
          <li>Llamamos datos de API's</li>
          <li>Un componente se vuelve muy pesado</li>
          <li>Salen alertas de rendimiento en la consola</li>
        </ul>
      </ul>
      <a>
      <h3>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usecallback"
        target="_blank"
        rel="noreferrer">
        </a>
        UseCallback
      </h3>
      </a>
      <ul>
        <li>
          Memoriza una función, para no volverla a definir en cada render.
        </li>
        <li>
          Úsalo siempre que se pase una función como <b>prop</b> a un componente memorizado
        </li>
        <li>
          Úsalo siempre que se pase una función como parámetro de un efecto
        </li>
      </ul>
      <hr/>
      <Contador/>
      <hr/>
      <ContadorHijo/>
    </div>
  );
}

export default App;
