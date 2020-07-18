import React, { Component } from 'react';
import Landing from './Pages/Landing';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return <Landing />;
  }
}

export default App;
