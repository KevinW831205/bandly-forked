import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Signup from "./components/login/signup";
import Chat from "./components/Chat"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import 'materialize-css/dist/css/materialize.min.css'
import Post from './components/post'
import Member from "./components/views/Member"
import Profile from "./components/views/profile"
import Bands from "./components/views/bands"
import M from "materialize-css"

import { SearchInput, SearchBtn, SearchSelect } from "./components/Search";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <Chat /> */}
//         <h1>test</h1>
//       </div>
//     );
//   }
// }

class App extends Component {
  test = () => console.log("1");

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            {/* <img src={logo} a href="/" /> */}
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/post">Posts</a>
              </li>
              <li>
                <a href="/signin">Login</a>
              </li>
            </ul>
          </div>
        </nav>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signup} />
            <Route exact path="/band/:id" component={Bands} />
            <Route exact path="/member/:id" component={Member} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/post" component={Post} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
