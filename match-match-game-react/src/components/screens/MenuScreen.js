import React from 'react';
import { Link } from 'react-router-dom';

import PlayerName from '../containers/PlayerName';
import Preferences from '../containers/Preferences';
import Heading from '../presentational/Heading';

const MenuScreen = () => (
  <section className="menu">
    <Heading title="Menu" level={2} />
    <section className="player-info row-centered">
      <PlayerName />
      <button type="button" className="logout flat">
        {'Records'}
      </button>
    </section>
    <Preferences />
    <Link to="/game">
      <button type="button" className="play">
        {'Play'}
      </button>
    </Link>
  </section>
);

export default MenuScreen;
