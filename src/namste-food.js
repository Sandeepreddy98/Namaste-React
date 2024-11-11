import React from "react";
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header'
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppComponent = () => (
    <div className="app-layout">
        <HeaderComponent/>
        <BodyComponent/>
    </div>
)

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppComponent/>,
        errorElement :<Error/>
    },
    {
        path : '/about',
        element : <About/>
    },
    {
        path:'/contact',
        element : <Contact/>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)