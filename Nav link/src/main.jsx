import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import './index.css'

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
                element:<About />
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
