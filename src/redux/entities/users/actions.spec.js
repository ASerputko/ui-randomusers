import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUsersUsingFetchAPI,
  fetchUsersUsingAxiosAPI,
  fetchUsersUsingUserService
} from './actions';

jest.mock('../../../services/userService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Users actions', () => {
  it('should request users', () => {
    const requestParams = {
      pageSize: 10,
      pageNumber: 1,
      seed: 1
    };

    const expectedAction = {
      type: 'FETCH_USERS_REQUEST',
      payload: {
        pageSize: 10,
        pageNumber: 1,
        seed: 1,
        isFetching: true,
        error: null
      }
    };

    expect(fetchUsersRequest(requestParams)).toEqual(expectedAction);
  });

  it('should receive users', () => {
    const requestParams = ['user1', 'user2'];

    const expectedAction = {
      type: 'FETCH_USERS_SUCCESS',
      payload: {
        isFetching: false,
        entities: ['user1', 'user2']
      }
    };

    expect(fetchUsersSuccess(requestParams)).toEqual(expectedAction);
  });

  it('should catch users error', () => {
    const requestParams = '503 service unavailable';

    const expectedAction = {
      type: 'FETCH_USERS_FAILURE',
      payload: {
        isFetching: false,
        error: '503 service unavailable'
      }
    };

    expect(fetchUsersFailure(requestParams)).toEqual(expectedAction);
  });

  describe('async actions', () => {

    it.skip('fetchUsersUsingFetchAPI', () => {
      // NOTE: fetch API is overrided by jestFetchMock. Check ./src/setupTests.js

      /** Mock response */
      fetch.mockResponse(JSON.stringify({
        results: ['user1', 'user2']
      }));

      /** Mock redux state */
      const store = mockStore({
        users: {
          isFetching: false,
          error: null,
          entities: [],
          pageNumber: 1,
          pageSize: 5,
          seed: 1
        }
      });

      /** Define expected actions */
      const expectedActions = [
        {
          type: 'FETCH_USERS_REQUEST',
          payload: {
            pageSize: 10,
            pageNumber: 1,
            seed: 1,
            isFetching: true,
            error: null
          }
        },
        {
          type: 'FETCH_USERS_SUCCESS',
          payload: {
            isFetching: false,
            entities: ['user1', 'user2']
          }
        }
      ];

      const requestParams = {
        pageSize: 10,
        pageNumber: 1,
        seed: 1
      };
      return store.dispatch(fetchUsersUsingFetchAPI(requestParams)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        // fetch.resetMocks()
      });
    });

    it('fetchUsersUsingAxiosAPI', () => {
      // NOTE: axios API is overrided by axiosMockAdapter. Check ./src/setupTests.js

      /** Mock redux state */
      const store = mockStore({
        users: {
          isFetching: false,
          error: null,
          entities: [],
          pageNumber: 1,
          pageSize: 5,
          seed: 1
        }
      });

      /** Define expected actions */
      const expectedActions = [
        {
          type: 'FETCH_USERS_REQUEST',
          payload: {
            pageSize: 10,
            pageNumber: 1,
            seed: 1,
            isFetching: true,
            error: null
          }
        },
        {
          type: 'FETCH_USERS_SUCCESS',
          payload: {
            isFetching: false,
            entities: ['user1', 'user2']
          }
        }
      ];

      const requestParams = {
        pageSize: 10,
        pageNumber: 1,
        seed: 1
      };
      return store.dispatch(fetchUsersUsingAxiosAPI(requestParams)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('fetchUsersUsingUserService', (done) => {
      /** Mock redux state */
      const store = mockStore({
        users: {
          isFetching: false,
          error: null,
          entities: [],
          pageNumber: 1,
          pageSize: 5,
          seed: 1
        }
      });

      /** Define expected actions */
      const expectedActions = [
        {
          type: 'FETCH_USERS_REQUEST',
          payload: {
            pageSize: 10,
            pageNumber: 1,
            seed: 1,
            isFetching: true,
            error: null
          }
        },
        {
          type: 'FETCH_USERS_SUCCESS',
          payload: {
            isFetching: false,
            entities: ['user1', 'user2']
          }
        }
      ];

      const requestParams = {
        pageSize: 10,
        pageNumber: 1,
        seed: 1
      };
      return store.dispatch(fetchUsersUsingUserService(requestParams)).then((data) => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
    });
  });

});