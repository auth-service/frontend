import React, { Component } from "react";
import authService from "../../services/auth.service";
import MsgDialog from "../msg-dialog/msg-dialog";
import enums from "../../enums";

class LoginComponent extends Component {
  constructor() {
    super();
    this._msgDialog = React.createRef();
  }

  state = {
    email: "",
    username: "",
    pass: "",
  };

  login = (e) => {
    e.preventDefault();
    if (this.state.pass.length < 6) {
      this._msgDialog.current.openDialog(
        enums.errs.ERR,
        enums.errs.PASS_MIN_LEN
      );
      return;
    }

    const req = {
      email: this.state.email,
      username: this.state.username,
      pass: this.state.pass,
    };

    authService
      .login(req)
      .then((response) => {
        if (response.data.success) {
          this._msgDialog.current.openDialog(
            enums.words.LOGIN,
            enums.msgs.LOGGED_IN
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
        <h3>Login</h3>

        <div className="d-flex flex-center">
          <div className="form-group col-lg-4" style={{ margin: "15px auto" }}>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.email || ""}
              onInput={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="col-1" style={{ margin: "15px auto" }}>
            or
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

        <div className="col-lg-4" style={{ margin: "15px auto" }}>
          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            onClick={this.login}
          >
            Login
          </button>
        </div>

        <MsgDialog ref={this._msgDialog} />
      </form>
    );
  }
}

export default LoginComponent;
