import React from 'react';

import styles from './styles.scss';

class ListItem extends React.Component {

  render() {
    return (
        <li className={this.props.rank}>
          <input type="checkbox" onClick={this._toggleClick()}
                 className={styles.custom_checkbox}
                 id={this.props.title} checked={this.props.done}/>
          <label htmlFor={this.props.title}>{this.props.title}</label>
        </li>
    );
  }
  _toggleClick() {
  }
}

export default ListItem;

// onClick={this._handleClick.bind(this)}
