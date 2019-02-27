import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Heading from '../presentational/Heading';
import RecordsTable from '../presentational/RecordsTable';

import { fetchScoreboard } from '../../actions';

class RecordsScreen extends React.Component {
  componentWillMount() {
    const { fetchScoreboard } = this.props;
    fetchScoreboard();
  }

  render() {
    const { scores, username, email } = this.props;
    return (
      <section className="records">
        <Heading title="Records" level={2} />
        <RecordsTable scores={scores} username={username} email={email} />
        <Link to="/menu">
          <button type="button" className="return">
            {'Return to menu'}
          </button>
        </Link>
      </section>
    );
  }
}

RecordsScreen.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.object).isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fetchScoreboard: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  scores: state.scores,
  username: state.user.username,
  email: state.user.email,
});

const mapDispatchToProps = dispatch => ({
  fetchScoreboard: () => dispatch(fetchScoreboard()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecordsScreen);
