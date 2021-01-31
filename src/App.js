import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route } from "react-router";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import SignupComponent from "./components/signup/signup.component";
import MsgDialog from "./components/msg-dialog/msg-dialog";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            {/* <Link className="navbar-brand" to={"/sign-in"}>
              RemoteStack
            </Link> */}

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Sign in
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div style={{ paddingTop: "60px" }}>
          <Switch>
            {/* <Route exact path="/" component={Login} />

              <Route path="/sign-in" component={Login} /> */}

            <Route path="/signup" component={SignupComponent} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
