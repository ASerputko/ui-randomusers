import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jestFetchMock from 'jest-fetch-mock';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

/** setup enzyme adapter */
configure({ adapter: new Adapter() });

/** setup fetch mock */
global.fetch = jestFetchMock;

/** setup axios mock */
let mock = new MockAdapter(axios);
mock.onGet('https://randomuser.me/api/?results=10&page=1&seed=1').reply(200, {
  results: ['user1', 'user2']
});