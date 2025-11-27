import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import AuthProvider from './AuthContext.jsx';
import ThemeManager from './utils/ThemeManager.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/">
        <ThemeManager>
            <AuthProvider>
                <App />
            </AuthProvider>
        </ThemeManager>
    </BrowserRouter>
);
