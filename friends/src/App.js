import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddFriend from "./components/AddFriend";
import SignIn from "./components/SignIn";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";
import styled from 'styled-components';


import "./App.css";
const BackgroundDiv = styled.div`
  margin-top: 0px;
  height: 100vh;
  background-image: url("https://www.rollingstone.com/wp-content/uploads/2019/09/FriendsLead.jpg");
`;

const FriendsH1 = styled.h1`
margin: 0px;
font-size: 40px
`

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/addFriend" render={() => <AddFriend />} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute exact path="/protected" component={Friends} />
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
