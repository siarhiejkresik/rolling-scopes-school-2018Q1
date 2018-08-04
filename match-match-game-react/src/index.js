import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store/index';

import AboutScreen from './components/screens/AboutScreen';
import GameScreen from './components/screens/GameScreen';
import LoginScreen from './components/screens/LoginScreen';
import MenuScreen from './components/screens/MenuScreen';
import ResultScreen from './components/screens/ResultScreen';
import RecordsScreen from './components/screens/RecordsScreen';

import './assets/styles/styles.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AboutScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/menu" component={MenuScreen} />
        <Route path="/game" component={GameScreen} />
        <Route path="/result" component={ResultScreen} />
        <Route path="/records" component={RecordsScreen} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
