import React, { Fragment } from 'react';

import CardBackSelector from './CardBackSelector';
import DifficultySelector from './DifficultySelector';
import Heading from '../presentational/Heading';

const Preferences = () => (
  <Fragment>
    <Heading title="Preferences" level={3} />
    <section className="preferences">
      <CardBackSelector />
      <DifficultySelector />
    </section>
  </Fragment>
);

export default Preferences;
