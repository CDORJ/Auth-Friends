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



export const addFriends = () => (dispatch) => {
  dispatch({ type: DATA_LOADING });
  axiosWithAuth()
    .get("/friends")
    .then((res) => {
      console.log("cd: actions.js: addFriends: axios.get response message: ", res.data)
      dispatch({ type: FRIENDS_DATA, payload: res.data });
    })
    .catch((err) => {
      console.log(
        "cd: Friends.js: axios.get error message: ",
        err.response.data.error
        );
        dispatch({type: ERROR_LOADING, payload: err.response.data.error})
    });
};
