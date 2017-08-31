import React from 'react';

class IconLink extends React.Component {
  render() {
    return (
      <li key={this.props.index}>
        <a href={this.props.link} target="_blank">
          {this.props.name}
        </a>
      </li>
    );
  }
}

export default IconLink;
