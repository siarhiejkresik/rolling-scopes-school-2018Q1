import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InfoField from '../presentational/InfoField';

const DifficultyName = ({ diffucultyName }) => (
  <InfoField fieldName="Difficulty" text={diffucultyName} />
);

DifficultyName.propTypes = {
  diffucultyName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  diffucultyName: state.preferences.difficulty,
});

export default connect(mapStateToProps)(DifficultyName);
