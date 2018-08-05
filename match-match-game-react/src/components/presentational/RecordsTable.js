import React from 'react';
import PropTypes from 'prop-types';

const Records = ({ scores }) => (
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
        <tr key={score._id}>
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
};

export default Records;
