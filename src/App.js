import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
  );
}

export default App;
