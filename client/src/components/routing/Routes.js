import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '../routing/PrivateRoute';

import Register from '../auth/registerComponent/Register';
import Login from '../auth/loginComponent/Login';

import Dashboard from '../dashboardComponent/Dashboard';
import Tasks from '../tasksComponent/Tasks';

import NotFound from '../notFoundComponent/NotFound';

import Alert from '../alertComponent/Alert';

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/tasks" component={Tasks} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
