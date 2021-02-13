import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddFriend from "./components/AddFriend";
import SignIn from "./components/SignIn";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";
import styled from "styled-components";
import axiosWithAuth from "./utilities/axiosWithAuth";

import "./App.css";
const BackgroundDiv = styled.div`
  margin-top: 0px;
  height: 100vh;
  background-image: url("https://www.rollingstone.com/wp-content/uploads/2019/09/FriendsLead.jpg");
`;

const FriendsH1 = styled.h1`
  margin: 0px;
  font-size: 40px;
`;

function App() {
  // const [friends, setFriends] = useState([]);
  // const history = useHistory();

  // useEffect(() => {

  //   axiosWithAuth()
  //     .get("/friends")
  //     .then((res) => {
  //       console.log("cd: Friends.js: axios.get response message: ", res.data);
  //       setFriends(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(
  //         "cd: Friends.js: axios.get error message: ",
  //         err.response.data.error
  //       );
  //     });
  // }, []);

  return (
    <div className="App">
      <Navigation  />
      <Switch>
        <Route path="/addFriend" render={() => <AddFriend />} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute exact path="/protected">
          <Friends  />
        </PrivateRoute>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <BackgroundDiv>
                <FriendsH1>Welcome To My Friends Site</FriendsH1>
              </BackgroundDiv>
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
