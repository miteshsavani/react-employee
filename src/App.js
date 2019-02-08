import React, { Component } from 'react';


import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';
import Profile from './containers/Profile/Profile';
import Logout from './containers/Logout/Logout';
import classes from './App.css';


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Logout} />
         
        </Switch>
      </div>
    );
  }
}


export default App;




/* let routes = (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/profile" component={Profile} />
    <Route path="/logout" component={Logout} />
    <Route path="/" exact component={Login} />
    <Redirect to="/" />
  </Switch>
); */

/*  if (this.props.isAuthenticated) {
   routes = (
     <Switch>
       <Route path="/dashboard" component={Dashboard} />
       <Route path="/profile" component={Profile} />
       <Route path="/logout" component={Logout} />
     </Switch>
   );
 } */