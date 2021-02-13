import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utilities/axiosWithAuth";

const Friends = (props) => {
  //set the needed states here
  const [friends, setFriends] = useState([]);
  const history = useHistory();

  //grab the data from the api
  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log("cd: Friends.js: axios.get response message: ", res.data);
        setFriends(res.data);
        //need to turn on the toggle so Navigation.js will render
        props.setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(
          "cd: Friends.js: axios.get error message: ",
          err.response.data.error
        );
      });
  }, []);

  // create a function that will log out of the api and clear the token
  const handleClick = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    //turn off the toggle here so Navigation will render
    props.setIsLoggedIn(false);
    history.push("/");
  };

  return (
    <div>
      <br />
      <button onClick={handleClick}>LOG OUT OF SERVER</button>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <p>
              {friend.name} is {friend.age} years old
            </p>
            <p>
              <strong>{friend.email}</strong> is {friend.name}'s email address
            </p>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
