import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { newFriend } from "../actions";

const AddFriend = (props) => {
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: "",
  });
    const history = useHistory();

  const handleChange = (e) => {
    const value =
      e.target.name === "age" ? Number(e.target.value) : e.target.value;
    setFriend({
      ...friend,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      props.newFriend(friend);
      history.push("/protected")
    setFriend({
      name: "",
      age: "",
      email: "",
    });
  };

    return (
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="name">Enter New Friend's Name: </label>
        <input
          id="name"
          name="name"
          value={friend.name}
          type="text"
          placeholder="New Friend Name"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="age">Enter New Friend's Age: </label>
        <input
          id="age"
          name="age"
          value={friend.age}
          type="text"
          placeholder="New Friend Age"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Enter New Friend's Email: </label>
        <input
          id="email"
          name="email"
          value={friend.email}
          type="text"
          placeholder="New Friend Email"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Add New Friend</button>
      </form>
    );
};

const mapStateToProps = (state) => {
  return {
    error: state.FR.error,
    newFriend: state.FR.newFriend,
  };
};

export default connect(mapStateToProps, { newFriend })(AddFriend);
