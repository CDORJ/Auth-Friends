import {
  DATA_LOADING,
  FRIENDS_DATA,
  ERROR_LOADING,
  CREATE_FRIEND,
  NEW_FRIEND,
  UPDATING_FRIEND,
  UPDATE_FRIEND,
  REMOVING_FRIEND,
  REMOVE_FRIEND,
} from "../actions";

const initialState = {
  friends: [],
  isLoading: false,
  updateFriend: false,
  newFriend: false,
  removeFriend: false,
  error: "",
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FRIENDS_DATA:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
      };
    case UPDATING_FRIEND:
      return {
        ...state,
        updateFriend: true,
      };
    case UPDATE_FRIEND:
      return {
        ...state,
        friends: action.payload,
        updateFriend: false,
      };
    case CREATE_FRIEND:
      return {
        ...state,
        newFriend: true,
      };
    case NEW_FRIEND:
      return {
        ...state,
        friends: action.payload,
        newFriend: false,
      };
    case UPDATING_FRIEND:
      return {
        ...state,
        updateFriend: true,
      };
    case UPDATE_FRIEND:
      return {
        ...state,
        friends: action.payload,
        updateFriend: false,
      };
    case REMOVING_FRIEND:
      return {
        ...state,
        removeFriend: true,
      };
    case REMOVE_FRIEND:
      return {
        ...state,
        friends: action.payload,
        removeFriend: false,
      };
    case ERROR_LOADING:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
