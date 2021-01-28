import React, { Component } from "react";

export default class SignupComponent extends Component {
  render() {
    return (
      <form>
        <h3>Register</h3>

        <div className="form-group">
          <label>Name</label>

          <input type="text" className="form-control" placeholder="Name" />
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Username</label>

          <input type="text" className="form-control" placeholder="Username" />
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>

        {/* <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p> */}
      </form>
    );
  }
}
