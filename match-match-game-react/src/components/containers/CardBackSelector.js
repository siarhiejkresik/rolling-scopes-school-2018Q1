import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Heading from '../presentational/Heading';

import { setCardBack } from '../../actions';

import CARD_BACKS from '../../constants/card-backs';

class CardBackSelector extends React.Component {
  constructor(props) {
    super(props);
    this.onCardBackSelect = this.onCardBackSelect.bind(this);
  }

  onCardBackSelect(cardBack) {
    const { setCardBack } = this.props;
    setCardBack(cardBack);
  }

  render() {
    const { cardBack } = this.props;
    return (
      <section>
        <Heading title="Theme" level={4} hidden />
        <div className="carousel row-centered">
          {CARD_BACKS.map((cardBack_, index) => {
            let classes = `card ${cardBack_}`;
            if (cardBack_ === cardBack) {
              classes = `${classes} selected`;
            }
            return (
              <div
                key={index}
                className={classes}
                onClick={() => this.onCardBackSelect(cardBack_)}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

CardBackSelector.propTypes = {
  cardBack: PropTypes.string.isRequired,
  setCardBack: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cardBack: state.preferences.cardBack,
});

const mapDispatchToProps = dispatch => ({
  setCardBack: (cardBack) => {
    dispatch(setCardBack(cardBack));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardBackSelector);
