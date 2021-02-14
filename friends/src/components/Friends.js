import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { addFriends, deleteFriend, updateFriend } from "../actions";
import SelectedFriend from "./SelectedFriend";
import PrivateRoute from "../components/PrivateRoute";

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

  const deleteFriend = () => {
    const { id } = props.selectedFriend;
    props.deleteFriend(id);
  };

  const showFriend = (friend) => {
    props.updateFriend(friend);
  };

  return (
    <div>
      <br />
      <button onClick={handleClick}>LOG OUT OF SERVER</button>
      <br/>
      <br/>
      {props.showUpdate ? (
        <SelectedFriend
          selected={props.selectedFriend}
          deleteFriend={deleteFriend}
        />
      ) : (
        props.friends.map((friend) => {
          return (
            <div style={{ border: "solid" }} key={friend.id}>
              <h2>{friend.name}</h2>
              <p>
                {friend.name} is {friend.age} years old
              </p>
              <p>
                <strong>{friend.email}</strong> is {friend.name}'s email address
              </p>
              <button onClick={() => showFriend(friend)}>
                Click to Update Friend
              </button>
              <br />
              <br />
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    friends: state.FR.friends,
    error: state.FR.error,
    isLoading: state.FR.isLoading,
    updateFriend: state.FR.updateFriend,
    selectedFriend: state.SFR.selectedFriend,
    showUpdate: state.SFR.showUpdate,
  };
};

export default connect(mapStateToProps, {
  addFriends,
  deleteFriend,
  updateFriend,
})(Friends);
