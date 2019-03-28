import React from 'react';
import { Router, Route, Switch } from "react-router-dom";

import Login from '../ui/Login';
import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import { history } from '../utils/auth';

export const routes = (
    <Router history={history}>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);