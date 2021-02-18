import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = (props) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
  });
  const { push } = useHistory();

  useEffect(() => {
    props.setToggleFriend(false);
  }, []);

  const handleChanges = (e) => {
    const value =
      e.target.name === "age" ? Number(e.target.value) : e.target.value;
    setNewFriend({
      ...newFriend,
      [e.target.name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then((response) => {
        console.log("onSubmit friends list", response);
        props.setFriends(response.data);
        props.setToggleFriend(true);
        setNewFriend({
          name: "",
          age: "",
          email: "",
        });
      })
      .catch((error) => {
        console.log("Friends list error", error);
      });
  };

  return (
    <div>
      <br></br>
      <form onSubmit={onSubmit}>
        <label>
          {" "}
          name:
          <input
            type="text"
            id="name"
            name="name"
            value={newFriend.name}
            onChange={handleChanges}
          />
        </label>
        <br></br> <br></br>
        <label>
          {" "}
          age:
          <input
            type="text"
            id="age"
            name="age"
            value={newFriend.age}
            onChange={handleChanges}
          />
        </label>
        <br></br> <br></br>
        <label>
          {" "}
          email:
          <input
            type="text"
            id="email"
            name="email"
            value={newFriend.email}
            onChange={handleChanges}
          />
        </label>
        <br></br>
        <button>Add To Friends List?</button>
      </form>
    </div>
  );
};

export default AddFriend;
