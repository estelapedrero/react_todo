import React, { Component } from 'react';
import styles from './styles.scss';

class AddTask extends Component {
  // -- Definition
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  // -- Action handlers
  onAddClick = () => {
    if (!this.state.title) return;

    this.props.addTask(this.state);
    this.setState({ title: '' });
  }

  onInputChange = event => {
    this.setState({ title: event.target.value });
  }

  // -- Renders
  render() {
    return (
      <div className={styles.formbox}>
        <input
          type="text"
          placeholder="add new task"
          value={this.state.title}
          onChange={this.onInputChange}
        />
        <button className={styles.button} onClick={this.onAddClick}>add</button>
      </div>
    );
  }
}

export default AddTask;
