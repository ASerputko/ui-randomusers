import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('should render spinner ', () => {
    const tree = renderer
      .create(<Spinner />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
