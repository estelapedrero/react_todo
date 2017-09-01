import React from 'react';

class ListItem extends React.Component {
  render() {
    return (
        <li className={this.props.rank}>
          <input type="checkbox" onClick={this._handleClick.bind(this)} id={this.props.title} checked={this.props.done}/>
          <label htmlFor={this.props.title}>{this.props.title}</label>
        </li>
    );
  }
  _handleClick() {
    this.setState({
      checked: !this.props.done
    })
  }
}

export default ListItem;
