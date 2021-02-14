import axiosWithAuth from "../utilities/axiosWithAuth";
import { useHistory } from "react-router-dom";

export const DATA_LOADING = "DATA_LOADING";
export const FRIENDS_DATA = "FRIENDS_DATA";
export const ERROR_LOADING = "ERROR_LOADING";
export const CREATE_FRIEND = "CREATE_FRIEND";
export const NEW_FRIEND = "NEW_FRIEND";
export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";
export const REMOVING_FRIEND = "REMOVING_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const SINGLE_FRIEND = "SINGLE_FRIEND";
export const TOGGLE_SHOW_UPDATE = "TOGGLE_SHOW_UPDATE";

export const addFriends = () => (dispatch) => {
  dispatch({ type: DATA_LOADING });
  axiosWithAuth()
    .get("/friends")
    .then((res) => {
      //   console.log(
      //     "cd: actions.js: addFriends: axios.get response message: ",
      //     res.data
      //   );
      dispatch({ type: FRIENDS_DATA, payload: res.data });
    })
    .catch((err) => {
      //   console.log(
      //     "cd: Friends.js: axios.get error message: ",
      //     err.response.data.error
      //   );
      dispatch({ type: ERROR_LOADING, payload: err.response.data.error });
    });
};

export const newFriend = (friend) => (dispatch) => {
  dispatch({ type: CREATE_FRIEND });
  axiosWithAuth()
    .post("/friends", friend)
    .then((res) => {
      console.log("cd: actions.js: newFriend: newFriend response", res);
      dispatch({
        type: NEW_FRIEND,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("cd: actions.js: newFriend: newFriend error", err.response);
      dispatch({
        type: ERROR_LOADING,
        payload: err.response,
      });
    });
};

export const deleteFriend = (id) => (dispatch) => {
  dispatch({ type: REMOVING_FRIEND });
  axiosWithAuth()
    .delete(`/friends/:${id}`)
    .then((res) => {
      dispatch({
        type: REMOVE_FRIEND,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR_LOADING,
        payload: err.response,
      });
    });
};

export const updateFriend = (friend) => (dispatch) => {
  dispatch({
    type: UPDATE_FRIEND,
  });
  dispatch({
    type: SINGLE_FRIEND,
    payload: friend,
  });
};
