import React, { Component } from "react";
import "./signup.css";
import authService from "../../services/auth.service";
import MsgDialog from "../msg-dialog/msg-dialog";
import enums from "../../enums";

class SignupComponent extends Component {
  constructor() {
    super();
    this._msgDialog = React.createRef();
  }

  state = {
    email: "ashi@email.com",
    username: "ashi",
    pass: "password",
    name: "ashi",
    confirmPass: "password",
  };

  signup = (e) => {
    e.preventDefault();
    if (this.state.pass.length < 6) {
      this._msgDialog.current.openDialog(enums.errs.ERR, enums.errs.PASS_MIN_LEN);
      return;
    }

    if (this.state.pass !== this.state.confirmPass) {
      this._msgDialog.current.openDialog(enums.errs.ERR, enums.errs.PASS_NOT_MATCH);
      return;
    }

    const req = {
      email: this.state.email,
      username: this.state.username,
      pass: this.state.pass,
      name: this.state.name,
    };

    authService
      .signup(req)
      .then((response) => {
        if (response.success) {
          this._msgDialog.current.openDialog(enums.msgs.TOKEN, response.token);
          return;
        }
        this._msgDialog.current.openDialog(enums.errs.ERR, enums.errs.CALL_NOT_SUCCESS);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          this._msgDialog.current.openDialog(enums.errs.ERR, error.response.data.errMsg);
          return;
        }
        this._msgDialog.current.openDialog(enums.errs.ERR, error.message);
      });
  };

  openDialog(title, content) {
    this.setState({
      title: title,
      content: content,
    });
  }

  render() {
    return (
      <form>
        <h3>Register</h3>

        <div className="form-group col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={this.state.name || ""}
            onInput={(e) => this.setState({ name: e.target.value })}
          />
        </div>

        <div className="form-group col-lg-4">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.email || ""}
            onInput={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="form-group col-lg-4">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={this.state.username || ""}
            onInput={(e) => this.setState({ username: e.target.value })}
          />
        </div>

        <div className="form-group col-lg-4">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.pass || ""}
            onInput={(e) => this.setState({ pass: e.target.value })}
          />
        </div>

        <div className="form-group col-lg-4">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password again"
            value={this.state.confirmPass || ""}
            onInput={(e) => this.setState({ confirmPass: e.target.value })}
          />
        </div>

        <div className="col-lg-4">
          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            onClick={this.signup}
          >
            Register
          </button>
        </div>

        {/* <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p> */}

        <MsgDialog ref={this._msgDialog} />
      </form>
    );
  }
}

export default SignupComponent;
