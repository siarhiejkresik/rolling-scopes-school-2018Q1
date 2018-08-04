import React from 'react';
import { Link } from 'react-router-dom';

import DifficultyName from '../containers/DifficultyName';
import PlayerName from '../containers/PlayerName';
import Heading from '../presentational/Heading';

const ResultScreen = () => (
  <section className="result">
    <Heading title="Congratulations!" level={2} />
    <section className="result-info">
      <PlayerName />
      <DifficultyName />
      <div>
        {'Your time is '}
        <span className="time">
          {'12:34'}
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

export default ResultScreen;
