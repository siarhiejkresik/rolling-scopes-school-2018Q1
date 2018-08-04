import React from 'react';
import { Link } from 'react-router-dom';

import Heading from '../presentational/Heading';

const AboutScreen = () => (
  <section className="welcome">
    <Heading title="Welcome!" level={2} />
    <article>
      <Heading title="About the game" level={3} />
      <blockquote>
        {`Concentration, also known as Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku,
        Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a
        surface and two cards are flipped face up over each turn. The object of the game is to turn
        over pairs of matching cards.`}
        <cite>
          <a href="https://en.wikipedia.org/wiki/Concentration_(game)">
            {'wikipedia.org'}
          </a>
        </cite>
      </blockquote>
      <Heading title="How to play" level={3} />
      <ul>
        <li>
          {'Turn over any two cards'}
        </li>
        <li>
          {'If the two cards match, they disappear'}
        </li>
        <li>
          {"If they don't match, they flip back over"}
        </li>
        <li>
          {'The game is over when all the cards have been disappeared'}
        </li>
      </ul>
    </article>
    {/* <Link to="/login"> */}
    <Link to="/menu">
      <button className="next" type="button">
        {'Next'}
      </button>
    </Link>
  </section>
);

export default AboutScreen;
