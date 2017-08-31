import React from 'react';

class ListItem extends React.Component {
  render() {
    return (
      <div>
        <li>
          <input type="checkbox" id={this.props.title} checked={this.props.done}/>
          <label htmlFor={this.props.title}>{this.props.title}</label>
        </li>
      </div>
    );
  }
}

export default ListItem;
