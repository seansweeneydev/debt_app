import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Finances from './components/Finances/Finances';
import Transactions from './components/Transactions/Transactions';

export default (
  <Switched>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/finances" component={Finances}/>
    <Route path="/Transactions" component={Transactions}/>
  </Switched> 
);