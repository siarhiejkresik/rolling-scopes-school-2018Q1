import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Heading from '../presentational/Heading';
import RecordsTable from '../presentational/RecordsTable';

import { fetchScoreboard } from '../../actions';

class RecordsScreen extends React.Component {
  componentWillMount() {
    const { fetchScoreboard } = this.props;
    fetchScoreboard();
  }

  render() {
    const { scores } = this.props;
    return (
      <section className="records">
        <Heading title="Records" level={2} />
        <RecordsTable scores={scores} />
        <Link to="/menu">
          <button type="button" className="return">
            {'Return to menu'}
          </button>
        </Link>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  scores: state.scores,
});

const mapDispatchToProps = dispatch => ({
  fetchScoreboard: () => dispatch(fetchScoreboard()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecordsScreen);
