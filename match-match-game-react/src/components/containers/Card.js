import React from 'react';
import PropTypes from 'prop-types';

import CardBack from '../presentational/CardBack';
import CardFront from '../presentational/CardFront';

import CARD_STATES from '../../constants/card-states';

const mapCardStateToHTMLClasses = (state) => {
  let classes = ['card'];
  switch (state) {
    case CARD_STATES.CLOSED:
      break;
    case CARD_STATES.OPENED:
      classes.push('opened');
      break;
    case CARD_STATES.DISABLED:
      classes.push('opened disabled');
      break;
    default:
      throw new Error(`unknown card state: ${state}`);
  }
  classes = classes.join(' ');
  return classes;
};

const Card = ({
  id, state, type, cardBack, onCardSelect,
}) => {
  const classes = mapCardStateToHTMLClasses(state);
  return (
    <div className={classes} onClick={() => onCardSelect({ id, state })}>
      <div className="content">
        <CardBack style={cardBack} />
        <CardFront type={type} />
      </div>
    </div>
  );
};
// }

Card.propTypes = {
  id: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  cardBack: PropTypes.string.isRequired,
  onCardSelect: PropTypes.func.isRequired,
};

export default Card;
