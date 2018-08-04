import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isQueueFull } from '../../selectors';

class CardQueue extends React.Component {
  constructor(props) {
    super(props);
    // this.onCardSelect = this.onCardSelect.bind(this);
  }


  render() {
    return null;
  }
}

CardQueue.propTypes = {
  isFull: PropTypes.bool.isRequired,
};

// const wrapper = fn => (...args) => {
//   const result = fn(...args);
//   console.log('wrapper', result);
//   return result;
// };

// const isQueueFullWrapped = wrapper(isQueueFull);

const mapStateToProps = state => ({
  queueCards: state.queue.cardIds,
  isFull: isQueueFull(state),
});

// const mapDispatchToProps = dispatch => ({
//   setCardState: ({ id, state }) => {
//     dispatch(setCardState({ id, state }));
//   },
//   addCardToQueue: ({ id }) => dispatch(addCardToQueue({ id })),
//   clearQueue,
// });

export default connect(
  mapStateToProps,
//   mapDispatchToProps,
)(CardQueue);
