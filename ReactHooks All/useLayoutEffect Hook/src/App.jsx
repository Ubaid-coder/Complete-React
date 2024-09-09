import React, { useEffect, useLayoutEffect, useState } from 'react'

function App() {
  // useLayoutEffect(() => {
  //   console.log('I am first useEffect');
  // },[])
  // useEffect(() => {
  //   console.log('I am second useEffect');
  // },[])
  // useLayoutEffect(() => {
  //   console.log('I am third useEffect');
  // },[])

  const [num, setnum] = useState(0);

  useLayoutEffect(() => {
    if(num == 0){
      setnum(num + (Math.floor(Math.random() * 10)));
    }
  }, [num])
  return (
    <>
    <p>{num}</p>
    <button onClick={() => setnum(0)}>randomNumber</button>
    </>
  )
}

export default App