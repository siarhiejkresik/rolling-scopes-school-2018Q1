import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import DifficultyName from '../containers/DifficultyName';
import PlayerName from '../containers/PlayerName';
import Heading from '../presentational/Heading';

import { timeMSToMMSS } from '../../scripts/utils';

// eslint-disable-next-line react/prefer-stateless-function
class ResultScreen extends React.Component {
  render() {
    const { time } = this.props;
    return (
      <section className="result">
        <Heading title="Congratulations!" level={2} />
        <section className="result-info">
          <PlayerName />
          <DifficultyName />
          <div>
            {'Your time is '}
            <span className="time">
              {timeMSToMMSS(time)}
            </span>
          </div>
          <div className="record">
            {'You got the '}
            <span className="place">
              {'X'}
            </span>
            {' place!'}
          </div>
        </section>
        <Link to="/game">
          <button type="button" className="play">
            {'Play again'}
          </button>
        </Link>
        <Link to="/menu">
          <button type="button" className="return">
            {'Return to menu'}
          </button>
        </Link>
      </section>
    );
  }
}

ResultScreen.propTypes = {
  time: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  time: state.timer.offset,
});

export default connect(mapStateToProps)(ResultScreen);
