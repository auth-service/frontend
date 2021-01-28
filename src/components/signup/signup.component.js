import React, { Component } from "react";
import "./signup.css";
import authService from "../../services/auth.service";

class SignupComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: "",
  //     username: "",
  //     pass: "",
  //     name: "",
  //   };
  // }

  state = {
    email: "",
    username: "",
    pass: "",
    name: "",
    confirmPass: ""
  };

  signup = (e) => {
    e.preventDefault();
    if (this.state.pass.length < 6) {
      console.error("pass should have minimum len of 6");
      return;
    }

    if (this.state.pass !== this.state.confirmPass) {
      console.error("pass and confirm pass should match");
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
          console.warn("token:", response.token);
          return;
        }

        console.error("error:", response.errMsg);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [username, setUsername] = useState("");
    // const [pass, setPass] = useState("");
    // const [confirmPass, setConfirmPass] = useState("");

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
      </form>
    );
  }
}

export default SignupComponent;
