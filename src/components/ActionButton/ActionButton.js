import React from 'react';

import styles from './styles.scss';

class ActionButton extends React.Component {
  render() {
    let buttonVal = 'show tasks';
    if(this.state.showTasks) {
      buttonVal = 'hide tasks';
    }

    return (
      <button onClick={this._handleClick.bind(this)} className={styles.button}>{buttonVal}</button>
    );
  }

  _handleClick() {
    this.setState({
      showTasks: !this.state.showTasks
    })
  }
}

export default ActionButton;
