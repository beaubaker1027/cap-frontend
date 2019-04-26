import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/landing/landing';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Settings from './components/settings/settings';

const Routing = (
  <Router>
    <div style={{height:'100%', width:'100%'}}>
      <Route exact path='/' component={Landing} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/settings' component={Settings} />
    </div>
  </Router>
)

export default Routing;
