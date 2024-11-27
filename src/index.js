import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <header>
            <meta name="description" content="Little Lemon Restaurant - Chicago" />
            <meta name="og:title" content="Little Lemon" />
            <meta name="og:description" content="Little Lemon Restaurant - Chicago" />
            <meta name="og:image" content="./images/Logo.svg" />
        </header>
     <App/>
    </BrowserRouter>
);

