import React from "react";
import ReactDOM from 'react-dom/client';

import {restaurants} from '../restaurants.json' with {type: "json"}


const AppComponent = () => (
    <div className="app-layout">
        <HeaderComponent/>
        <BodyComponent/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppComponent/>)