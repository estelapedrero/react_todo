import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object),
  }
  renderOptions = () => (
    <select
      name="ranks"
      id="rank_select"
      onChange={this.props.onChange}
    >
      {
        this.props.options.map(rank => (
          <option value={rank.value} key={rank.id}>
            {rank.value}
          </option>
        ))
      }
    </select>
  )

  render() {
    return (
      this.renderOptions()
    );
  }
}

export default Select;
