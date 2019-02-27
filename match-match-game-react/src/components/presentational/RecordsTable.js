import React from 'react';
import PropTypes from 'prop-types';

const isThisPlayer = (score, username, email) => score.username === username && score.email === email;
const classes = (score, username, email) => (isThisPlayer(score, username, email) ? 'row-highlight' : '');

const Records = ({ scores, username, email }) => (
  <table>
    <thead>
      <tr>
        <th>
          {'Place'}
        </th>
        <th>
          {'Name'}
        </th>
        <th>
          {'Score'}
        </th>
        <th>
          {'email'}
        </th>
      </tr>
    </thead>

    <tbody>
      {scores.map((score, i) => (
        <tr key={score._id} className={classes(score, username, email)}>
          <td className="row-number">
            {i + 1}
          </td>
          <td className="row-username">
            {score.username}
          </td>
          <td className="score">
            {Math.floor(score.score)}
          </td>
          <td className="row-email">
            {score.email}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Records.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.object).isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Records;
