import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import { Suspense} from 'react'


function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default App
