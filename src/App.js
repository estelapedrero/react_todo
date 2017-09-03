import React, { Component } from 'react';
import { AddTask, Footer, Header, List } from './components';
import styles from './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: 1, title: 'Invitar a Bert a cenar', rank: 'leisure', done: false },
        { id: 2, title: 'Dormir', rank: 'leisure', done: true },
        { id: 3, title: 'Patinar', rank: 'sport', done: false },
        { id: 4, title: 'Concierto The New Raemon', rank: 'music', done: false },
        { id: 5, title: 'Cena en jleos', rank: 'food', done: false },
        { id: 6, title: 'Llorar', rank: 'other', done: false },
      ],
      ranks: [
        { id: 1, value: 'leisure' },
        { id: 2, value: 'food' },
        { id: 3, value: 'music' },
        { id: 4, value: 'other' },
        { id: 5, value: 'sport' },
      ],
    };
  }

  addTask = task => {
    const { title, rank } = task;
    const tasks = [
      ...this.state.tasks,
      { id: Date.now(), title, rank, done: false },
    ];

    this.setState({ tasks });
  }

  toggleCheckbox = id => {
    const tasks = this.state.tasks.map(task => (
      task.id === id ? { ...task, done: !task.done } : task
    ));

    this.setState({ tasks });
  }

  clickXClose = id => {
    // console.log(id);
    // const tasks = this.state.tasks.map(task => (
    //   task.id === id ? { tasks.filter(task) } : task
    // ));
    const tasks = this.state.tasks.filter(task => task.id !== id);

    this.setState({ tasks });
  }

  render() {
    return (
      <div className={styles.content}>
        <Header />
        <div className={styles.wrapper}>
          <AddTask addTask={this.addTask} options={this.state.ranks} />
          <div className={styles.listbox}>
            <p>Short compilation of everything I should do next</p>
            <List
              tasks={this.state.tasks}
              onToggle={this.toggleCheckbox}
              clickClose={this.clickXClose}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
