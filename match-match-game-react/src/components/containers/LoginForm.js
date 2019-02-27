import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setUserName, setUserEmail } from '../../actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onUserEmailChange = this.onUserEmailChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { onLogIn } = this.props;
    onLogIn();
  }

  onUserNameChange(event) {
    const { setUserName } = this.props;
    setUserName(event.target.value);
  }

  onUserEmailChange(event) {
    const { setUserEmail } = this.props;
    setUserEmail(event.target.value);
  }

  render() {
    const { username, email } = this.props;
    return (
      <Fragment>
        <form id="login" onSubmit={this.onSubmit}>
          <label htmlFor="username">
            {'First name'}
            <input
              type="text"
              value={username}
              onChange={this.onUserNameChange}
              id="username"
              name="username"
              maxLength="20"
              autoFocus
              required
            />
          </label>

          <label htmlFor="email">
            {'Email'}
            <input
              type="email"
              value={email}
              onChange={this.onUserEmailChange}
              id="email"
              name="email"
              required
            />
          </label>
        </form>
        <button className="submit-login" type="submit" form="login">
          {'Log in'}
        </button>
      </Fragment>
    );
  }
}

LoginForm.defaultProps = {
  username: '',
  email: '',
};

LoginForm.propTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  onLogIn: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
  setUserEmail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  username: state.user.username,
  email: state.user.email,
});

const mapDispatchToProps = dispatch => ({
  setUserName: (username) => {
    dispatch(setUserName(username));
  },
  setUserEmail: (email) => {
    dispatch(setUserEmail(email));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
