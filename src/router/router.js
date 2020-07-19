import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
