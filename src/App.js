import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProductForm from './components/ProductForm';
import './styles.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/incluir" element={<ProductForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;