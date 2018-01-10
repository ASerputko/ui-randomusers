import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './constants';
import { userService } from '../../../services/userService';

export const fetchUsersUsingFetchAPI = ({ pageSize, pageNumber, seed }) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest({ pageSize, pageNumber, seed }));

    return fetch(`https://randomuser.me/api/?results=${pageSize}&page=${pageNumber}&seed=${seed}`)
      .then((res) => res.json())
      .then((data) => dispatch(fetchUsersSuccess(data.results)))
      .catch((error) => dispatch(fetchUsersFailure(error)));
  }
};

export const fetchUsersUsingAxiosAPI = ({ pageSize, pageNumber, seed }) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest({ pageSize, pageNumber, seed }));

    return axios.get(`https://randomuser.me/api/?results=${pageSize}&page=${pageNumber}&seed=${seed}`)
      .then((res) => res.data)
      .then((data) => dispatch(fetchUsersSuccess(data.results)))
      .catch((error) => dispatch(fetchUsersFailure(error)));
  }
};

export const fetchUsersUsingUserService = ({ pageSize, pageNumber, seed }) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest({ pageSize, pageNumber, seed }));

    return userService.fetchUsers({ pageSize, pageNumber, seed})
      .then((data) => dispatch(fetchUsersSuccess(data)))
      .catch((error) => dispatch(fetchUsersFailure(error)));
  }
};

export const fetchUsersRequest = ({ pageSize, pageNumber, seed }) => {
  return {
    type: FETCH_USERS_REQUEST,
    payload: {
      pageSize,
      pageNumber,
      seed,
      isFetching: true,
      error: null
    }
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: {
      isFetching: false,
      entities: users
    }
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: {
      isFetching: false,
      error
    }
  };
};