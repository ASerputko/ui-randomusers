import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './constants';

const initState = {
  isFetching: false,
  error: null,
  entities: [],
  pageNumber: 1,
  pageSize: 5,
  seed: 1
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
    case FETCH_USERS_SUCCESS:
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;