
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // 👈 Importa tu componente principal App
z

// 1. Identifica el elemento raíz en tu index.html (usualmente <div id="root"></div>)
const rootElement = document.getElementById('root');

// 2. Crea la raíz de React a partir de ese elemento
ReactDOM.createRoot(rootElement).render(
  // 3. Usa <React.StrictMode> para chequeos adicionales durante el desarrollo
  <React.StrictMode>
    <App /> {/* 👈 Renderiza tu aplicación completa */}
  </React.StrictMode>,
);