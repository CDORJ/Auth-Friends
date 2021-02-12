import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import Navigation from './components/Navigation';
import AddFriend from './components/AddFriend';
import SignIn from './components/SignIn';
import Friends from './components/Friends';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='addFriend' render={() => <AddFriend />} />
        <Route path='signin' render={() => <SignIn />} />
        <PrivateRoute exact path='/protected' component={Friends} />
        <Route exact path='/' render={() => {
          return (
            <div style={{ marginTop: '0px', height:'100vh', backgroundImage: 'url(https://www.rollingstone.com/wp-content/uploads/2019/09/FriendsLead.jpg)' }}>
              <h1 style={{ margin: '0px' }}>Welcome To My Friends Site</h1>
            </div>
          );
        }} />
      </Switch>
    </div>
  );
}

export default App;
