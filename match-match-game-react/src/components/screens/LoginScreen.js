import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Heading from '../presentational/Heading';

class LoginScreen extends React.Component {
  onSubmit() {
    alert(this);
  }

  render() {
    return (
      <section className="login">
        <Heading title="Log in" level={2} />
        <form id="login">
          <label htmlFor="firstname">
            {'First name'}
            <input type="text" id="firstname" name="firstname" maxLength="20" autoFocus />
          </label>

          <label htmlFor="lastname">
            {'Last name'}
            <input type="text" id="lastname" name="lastname" maxLength="20" />
          </label>

          <label htmlFor="email">
            {'Email'}
            <input type="text" id="email" name="email" />
          </label>
        </form>
        <Link to="/menu">
          <button className="submit-login" type="submit" form="login">
            {'Log in'}
          </button>
        </Link>
      </section>
    );
  }
}

export default LoginScreen;
