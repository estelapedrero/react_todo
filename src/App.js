// Importamos React igual que antes, y también
// Component para que nuestro componente herede de él
import React, { Component } from 'react';
// Importamos estilos
import styles from './App.scss';

// Creamos nuestro componente
class App extends Component {

  // Método render, lo que esté aquí será lo que se vea
  render() {
    return (
      <div>
        <h1 className={styles.title}>Buenas noches señooooora!</h1>
          <ul>
            <li>
              <input type="checkbox" id="todo-1"/>
              <label for="todo-1">Invitar a Bert a cenar</label>
            </li>
            <li>
              <input type="checkbox" id="todo-2"/>
              <label for="todo-2">Dormir</label>
            </li>
            <li>
              <input type="checkbox" id="todo-3"/>
              <label for="todo-3">Patinar</label>
            </li>
            <li>
              <input type="checkbox" id="todo-4"/>
              <label for="todo-4">Llorar</label>
            </li>
          </ul>
      </div>
   );
  }
}

export default App;
