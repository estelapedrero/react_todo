// Importamos React, hace falta cuando hay JSX en el archivo
import React from 'react';

// Importamos ReactDOM para renderizar componentes al DOM
import ReactDOM from 'react-dom';

// Importamos nuestro componente principal
import App from './App.js';

// Renderizamos el componente App dentro de div#root
ReactDOM.render(<App />, document.getElementById('root'));
