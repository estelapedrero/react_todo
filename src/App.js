import React, { Component } from 'react';
import styles from './App.scss';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className={styles.wrapper}>
          <div className={styles.listbox}>
            <h2>lista1</h2>
            <List/>
          </div>
          <div className={styles.listbox}>
          <h2>lista2</h2>
            <ul className={styles.todolist}>
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

        <Footer/>
      </div>
   );
  }
}

export default App;
