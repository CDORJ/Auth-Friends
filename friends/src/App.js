import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";

import LoginForm from "./components/LoginForm";

import "./App.css";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <ProtectedRoute exact path="/protected" />

        <Route
          path="/login"
          render={() => (
            <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          )}
        />
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
