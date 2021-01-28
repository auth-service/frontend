import React, { Component } from "react";
import "./signup.css";

class SignupComponent extends Component {
  render() {
    return (
      <form>
        <h3>Register</h3>

        <div className="form-group col-lg-4">
          <input type="text" className="form-control" placeholder="Name" />
        </div>

        <div className="form-group col-lg-4">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group col-lg-4">
          <input type="text" className="form-control" placeholder="Username" />
        </div>

        <div className="form-group col-lg-4">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group col-lg-4">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password again"
          />
        </div>

        <div className="col-lg-4">
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Register
          </button>
        </div>

        {/* <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p> */}
      </form>
    );
  }
}

export default SignupComponent;
