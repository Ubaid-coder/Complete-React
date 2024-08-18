import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx';
import ErrorJSX from './components/error.jsx'
import CountryDetails from './components/CountryDetails.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorJSX />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/:country',
                element: <CountryDetails />
            }
        ]
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={router} />
    </>
)
