import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import styles from './styles.scss';

class List extends Component {
  static propTypes = {
    clickClose: PropTypes.func,
    onToggle: PropTypes.func,
    tasks: PropTypes.arrayOf(PropTypes.object),
  }

  constructor(props) {
    super(props);

    this.state = {
      showTasks: true,
    };
  }

  onButtonClick = () => {
    this.setState({
      showTasks: !this.state.showTasks,
    });
  }

  renderTasks = () => (
    <ul className={styles.todolist}>
      {
        this.props.tasks.map(task => (
          <ListItem
            key={task.id}
            clickClose={this.props.clickClose}
            onToggle={this.props.onToggle}
            {...task}
          />
        ))
      }
    </ul>
  )

  renderTitle = () => {
    const count = this.props.tasks.length;

    return count === 0
      ? 'evrything is done'
      : `${count} ${count > 1 ? 'tasks' : 'task'} in the list`;
  }

  render() {
    return (
      <div>
        <p>{this.renderTitle(this.props.tasks.length)}</p>
        <button onClick={this.onButtonClick} className={styles.button}>
          {this.state.showTasks ? 'hide' : 'show'} tasks
        </button>
        {this.state.showTasks && this.renderTasks()}
      </div>
    );
  }
}

export default List;
