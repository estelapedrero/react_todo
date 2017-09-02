import React from 'react';
import PropTypes from 'prop-types';

const IconLink = props => (
  <li key={props.index}>
    <a href={props.link} target="_blank">
      {props.name}
    </a>
  </li>
);

IconLink.propTypes = {
  index: PropTypes.number,
  link: PropTypes.string,
  name: PropTypes.string,
};

export default IconLink;
