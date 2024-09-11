import React, { useEffect, useMemo, useState } from 'react'

function App() {
  const [myNum, setmyNum] = useState(0);
  const [show, setshow] = useState(false);

  const getValue = () => {
    return setmyNum(myNum +1);
  }

  const countNumber = (num) => {
    console.log('Num is', num);
    for(let i =0; i< 1000000000; i++){}
    return num;
  }

  const CheckData = useMemo(() => {
    return countNumber(myNum);
  },[myNum])
  return (
    <>
      <button onClick={getValue} style={{backgroundColor:'red'}}> Counter</button>
      <p>My new number: {CheckData }</p>
      <button onClick={() => setshow(!show)}>
        {show?'You clicked me': 'Click me please'}
      </button>
    </>
  )
}

export default App