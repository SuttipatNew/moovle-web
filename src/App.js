import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from './Components/Homepage';
import Result from './Components/Result';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/search" component={ Result } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
