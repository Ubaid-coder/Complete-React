import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [size, setsize] = useState(window.innerWidth)

  const screenResize = () => {
    window.addEventListener('resize',() => {
      setsize(window.innerWidth)
    })
  }

 useEffect(() => {
  screenResize();
  window.removeEventListener('resize',screenResize)
 },[size])
  return (
    <>
      <h1>The size of window is <span>{size}</span></h1>
    </>
  )
}

export default App