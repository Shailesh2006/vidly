import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
