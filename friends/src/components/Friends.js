import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addFriends } from "../actions";

const Friends = (props) => {
  const history = useHistory();

  //grab the data from the api
  useEffect(() => {
    props.addFriends();
    props.setIsLoggedIn(true);
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
      {props.friends.map((friend) => {
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

const mapStateToProps = (state) => {
  return {
    friends: state.FR.friends,
    error: state.FR.error,
    isLoading: state.FR.isLoading,
  };
};

export default connect(mapStateToProps, { addFriends })(Friends);
