import React, { Component } from 'react';

import styles from './styles.scss';

class ListItem extends Component {
  onInputChange = () => {
    this.props.onToggle(this.props.id);
  }

  render() {
    return (
      <li className={this.props.rank}>
        <input
          type="checkbox"
          onChange={this.onInputChange}
          className={styles.custom_checkbox}
          id={this.props.id}
          checked={this.props.done}
        />
        <label htmlFor={this.props.id}>{this.props.title}</label>
      </li>
    );
  }
}

export default ListItem;
