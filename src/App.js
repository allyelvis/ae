import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import RestaurantPOS from './pages/RestaurantPOS';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/restaurant-pos" element={<RestaurantPOS />} />
            </Routes>
        </Router>
    );
}

export default App;
