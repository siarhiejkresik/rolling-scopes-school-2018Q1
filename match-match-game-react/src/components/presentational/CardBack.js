import React from 'react';
import PropTypes from 'prop-types';

const CLASSES = 'face back';

const CardBack = ({ style }) => <div className={`${CLASSES} ${style}`} />;

CardBack.propTypes = {
  style: PropTypes.string.isRequired,
};

export default CardBack;
