import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    email: "",
    username: "",
    pass: "",
    name: "",
    confirmPass: "",
  };

  signup = (e) => {
    e.preventDefault();
    if (this.state.pass.length < 6) {
      this._msgDialog.current.openDialog(
        enums.errs.ERR,
        enums.errs.PASS_MIN_LEN
      );
      return;
    }

    if (this.state.pass !== this.state.confirmPass) {
      this._msgDialog.current.openDialog(
        enums.errs.ERR,
        enums.errs.PASS_NOT_MATCH
      );
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
        if (response.data.success) {
          this._msgDialog.current.openDialog(
            enums.words.TOKEN,
            response.data.token
          );
          return;
        }
        this._msgDialog.current.openDialog(
          enums.errs.ERR,
          enums.errs.CALL_NOT_SUCCESS
        );
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          this._msgDialog.current.openDialog(
            enums.errs.ERR,
            error.response.data.errMsg
          );
          return;
        }
        this._msgDialog.current.openDialog(enums.errs.ERR, error.message);
      });
  };

  render() {
    return (
      <form>
        <h3>Register</h3>

        <div className="form-group col-lg-4" style={{ margin: "15px auto" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={this.state.name || ""}
            onInput={(e) => this.setState({ name: e.target.value })}
          />
        </div>

        <div className="form-group col-lg-4" style={{ margin: "15px auto" }}>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.email || ""}
            onInput={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="form-group col-lg-4" style={{ margin: "15px auto" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={this.state.username || ""}
            onInput={(e) => this.setState({ username: e.target.value })}
          />
        </div>

        <div className="form-group col-lg-4" style={{ margin: "15px auto" }}>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.pass || ""}
            onInput={(e) => this.setState({ pass: e.target.value })}
          />
        </div>

        <div className="form-group col-lg-4" style={{ margin: "15px auto" }}>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password again"
            value={this.state.confirmPass || ""}
            onInput={(e) => this.setState({ confirmPass: e.target.value })}
          />
        </div>

        <div className="col-lg-4" style={{ margin: "15px auto" }}>
          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            onClick={this.signup}
          >
            Register
          </button>
        </div>

        <p>
          Already registered?
          <Link className="nav-link" to={"/login"}>
            Login
          </Link>
        </p>

        <MsgDialog ref={this._msgDialog} />
      </form>
    );
  }
}

export default SignupComponent;
