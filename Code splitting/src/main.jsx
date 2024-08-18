import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import './index.css'

const About = lazy(() => wait(3000).then(() => import('./components/About.jsx')));

const wait = (time) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        },time)
    })
}

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/contact',
                element:<Contact />
            },
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
