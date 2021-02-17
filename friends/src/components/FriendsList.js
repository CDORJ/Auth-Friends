import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((response) => {
        setFriends(response.data);
        console.log(friends);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      This is the friends list
      {friends.map((friend) => {
        return <div key={friend.id}>{friend.name}</div>;
      })}
    </div>
  );
};

export default FriendsList;
