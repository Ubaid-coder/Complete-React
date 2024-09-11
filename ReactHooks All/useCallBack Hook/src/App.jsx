import { useCallback, useMemo, useState } from "react";
import Todos from './components/Todos.jsx'

function App() {
  const [count, setcount] = useState(0);
  const [todos, settodos] = useState([]);

  const increment = ()=>{
    setcount(count + 1);
  }

  const addTodo = useCallback(() => {
    return settodos((prev) => [...prev, 'new Entry']);
  },[todos])
  return (
    <>
  <Todos todos={todos} addTodo={addTodo} />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default App