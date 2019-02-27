import React from 'react';
import PropTypes from 'prop-types';

const HEADING_LEVELS = [1, 2, 3, 4, 5, 6];

const Heading = ({ level, title, hidden }) => {
  if (hidden) {
    return null;
  }
  return React.createElement(`h${level}`, hidden, title);
};

Heading.defaultProps = {
  level: 1,
  hidden: false,
};

Heading.propTypes = {
  level: PropTypes.oneOf(HEADING_LEVELS),
  title: PropTypes.string.isRequired,
  hidden: PropTypes.bool,
};

export default Heading;
