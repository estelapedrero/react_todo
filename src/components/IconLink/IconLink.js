import React from 'react';

const IconLink = () => (
  <li key={this.props.index}>
    <a href={this.props.link} target="_blank">
      {this.props.name}
    </a>
  </li>
);

export default IconLink;
