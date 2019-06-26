import React, { Component } from "react";
import "./App.css";
import Chat from "./components/Chat"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import logo from './images/logo.png'
import Post from './components/post.js'
import Member from "./components/views/Member"
import Profile from "./components/views/Profile"
import Bands from "./components/views/Bands"

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

  test = ()=>console.log("1")

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            {/* <img src={logo} a href="/" /> */}
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/">Home</a></li>
              <li><a href="/post">Posts</a></li>
              <li><a href="collapsible.html">Login</a></li>
            </ul>
          </div>
        </nav>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/band/:id" component={Bands}></Route>
            <Route exact path="/member/:id" component={Member}></Route>
            <Route exact path="/profile/:id" component={Profile}></Route>
            <Route exact path="/post" component={Post}></Route>

          </Switch>
          <Chat></Chat>
        </Router >
      </div>
    );
  }
}

export default App;
