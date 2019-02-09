import React, { Component } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';

import Login from './containers/Login/Login';
import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import NewsSource from './containers/NewsSource/NewsSource';
import Country from './containers/Country/Country';
import Logout from './containers/Logout/Logout';


class App extends Component {
  render() {
    return (
      <Switch>
         <Route path="/news" exact component={News} />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/newsSource" component={NewsSource} />
          <Route path="/country" component={Country} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={Login} />
      </Switch>
    );
  }
}


export default withRouter(App);
