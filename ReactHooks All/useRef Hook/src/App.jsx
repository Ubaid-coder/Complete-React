import React, { useRef } from 'react'
import './App.css'

function App() {
  const input = useRef();

 const handleClick= () => {
  input.current.focus()
  input.current.style.backgroundColor = 'pink';
  input.current.style.padding = '30px'
  console.log(input.current);
 }

  return (
    <div className="button-container">
      <input  ref={input} type="text"  />
      <button onClick={handleClick}>Click</button>

    </div>
  );
};

export default App