import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
 // Import SignIn component
import Menu from './Menu'; // Import Menu component
import AboutUs from './AboutUs'; // Import AboutUs component
import MyAccount from './MyAccount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
        
            <Route path='/Menu' element={<Menu />} /> 
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/MyAccount' element={<MyAccount />} />
        </Routes>
    </BrowserRouter>
);