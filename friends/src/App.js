import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import LoginForm from "./components/LoginForm";

import "./App.css";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Sign On</Link>
      <br />
      <Link to="/protected">Friends List</Link>
      <br />

      <Switch>
        <ProtectedRoute exact path="/protected" />

        <Route
          path="/login"
          render={() => <LoginForm isLoggedIn={isLoggedIn} />}
        />
        <Route exact path="/">
          Homepage
        </Route>
      </Switch>
    </div>
  );
}

export default App;
