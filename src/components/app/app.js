import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
    
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Routes>
            <Route path='main' element={<MainPage/>}/>
            <Route path='cart' element={<CartPage/>}/>
            </Routes>
            
            
        </div>
    )
}

export default App;