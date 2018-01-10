import { combineReducers } from 'redux';
import usersReducer from './entities/users/reducers';

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
