import React from 'react';
import PropTypes from 'prop-types';

const CLASSES = 'face front';

const CardFront = ({ type }) => (
  <div className={`${CLASSES}`}>
    {type}
  </div>
);

CardFront.propTypes = {
  type: PropTypes.number.isRequired,
};

export default CardFront;
