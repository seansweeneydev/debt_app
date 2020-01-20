import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    const { username, password } = this.state;
    return(
      <div className="display-container">
        <div className="box-medium">
          <div className="title-container">
            <h1 className="title">Title</h1>
          </div>
          <div className="input-container">
            <div className="input-row">
              Username: {' '}
              <input 
                type="text"
                value={username}
                name="username"
                onChange={this.handleChange}
                className="input"
              />
            </div>
            <div className="input-row">
              Password: {' '}
              <input 
                type="password"
                value={password}
                name="password"
                onChange={this.handleChange}
                className="input"
              />
            </div>
            <button className="btn normal-btn" onClick={this.loginUser}>
              Login
            </button>
          </div>
          <div className="register-button">
            <button className="btn normal-btn" onClick={this.registerUser}>
              Register
            </button>
          </div>  
        </div>
      </div>
    )
  }
}

export default Login;