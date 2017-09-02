import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class ListItem extends Component {
  static propTypes = {
    done: PropTypes.bool,
    id: PropTypes.number,
    onToggle: PropTypes.func,
    rank: PropTypes.string,
    title: PropTypes.string,
  }

  onInputChange = () => {
    this.props.onToggle(this.props.id);
  }

  render() {
    return (
      <li className={styles[this.props.rank]}>
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
