import React from 'react';

import DifficultyName from './DifficultyName';
import PlayerName from './PlayerName';
import Timer from '../presentational/Timer';

const InfoPane = () => (
  <div className="game-info">
    <PlayerName />
    <Timer time="12:34" />
    <DifficultyName />
  </div>
);

export default InfoPane;
