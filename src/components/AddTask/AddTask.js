import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import styles from './styles.scss';

const ENTER_KEYCODE = 13;

class AddTask extends Component {
  // -- Definition
  static propTypes = {
    addTask: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
  }
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      rank: 'other',
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

  onSelectChange = event => {
    this.setState({ rank: event.target.value });
  }

  onInputKeyDown = event => {
    if (event.which === ENTER_KEYCODE) {
      this.onAddClick();
    }
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
          onKeyDown={this.onInputKeyDown}
        />
        <Select options={this.props.options} onChange={this.onSelectChange} />
        <button className={styles.button} onClick={this.onAddClick}>add</button>
      </div>
    );
  }
}

export default AddTask;
