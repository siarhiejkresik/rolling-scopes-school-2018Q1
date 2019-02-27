import React from 'react';
import { Redirect } from 'react-router-dom';

import Heading from '../presentational/Heading';
import LoginForm from '../containers/LoginForm';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogged: false };
    this.onLogIn = this.onLogIn.bind(this);
  }

  onLogIn() {
    this.setState({ isLogged: true });
  }

  render() {
    const { isLogged } = this.state;
    if (isLogged) {
      return <Redirect to="/menu" />;
    }

    return (
      <section className="login">
        <Heading title="Log in" level={2} />
        <LoginForm onLogIn={this.onLogIn} />
      </section>
    );
  }
}

export default LoginScreen;
