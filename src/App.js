import React, { Component } from 'react';


import { Route, Switch } from 'react-router-dom';

import Login from './Containers/Login/Login';
import Dashboard from './Containers/Dashboard/Dashboard';
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route path="/dashboard" component={Dashboard} /> 
            <Route path="/" exact component={Login} />
          </Switch>
        </div>
    );
  }
}

export default App;
