import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
  }
  renderOptions = () => (
    <select name="" id="">
      {
        this.props.options.map(rank => (
          <option value={rank.value}>
            {rank.value}
          </option>
        ))
      }
    </select>
  )

  render() {
    return (
      this.renderOptions
    );
  }
}

export default Select;
