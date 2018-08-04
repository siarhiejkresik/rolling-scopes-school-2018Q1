import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ time }) => (
  <div className="timer">
    {time}
  </div>
);

Timer.propTypes = {
  time: PropTypes.string.isRequired,
};

export default Timer;
