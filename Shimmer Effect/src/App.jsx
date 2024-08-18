import './App.css'
import { Outlet } from 'react-router-dom'
import Headers from './components/Header.jsx'


function App() {
    return (
        <>
            <Headers />
            <Outlet />
        </>
    )
}

export default App
