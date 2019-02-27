import React from 'react';
import { Link } from 'react-router-dom';

import Heading from '../presentational/Heading';

const GAME_DESCRIPTION = `Concentration, also known as Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku,
Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a
surface and two cards are flipped face up over each turn. The object of the game is to turn
over pairs of matching cards.`;

const GAME_RULES = [
  'Turn over any two cards',
  'If the two cards match, they disappear',
  "If they don't match, they flip back over",
  'The game is over when all the cards have been disappeared',
];

const GAME_WIKI_LINK = 'https://en.wikipedia.org/wiki/Concentration_(game)';

const AboutScreen = () => (
  <section className="welcome">
    <Heading title="Welcome!" level={2} />
    <article>
      <Heading title="About the game" level={3} />
      <blockquote>
        {GAME_DESCRIPTION}
        <cite>
          <a href={GAME_WIKI_LINK}>
            {'wikipedia.org'}
          </a>
        </cite>
      </blockquote>
      <Heading title="How to play" level={3} />
      <ul>
        {GAME_RULES.map((line, index) => (
          <li key={index}>
            {line}
          </li>
        ))}
      </ul>
    </article>
    <Link to="/login">
      <button className="next" type="button">
        {'Next'}
      </button>
    </Link>
  </section>
);

export default AboutScreen;
