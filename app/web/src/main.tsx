import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';

import App from './App.tsx';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
