import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
// import axios from "axios";
import { Route, Link, useHistory } from "react-router-dom";
import AddFriend from "./AddFriend";

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);
  const [toggleFriend, setToggleFriend] = useState(true);

  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((response) => {
        setFriends(response.data);
        // console.log(friends);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const addFriend = () => {
    setToggleFriend(!toggleFriend);
    push("/protected/addfriend");
  };

  return (
    <div>
      {toggleFriend ? (
        friends.map((friend) => {
          return (
            <div key={friend.id}>
              <br></br>
              {friend.name} {friend.age}yo<br></br>contact: {friend.email}
              <br></br>
            </div>
          );
        })
      ) : (
        <Route path="/protected/addfriend">
          <AddFriend
            toggleFriend={toggleFriend}
            setFriends={setFriends}
            setToggleFriend={setToggleFriend}
          />
        </Route>
      )}
      <br />
      <button onClick={() => addFriend()}>{`${
        toggleFriend ? `Add New Friend?` : `Back to Friends?`
      }`}</button>
    </div>
  );
};

export default FriendsList;
