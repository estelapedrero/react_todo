import React from 'react';
import ListItem from '../ListItem';
import ActionButton from '../ActionButton';

import styles from './styles.scss';

class List extends React.Component {

  constructor () {
    super();
    this.state = {
      showTasks: true
    }
  }

  render() {
    let taskList;
    let buttonVal = 'show tasks';
    const tasks = this._getTasks();
    if(this.state.showTasks) {
      buttonVal = 'hide tasks';
      taskList = <ul className={styles.todolist}> {tasks} </ul>
    }

    return (
      <div>
        <p>{this._getTasksTitle(tasks.length)}</p>
        <button onClick={this._handleClick.bind(this)} className={styles.button}>{buttonVal}</button>
        {taskList}
      </div>
    );
  };

  _getTasks() {
    const todoList = [
      {title: 'Invitar a Bert a cenar', rank: 'leisure', done: true},
      {title: 'Dormir', rank: 'leisure', done: true},
      {title: 'Patinar', rank: 'sport', done: false},
      {title: 'Concierto The New Raemon', rank: 'music', done: false},
      {title: 'Cena en jleos', rank: 'food', done: false},
      {title: 'Llorar', rank: 'other', done: false}
    ];
    return todoList.map( (task, index) => {
      return (
        <ListItem
          key={index} title={task.title} done={task.done} rank={task.rank} />
      )
    })
  };

  _getTasksTitle(taskCount){
    if(taskCount === 0) {
      return `everything is done`;
    } else if(taskCount === 1) {
      return `1 task in the list`;
    } else{
      return `${taskCount} tasks in the list`;
    }
  };

  _handleClick() {
    this.setState({
      showTasks: !this.state.showTasks
    })
  };
}

export default List;
