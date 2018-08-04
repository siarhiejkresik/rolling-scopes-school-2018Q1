import React from 'react';
import PropTypes from 'prop-types';

const InfoField = ({ fieldName, text }) => (
  <div>
    <b>
      {fieldName}
      {': '}
    </b>
    <span>
      {text}
    </span>
  </div>
);

InfoField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InfoField;
