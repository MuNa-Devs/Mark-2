
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import AuthProvider from './AuthContext.jsx';

localStorage.setItem("is_logged_in", "false");

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/">
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
);
