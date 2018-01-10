import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should have `container` className', () => {
    const app = shallow(<App />);
    expect(app.find('div').at(0).props().className).toEqual('container');
  });
});
