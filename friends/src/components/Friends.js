import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utilities/axiosWithAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log("cd: Friends.js: axios.get response message: ", res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(
          "cd: Friends.js: axios.get error message: ",
          err.response.data.error
        );
      });
  }, []);

  return (
    <div>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
                <h2>{friend.name}</h2>
                <p>{friend.name} is {friend.age} years old</p>
                <p><strong>{friend.email}</strong> is {friend.name}'s email address</p>
                <br/>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
