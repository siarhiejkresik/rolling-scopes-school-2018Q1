import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Card from './Card';

import {
  CARD_STATES,
  setCardState,
  addCardToQueue,
  clearQueue,
  blockQueue,
  unBlockQueue,
} from '../../actions';
import { isQueueFull, isQueueOfDifferentTypes, isAllCardsDisabled } from '../../selectors';

import { QUEUE_ANIMATION_DURATION } from '../../constants/animations';

class CardDeck extends React.Component {
  constructor(props) {
    super(props);
    this.onCardSelect = this.onCardSelect.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { isAllCardsDisabled, isQueueBlocked } = this.props;
    if (isAllCardsDisabled && !isQueueBlocked) {
      console.log('end GAME!');
    }

    const props = [
      {
        propName: 'isQueueOfDifferentTypes',
        cardState: CARD_STATES.CLOSED,
      },
      {
        propName: 'isQueueFull',
        cardState: CARD_STATES.DISABLED,
      },
    ];

    for (const prop of props) {
      const prev = prevProps[prop.propName];
      const curr = this.props[prop.propName];
      const isProcessed = this.processQueue(prev, curr, prop.cardState);
      if (isProcessed) {
        break;
      }
    }
  }

  onCardSelect(event) {
    const { isQueueBlocked } = this.props;
    if (isQueueBlocked) {
      return;
    }

    const { setCardState, addCardToQueue } = this.props;
    const { id, state } = event;
    if (state === CARD_STATES.CLOSED) {
      addCardToQueue({ id });
      setCardState({ id, state: CARD_STATES.OPENED });
    }
  }

  processQueue(prev, curr, cardState) {
    const { clearQueue, blockQueue, unBlockQueue } = this.props;
    if (prev !== curr && curr) {
      blockQueue();
      setTimeout(() => {
        this.changeQueueCardsState(cardState);
        clearQueue();
        unBlockQueue();
      }, QUEUE_ANIMATION_DURATION);
      return true;
    }
    return false;
  }

  changeQueueCardsState(state) {
    const { queueCardIds, setCardState } = this.props;
    queueCardIds.map(id => setCardState({ id, state }));
  }

  render() {
    const { isAllCardsDisabled, isQueueBlocked } = this.props;

    const isGameEnd = isAllCardsDisabled && !isQueueBlocked;
    if (isGameEnd) {
      return <Redirect to="/result" />;
    }

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
  isQueueFull: PropTypes.bool.isRequired,
  isQueueOfDifferentTypes: PropTypes.bool.isRequired,
  isQueueBlocked: PropTypes.bool.isRequired,
  isAllCardsDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cards,
  cardBack: state.preferences.cardBack,
  queueCardIds: state.queue.cardIds,
  isQueueBlocked: state.queue.isBlocked,
  isQueueFull: isQueueFull(state),
  isQueueOfDifferentTypes: isQueueOfDifferentTypes(state),
  isAllCardsDisabled: isAllCardsDisabled(state),
});

const mapDispatchToProps = dispatch => ({
  setCardState: ({ id, state }) => {
    dispatch(setCardState({ id, state }));
  },
  addCardToQueue: ({ id }) => dispatch(addCardToQueue({ id })),
  clearQueue: () => dispatch(clearQueue()),
  blockQueue: () => dispatch(blockQueue()),
  unBlockQueue: () => dispatch(unBlockQueue()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardDeck);
