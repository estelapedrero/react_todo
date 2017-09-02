import React, { Component } from 'react';
import styles from './styles.scss';

class ActionButton extends Component {
  handleClick() {
    this.setState({
      showTasks: !this.state.showTasks,
    });
  }

  render() {
    let buttonVal = 'show tasks';
    if (this.state.showTasks) {
      buttonVal = 'hide tasks';
    }

    return (
      <button onClick={this.handleClick} className={styles.button}>{buttonVal}</button>
    );
  }
}

export default ActionButton;
