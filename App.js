// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ListUsers from "./ListUsers";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <Link to="/users">List Users</Link>
          <Link to="/create-user">Create User</Link>
        </nav>
        <Switch>
          <Route path="/users" component={ListUsers} />
          <Route path="/create-user" component={CreateUser} />
          <Route path="/edit-user/:id" component={EditUser} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/edit-profile/:id" component={EditProfile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
