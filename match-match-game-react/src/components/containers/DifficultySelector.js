import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Heading from '../presentational/Heading';

import { setDifficulty } from '../../actions';
import { DIFFICULTY } from '../../constants/preferences';

class DifficultySelector extends React.Component {
  constructor(props) {
    super(props);
    this.onDifficultySelect = this.onDifficultySelect.bind(this);
  }

  onDifficultySelect(difficulty) {
    const { setDifficulty } = this.props;
    setDifficulty(difficulty);
  }

  render() {
    const { difficulty } = this.props;
    return (
      <section>
        <Heading title="Difficulty" level={4} hidden />
        <div className="row-centered">
          {Object.keys(DIFFICULTY).map((difficulty_) => {
            let classes = `${difficulty_}`;
            if (difficulty_ === difficulty) {
              classes = `${classes} selected`;
            }
            return (
              <button
                type="button"
                key={difficulty_}
                className={classes}
                onClick={() => this.onDifficultySelect(difficulty_)}
              >
                {`${difficulty_}`}
              </button>
            );
          })}
        </div>
      </section>
    );
  }
}

DifficultySelector.propTypes = {
  difficulty: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  difficulty: state.preferences.difficulty,
});

const mapDispatchToProps = dispatch => ({
  setDifficulty: (difficulty) => {
    dispatch(setDifficulty(difficulty));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DifficultySelector);
