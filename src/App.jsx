import React from 'react';
import './App.css';
import Whitening from './pages/whitening/Whitening.jsx';
import Home from './pages/home/Home.jsx';
import Appointments from './pages/appointments/Appointments.jsx';
import Cavities from './pages/cavities/Cavities.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import NotFound from './pages/notfound/NotFound.jsx';
import {Routes,Route}  from 'react-router-dom';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/whitening" element={<Whitening />}/>
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/cavities" element={<Cavities />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;