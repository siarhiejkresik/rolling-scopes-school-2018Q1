import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InfoPane from '../containers/InfoPane';
import CardDeck from '../containers/CardDeck';

import { generateCardDeck, startTimer, stopTimer } from '../../actions';

class GameScreen extends React.Component {
  componentWillMount() {
    const { difficulty, generateCardDeck, startTimer } = this.props;
    generateCardDeck(difficulty);
    startTimer();
  }

  componentWillUnmount() {
    const { stopTimer } = this.props;
    stopTimer();
  }

  render() {
    return (
      <section className="game">
        <InfoPane />
        <CardDeck />
        <Link to="/menu">
          <button type="button" className="exit">
            {'Exit to menu'}
          </button>
        </Link>
      </section>
    );
  }
}

GameScreen.propTypes = {
  difficulty: PropTypes.string.isRequired,
  generateCardDeck: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  difficulty: state.preferences.difficulty,
});

const mapDispatchToProps = dispatch => ({
  generateCardDeck: difficulty => dispatch(generateCardDeck(difficulty)),
  startTimer: () => dispatch(startTimer()),
  stopTimer: () => dispatch(stopTimer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameScreen);
