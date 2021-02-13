import { combineReducers } from 'redux';
import { singleFriendReducer as SFR } from './singleFriendReducer';
import { friendsReducer as FR } from './friendsReducer';

export default combineReducers({
    FR,
    SFR,
})