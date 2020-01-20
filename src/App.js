import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Finances from './components/Finances/Finances';
import Transactions from './components/Transactions/Transactions';

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <Home />
      <Dashboard />
      <Finances />
      <Transactions />
    </div>
  );
}

export default App;
