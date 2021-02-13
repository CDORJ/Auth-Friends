import { SINGLE_FRIEND, TOGGLE_SHOW_UPDATE } from "../actions";

const initialState = {
  selectedFriend: {},
  showUpdate: false,
};

export const singleFriendReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_FRIEND:
      return {
        ...state,
        selectedFriend: action.payload,
        showUpdate: false,
      };
    case TOGGLE_SHOW_UPDATE:
      return {
        ...state,
        showUpdate: !state.showUpdate,
      };
    default:
      return state;
  }
};
