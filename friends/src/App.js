import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import FriendsList from "./components/FriendsList";
import LoginForm from "./components/LoginForm";
import AddFriend from "./components/AddFriend";

import "./App.css";

function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Switch>
        <ProtectedRoute path="/protected">
          <FriendsList />
        </ProtectedRoute>
        <Route
          path="/login"
          render={() => (
            <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          )}
        />
        {/* <Route path="/addfriend" component={AddFriend} /> */}
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div>
                <h1>Welcome to my Friends Site</h1>
              </div>
            );
          }}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
