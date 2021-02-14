import React from 'react';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/login">Login </Link>
      
      <Route path="/login" component={LoginForm} />
      
      <Link to="/friends_list"> Friends List</Link>
      
      <Route path="/login" component={FriendsList} />
    </div>
    </Router>
  );
}

export default App;
