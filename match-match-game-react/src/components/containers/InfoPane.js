import React from 'react';

import DifficultyName from './DifficultyName';
import PlayerName from './PlayerName';
import Timer from '../presentational/Timer';

const InfoPane = () => (
  <div className="game-info">
    <PlayerName />
    <Timer />
    <DifficultyName />
  </div>
);

export default InfoPane;
