import React from "react";
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header'
import BodyComponent from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RecipeDetail from "./components/RecipeDetail";

const AppComponent = () => (
    <div className="app-layout">
        <HeaderComponent/>
        <Outlet/>
    </div>
)

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppComponent/>,
        children : [
            {
                path : '',
                element : <BodyComponent/>
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path:'/contact',
                element : <Contact/>
            }
        ],
        errorElement :<Error/>
    },
    {
        path : '/recipes/:recId',
        element : <RecipeDetail/>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)