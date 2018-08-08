import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from './Card';

import { processQueue } from '../../actions';
import CARD_STATES from '../../constants/card-states';

class CardDeck extends React.Component {
  constructor(props) {
    super(props);
    this.onCardSelect = this.onCardSelect.bind(this);
  }

  onCardSelect(event) {
    const { isQueueBlocked, processQueue } = this.props;
    if (isQueueBlocked) {
      return;
    }
    const { id, state } = event;
    if (state === CARD_STATES.CLOSED) {
      processQueue(id);
    }
  }

  render() {
    const { cards, cardBack } = this.props;
    return (
      <div className="grid">
        {cards.map(card => (
          <Card key={card.id} {...card} cardBack={cardBack} onCardSelect={this.onCardSelect} />
        ))}
      </div>
    );
  }
}

CardDeck.propTypes = {
  isQueueBlocked: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cards,
  cardBack: state.preferences.cardBack,
  isQueueBlocked: state.queue.isBlocked,
});

const mapDispatchToProps = dispatch => ({
  processQueue: id => dispatch(processQueue(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDeck);
