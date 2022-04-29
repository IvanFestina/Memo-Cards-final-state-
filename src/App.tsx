import React from 'react';
import './App.css';
import {Header} from "./components_UI/Header/Header";
import {AllRoutes} from "./Routes";


export function App() {
    return (
        <div className="App">
            <Header/>
            <AllRoutes/>
        </div>
    );
}
