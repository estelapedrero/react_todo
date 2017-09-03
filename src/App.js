import React, { Component } from 'react';
import { AddTask, Footer, Header, List } from './components';
import styles from './App.scss';

const RANKS = [
  { id: 1, value: 'leisure' },
  { id: 2, value: 'food' },
  { id: 3, value: 'music' },
  { id: 4, value: 'other' },
  { id: 5, value: 'sport' },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: 1, title: 'Finish this todo-list', rank: 'leisure', done: false },
        { id: 2, title: 'Update commits', rank: 'leisure', done: true },
        { id: 3, title: 'Go to skate', rank: 'sport', done: false },
        { id: 4, title: 'The New Raemon concert', rank: 'music', done: false },
        { id: 5, title: 'Sushi dinner', rank: 'food', done: false },
        { id: 6, title: 'Travel to Bcn', rank: 'leisure', done: false },
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
    const tasks = this.state.tasks.filter(task => task.id !== id);

    this.setState({ tasks });
  }

  render() {
    return (
      <div className={styles.content}>
        <Header />
        <div className={styles.wrapper}>
          <AddTask addTask={this.addTask} options={RANKS} />
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
