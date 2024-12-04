import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Reservations from "./components/Reservations.js";

function App() {



    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservations" element={<Reservations />} />
        </Routes>
  );
}

export default App;
