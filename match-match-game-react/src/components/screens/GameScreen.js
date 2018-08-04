import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InfoPane from '../containers/InfoPane';
import CardDeck from '../containers/CardDeck';

import { generateCardDeck } from '../../actions';

class GameScreen extends React.Component {
  componentWillMount() {
    const { difficulty, generateCardDeck } = this.props;
    generateCardDeck(difficulty);
  }

  render() {
    return (
      <section className="game">
        <InfoPane />
        <CardDeck />
        <Link to="/result">
          <button type="button" className="exit">
            {'Exit to menu'}
          </button>
        </Link>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  difficulty: state.preferences.difficulty,
});

const mapDispatchToProps = dispatch => ({
  generateCardDeck: difficulty => dispatch(generateCardDeck(difficulty)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameScreen);
