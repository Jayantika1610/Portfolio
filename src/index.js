import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //strict mode used to check the vulnerabilities easily
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
    
);
