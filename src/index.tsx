import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/components/App';

import './styles.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as Element);
root.render(<App />);
