import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InfoField from '../presentational/InfoField';

const PlayerName = ({ playerName }) => <InfoField fieldName="Player" text={playerName} />;

PlayerName.propTypes = {
  playerName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  playerName: state.user.username,
});

export default connect(mapStateToProps)(PlayerName);
