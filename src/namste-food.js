import React from "react";
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header'
import BodyComponent from "./components/Body";

const AppComponent = () => (
    <div className="app-layout">
        <HeaderComponent/>
        <BodyComponent/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppComponent/>)