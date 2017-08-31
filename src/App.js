import React, { Component } from 'react';
import styles from './App.scss';

class App extends Component {

  render() {
    return (
      <div>
        <h1 className={styles.title}>Buenas noches señooooora!</h1>
        <div className={styles.wrapper}>
            <ul>
              <li>
                <input type="checkbox" id="todo-1"/>
                <label htmlFor="todo-1">Invitar a Bert a cenar</label>
              </li>
              <li>
                <input type="checkbox" id="todo-2"/>
                <label htmlFor="todo-2">Dormir</label>
              </li>
              <li>
                <input type="checkbox" id="todo-3"/>
                <label htmlFor="todo-3">Patinar</label>
              </li>
              <li>
                <input type="checkbox" id="todo-4"/>
                <label htmlFor="todo-4">Llorar</label>
              </li>
            </ul>
            <div className={styles.formbox}>
              <input type="text" placeholder="add new task"/>
              <button className={styles.button}>add</button>
            </div>
        </div>
      </div>
   );
  }
}

export default App;
