import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { timeMSToMMSS } from '../../scripts/utils';

class Timer extends React.Component {
  render() {
    const { time } = this.props;
    return (
      <div className="timer">
        {timeMSToMMSS(time)}
      </div>
    );
  }
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  time: state.timer.offset,
});

export default connect(mapStateToProps)(Timer);
