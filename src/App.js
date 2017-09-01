import React, { Component } from 'react';
import styles from './App.scss';

import Header from './components/Header';
import AddTask from './components/AddTask';
import List from './components/List';
import ListItem from './components/ListItem';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className={styles.wrapper}>
          <AddTask/>
          <div className={styles.listbox}>
            <p>Short compilation of everything I should do next</p>
            <List/>
          </div>
        </div>
      <Footer/>
      </div>

   );
  }
}

export default App;
