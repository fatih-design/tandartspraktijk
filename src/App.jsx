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
            <Whitening path="/whitening" element={<Whitening />}/>
            <Appointments path="/appointments" element={<Appointments />} />
            <Cavities path="/cavities" element={<Cavities />} />
            <NotFound path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;